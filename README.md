# Start9 Documentation

Welcome to the Start9 Docs! Here you will find the StartOS user manual, as well as integration guides, FAQ, support, knowledge base, and developer docs.

## Building

1. Install dependencies

   [Rust](https://rustup.rs)

   `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

   [mdBook](https://rust-lang.github.io/mdBook/) - Documentation framework

   `cargo install mdbook`

   [mdBook-admonish](https://github.com/tommilligan/mdbook-admonish) - Admonitions plugin

   `cargo install mdbook-admonish`

   [mdBook-i18n](https://github.com/tommilligan/mdbook-admonish) - Internationalization plugin

   `cargo install mdbook-i18n`

2. Clone the repo and change into its directory

   ```
   git clone https://github.com/Start9Labs/docs.git
   cd mdbook-docs
   ```

3. Serve and view a live, local version of the docs while editing

   `mdbook serve --open`

   This will automatically open your default web browser and navigate to http://localhost:3000

## Contributing

We love contributions! Whether you spot a typo or want to make suggestions, you can fork this project and submit a PR with your changes for consideration. If you are not comfortable with this process, please create an issue with your suggestions or bug reports.

If you'd like to get started contributing to open source software, it's easier than you think! Visit one of our [Community Channels](src/support/contact.md) and we'll help you get started.

## Third party plugins

[External link to plugins](https://github.com/rust-lang/mdBook/wiki/Third-party-plugins)

## Possible `mdbook` admonitions

```admonish
A note.
```

```admonish example
An example.
```

```admonish info
Some info on this thing.
```

```admonish tip
Protip on this thing.
```

```admonish warning
You don't want to do this!
```

```admonish bug
Bonjour sucks, but it's gone now
```

```admonish danger
WTF ARE YOU DOING?!
```

```admonish warning title="Custom, i.e. -> POSSIBLE DATA LOSS"
The following steps can lead to irrecoverable data corruption.
```

```admonish success title=""
Admonition without title - This will take a while, go and grab a sandwich.
```

And tons more -> https://tommilligan.github.io/mdbook-admonish/reference.html
