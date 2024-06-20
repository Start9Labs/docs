# Environment Setup

## StartOS server

You will need a StartOS server to test your package. Follow the [flashing guide](../flashing-guides/) to install StartOS on a physical device or VM.

## start-cli

<a href="https://github.com/Start9Labs/start-os/" target="_blank">start-cli</a> is needed to interact with StartOS from the command line.

Once installed, run

```
start-cli init
```

This will generate a `.startos` directory inside your home directory. This directory will contain a newly-generated `developer.key.pem`, used to sign packages, as well as a default `config.yaml`, which can be edited to customize and streamline your developer experience.

## NodeJS

<a href="https://nodejs.org/en/" target="_blank">NodeJS</a> is needed to compile the Typescript in your StartOS package.

## Make

<a href="https://www.gnu.org/software/make/" target="_blank">Make</a> is used streamline builds and produce an s9pk.

## Docker

<a href="https://docs.docker.com/get-docker/" target="_blank">Docker</a> is needed to convert the docker image to a StartOS image.
