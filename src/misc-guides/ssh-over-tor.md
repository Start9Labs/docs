# SSH over Tor

```admonish warning
The guide below applies to Linux and MacOS.

For Windows, it is only possible with PuTTY as seen [here](https://tor.stackexchange.com/a/143). Note: those instructions use port 9150, but we've configured Tor in Windows on the traditional port 9050.
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
