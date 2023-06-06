# Start9 Documentation
Welcome to the Start9 Docs!  Here you will find the embassyOS user manual, as well as integration guides, FAQ, support, knowledge base, and developer docs.

## Building from source
1. Install the necessary dependencies

    [Rust](https://rustup.rs)
    
        ```bash
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
        ```

    [mdBook](https://rust-lang.github.io/mdBook/) - Documentation framework
    
        ```bash
        cargo install mdbook
        ```

    [mdBook-admonish](https://github.com/tommilligan/mdbook-admonish) - Admonitions plugin
    
        ```bash
        cargo install mdbook-admonish
        ```

    [mdBook-i18n](https://github.com/tommilligan/mdbook-admonish) - Internationalization plugin
    
        ```bash
        cargo install mdbook-i18n
        ```


1. Clone the repo and change into its directory
    
    ```bash
    git clone git@github.com:kn0wmad/mdbook-docs
    cd mdbook-docs
    ```
    
1. Serve and view a live, local version of the docs while editing
    
    ```bash
    mdbook serve --open
    ```
    This will automatically open your default web browser and navigate to http://localhost:3000

## Contributing
We love contributions!  Whether you spot a typo or want to make code changes, you can fork this project and submit a PR with your changes for consideration.  If you are not comfortable with this process, please create issues with suggestions or bug reports.  If you'd like to get started contributing to Open Source software, it's easier than you think!  Visit one of our [Community Channels](https://docs.start9.com/latest/support/contact) and we'll help you get started.