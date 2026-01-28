export { }

/**
 * Index StartOS documentation for AIDEN
 *
 * This script goes in the docs repo at scripts/index-docs.ts
 *
 * It:
 * 1. Parses all markdown files from src/
 * 2. Chunks content by headings
 * 3. Generates embeddings via Voyage AI
 * 4. Clears existing chunks for the /src/ prefix
 * 5. POSTs new chunks to the start9-me API
 *
 * Environment variables:
 * - VOYAGE_API_KEY: Voyage AI API key
 * - DOCS_INDEX_API_KEY: API key for start9-me indexing endpoint
 * - DOCS_API_URL: Base URL for start9-me API (default: https://start9.me/_api/docs)
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative, basename } from 'path'

// Configuration
const DOCS_DIR = join(import.meta.dirname, '..', 'src')
const DOCS_BASE_URL = 'https://docs.start9.com'
const VOYAGE_API_URL = 'https://api.voyageai.com/v1/embeddings'
const VOYAGE_MODEL = 'voyage-3'
const MAX_CHUNK_TOKENS = 500
const MAX_CHUNK_CHARS = MAX_CHUNK_TOKENS * 4

// Prefix this indexer is responsible for
const CONTENT_PREFIX = '/docs/'

// Types
type Chunk = {
  page_path: string
  heading_path: string
  url: string
  content: string
  chunk_index: number
}

type ChunkWithEmbedding = Chunk & {
  embedding: number[]
}

// ============================================================================
// Markdown Parsing & Chunking
// ============================================================================

function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = []

  function walk(currentDir: string) {
    const entries = readdirSync(currentDir)
    for (const entry of entries) {
      if (entry.startsWith('.') || entry === 'SUMMARY.md') continue
      const fullPath = join(currentDir, entry)
      const stat = statSync(fullPath)
      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (entry.endsWith('.md')) {
        files.push(fullPath)
      }
    }
  }

  walk(dir)
  return files
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

type HeadingInfo = {
  level: number
  text: string
  slug: string
}

function parseMarkdownIntoChunks(filePath: string): Chunk[] {
  const content = readFileSync(filePath, 'utf-8')
  const relativePath = relative(DOCS_DIR, filePath)
  const pagePath = `${CONTENT_PREFIX}${relativePath}`
  const url = `${DOCS_BASE_URL}/${relativePath.replace(/\.md$/, '.html')}`

  // Extract title from first H1 or filename
  const titleMatch = content.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : basename(filePath, '.md')

  const chunks: Chunk[] = []
  const lines = content.split('\n')

  const headingStack: HeadingInfo[] = [{ level: 0, text: title, slug: slugify(title) }]
  let currentContent: string[] = []
  let chunkIndex = 0

  function getHeadingPath(): string {
    return headingStack.map((h) => h.text).join(' > ')
  }

  function getCurrentUrl(): string {
    const lastHeading = headingStack[headingStack.length - 1]
    if (lastHeading && lastHeading.level > 0) {
      return `${url}#${lastHeading.slug}`
    }
    return url
  }

  function flushChunk() {
    const text = currentContent.join('\n').trim()
    if (text.length > 0) {
      const textChunks = splitLongText(text, MAX_CHUNK_CHARS)
      for (const textChunk of textChunks) {
        chunks.push({
          page_path: pagePath,
          heading_path: getHeadingPath(),
          url: getCurrentUrl(),
          content: textChunk,
          chunk_index: chunkIndex++,
        })
      }
    }
    currentContent = []
  }

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)

    if (headingMatch) {
      flushChunk()

      const level = headingMatch[1].length
      const text = headingMatch[2].trim()
      const slug = slugify(text)

      while (headingStack.length > 1 && headingStack[headingStack.length - 1].level >= level) {
        headingStack.pop()
      }

      headingStack.push({ level, text, slug })
      currentContent.push(line)
    } else {
      currentContent.push(line)
    }
  }

  flushChunk()

  return chunks
}

function splitLongText(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text]

  const chunks: string[] = []
  const paragraphs = text.split(/\n\n+/)
  let current = ''

  for (const para of paragraphs) {
    if (current.length + para.length + 2 > maxChars && current.length > 0) {
      chunks.push(current.trim())
      current = para
    } else {
      current += (current ? '\n\n' : '') + para
    }
  }

  if (current.trim()) {
    chunks.push(current.trim())
  }

  return chunks.flatMap((chunk) => {
    if (chunk.length <= maxChars) return [chunk]
    const parts: string[] = []
    for (let i = 0; i < chunk.length; i += maxChars) {
      parts.push(chunk.slice(i, i + maxChars))
    }
    return parts
  })
}

// ============================================================================
// Voyage AI Embeddings
// ============================================================================

async function embedTexts(texts: string[]): Promise<number[][]> {
  const apiKey = process.env.VOYAGE_API_KEY
  if (!apiKey) {
    throw new Error('VOYAGE_API_KEY not set')
  }

  if (texts.length === 0) return []

  const batchSize = 128
  const allEmbeddings: number[][] = []

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize)
    console.log(`  Embedding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(texts.length / batchSize)}...`)

    const response = await fetch(VOYAGE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: VOYAGE_MODEL,
        input: batch,
        input_type: 'document',
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Voyage API error: ${response.status} ${error}`)
    }

    const data = await response.json()
    const embeddings = data.data.sort((a: any, b: any) => a.index - b.index).map((d: any) => d.embedding)

    allEmbeddings.push(...embeddings)
  }

  return allEmbeddings
}

// ============================================================================
// API Operations
// ============================================================================

async function clearOwnChunks(): Promise<void> {
  const apiKey = process.env.DOCS_INDEX_API_KEY
  const apiUrl = process.env.DOCS_API_URL || 'https://start9.me/_api/docs'

  if (!apiKey) {
    throw new Error('DOCS_INDEX_API_KEY not set')
  }

  const response = await fetch(`${apiUrl}/index/prefix?prefix=${encodeURIComponent(CONTENT_PREFIX)}`, {
    method: 'DELETE',
    headers: { 'X-API-Key': apiKey },
  })

  if (!response.ok) {
    throw new Error(`Failed to clear chunks: ${response.status}`)
  }

  const data = await response.json()
  console.log(`  Deleted ${data.deleted} existing chunks`)
}

async function uploadChunks(chunks: ChunkWithEmbedding[]): Promise<void> {
  const apiKey = process.env.DOCS_INDEX_API_KEY
  const apiUrl = process.env.DOCS_API_URL || 'https://start9.me/_api/docs'

  if (!apiKey) {
    throw new Error('DOCS_INDEX_API_KEY not set')
  }

  const batchSize = 50

  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize)

    console.log(`  Uploading batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(chunks.length / batchSize)}...`)

    const response = await fetch(`${apiUrl}/index`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({ chunks: batch }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`API error: ${response.status} ${error}`)
    }
  }

  const statusRes = await fetch(`${apiUrl}/index/status`, {
    headers: { 'X-API-Key': apiKey },
  })
  const status = await statusRes.json()
  console.log(`✅ Indexed ${chunks.length} chunks. Total in DB: ${status.chunk_count}`)
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  console.log('🔍 Scanning documentation...')

  const files = getAllMarkdownFiles(DOCS_DIR)
  console.log(`  Found ${files.length} markdown files`)

  const allChunks: Chunk[] = []

  for (const file of files) {
    const chunks = parseMarkdownIntoChunks(file)
    if (chunks.length > 0) {
      console.log(`  ${relative(DOCS_DIR, file)}: ${chunks.length} chunks`)
      allChunks.push(...chunks)
    }
  }

  if (allChunks.length === 0) {
    console.log('\nNo content to index.')
    return
  }

  console.log(`\nTotal: ${allChunks.length} chunks`)

  console.log('\n🧠 Generating embeddings...')
  const texts = allChunks.map((c) => c.content)
  const embeddings = await embedTexts(texts)

  const chunksWithEmbeddings: ChunkWithEmbedding[] = allChunks.map((chunk, i) => ({
    ...chunk,
    embedding: embeddings[i],
  }))

  console.log('\n🧹 Clearing existing docs chunks...')
  await clearOwnChunks()

  console.log('\n📤 Uploading to API...')
  await uploadChunks(chunksWithEmbeddings)

  console.log('\n✨ Done!')
}

main().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})