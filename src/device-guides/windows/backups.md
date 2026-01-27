# Creating Backups (Windows)

#### Contents

1. [Create a Shared Folder](#create-a-shared-folder)
1. [Create a backup](#create-a-backup)

## Create a Shared Folder

1.  Identify or create a folder to store your server backups.

    > [!TIP]
    > This folder can be located on an external drive connected to your Windows machine.

1.  Right click the folder and click "Properties".

    ![Properties](./assets/backups-windows-0.png)

1.  Click "Sharing".

    ![Sharing](./assets/backups-windows-1.png)

1.  Click "Share".

    ![Share](./assets/backups-windows-2.png)

1.  Select a user you want to use for login and click "Share".

        ![Select a user](./assets/backups-windows-3.png)

    > [!WARNING]
    > If you get the following dialog box, you have designated your network "Public". You may wish to change to "Private" if this is your home network. Otherwise you may turn on network sharing for public networks.
    > ![public network](./assets/backups-windows-4.png)

1.  Note the Windows directory path in grey text, highlighted in blue, beginning at the first single slash (`\`). We will use that path later.

    ![path](./assets/backups-windows-5.png)

## Create a Backup

1.  In StartOS, go to `System > Create Backup`.

1.  Click "Open New".

1.  Complete the form:
    1.  **Hostname**: Enter your Windows computer name (this is shown after a `\\`).

    1.  **Path** - Enter the folder path followed by the share name displayed in the Windows sharing dialog shown copied from above. In our example this would be `/Users/win/Desktop/SharedFolder`. When entering the path, make sure replace the back slashes `\` shown in Windows with forward slashes `/`.

    1.  **Username** - Your Windows user who owns the shared folder.

    1.  **Password** - Your password for the above user.

1.  Click "Connect".

    > [!WARNING]
    >
    > - If you receive `Filesystem I/O Error mount error(13): Permission denied`:
    >   1. Ensure you are entering the correct username and password. You _cannot_ use a pin.
    >   1. Ensure your windows password meets any length and complexity requirements set by your local Windows policy.
    >   1. Office365 accounts also may not work at all, try a regular user in this case.
    > - If you receive `Filesystem I/O Error mount error(115): Operation now in progress`,
    >   1. Navigate to `Start > Settings > Network & Internet > Ethernet (or WiFi)` and select the "Private" profile to treat your LAN as a trusted network that allows file sharing.
