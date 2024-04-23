# Creating Backups to Synology

## Create a Shared Folder

1. In the Synology UI, go to `Control Panel > Shared Folder` and choose the folder you want to use as the destination for the backup.

```admonish note

Do not select an encrypted folder. Encrypted folders on Synology enforce a character limit of 143 characters. At this time, StartOS backups use folder/file names that are longer than 143 characters. The backup process will fail if you try to backup to an encrypted folder.
```

1. Still in the Synology UI, go to `Control Panel > File Services > SMB` and click the SMB tab if it isn't already selected. Ensure that "Enable SMB service" is checked.

1. Under Advanced Settings on the same tab, set "Min SMB protocol" to `SMB2` and "Max SMB protocol" to `SMB3`.

1. Also on the SMB tab, take note of your device name. Just under "Note" in a pale blue box, you will see "PC (Windows Explorer): " and "Mac (Finder):". These both provide network addresses that contain your device's name. This device name is the "Hostname" you will need to provide within the StartOS "New Network Folder" dialog in step 3 of the "Connect StartOS" section below.

1. Still in File Services, click on the rsync tab. Click the checkbox to enable the rsync service.

1. Back in the Synology UI, click "File Station" and locate the the desired destination folder. Right click the folder, then _Properties > General_. Next to "Location" will be a folder location. The portion of the location _without the volume label_ is the value you will use for the "Path" within the StartOS New Network Folder dialog. For example, if the Location is `/volume1/Backups`, the value you care about is `Backups`.

## Create a Backup

1.  In StartOS, go to `System > Create Backup`.

1.  Click "Open New".

1.  Complete the form:

    1.  **Hostname**: The name of your Synology device on the LAN.

    1.  **Path** - The _name_ of your shared folder, _not_ the full directory path (e.g. `Backups` from the example above).

    1.  **Username** - Your Synology user who owns the shared folder.

    1.  **Password** - Your password for the above user.

1.  Click "Connect".

    ```admonish warning title="Troubleshooting"

    - If you receive `Filesystem I/O Error mount error(13): Permission denied`, ensure you have entered all the correct values in the form. The hostname can be particularly tricky.
    ```
