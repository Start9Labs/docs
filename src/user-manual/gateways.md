# Gateways

A gateway is what connects your server to the Internet. Your router is a gateway. StartTunnel is also a gateway. Both your router and StartTunnel create secure local networks that, by default, _cannot_ be accessed by devices outside the network.

```admonish note
If you are running StartOS on a VPS with a public IP address, there is no local network. Your gateway is inherently public and open to the Internet.
```

Think of a gateway as a defense perimeter with hundreds of locked doors, each door leading to a unique service interface. For example, one door might say "Vaultwarden UI", another might say "Bitcoin RPC", and yet another might say "Bitcoin P2P".

If you want to let a specific person through a particular door, you give them a key. This is the equivalent of giving someone private VPN access to a specific service interface. If you want to let _everyone_ through a particular door, you remove the lock altogether. The is the equivalent of forwarding a port in your gateway, thereby exposing a particular service interface or domain to the public Internet. In either case, anyone who comes through any door will know the address of the gateway, which is its IP address. Knowing a gateway's IP address reveals it approximate geographic location. How approximate? See below table:

| Geographic Location     | Detection Accuracy    |
| ----------------------- | --------------------- |
| Country                 | 99%                   |
| State / Region          | 95-99%                |
| City (large metro)      | 60–80%                |
| Zip Code / Neighborhood | 30–50%                |
| Exact Street Address    | Requires ISP subpoena |

## Considerations for Clearnet

If you want to give someone private VPN access to a service interface (i.e. "give someone a key"), or to expose a service interface to the public Internet (i.e. "remove a lock from a door"), you _must_ reveal the approximate location of gateway used. If your gateway is your home router, you are necessarily revealing the approximate location of your home. If your gateway is a VPS running StartTunnel, you are revealing the approximate location of the VPS, not your home.

So, when it comes to selecting a gateway for VPN and clearnet access. Which you select will depend on your threat model and budget:

- **Option 1**: if you have no issue revealing your city, state, country, and possibly neighborhood to people accessing your server, you should use your router as your clearnet gateway, since this option is free. NOTE: since home IP addresses can change without warning, we highly recommend [Setting up Dynamic DNS](../../misc-guides/dynamic-dns.md).

  ```admonish warning title="CGNAT"
  If your Internet Service Provider (ISP) uses <a href="https://en.wikipedia.org/wiki/Carrier-grade_NAT" target="_blank" noreferrer>Carrier-grade NAT (CGNAT)</a>, such as Starlink, it means you share an IP address with other customers. Therefore, it is not possible to use your router as a clearnet gateway. You must use Option 2 below.
  ```

- **Option 2**: if you want to obfuscate your home IP address from people accessing your server, or your ISP uses CGNAT, you can create a StartTunnel private gateway and use that instead of your router. Refer to the [Using StartTunnel](../../misc-guides/start-tunnel.md) guide.
