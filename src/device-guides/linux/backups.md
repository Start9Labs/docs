# Creating Backups (Linux)

#### Contents

- [Create a Shared Folder](#create-a-shared-folder)
  - [Ubuntu](#ubuntu)
  - [Mint](#mint)
  - [Other Linux](#other-linux)
- [Create a backup](#create-a-backup)

## Create a Shared Folder

### Ubuntu

1.  Install Samba if not already:

        sudo apt install samba && sudo systemctl enable smbd

1.  Add your user to samba, replacing `$USER` with your Linux username.

        sudo smbpasswd -a $USER

    You will be prompted for your linux password. Then, you must create a new SMB password for the user with permission to write to your new backup share. Keep the password somewhere safe, such as Vaultwarden.

1.  Identify or create a folder to store your server backups.

    ```admonish tip

    This folder can be located on an external drive connected to your Linux machine.
    ```

1.  Right click the folder and click "Properties".

1.  Click "Local Network Share".

1.  Select "Share this folder" and give the folder a Share name. _Remember the name_, you will need it later. Then click "Create Share".

1.  If your installation of Ubuntu is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba. If it generates an error, you can safely ignore it:

        sudo ufw allow Samba

### Mint

1.  Install Samba if not already:

        sudo apt install samba && sudo systemctl enable smbd

1.  Add your user to samba, replacing `$USER` with your Linux username.

        sudo usermod -a -G sambashare $USER
        sudo smbpasswd -a $USER

    You will be prompted for your linux password. Then, you must create a new SMB password for the user with permission to write to your new backup share. Keep the password somewhere safe, such as Vaultwarden.

1.  Identify or create a folder to store your server backups.

    ```admonish tip

    This folder can be located on an external drive connected to your Linux machine.
    ```

1.  Right click the folder and click "Sharing Options".

1.  Select "Share this folder" and give the folder a Share name (maximum 12 characters). _Remember the name_, you will need it later. Click "Create Share".

1.  If your installation of Mint is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba. If it generates an error, you can safely ignore it:

        sudo ufw allow Samba

### Other Linux

1.  Install Samba if it is not already installed.

    - Arch:

           sudo pacman -S samba

    - Debian and Debian-based:

            sudo apt install samba

    - CentOS/Redhat

            sudo yum install samba

    - Fedora

            sudo dnf install samba

1.  Identify or create a folder to store your server backups. Make a note of the directory path. For example:

        mkdir -p /home/$USER/start9-backup

    replacing `$USER` with your Linux username and "start9-backup" with whatever you want the folder to be named.

    ```admonish tip

    This folder can be located on an external drive connected to your Linux machine.
    ```

    ```admonish warning

    If you are on Fedora 38+, you need to do an extra step to allow the Samba share in SELinux:

        sudo semanage fcontext --add --type "samba_share_t" "/home/$USER/start9-backup(/.*)?"
        sudo restorecon -R /home/$USER/start9-backup
    ```

1.  Configure Samba by adding the following to the end of your `/etc/samba/smb.conf` file:

        [backup-share]
            path = "/home/$USER/start9-backup"
            create mask = 0600
            directory mask = 0700
            read only = no
            guest ok = no

    Where:

    - `[backup-share]` can be replaced with whatever you want (must remain inside brackets). This is your `Share Name`. _Remember the name_, you will need it later.
    - `path` is the directory path to the share folder from above.

1.  Open a terminal and enter the following command, replacing `$USER` with your Linux username:

        sudo smbpasswd -a $USER

    This creates a password for the Local Network Share. Keep it somewhere safe, such as Vaultwarden.

1.  If your Linux system has a firewall enabled by default or due to custom configuration, you may need to allow connections to Samba. The command varies depending on the firewall in use:

    - For systems using UFW (commonly found on Debian-based distros):

          sudo ufw allow Samba

    - For systems using firewalld (common on RHEL-based distros):

          sudo firewall-cmd --permanent --add-service=samba
          sudo firewall-cmd --reload


## Create a Backup

1.  In StartOS, go to `System > Create Backup`.

1.  Click "Open New".

1.  Complete the form:

    1.  **Hostname**: The name of your Linux machine on the LAN.

    1.  **Path** - The "Share Name" (name of the share in your samba config), _not_ the full directory path. (e.g. "backup-share" in the example).

    1.  **Username** - Your Linux username on the remote machine that you used to create the shared directory.

    1.  **Password** - The password you set above using smbpasswd

1.  Click "Connect".

    ```admonish warning title="Troubleshooting"

    - If you receive `Filesystem I/O Error mount error(13): Permission denied`, ensure you have entered all the correct values in the form. The hostname can be particularly tricky.
    ```
