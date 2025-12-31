# Connecting via VPN (Linux)

Follow this guide to privately access your server from your Linux device using a VPN.

#### Prerequisites

- [Connecting Remotely - VPN](../../user-manual/connecting-remotely/vpn.md)

#### Contents

- [WireGuard](#wireguard)
- [OpenVPN](#openvpn)

## WireGuard

1.  Obtain a WireGuard config file for your device.

    - **StartTunnel**: Follow instructions [here](../../misc-guides/start-tunnel.md#adding-a-client-device-for-private-access)
    - **Router**: Follow your router's instructions.

1.  Install `wireguard` and `wireguard-tools`.

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

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads

1.  Copy the contents of your WireGuard configuration file into `/etc/wireguard/wg0.conf` (or enter them from your notes)

    ```
    sudo mv myconf.conf /etc/wireguard/wg0.conf
    ```

    Be certain to replace `myconf.conf` with the name of the file you downloaded.

1.  Set the permissions on the configuration file correctly:

    ```
    sudo chmod 600 /etc/wireguard/wg0.conf
    ```

1.  Bring the interface up using `wp-quick`, which will create the interface and necessary routing rules for you the first time you use it.

    ```
    sudo wg-quick up wg0
    ```

1.  Verifiy that a this worked by examining the output of:

    ```
    sudo wg
    ```

1.  Enable WireGuard on Boot (optional) - this would connect you each time you boot
    ```
    sudo systemctl enable wg-quick@wg0
    ```

```admonish tip
Each time you want to close the VPN connection:
   `sudo wg-quick down wg0`
```

## OpenVPN

1.  Install `openvpn`.

    - Debian / Ubuntu

      ```
      sudo apt update && sudo apt install openvpn
      ```

    - Fedora / RHEL

      ```
      sudo dnf update && sudo dnf install openvpn
      ```

    - Arch / Manjaro

      ```
      sudo pacman -Syu && sudo pacman -S openvpn
      ```

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads

1.  Copy the contents of your OpenVPN configuration file into `/etc/openvpn/client.conf` (or enter them from your notes)

    ```
    sudo mv myconf.ovpn /etc/openvpn/client.conf
    ```

    Be certain to replace `myconf.ovpn` with the name of the file you downloaded.

1.  Set the permissions on the configuration file correctly:

    ```
    sudo chmod 600 /etc/openvpn/client.conf
    ```

1.  Start OpenVPN and load the config file, entering your username and password when requested.

    ```
    sudo systemctl start openvpn@client
    ```

1.  Verifiy that a this worked by examining the output of:

    ```
    sudo systemctl status openvpn@client
    ```

1.  Enable OpenVPN on Boot (optional) - this would connect you each time you boot
    ```
    sudo systemctl enable openvpn@client
    ```

```admonish tip
Each time you want to close the VPN connection:
    `sudo systemctl stop openvpn@client`
```
