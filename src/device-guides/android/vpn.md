# Connecting via VPN (Android/Graphene)

Follow this guide to privately access your server from your Android/Graphene device using a VPN.

#### Prerequisites

- [Connecting Remotely - VPN](../../user-manual/connecting-remotely/vpn.md)

#### Contents

- [WireGuard](#wireguard)
- [OpenVPN](#openvpn)

## WireGuard

1. Obtain a WireGuard config file for your device.
   - **StartTunnel**: Follow instructions [here](../../misc-guides/start-tunnel.md#adding-a-client-device-for-private-access)
   - **Router**: Follow your router's instructions.

1. Install WireGuard from the [Play Store](https://play.google.com/store/apps/details?id=com.wireguard.android) [WireGuard website](https://www.wireguard.com/install/)

   ![Download WireGuard Client](./assets/vpn-android-wireguard-download.png)

1. Click the `+` button to add a new profile/connection.

   ![Add Tunnel](./assets/vpn-wireguard-add-tunnel.png)

1. Import the configuration file created above to your Android/Graphene device. If the configuration file can be displayed as a QR code, that is usually easiest. If not, you can download the file and transfer it to your Android/Graphene device. A last resort option would be to manually enter the necessary values.

   ![Get WireGuard setting from Router](./assets/vpn-wireguard-config.png)

1. Android will inform you that WireGuard wants to set up a VPN connection. Click "OK".

## OpenVPN

1. Install **OpenVPN for Android** from [Google Play](https://play.google.com/store/apps/details?id=de.blinkt.openvpn), [F-Droid](https://github.com/schwabe/ics-openvpn) or the APK from [Arne Schwabe's Github](https://github.com/schwabe/ics-openvpn). As an alternative you can also use **OpenVPN Connect** from [OpenVPN, Inc.](https://openvpn.net/client/).

1. Download the configuration file from your router's OpenVPN server to your Android/Graphene device. If accessing your router UI via a laptop/desktop, you will need to download the file to that device, then send it to yourself via email, message, or other file sharing tool.

   ![Get OpenVPN setting from Router](./assets/vpn-openvpn-config.png)

1. Click the `+` button to add a new profile/connection.

   ![Add Profile](./assets/vpn-android-openvpn-start.png)

1. Import from the file you downloaded above. Consider giving the profile a better name.

   ![Import](./assets/vpn-android-openvpn-import.png)

1. Android will inform you that OpenVPN wants to set up a VPN connection. Click "OK".

1. If you set up your OpenVPN server with username and password authentication, enter those and select to Save Password.

   ![Username and Password authentication](./assets/vpn-android-openvpn-add-auth.png)

   > [!NOTE]
   > In this guide we are using Password-only, but passwords can be accompanied by certificates for added security.

1. Once set up, click on the name of the profile allows you to connect and disconnect. You can edit the profile from the icon to its right.

   ![Connect and Disconnect](./assets/vpn-android-openvpn-connected.png)

1. If you're not able to browse websites when connected, your Router VPN may not be providing valid DNS servers. If so, edit the profile and visit the IP and DNS tab. Click to override the DNS settings and add your own.

   ![Edit DNS](./assets/vpn-android-openvpn-fix-dns.png)
