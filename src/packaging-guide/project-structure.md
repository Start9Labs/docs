# Project Structure

```bash
/
├── assets/
├── startos/
├── .gitignore
├── Dockerfile (optional)
├── icon.svg
├── instructions.md
├── LICENSE
├── Makefile
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

#### .gitignore, Makefile, package-lock.json, package.json, and tsconfig.json

These are boilerplate files that need not be edited, except in special circumstances.

#### Dockerfile (optional)

It is recommended to pull an existing Docker image as shown in Hello World. If necessary, you can define a custom image using this Dockerfile.

#### icon.svg

This is the icon for your package. In most cases, it will be the upstream service icon. Maximum file size is 40 KiB. Supported extensions are .svg, .png, .jpg, and .webp.

#### instructions.md

This is your package instructions.

#### LICENSE

This is the software license for your package. In most cases, it will be the upstream license. If your package contains multiple upstream services with different licenses, you should select the more restrictive license.

#### README.md

This is largely boilerplate. Update as needed for your service, including replacing references to Hello World/Moon.

## assets/

Use the `/assets` directory to include additional files or scripts needed by your service. For example, a Python script that generates a default config file for the service. It should rarely be necessary to use this directory.

## startos/

```bash
startos/
├── actions/
├── file-models/
├── versions/
├── backup.ts
├── dependencies.ts
├── index.ts
├── init.ts
├── interfaces.ts
├── main.ts
├── manifest.ts
├── sdk.ts
├── store.ts
└── utils.ts
```

The `startos/` directory is where you take advantage of the StartOS SDK and APIs.

#### backups.ts

`setupBackups()` is where you define what volumes to back up as well as what directories or files to _exclude_ from backups.

#### dependencies.ts

`setupDependencies()` is where you define any dependencies of this package, including their versions, whether or not they need to be running or simply installed, and which health checks, if any, need to be passing for this package to be satisfied.

#### index.ts

This file is just plumbing, used for exporting package functions to StartOS.

#### init.ts

- `setupPreInstall()`: arbitrary code to run immediately when the package is freshly installed, _before_ other setup scripts. In this function, it is common to assign directory permissions or generate default config files.
- `setupPostInstall()`: arbitrary code to run when the package is freshly installed, _after_ other setup scripts. In this function, it is common to make final changes to the Store or create tasks for the user.
- `setupUninstall()`: arbitrary code to run on package uninstall. It is most commonly used to _undo_ changes made to dependency configs.

#### interfaces.ts

`setupInterfaces()` is where you define the service interfaces and determine how they are exposed. This function will execute on service install, update, and config save. It takes the user's config input as an argument, which will be `null` for install and update.

#### main.ts

`setupMain()` is where you define the daemons that define your service's runtime, it runs each time the service is started. Daemon comes with built-in health checks that can optionally be displayed to the user. You can also use `setupMain()` to define additional health checks, such as tracking and displaying a sync percentage.

#### manifest.ts

`setupManifest()` is where you define static metadata about the service, such as ID, name, description, release notes, helpful links, volumes, (software) images, hardware requirements, alerts, and dependencies.

#### sdk.ts

This file is plumbing, used to imbue the generic Start SDK with package-specific type information defined in `manifest.ts` and `store.ts`. The exported SDK is what should be used through the `startos/` directory. It is a custom SDK just for this package.

#### store.ts

The Store is for persisting arbitrary data that are _not_ persisted by the service itself. It is rare to You must define your store as a `Store` type and also initialize it with an `initStore` const that satisfies the type. On fresh install, StartOS initializes the Store with values provided in initStore _before_ anything else, even before [setupPreInstall](#initts). This guarantees the Store is available to all other setup scripts.

The three most common use cases of the Store are:

1. Tracking ephemeral state, such as startup flags.
1. Storing SMTP preferences and credentials.
1. Storing data that cannot be retrieved or derived from the service itself.
1. Storing user credentials (not recommended).

`setupExposeStore()` is where you determine which values from the Store to expose to other services running on StartOS. _Values not explicitly exposed here will be kept private_.

#### utils.ts

This file is for defining constants and functions specific to your package that are used throughout the code base. Many packages will not make use of this file.

### actions/

```bash
actions/
├── index.ts
├── action1.ts
└── action2.ts
```

Actions are predefined scripts that display as buttons to the user. They accept arbitrary input and return structured data that can be optionally displayed masked or as QR codes. For example, a `config.ts` action might present a validated form that represents an underlying config file of the service, allowing them to configure the service without needing SSH or the command line. A `resetPassword` action could generate a new password, save it to the appropriate place in the file system or package store, and display it to the user.

Each action receives its own file and is also passed into `Actions.of()` in `actions/index.ts`

### file-models/ (optional)

```bash
file-models/
├── config1.yaml.ts
└── config2.json.ts
```

In `file-models/`, create separate .ts files for each config file (.json, .toml, .yaml, .config) used by the upstream service. These .ts files add type safety to the upstream config files and provide a simple means of reading and writing them throughout the package codebase.

### versions/

```bash
versions/
├── index.ts
├── v1_0_3_2.ts
└── v1_0_2_0.ts
```

In the `versions/` directory, you will create a new file for each new package version. In each version file, use `VersionInfo.of()` to provide the version number, release notes, and any migrations that should run. _Note_: migrations are only for migrating data that is _not_ migrated by the upstream service itself. All versions must then be provided as arguments to `VersionGraph.of()` in `index.ts` with the MOST RECENT VERSION LISTED FIRST.
