# StartOS Docs

The official documentation for [StartOS](https://start9.com) — covering setup, services, networking, troubleshooting, developer guides, and more.

**Live site:** [docs.start9.com](https://docs.start9.com)

## Overview

Built with [mdBook](https://rust-lang.github.io/mdBook/) and deployed to GitHub Pages. Includes an embedded [Start Bot](widget/) chat widget that provides AI-powered support using RAG (retrieval-augmented generation) over the documentation content.

## How It Works

- Documentation is written in Markdown under `src/`
- On push to `master`, GitHub Actions builds the site, deploys to Pages, and indexes the content for Start Bot
- The indexing step chunks the Markdown by headings, generates vector embeddings via [Voyage AI](https://www.voyageai.com/), and sends them to the [start9-me](https://github.com/Start9Labs/start9-me) server for semantic search

## Getting Started

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development setup and contribution guidelines.
