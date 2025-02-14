# Connecting over Router VPN (Linux)

#### Contents
- [OpenVPN](#openvpn)
- [WireGuard](#wireguard)

## Prerequisites
Most modern routers have VPN functionality built-in. You'll need to configure your router to assign a static IP to your Start9 server and to setup a OpenVPN or WireGuard server on your router, depending on which it supports.

## OpenVPN

Slightly slower, but with more authentication options, including creation of individual users with passwords.



## WireGuard

Simpler and faster, its limitation is that it authenticates with keys rather than usernames and passwords (which might be easier to distribute to family/friends or others you share access to). You would create a WireGuard profile on your router's WireGuard Server for each device you want to connect to the VPN and follow the guide below on each device, importing the profile you created for that device.

1. Install `wireguard` and `wireguard-tools`.

    - Debian / Ubuntu

        ```
        sudo apt update && sudo apt install wireguard
        ```
    
    - Fedora / RHEL

        ```
        sudo dnf update && sudo dnf install wireguard-tools
        ```
    - Arch / Manjaro

        ```
        sudo pacman -Syu && sudo pacman -S wireguard-tools && sudo pacman -S wireguard
        ```

    

1. Download your WireGuard configuration file from your router (or take note of the profile details).

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads
        
1. Copy the contents of your WireGuard configuration file into `/etc/wireguard/wg0.conf` (or enter them from your notes)

    ```
    sudo mv myconf.conf /etc/wireguard/wg0.conf
    ```
    Be certain to replace `myconf.conf` with the name of the file you downloaded.

1. Set the permissions on the configuration file correctly:

    ```
    sudo chmod 600 /etc/wireguard/wg0.conf
    ```

1. Bring the interface up using `wp-quick`, which will create the interface and necessary routing rules for you the first time you use it.
    ```
    sudo wg-quick up wg0
    ```

1. Verifiy that a this worked by examining the output of:
    ```
    sudo wg
    ```

1. Enable WireGuard on Boot (optional) - this would connect you each time you boot
    ```
    sudo systemctl enable wg-quick@wg0
    ```