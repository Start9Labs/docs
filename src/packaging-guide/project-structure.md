# Project Structure

```bash
/
├── assets/ (optional)
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

## assets/ (optional)

Use the `assets/` directory to package arbitrary files into your package. For example, an AI service may want to include a default LLM.

## startos/

```bash
startos/
├── actions/
├── config/
├── dependencies/
├── file-models/
├── versions/
├── backup.ts
├── index.ts
├── init.ts
├── interfaces.ts
├── main.ts
├── manifest.ts
├── properties.ts
├── sdk.ts
├── store.ts
└── utils.ts
```

The `startos/` directory is where you take advantage of the StartOS SDK and APIs.

#### backups.ts

`setupBackups()` is where you define what volumes to back up as well as what directories or files to _exclude_ from backups.

#### index.ts

This file is just plumbing, used for exporting package functions to StartOS.

#### init.ts

- `setupInstall()`: arbitrary code to run when the package is freshly installed. In this function, it is common to assign directory permissions or enter default values to the Store.
- `setupUninstall()`: arbitrary code to run on package uninstall. It is most commonly used to _undo_ changes made to dependency configs.

#### interfaces.ts

`setupInterfaces()` is where you define the service interfaces and determine how they are exposed. This function will execute on service install, update, and config save. It takes the user's config input as an argument, which will be `null` for install and update.

#### main.ts

`setupMain()` is where you define the daemons that define your service's runtime. Each daemon comes with a built-in health check that can optionally be displayed to the user. You can also use `setupMain()` to define arbitrary health checks in addition to those accompanying a daemon. A common use case for additional health checks is tracking and displaying a sync percentage.

#### manifest.ts

`setupManifest()` is where you define static metadata about the service, such as ID, name, description, release notes, helpful links, volumes, (software) images, hardware requirements, alerts, and dependencies.

#### properties.ts

`setupProperties()` is where you determine which values from the Store and underlying service to expose in the UI in Properties. Properties can imbued with metadata, such as whether or not to mask the value, or to display buttons for copying to clipboard or showing a QR code.

#### sdk.ts

This file is plumbing, used to imbue the generic Start SDK with package-specific type information defined in `manifest.ts` and `store.ts`. The exported SDK is what should be used through the `startos/` directory. It is a custom SDK just for this package.

#### store.ts

The Store is for persisting arbitrary data that are _not_ persisted by the service itself. The three most common use cases of the Store are:

1. Credentials for end user.
1. Credentials for dependent services.
1. Temporary state to be inspected at runtime, such as startup flags.
1. Metadata that cannot be retrieved or derived from the service itself, to be displayed in Properties.

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

Actions are predefined scripts or commands that present as buttons with optional inputs to end users. For example, a `resetPassword` action might use a service's command line interface to make changes to the file system, generate a new password, and save it to the package vault. The user experiences this as a button, perhaps with an input to optionally accept a user-provided password.

Each action receives its own file and is also passed into `setupActions()` in `actions/index.ts`

### config/

```bash
config/
├── index.ts
├── read.ts.ts
├── save.ts
└── spec.ts
```

The `config/` directory is where you define config options to expose, how to save and retrieve config values from the filesystem, and any side effects of configuration. Config presents in the UI as a simple, validated form.

#### read.ts

`setupConfigRead()` is where you describe how config values are retrieved from the file system. For example, you will read and parse one or more config files used by the service in order to present these options to the user.

#### save.ts

`setupConfigSave()` is where you describe how config values are saved to the file system and any associated side effects. For example, you will save form values to one or more underlying config files used by the service, or to the Store.

#### spec.ts

`setupConfigSpec()` is where you define the form that will display to the user. Forms may contain text inputs, number inputs, drop-downs, toggles, datetime selectors, and many other helpful UI elements and validations.

### dependencies/

```bash
dependencies/
├── dependencyConfig/
└── dependencies.ts
```

The `dependencies/` directory is used if your service depends on another StartOS service. If your service has no dependencies, you can ignore this directory.

#### dependencies.ts

`setupDependencies()` is where you define the services that your service requires, if any, and which states and versions they must be. This function will execute on service install, update, and config save. It takes the user's config input as an argument, which will be `null` for install and update.

#### dependencyConfig/

```bash
dependencyConfig/
├── index.ts
├── dependency1.ts
└── dependency2.ts
```

The `dependencyConfig/` directory is used to create a unique file for each dependency whose config you intend to edit. Each dependency config is then passed into `setupDependencyConfig()` in `index.ts`.

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

In the `versions/` directory, you will create a new file for each new package version. Here you will provide the version number, release notes, and define any migrations that should run. _Note_: migrations are only for migrating data that is _not_ migrated by the upstream service itself. All versions must then be provided as arguments to `VersionGraph.of()` in `index.ts` with the MOST RECENT VERSION LISTED FIRST.
