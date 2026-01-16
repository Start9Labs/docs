# Environment Setup

## StartOS machine

You will need a computer running StartOS to test your package. Follow the [flashing guide](../flashing-guides/) to install StartOS on a physical device or VM.

## Docker

[Docker](https://docs.docker.com/get-docker/) is essential for building and managing container images that will be used for final `.s9pk` build. It handles:

- Pulling base images for your service containers
- Building custom container images from Dockerfiles

## Make

[Make](https://www.gnu.org/software/make/) is a build automation tool that streamlines the package creation process and it is used to:

- Execute build scripts defined in Makefiles
- Coordinate the packaging workflow
- Build and install s9pk binaries to StartOS
- Automate repetitive development tasks

## Node.js v22 (Latest LTS)

[Node.js](https://nodejs.org/en/) is required for compiling TypeScript code used in StartOS package configurations.

## SquashFS

**SquashFS** is used to create compressed filesystem images that package your compiled service code.

### Installation:

#### Linux (Debian-based)

```sh
sudo apt install squashfs-tools squashfs-tools-ng
```

#### macOS

Make sure you have [Homebrew](https://brew.sh/) installed, then:

```sh
brew install squashfs
```

## Start CLI

[start-cli](https://github.com/Start9Labs/start-cli/) is the core development toolkit for building StartOS packages and provides:

- Package validation and verification
- s9pk file creation and assembly
- Development workflow management
- Integration with StartOS systems

### Installation:

The easiest way to install start-cli is using our automated installer script:

```
curl -fsSL https://start9labs.github.io/start-cli/install.sh | sh
```
