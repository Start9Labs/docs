# Creating Backups

```admonish tip title="Important"
Creating backups is an essential responsibility of self-hosting. If you do not make backups, you will eventually lose your data.
```

**Contents**

- [What You Need to Know](#what-you-need-to-know)
- [Physical Drive](#physical-drive)
- [Network Folder](#network-folder)

## What You Need to Know

1. You can create backups to a [physical drive](#physical-drive) plugged directly into your server, or over-the-air to another device on the same LAN (a [network folder](#network-folder)).

1. Backups are encrypted using your master password.

1. Services may choose to exclude certain files or folders from the backup. For example, Bitcoin excludes the blockchain, since it can be recovered by re-syncing.

1. Backups can take minutes or hours to complete, depending on your hardware and quantity of data.

1. A service cannot be used while it is backing up. You may, however, continue to use your server and other services.

1. Upon completion, StartOS issues a backup report, indicating which services were backed up, as well as any errors.

## Physical Drive

`EXT4` is the recommended format of your backup drive. `fat32` and `exFAT` are _not_ recommended and may not work.

```admonish danger
Backing up to USB thumb drive or SD card media is highly discouraged, as low-quality flash memory is easily corruptible.

If you are using a Raspberry Pi, backup drive _must_ be self-powered, or be connected via a powered USB hub, to prevent possible data corruption.
```

## Network Folder

Choose your target device below for instructions creating a network folder.

- [Mac](../guides/device-guides/mac/backups.md)

- [Linux](../guides/device-guides/linux/backups.md)

- [Windows](../guides/device-guides/windows/backups.md)

- [Synology]()

- [TrueNAS]()
