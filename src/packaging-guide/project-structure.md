# Project Structure

```bash
/
├── assets/
├── docs/ (optional)
├── startos/
├── .gitignore
├── Dockerfile (optional)
├── icon.svg
├── LICENSE
├── Makefile
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

#### .gitignore, [Makefile](./Makefile.md), package-lock.json, package.json, and tsconfig.json

These are boilerplate files that need not be edited, except in special circumstances.

#### Dockerfile (optional)

It is recommended to pull an existing Docker image as shown in Hello World. If necessary, you can define a custom image using this Dockerfile.

#### icon.svg

This is the icon for your package. In most cases, it will be the upstream service icon. Maximum file size is 40 KiB. Supported extensions are .svg, .png, .jpg, and .webp.

#### LICENSE

This is the software license for your package. In most cases, it will be the upstream license. If your package contains multiple upstream services with different licenses, you should select the more restrictive license.

#### README.md

This is largely boilerplate. Update as needed for your service, including replacing references to Hello World.

## assets/

Use the `/assets` directory to include additional files or scripts needed by your service. For example, a Python script that generates a default config file for the service. It should rarely be necessary to use this directory.

## docs/

Optionally use the `/docs` directory to store an `instructions.md` file or an entire set of documentation, structured however you want. When creating your service manifest, set `docsUrl` to the URL where this directory will eventually be published. For example, if using GitHub, the URL would likely be `https://github.com/<GITHUB_USERNAME>/<REPO>/blob/master/docs`, assuming you publish to branch `master`.

## startos/

```bash
startos/
├── actions/
├── fileModels/
├── init/
├── install/
├── backups.ts
├── dependencies.ts
├── index.ts
├── interfaces.ts
├── main.ts
├── manifest.ts
├── sdk.ts
└── utils.ts
```

The `startos/` directory is where you take advantage of the StartOS SDK and APIs.

#### backups.ts

`setupBackups()` is where you define what volumes to back up as well as what directories or files to _exclude_ from backups.

#### dependencies.ts

`setupDependencies()` is where you define any dependencies of this package, including their versions, whether or not they need to be running or simply installed, and which health checks, if any, need to be passing for this package to be satisfied.

#### index.ts

This file is just plumbing, used for exporting package functions to StartOS.

#### interfaces.ts

`setupInterfaces()` is where you define the service interfaces and determine how they are exposed. This function will execute on service install, update, and config save. It takes the user's config input as an argument, which will be `null` for install and update.

#### main.ts

`setupMain()` is where you define the daemons that define your service's runtime, it runs each time the service is started. Daemon comes with built-in health checks that can optionally be displayed to the user. You can also use `setupMain()` to define additional health checks, such as tracking and displaying a sync percentage.

#### manifest.ts

`setupManifest()` is where you define static metadata about the service, such as ID, name, description, release notes, helpful links, volumes, (software) images, hardware requirements, alerts, and dependencies.

#### sdk.ts

This file is plumbing, used to imbue the generic Start SDK with package-specific type information defined in `manifest.ts` and `store.ts`. The exported SDK is what should be used through the `startos/` directory. It is a custom SDK just for this package.

#### utils.ts

This file is for defining constants and functions specific to your package that are used throughout the code base. Many packages will not make use of this file.

### actions/

```bash
actions/
├── index.ts
├── action1.ts
└── action2.ts
```

In the `actions/` directory, you define custom actions for your package.

Actions are predefined scripts that display as buttons to the user. They accept arbitrary input and return structured data that can be optionally displayed masked or as QR codes. For example, a `config.ts` action might present a validated form that represents an underlying config file of the service, allowing them to configure the service without needing SSH or the command line. A `resetPassword` action could use the upstream service's CLI to generate a new password for the primary admin, then display it to the user.

Each action receives its own file and is also passed into `Actions.of()` in `actions/index.ts`

### fileModels/ (optional)

```bash
fileModels/
├── store.json.ts
└── config.json.ts
```

In the `fileModels/` directory, you can create separate `.ts` files from which you export a file model for each file from the file system you want to represent. Supported file formats are `.yaml`, `.toml`, `.json`, `.env`, `.ini`, `.txt`. For alternative file formats, you can use the `raw` method and provide custom serialization and parser functions.

These `.ts` files afford a convenient and type safe way for your package to read, write and monitor, and react to file on the file system.

It is common for packages to have a `store.json.ts` file model as a convenient place to persist arbitrary data that are needed by the package but _not_ persisted by teh upstream service. For example, you might use `store.json` to persist startup flags or login credentials.

### init/

```bash
init/
├── index.ts
├── customInitFn1.ts
└── customInitFn2.ts
```

In the `init/` directory, you define the container initialization sequence for your package as well as optional custom init functions.

Containers initialization takes place under the following circumstances:

1. Package install (including fresh install, update, downgrade, and restore)
2. _Server_ (not service) restart
3. "Container Rebuild" (an built-in Action that must be manually triggered by the user)

_Note_: starting or restarting a service _does not_ trigger container initialization. Even if a service is stopped, the container still exists with event listeners still active.

#### index.ts

`setupInit()` is where you define the specific order in which functions will be executed when your container initializes.

- `restoreInit` and `versionGraph` must remain first and second. Do not move them.

- `setInterfaces`, `setDependencies`, `actions` are recommended to remain in this order, but could be rearranged if necessary. For example, if setInterfaces depends on your package dependencies, you should run setDependencies before setInterfaces, though this would be a highly unusual circumstance.

- Any custom init functions can be appended to the list of built-in functions above, or even inserted between them. For example, if you wanted to run a custom init function prior to creating your actions that might affect which actions get created, you would insert that function between `setDependencies` and `actions`. Most custom init functions are simply appended to the list.

Finally, it is possible to limit the execution of custom init functions to specific _kinds_ of initialization. For example, if you only wanted to run a particular init function on fresh install and ignore it for updates and restores, `setupOnInit()` provides a `kind` variable (one of `install`, `update`, `restore`) that you can use for conditional logic. `kind` can also be null, which means the container is being initialized due to a server restart or manual container rebuild, rather than installation.

### install/

```bash
install/
├── versions/
└── versionGraph.ts
```

In the `install/` directory, you will manage package versions and also define pre-install and migration logic.

#### versionGraph.ts

`VersionGraph.of()` is where you index the current version as well as other versions of your package. Lastly, the function accepts a `preInstall` argument where you can define custom logic to run once, before anything else, _on initial installation only_. A common use case of the preInstall function is to seed files that other init functions expect to exist.

#### versions

```bash
versions/
├── index.ts
├── v1_0_3_2.ts
└── v1_0_2_0.ts
```

In the `versions/` directory, you will create a new file for each new package version. In each version file, use `VersionInfo.of()` to provide the version number, release notes, and any migrations that should run.

Similar to `preInstall` migration `up` and `down` functions run once, before anything else, _upon updating or downgrading to that version only_.

All versions should then be provided in `index.ts`, either as the current version or list of other versions.

_Important note_: migrations are only for migrating data that is _not_ migrated by the upstream service itself.
