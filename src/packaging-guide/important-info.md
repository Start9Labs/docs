# Important Info

#### contents

- [start-sdk embedded docs](#start-sdk-embedded-docs)
- [Container init](#container-init)
- [File Models](#file-models)

## start-sdk embedded docs

When working with start-sdk in a package codebase, hover states reveal descriptions, type definitions, and example usages of just about everything. If you are wondering what a function does or how to use, hovering over the function name. If you are wondering what attributes can be included in an object, press `ctrl + space` inside the object.

### Container init

Service containers are initialized when:

- When the service is freshly installed
- When the service is updated or downgraded
- On StartOS boot
- If the user manually triggers a rebuild

## File Models

Many services have configuration files, such as a config.toml. With start-sdk, these files can and should be represented as "File Models" in the file-models directory. Here you create a Typescript definition of the file, providing type protection throughout the codebase. File Models can also enforce types _at runtime_. For example, if a json file expects a "name" key to be a string and the user uses SSH to enter a number instead, you can coerce the value back to a string and protect the user from themselves. File Models provide automatic parsing/serialization for `.json`, `.yaml`, `.toml`, `.ini`, and `.env`. For custom file types (e.g. `.conf`) you can provide a custom parser/serializer.

### Reading files

File Models have a `read()` method that take an optional mapping if you only care to read a subset of the file.

- `FileModel.read().once()` will return the entire file
- `FileModel.read(f => f.users).once()` will return only the contents of "users".

### Options for reading

When you access a File Model or Store value, you must choose between:

- `.once()`: returns the parsed file or Store value and nothing else.
- `.const(effects)`: returns the parsed file or Store value, and registers an OS task to re-run the context function if the file or nested value of interest changes. For example, if you did `FileModel.read(f => f.name).const(effects)` in `setupInterfaces()`, then `setupInterfaces()` would re-run whenever "name" changes.
- `.onChange(effects)`: registers an OS tak to run a callback function that accepts the new file or value. For example, `FileModel.read().onChange((file) => { // do stuff })`
- `watch(effects)`: returns an async iterator of the new file or value.
