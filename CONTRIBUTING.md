# Contributing

We welcome contributions! Whether you spot a typo or want to suggest new content, you can fork this project and submit a PR. If you are uncomfortable with this process, please [create an issue](https://github.com/Start9Labs/docs/issues).

If you'd like to get started contributing to open source software, it's easier than you think! Visit one of our [Community Channels](https://start9.com/contact) and we'll help you get started.

## Local Development

1. Install dependencies

   [Rust](https://rustup.rs)

   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   [mdBook](https://rust-lang.github.io/mdBook/)

   ```
   cargo install mdbook
   ```

2. Clone the repo

   ```
   git clone https://github.com/Start9Labs/docs.git && cd docs
   ```

3. Serve locally

   ```
   ./serve.sh
   ```

   This builds the project and opens your browser at http://localhost:3000.

## Project Structure

```
docs/
├── src/              # Markdown source files (the actual documentation)
├── theme/            # Custom CSS and JS (styling, Start Bot widget)
├── widget/           # Start Bot chat widget (TypeScript, built by CI)
├── scripts/          # Documentation indexing script for RAG
├── book.toml         # mdBook configuration
└── serve.sh          # Local development server
```

## Writing Docs

- All documentation lives in `src/` as Markdown files
- The sidebar structure is defined in `src/SUMMARY.md`
- mdBook supports [admonitions](https://tommilligan.github.io/mdbook-admonish/) for warnings, tips, etc.
- Use relative links between pages

## Third Party Plugins

[External link to mdBook plugins](https://github.com/rust-lang/mdBook/wiki/Third-party-plugins)
