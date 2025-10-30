# Quick Start

## Environment Setup

Ensure you have completed every step of [environment setup](./environment-setup.md).

## Generate your Package Repository

1. Access the [Hello World Template](https://github.com/Start9Labs/hello-world-startos)

1. Click `Use this template > Create new repository`. You must be signed into Github to see this button.

   ![use Github template](./assets/use-github-template.png)

1. Name your repository. The name should be `[service-name]-startos`. For example, NextCloud is `nextcloud-startos` and Lightning Terminal is `lightning-terminal-startos`.

1. For the repository description, enter "StartOS package for [Service Name]".

1. Make sure the repository is Public.

1. Click "Create Repository".

## Clone your Package Repository

From the command line of your local work machine, run the following commands:

```
git clone [your-repository-url]
```

```
cd [repository-name]
```

```
npm i
```

## Build and Install your Package

```
make
```

This produces a `[service-id].s9pk` at the root of your project that can be sideloaded through the StartOS UI.

See [Building and Installing](./building.md) for more options and to streamline your development workflow.
