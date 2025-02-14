# Connecting Remotely

#### Contents

- [Connecting over Router VPN](#connecting-over-router-vpn)
- [Connecting over Tor](#connecting-over-tor)

## Connecting over Router VPN

**Prerequisite**

- [Trusting Your Root CA](./trust-ca.md)

Most modern routers have VPN functionality built-in. Refer to your router's user manual for instructions to complete the following steps.

1. Assign a static IP address to your server.

2. Enable your router's VPN. In some cases you will be asked to choose between OpenVPN or Wireguard protocols.

   ```admonish tip title="Enable Dynamic DNS (Optional)"

   Rarely, your ISP may unexpectedly change your home IP address. If this happens, it will break your VPN connection until you re-complete the steps below. To prevent this, you can enable Dynamic DNS in your router, which is usually a paid service. To learn more about Dynamic DNS, click [here]().
   ```

3. Download your VPN config file from your router.

4. Install OpenVPN or Wireguard on your client device(s) and establish a VPN connection to your LAN using the config file from above.

### Connecting to your Router VPN on your Phone/Laptop

By running a VPN client on your phone or laptop that connects directly to your VPN server on your router, you will be able to connect to your server as if you were on your LAN. Select the guide specific to your phone/laptop:

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
