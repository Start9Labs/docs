# SSH

Like other Linux distributions, StartOS allows you to go "under-the-hood" via Secure Shell Protocol (SSH).

> [!WARNING]
> Accessing your server via SSH is considered advanced. Please use caution, you can cause permanent damage to your server, potentially resulting in loss of data.

#### Contents

- [Important Notes](#important-notes)
- [Using your StartOS Master Password](#using-your-startos-master-password)
- [Using SSH Keys](#using-ssh-keys)
- [Connecting via PuTTY on Windows](#connecting-via-putty-on-windows)

## Important Notes

1.  The first time you connect, you will see something like this:

    ```
    The authenticity of host 'adjective-noun.local (192.168.1.175)' can't be established.
    ED25519 key fingerprint is SHA256:BgYhzyIDbshm3annI1cfySd8C4/lh6Gfk2Oi3FdIVAa.
    This key is not known by any other names.
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

    Type `yes` and hit Enter to start trusting the server's SSH public key.

1.  If you get a scary looking warning that says something like

    ```
    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
    ```

    Fear not! This is most likely happening because you have recently re-flashed your server, which causes a change in the key for your device's hostname. The solution is to delete the existing entry from your `known_hosts` file, which is typically located at `~/.ssh/known_hosts`. This will be specified in the warning, along with a helpful line number (in case your file is lengthy).

## Using your StartOS Master Password

1.  Open a terminal on your client device and enter:

        ssh start9@SERVER-HOSTNAME

    Replace `SERVER-HOSTNAME` with your server's `adjective-noun.local` address URL.

1.  Enter your StartOS master password.

## Using SSH Keys

1.  In the StartOS UI, go to `System > SSH`

1.  Click `Add Key`, paste in your key and click `Save`

1.  Open a terminal on your client device and enter:

        ssh start9@SERVER-HOSTNAME

    Replace `SERVER-HOSTNAME` with your server's `adjective-noun.local` address URL.

1.  Enter your key's passphrase (if any)

## Connecting via PuTTY on Windows

For Windows, following the command above will work. But if you prefer a GUI tool, [BrewsBitcoin](https://brewsbitcoin.com) has created a guide for [connecting via SSH using PuTTY on Windows](https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a)
