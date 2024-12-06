# Environment Setup

## StartOS server

You will need a StartOS server to test your package. Follow the [flashing guide](../flashing-guides/) to install StartOS on a physical device or VM.

## Docker

<a href="https://docs.docker.com/get-docker/" target="_blank">Docker</a> is needed to convert the docker image to a StartOS image.

## Make

<a href="https://www.gnu.org/software/make/" target="_blank">Make</a> is used streamline builds and produce an s9pk.

## NodeJS

<a href="https://nodejs.org/en/" target="_blank">NodeJS</a> is needed to compile the Typescript in your StartOS package.

## SquashFS

##### linux

    sudo apt install squashfs-tools squashfs-tools-ng

##### Mac

    brew install squashfs

## Start CLI

<a href="https://github.com/Start9Labs/start-os/" target="_blank">start-cli</a> is needed to interact with StartOS from the command line.

1.  Clone the StartOS repo

        https://github.com/Start9Labs/start-os.git

1.  Build Start CLI

        make cli

1.  Initialize Start CLI

        start-cli init

    This will generate a `.startos` directory inside your home directory. This directory will contain a newly-generated `developer.key.pem`, used to sign packages, as well as a default `config.yaml`, which can be edited to customize and streamline your developer experience.
