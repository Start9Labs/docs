# Environment Setup

## StartOS machine

You will need a computer running StartOS to test your package. Follow the [flashing guide](../flashing-guides/) to install StartOS on a physical device or VM.

## Docker

<a href="https://docs.docker.com/get-docker/" target="_blank">Docker</a> is needed to convert docker images to StartOS images.

## Make

<a href="https://www.gnu.org/software/make/" target="_blank">Make</a> is needed to streamline builds and produce s9pk binaries.

## NodeJS

<a href="https://nodejs.org/en/" target="_blank">NodeJS</a> is needed to compile the Typescript in your StartOS package.

## SquashFS

SquashFS is needed to pack the compiled Javascript into a SquashFS file

##### Linux (Debian-based)

    sudo apt install squashfs-tools squashfs-tools-ng

##### Mac

    brew install squashfs

## Start CLI

<a href="https://github.com/Start9Labs/start-os/" target="_blank">start-cli</a> is needed to interact with StartOS from the command line.

1.  Clone the StartOS repo

        https://github.com/Start9Labs/start-os.git

1.  Initialize the git submodules

        git submodule update --init --recursive

1.  Build Start CLI

        make cli

1.  Initialize Start CLI

        start-cli init

    This will generate a `.startos` directory inside your home directory. This directory will contain a newly-generated `developer.key.pem`, used to sign packages, as well as a default `config.yaml`, which can be edited to customize and streamline your developer experience.
