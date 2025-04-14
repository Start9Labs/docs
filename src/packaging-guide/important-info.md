# Important Info

#### contents

- [SDK embedded docs](#start-sdk-embedded-documentation)
- [Container initialization](#container-initialization)
- [File Models](#file-models)

## start-sdk embedded documentation

When working with start-sdk in a package codebase, hover states reveal descriptions, type definitions, and example usages of just about everything. If you are wondering what a function does or how to use, hovering over the function name. If you are wondering what attributes can be included in an object, press `ctrl + space` inside the object.

## Container initialization

### Service containers are built/created:

- When the service is freshly installed.
- When the service is updated or downgraded.
- On StartOS boot.
- If the user manually triggers a rebuild.

### Service container initialization sequence. Each of the below are functions in start-sdk:

This means, for example, that the results of `setupDependencies()` are not available to `setupInterfaces()` on initialization.

1. `initStore()`: (runs once ever, only on fresh install)
1. `setupPreInstall()` (run once ever, only on fresh install)
1. `setupInterfaces()`
1. `Any actions passed to Actions.of()`
1. `setupExposeStore()`
1. `setupDependencies()`
1. `setupPostInstall()` (runs once ever, only on fresh install)
1. `The [up or down] migration of the first version provided to VersionGraph.of()` (update only)

## File Models

Many services have configuration files, such as a config.toml. With start-sdk, these files can and should be represented as a File Model in the file-models directory. Here you create a Typescript definition of the file, providing type protection throughout the codebase. File Models can also enforce types _at runtime_. For example, if a json file expects a "name" key to be a string and the user uses SSH to enter a number instead, you can coerce the value back to a string and protect the user from themselves. File Models provide automatic parsing/serialization for `.json`, `.yaml`, `.toml`, `.ini`, and `.env`. For custom file types (e.g. `.conf`) you can provide your own parser/serializer.

## Reading File Models and Store values

When you access a File Model or Store value, you must choose between:

- `.once()`: returns the parsed file or Store value and nothing else.
- `.const()`: returns the parsed file or Store value, and registers an OS task to re-run the context function if the file or value changes. For example, a `.const()` used to get a "name" value from the Store in `setupInterfaces()` would result in `setupInterfaces()` re-running if the "name" value changes.
- `.onChange()`: registers an OS tak to run a callback function that accepts the new file or value. For example, `.onChange((newFileOrValue) => { // do stuff })`
- `watch()`: returns an async iterator of the new file or value. @TODO provide an example
