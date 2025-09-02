# Makefile

Makefile automates building, packaging, and installing StartOS services (.s9pk files) with support for multiple architectures and automatic JS/TS build steps.

## Basic Usage

### Default Build (Universal)

```
make
```

Builds a universal package supporting all platforms. Same as running `make all`.

### Platform-Specific Builds

```
make aarch64   # Build for ARM64 (Raspberry Pi, etc.)
make x86_64    # Build for x86_64 architecture
```

> **Note:** For convenience, legacy targets `make arm` and `make x86` are also supported as aliases for `aarch64` and `x86_64` respectively. Using the full architecture name is recommended for clarity.

### Installation

```
make install
```

Builds the package and installs it directly to your configured StartOS device.  
Requires a valid `~/.startos/config.yaml` with a `host: http://<device>.local` entry.

## Available Targets

| Target               | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `make` or `make all` | Build universal package for all platforms                  |
| `make aarch64`       | Build ARM64-only package                                   |
| `make x86_64`        | Build x86_64-only package                                  |
| `make install`       | Build and install to StartOS device                        |
| `make clean`         | Remove build artifacts (`.s9pk`, JS build, `node_modules`) |

## Tandem Operations

You can chain multiple targets:

```
make clean aarch64          # Clean then build ARM64 package
make clean x86_64 install   # Clean, build x86_64 package, then install
make clean install          # Clean, build universal, then install
```

## Example Output

**Building aarch64 package:**

```
$ make aarch64
   Re-evaluating ingredients...
   Packing 'albyhub_aarch64.s9pk'...
✅ Build Complete!

📦 Alby Hub   v1.19.3:1-alpha.0
───────────────────────────────
 Filename:   albyhub_aarch64.s9pk
 Size:       7M
 Arch:       aarch64
 SDK:        0.4.0-beta.36
 Git:        78c30ec776f6a9d55be3701e9b82093c866a382c
```

**Note:** If you have uncommitted changes, the Git hash will be shown in red.

**Installing aarch64 package:**

```
$ make aarch64 install

🚀 Installing to working-finalist.local ...
Sideloading 100% ███████████████████████████████
  Uploading...
  Validating Headers...
  Unpacking...
```

**Cleaning build artifacts:**

```
$ make clean
Cleaning up build artifacts...
```

## Prerequisites

- [**start-cli**](https://github.com/start9labs/start-cli): StartOS development toolkit
- **npm**: Node.js package manager
- **`~/.startos/config.yaml`**: must contain your StartOS device host config
- **Developer key**: If missing, `make` will auto-run `start-cli init`

The Makefile automatically builds JavaScript from TypeScript (`npm run build`) and installs dependencies from `package.json` as needed.
