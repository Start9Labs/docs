# Testing `mdBook` Formatting

## 1. Basic Markdown Elements

### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Text Formatting

- *Italic* text
- **Bold** text
- ***Bold and Italic*** text
- ~~Strikethrough~~ text

### Lists

- Unordered list item 1
- Unordered list item 2
  - Nested item 1
  - Nested item 2

1. Ordered list item 1
2. Ordered list item 2

### Links

[mdBook Documentation](https://rust-lang.github.io/mdBook/index.html)

### Images

![Rust Logo](https://www.rust-lang.org/logos/rust-logo-512x512.png)

## 2. Code Blocks and Syntax Highlighting

### Inline Code

This is an example of `inline code`.

### Code Blocks

```rust
fn main() {
    println!("Hello, mdBook!");
}
```

### Shell Commands

```sh
echo "This is a shell command"
```

### JSON

```json
{
    "key": "value",
    "array": [1, 2, 3],
    "nested": {
        "key2": "value2"
    }
}
```

## 3. Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |

## 4. Admonitions with `mdbook-admonish`

### Info

```admonish info
This is an informational note.
```

### Warning

```admonish warning
This is a warning note.
```

### Error

```admonish danger
This is a danger note.
```

### Success

```admonish success
This is a success note.
```

### Tips

```admonish tip
This is a tip!
```

### Custom Titles

```admonish note title="Custom Note Title"
This is a note with a custom title.
```

## 5. Blockquotes

> This is a blockquote.
>
> It can span multiple lines.

## 6. Math

### Inline Math

Euler's identity: $e^{i\pi} + 1 = 0$

### Display Math

$$
\int_0^\infty e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}
$$

## 7. Diagrams

### Mermaid Diagrams

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## 8. Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

## 9. Task Lists

- [x] Task 1 completed
- [ ] Task 2 not completed

## 10. Collapsible Sections (if supported)

<details>
  <summary>Click to expand!</summary>
  
  Hidden content here.
</details>

## 11. SVG Images as code test
raw code:
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
  <path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
  <path d="M6 10h4m-2 -2v4"></path>
</svg>
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
  <path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
  <path d="M6 10h4m-2 -2v4"></path>
</svg>