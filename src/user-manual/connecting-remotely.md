# Connecting Remotely

#### Contents

- [Connecting via Router VPN](#connecting-over-router-vpn)
- [Connecting over Tor](#connecting-over-tor)

## Connecting via router VPN

**Prerequisite**

- [Trusting Your Root CA](./trust-ca.md)

### Configuring Your Router

Most modern routers have VPN server functionality built-in. Refer to your router's user manual for instructions to complete the following steps.

1. Assign a static IP address for your server on the LAN.

2. Enable your router's VPN. In some cases you will be asked to choose between OpenVPN or Wireguard protocols.

   ```admonish tip title="Enable Dynamic DNS (Optional)"

   Rarely, your ISP may unexpectedly change the IP address of your home. If this happens, it will break your VPN connections until you re-complete the steps below. To prevent this, you can enable [dynamic DNS](). Many routers offer this as a free or paid service. If not, there are third party services available.
   ```

3. Download your VPN config file from your router. Keep in mind, this file will be different depending on whether or not you use dynamic DNS.

4. Follow the instructions below to install and configure OpenVPN or Wireguard on your phone/laptop.

### Configuring Your Phone/Laptop

By running a VPN client on your phone or laptop that connects directly to your VPN server on your router, you will be able to connect to your Start9 server as if you were on your LAN. Select the guide specific to your phone/laptop:

- [Mac](../device-guides/mac/vpn.md)
- [Linux](../device-guides/linux/vpn.md)
- [Windows](../device-guides/windows/vpn.md)
- [Android/Graphene](../device-guides/android/vpn.md)
- [iOS](../device-guides/ios/vpn.md)

## Connecting over Tor

```admonish warning

It is normal for Tor connections to be slow or unreliable at times.
```

### Using a Tor Browser

You can connect to your server from anywhere in the world, privately and anonymously, by visiting its unique `http://....onion` URL from any Tor-enabled browser.

**Recommended Browsers**

- **Mac, Linux, Windows, Android/Graphene**: <a href="https://torproject.org/download" target="_blank">Tor Browser</a>
- **iOS**: <a href="https://onionbrowser.com" target="_blank">Onion Browser</a>

### Running Tor in the _background_ on your Phone/Laptop

By running Tor on your phone or laptop, certain apps will be able to connect to your server over Tor, even if the apps themselves do not natively support Tor. Select the guide specific to your phone/laptop:

- [Mac](../device-guides/mac/tor.md)
- [Linux](../device-guides/linux/tor.md)
- [Windows](../device-guides/windows/tor.md)
- [Android/Graphene](../device-guides/android/tor.md)
- [iOS](../device-guides/ios/tor.md)
