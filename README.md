# Start9 Documentation

Welcome to the Start9 Docs! Here you will find the StartOS user manual, as well as integration guides, FAQ, support, knowledge base, and developer docs.

## Dependencies

1. [node](https://nodejs.org/en/)

2. [npm](https://www.npmjs.com/get-npm)
 
3. Rust

   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

4. [mdBook](https://rust-lang.github.io/mdBook/) - Documentation framework
   
   ```
   cargo install mdbook
   ```

## Building

1. Clone the repo and change into its directory

   ```
   git clone https://github.com/Start9Labs/docs.git && cd docs
   ```

2. Run the serve script

   ```
   ./serve
   ```

   This will automatically build the project and open your default web browser at http://localhost:3000

## Contributing

We love contributions! Whether you spot a typo or want to make suggestions, you can fork this project and submit a PR with your changes for consideration. If you are uncomfortable with this process, please [create an issue](https://github.com/Start9Labs/docs/issues).

If you'd like to get started contributing to open source software, it's easier than you think! Visit one of our [Community Channels](https://start9.com/contact) and we'll help you get started.

## Third party plugins

[External link to plugins](https://github.com/rust-lang/mdBook/wiki/Third-party-plugins)
