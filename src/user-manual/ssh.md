# Using SSH

Like other Linux distributions, StartOS allow you to go "under-the-hood" via Secure Shell Protocol (SSH).

```admonish warning
Accessing your server via SSH is considered advanced. Please use caution, you can cause permanent damage to your server, potentially resulting in loss of data.
```

#### Contents

- [Using your StartOS master password](#using-your-startos-master-password)
- [Using your own SSH Keys](#using-your-own-ssh-keys)
- [Connecting via PuTTY on Windows](#connecting-via-putty-on-windows)


## Using your StartOS master password

1.  Open a terminal on your client device and enter:

        ssh start9@SERVER-HOSTNAME

    Replace `SERVER-HOSTNAME` with your server's `adjective-noun.local` address URL.

1.  Enter your StartOS master password.

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

### Using your own SSH Keys

#### Via the UI

1. In the StartOS UI, go to `System > SSH`

1. Click `Add Key`, paste in your key and click `Save`
 


#### Via the CLI

1. Follow the first guide above to first access your server via SSH using your StartOS master password.

1. Add your key with the following command:

    ```
    start-cli ssh add <key>
    ```

    Replaceing `<key>` with quotation marks `""` surrounding your copied key.

    For example:

    ```
    start-cli ssh add "ssh-ed25519 5T4RT95T4RT95T4RT95T4RT95T4RT9 user@clienthost"
    ```

1. Confirm the key was added correctly with:

    ```
    start-cli ssh list
    ```

    ```admonish tip

    This will show the added keys' fingerprints. You'll need the fingerprint if you want to remove an SSH key with:

    `start-cli ssh remove 00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff`

    ```

1. Type `exit` and hit enter to leave the current session. Next time you connect via SSH, your key will be used instead of providng your master password.


## Connecting via PuTTY on Windows

For Windows, following the command above will work. But if you prefer a GUI tool, <a href="https://brewsbitcoin.com" target="_blank">BrewsBitcoin</a> has created a guide for <a href="https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a" target="_blank">connecting via SSH using PuTTY on Windows</a>