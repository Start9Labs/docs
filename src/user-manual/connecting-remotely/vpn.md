# Connecting Remotely - VPN

#### Contents

1. [Use Case](#use-case)
1. [Option 1: Router](#option-1-router)
1. [Option 2: StartTunnel](#option-2-starttunnel)
1. [Connecting Clients](#connecting-clients)

## Use Case

This connection method is ideal for fast, private, _personal_ access from anywhere in the world using a VPN server running on your router or VPS. Only authorized devices have access to your server and installed services.

## Option 1: Router

Most modern routers include a VPN server feature. If so, it is usually the preferred method for private, remote access to your server.

1. If you haven't already, assign a static IP address to your server on the LAN. Refer to your router's user manual for detailed instructions.

1. Since home IP addresses can change without warning, we highly recommend [Setting up Dynamic DNS](../../misc-guides/dynamic-dns.md).

1. Enable your router's VPN server. Refer to your router's user manual for detailed instructions.

## Option 2: StartTunnel

There are two reasons to select this option: (1) your router does not offer a VPN server or (2) you are already using StartTunnel for [clearnet](./clearnet.md) hosting, so most of the work is already done.

See [Creating a StartTunnel Private Gateway](../../misc-guides/start-tunnel.md).

## Connecting Clients

Once you have successfully enabled a VPN server on your router or used StartTunnel to create an inbound tunnel and new gateway, follow instructions below to privately connect your client devices to your server using a VPN.

- [Mac](../../device-guides/mac/vpn.md)
- [Linux](../../device-guides/linux/vpn.md)
- [Windows](../../device-guides/windows/vpn.md)
- [Android/Graphene](../../device-guides/android/vpn.md)
- [iOS](../../device-guides/ios/vpn.md)
