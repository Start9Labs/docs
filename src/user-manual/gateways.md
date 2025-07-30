# Gateways

#### Contents

- [Understanding Gateways](#understanding-gateways)
- [Adding a Gateway to StartOS](#adding-a-gateway-to-startos)

## Understanding Gateways

Gateways connect your server to the Internet. They process outbound traffic, and under certain conditions, they also permit inbound traffic. Your router is a gateway. StartTunnel is also a gateway. Both your router and StartTunnel create secure local networks that, by default, _cannot_ be accessed by devices outside the network. By default, your router (Ethernet or WiFi) is your only gateway.

```admonish note
If you are running StartOS on a VPS with a public IP address, there is no local network. Your gateway is inherently public and open to the Internet.
```

Think of a gateway as a defense perimeter with hundreds of locked doors, each door leading to a unique service interface. For example, one door might say "Vaultwarden UI", another might say "Bitcoin RPC", and yet another might say "Bitcoin P2P".

If you want to let a specific person through a particular door, you give them a key. If you want to let _everyone_ through a particular door, you remove the lock altogether. In either case, anyone who comes through any door will know the address of the gateway, which is its IP address. Knowing a gateway's IP address reveals it approximate geographic location. How approximate? See below table:

| Geographic Location     | Detection Accuracy    |
| ----------------------- | --------------------- |
| Country                 | 99%                   |
| State / Region          | 95-99%                |
| City (large metro)      | 60–80%                |
| Zip Code / Neighborhood | 30–50%                |
| Exact Street Address    | Requires ISP subpoena |

So if you want to expose a particular service interface to the public Internet (i.e. "remove a lock from a door"), you _must_ reveal the approximate location of your chosen gateway. If your gateway is your home router, you are necessarily revealing the approximate location of your home to all visitors. If your gateway is a VPS running StartTunnel, you are revealing the approximate location of the VPS, not your home.

_In summary_, you have two options when selecting a gateway for clearnet access to your service interfaces. Which you select will depend on your threat model and budget:

- **Option 1**: if you have no issue revealing your city, state, country, and possibly neighborhood to the Internet, you should use your router as your clearnet gateway, since this option is free. NOTE: since home IP addresses can change without warning, we highly recommend [Setting up Dynamic DNS](../../misc-guides/dynamic-dns.md).

- **Option 2**: if you want to obfuscate your home IP address, you should create a new gateway using StartTunnel (or similar). Refer to the [Installing StartTunnel on a VPS](../../misc-guides/start-tunnel.md) guide.

## Adding a Gateway to StartOS

```admonish warning title="Important"
Here you are describing an _existing_ gateway, not creating a new one. To create a new gateway, see [Installing StartTunnel on a VPS](../../misc-guides/start-tunnel.md)
```

1. Navigate to `System -> Gateways` and click "Add".

1. Give the gateway a name. For example "StartTunnel".

1. For type, select "Private". Only select "Public" if you used a custom tool to generate a _public_ Wireguard gateway. StartTunnel gateways are always private.

1. Paste the Wireguard config provided by StartTunnel (or similar).

1. Click "Save".
