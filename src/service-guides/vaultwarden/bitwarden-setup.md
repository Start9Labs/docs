# Bitwarden Client Setup

Here you can learn how to setup your various devices and browsers to be able to access your Vaultwarden service.

We suggest you connect to Vaultwarden over [VPN or Tor](/user-manual/connecting-remotely.md) for the best experience… an experience where you can access synced passwords **away from home** as well as create and save new passwords. Over LAN your app and all your passwords will be cached and available after an initial sync when not connected to your Start9 Server but you would later need to connect via LAN to add or update passwords in your vault. Bitwarden requires an encrypted connection, so make sure you [trust your root CA](/user-manual/trust-ca.md) on all devices.

**Contents**
- [Browser Extension](#browser-extension)
- [Android](#android)
- [iOS](#ios)
- [Desktop Clients](#desktop-clients)



## Browser Extension

```admonish tip

If you intend on connecting via **Tor** (i.e using the .onion address) rather than VPN the Bitwarden browser extension will only work with a Tor enabled browser.

If you choose **Firefox with Tor**, you will need to [follow this guide](/misc-guides/firefox-guides/tor.md) to run Tor on your device and configure Firefox to use it. If using **Brave** you will just need to [setup Tor on your device](/user-manual/connecting-remotely.md#connecting-over-tor). With Tor Browser, everything will just work right out of the box.

We recommend using Firefox as it is the most compatible browser with Start9 Servers.

```

1. In this example we will use Firefox, though these instructions will work just the same for Brave. First, install the [Bitwarden browser extension](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/).  

1. Head to the **Interfaces** tab in the Vaultwarden service on your Start9 Server.

    ![vaultwarden-interfaces](./assets/vaulwarden-interface.png)


1. Copy the preferred interface address for VPN/LAN or Tor:

    ![vaultwarden-interface-address](./assets/vaultwarden-interface-addresses.png)


1. Open Bitwarden extension and click the **self-hosted** dropdown menu and choose **self-hosted**. Paste your interface address to **Server URL** field and click save.

    ![vaultwarden-firefox-self-host](./assets/bitwarden-plugin-1.png)

    ![vaultwarden-firefox-self-host](./assets/bitwarden-plugin-2.png)

1. Enter your credentials and the Bitwarden extension will be logged into your self-hosted Vaultwarden server!



## Android

1. Visit google play store and download the [Bitwarden app](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden).

1. Head to the **Interfaces** tab in the Vaultwarden service on your Start9 Server:

    ![vaultwarden-interfaces](./assets/vaulwarden-interface.png)

    ```admonish tip

    If connecting via **Tor** rather than VPN (i.e using the .onion address) the Bitwarden app will only work if [Tor is enabled](/device-guides/android/tor.md) on your device and Bitwarden is added to Orbot's VPN apps list. You may need to hit the refresh button in the top left to get it to populate.

    ```

1. Copy the preferred interface address for VPN/LAN or Tor:

    ![vaultwarden-tor-address](./assets/vaultwarden-interface-addresses.png)

1. Send that address to your phone.

1. Open the Bitwarden app. Tap the **self-hosted** dropdown menu and choose **self-hosted**. Paste your interface address to **Server URL** field and tap save.

    ```admonish warning
    
    For **Tor**, before you hit save:  If the Tor address you have copied begin with **http** - Please change this to **https** instead of **http**

    ```

1. Tap 'Log In,' enter your credentials, and you can access your Bitwarden app / Vaultwarden server.



## iOS

1. Visit the App Store and download the [Bitwarden app](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)

1. Head to the **Interfaces** tab in the Vaultwarden service on your Start9 Server.

    ![vaultwarden-interfaces](./assets/vaulwarden-interface.png)

    ```admonish tip

    If connecting via **Tor** rather than VPN (i.e using the .onion address) the Bitwarden app will only work if [Tor is enabled](/src/device-guides/android/tor.md) on your device and Bitwarden is added to Orbot's VPN apps list. You may need to hit the refresh button in the top left to get it to populate.

    ```

1. Copy the preferred interface address for VPN/LAN or Tor:

    ![vaultwarden-tor-address](./assets/vaultwarden-interface-addresses.png)


1. Send that address to your phone.

1.  Open the Bitwarden app. Tap the **self-hosted** dropdown menu and choose **self-hosted**. Paste your interface address to **Server URL** field and tap save.

     ```admonish warning
    
    For **Tor**, before you hit save:  If the Tor address you have copied begin with **http** - Please change this to **https** instead of **http**

    ```

    ![vaultwarden-iOS-log-in-screen](./assets/bitwarden-ios-1.png)

    ![vaultwarden-iOS-log-in-screen](./assets/bitwarden-ios-2.png)

1. Tap **Log In**, enter your credentials, and you'll be able to access your Bitwarden app / Vaultwarden server!



## Desktop Clients

### Linux
1. Install Bitwarden either by using a package manager like **apt** (we recommend against using **snap**) or download it from [here](https://bitwarden.com/download/).

1. If you intend to use Tor, run the program with the flag ``--proxy-server=socks5://127.0.0.1:9050`` behind it. You can run this from a terminal, and if you'd like to use a shortcut, edit that shortcut file to include the flag.

1. Copy the preferred interface address for VPN/LAN or Tor:

    ![vaultwarden-tor-address](./assets/vaultwarden-interface-addresses.png)

1. Choose the **Self-hosted** option, paste the preferred interface address for VPN, LAN or Tor:

1. Click save and log in.


### MacOS
1. Download the [Bitwarden Desktop app](https://bitwarden.com/download/).

1. If you intend to use Tor, make sure Tor is [running on your Mac](/device-guides/mac/tor.md). If you intend to use a VPN, make sure you have it [running on your Mac](/device-guides/mac/vpn.md).

1. Copy the preferred interface address for VPN, LAN or Tor:

    ![vaultwarden-tor-address](./assets/vaultwarden-interface-addresses.png)

1. Click the **Self-hosted** option, paste the preferred interface address for VPN, LAN or Tor:

    ![vaultwarden-tor-address](./assets/bitwarden-macos-1.png)

    ![vaultwarden-tor-address](./assets/bitwarden-macos-2.png)

1. Click save and log in. 


### Windows
1. Download the [Bitwarden Desktop app](https://bitwarden.com/download/).

1. If you intend to use Tor, make sure Tor is [running on Windows](/device-guides/windows/tor.md). If you intend to use a VPN, make sure you have it [running on your Mac](/device-guides/windows/vpn.md).

1. Copy the preferred interface address for VPN/LAN or Tor:

    ![vaultwarden-tor-address](./assets/vaultwarden-interface-addresses.png)

1. Click the **Self-hosted** option, paste the preferred interface address for VPN, LAN or Tor:

1. Click save and log in. 