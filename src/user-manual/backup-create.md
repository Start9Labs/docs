# Creating Backups

```admonish tip title="Important"
Creating backups is an essential responsibility of self-hosting. If you do not make backups, you _will_ eventually lose your data.
```
## Watch The Video:

<div class="yt-video" data-id="omHymkqroRk" data-title="Creating Backups"></div>

#### Contents

- [What You Need to Know](#what-you-need-to-know)
- [Physical Drive](#physical-drive)
- [Network Folder](#network-folder)

## What You Need to Know

1. You can create backups to a [physical drive](#physical-drive) plugged directly into your server, or over-the-air to another device on the same LAN (a [network folder](#network-folder)).

1. Backups are encrypted using your master password. If you change your password prior backups retain the original password.

1. Services may choose to exclude certain files or folders from the backup. For example, Bitcoin excludes the blockchain, since it can be recovered by re-syncing.

1. Backups can take minutes or hours to complete, depending on your hardware and quantity of data.

1. A service cannot be used while it is backing up. You may, however, continue to use your server and other services.

1. Upon completion, StartOS issues a backup report, indicating which services were backed up, as well as any errors.

1. Backups taken from a specific system architecture (x86, ARM, RISC-V) are backed up for just that architecture. If restored to another architecture, they will likely need to be reinstalled to run efficiently.

## Physical Drive

`EXT4` is the recommended format of your backup drive. `fat32` and `exFAT` are _not_ recommended and may not work.

> [!WARNING]
Backing up to USB thumb drives or SD card media is not recommended unless you are using high-endurance, high-quality storage. Low-quality flash memory is prone to corruption and failure over time.
>
> If you are using a Raspberry Pi, backup drive _must_ be self-powered, or be connected via a powered USB hub, to prevent possible data corruption.

## Network Folder

Choose your target device below for instructions creating a network folder.

- [Mac](../device-guides/mac/backups.md)
- [Linux](../device-guides/linux/backups.md)
- [Windows](../device-guides/windows/backups.md)
- [Synology](../device-guides/synology/backups.md)
- [TrueNAS](../device-guides/truenas/backups.md)

## Best Practices

Even with proper backups the risk of data corruption is always non-zero. Therefore it is recommended to take additional care when backing up highly valuable or irreplaceable data like a lightning node:

- High quality SSDs should be favored over HDDs as a backup target.
- Backup to multiple targets.
- If backing up to multiple targets make sure all backups are up to date.
