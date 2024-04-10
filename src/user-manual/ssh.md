# Using SSH

Like other Linux distributions, you can go "under-the-hood" via Secure Shell Protocol (SSH) if you choose. Even though StartOS is designed to be used from the GUI, it is a good idea to set up SSH access. It can be useful for debugging purposes as well as advanced functionality.

```admonish warning
For security reasons, StartOS _disables_ access is not available, so you will need to add an SSH key to your server via the method below.
```

**Contents**

- [Creating an SSH Key](#creating-an-ssh-key)
- [Registering Your SSH Key with StartOS](#registering-your-ssh-key-with-startos)
- [SSH over LAN](#ssh-over-lan)
- [Connecting via PuTTY on Windows](#connecting-via-putty-on-windows)
- [SSH over Tor](#ssh-over-tor)

## Creating an SSH Key

1.  Open a terminal on your client device and enter the following command.

        ssh-keygen -t ed25519

    You will be asked to enter a file in which to save the key. We recommend pressing Enter to use the default location

1.  Optionally create a passphrase, or press enter for no passphrase.

    The next 3 step are for **Linux and Mac users only**. Windows users skip to [Registering Your SSH Key with StartOS](#registering-your-ssh-key-with-startos)

1.  The terminal will inform you that your public key has been saved. Take note of the path.

        Your public key has been saved in /home/user/.ssh/id_ed25519.pub

1.  Start your system's `ssh-agent`:

        eval "$(ssh-agent -s)"

1.  Add your key to the ssh-agent:

        ssh-add ~/.ssh/id_ed25519

    Note: if you changed the file name/location in step 1, you will need to use that file/path in this step

## Registering Your SSH Key with StartOS

1.  Open a terminal on your client device and display your SSH _public_ key (created above):

    - Mac and Linux:

          cat ~/.ssh/id_ed25519.pub

    - Windows:

          type .ssh\id_ed25519.pub

1.  Copy the resulting line that looks similar to

        ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINH3tqX71XsPlzYhhoo9CqAP2Yx7gsGTh43bQXr1zqoq user@email.com

1.  In StartOS, navigate to `System > SSH`.

1.  Click "Add New Key".

1.  Paste your SSH public key (copied above).

1.  Click "Submit".

## SSH over LAN

1.  Open a terminal on your client device and enter:

        ssh start9@SERVER-HOSTNAME

    Replace `SERVER-HOSTNAME` with your server's `adjective-noun.local` address URL.

1.  The first time you connect, you will see something like this:

        The authenticity of host 'adjective-noun.local (192.168.1.175)' can't be established.

        ED25519 key fingerprint is SHA256:BgYhzyIDbshm3annI1cfySd8C4/lh6Gfk2Oi3FdIVAa.

        This key is not known by any other names.

        Are you sure you want to continue connecting (yes/no/[fingerprint])?

    Type "yes" and hit Enter to start trusting the server's SSH public key.

    ```admonish note

    If you get a scary looking warning that says something like

        WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

    Fear not! This is most likely happening because you have recently re-flashed your server, which causes a change in the key for your device's hostname. The solution is to delete the existing entry from your `known_hosts` file, which is typically located at `~/.ssh/known_hosts`. This will be specified in the warning, along with a helpful line number (in case your file is lengthy).
    ```

## Connecting via PuTTY on Windows

For Windows, following the command above will work. But if you prefer a GUI tool, <a href="https://brewsbitcoin.com" target="_blank">BrewsBitcoin</a> has created a guide for <a href="https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a" target="_blank">connecting via SSH using PuTTY on Windows</a>

## SSH over Tor

```admonish warning

Terminal SSH over Tor is only supported on Linux and MacOS. For Windows, it is only possible with PuTTY as seen <a href="https://tor.stackexchange.com/a/143" target="_blank">here</a>. Note: those instructions use port 9150, but we've configured Tor in Windows on the traditional port 9050.

```

1.  Install `torsocks`

    - Mac:

          brew install torsocks

    - Debian / Ubuntu

          sudo apt install torsocks

    - Arch / Garuda / Manjaro

          sudo pacman -S torsocks

1.  Run the following command:

        echo -e "\nHost *.onion\n\tProxyCommand nc -xlocalhost:9050 %h %p" >> ~/.ssh/config

    This command adds a wildcard setting for .onion domains to your SSH config file. Any .onion domains you connect to using SSH will use the specified proxy command.

1.  SSH into StartOS:

    ```admonish warning

    The changes you make here are on the overlay and won't persist after a restart of your server.
    ```

        ssh start9@<custom-address>.local

1.  Elevate yourself to root in chroot edit mode (which will make your changes persist across reboots):

        sudo /usr/lib/startos/scripts/chroot-and-upgrade

1.  Using Vim or Nano, add the following 2 lines to `/etc/tor/torrc`

        HiddenServiceDir /var/lib/tor/ssh
        HiddenServicePort 22 127.0.0.1:22

    ```admonish tip

    You can also add these lines by running the following command:

        echo -e "\nHiddenServiceDir /var/lib/tor/ssh\nHiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc
    ```

1.  Restart your Start9 server by exiting chroot edit mode:

        exit

1.  SSH in again to gather you newly-generated SSH ".onion" address:

        sudo cat /var/lib/tor/ssh/hostname

    ```admonish note

    This .onion address is only for SSH access and should not be confused with your server's main .onion address.
    ```

1.  Exit SSH

        exit

1.  Now you can SSH into your server using your SSH ".onion" URL:

        ssh start9@xxxxxxxxxxxxxxxxx.onion
