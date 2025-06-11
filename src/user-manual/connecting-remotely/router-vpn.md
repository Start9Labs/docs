# Connecting Remotely - Router VPN

## Use Case

This connection method is ideal for fast, private, _personal_ access from anywhere in the world. Only authorized devices have access to your server and/or installed services.

```admonish warning title="Router Feature Needed"
Most modern routers include a VPN server. If your router does not include a VPN server, you cannot use this connection method. Check your router manual to confirm.
```

#### Contents

1. [Configuring Your Router](#configuring-your-router)
1. [Configuring Your Phone/Laptop](#configuring-your-phonelaptop)

## Configuring Your Router

1. In your router settings, assign a static IP address for your server on the LAN. Refer to your router's user manual for detailed instructions.

1. Enable your router's VPN server. You may be asked to choose between OpenVPN and Wireguard. We recommend Wireguard if you want to control access on a device-by-device basis. Refer to your router's user manual for detailed instructions.

1. (optional but recommended) Enable dynamic DNS for your home IP address. Your ISP may unexpectedly change the IP address of your home. If this happens, it will break your VPN connections until you redo the steps below. To prevent this, you can enable <a href="https://en.wikipedia.org/wiki/Dynamic_DNS" target="_blank">dynamic DNS</a>. Many routers offer this as a free or paid service. If not, there are third party services available.

1. Download your VPN config file from your router. Keep in mind, this file will be different depending on whether or not you enabled dynamic DNS (above).

## Configuring Your Phone/Laptop

- [Mac](../../device-guides/mac/vpn.md)
- [Linux](../../device-guides/linux/vpn.md)
- [Windows](../../device-guides/windows/vpn.md)
- [Android/Graphene](../../device-guides/android/vpn.md)
- [iOS](../../device-guides/ios/vpn.md)
