# Connecting Remotely - Clearnet

#### Contents

- [Use Case](#use-case)
- [Forwarding Ports](#forwarding-ports)
- [Adding a Domain](#adding-a-domain)

## Use Case

This connection method permits hosting a service interface on the public Internet.

## Adding a Domain

With few exceptions, you should add a domain to your service interface so that you and others can access it seamlessly, just like any other website or API.

1. On the service interface page in the "Domains" section, click "Add".

1. Select a base domain to use. If you have not yet added a base domain, [see the instructions](../domains.md).

1. Optionally add a subdomain. For example, if your base domain is `domain.com`, you could enter `nextcloud` as the subdomain, resulting in `nextcloud.domain.com`. If your base domain is `server.domain.com`, you could enter `nextcloud` as the subdomain, resulting in `nextcloud.server.domain.com` NOTE: domain/subdomain combinations are unique. If you use `nextcloud.domain.com` here, you cannot also use it somewhere else.

1. Optionally override the default ACME provider.

1. Click "Save".

1. A new `https://<your-domain>` address will appear in the "Addresses" table.

1. Continue below.

## Forwarding Ports

```admonish note
Port forwarding is only necessary on private gateways, such as your router or StartTunnel. If you are running StartOS on a VPS or using a public Wireguard tunnel as a gateway, no port forwarding is needed.
```

To expose your `PUBLIC_IP:port` or `domain` address to the Internet, you must create a port forwarding rule in its corresponding gateway. The rule that needs to be created is conveniently displayed in the tooltip for each address.

```admonish warning title="Caution"
1. ACME providers will not sign certificates for IP addresses. Therefore, the `PUBLIC_IP:port` address is signed by your server's Root CA. This means only devices that have downloaded and trusted your server's Root CA will be able to access the address without issue.
1. Because of the need to trust your Root CA, and also because it is accepted practice to host websites and APIs on domains (`.com`, `.net`, etc) and not IP addresses, most people will _NOT_ use this `PUBLIC_IP:port` address and therefore _DO NOT_ need to create a port forwarding rule for it.
```

```admonish tip
Most websites and APIs on the Internet are hosted on port `443`. Port `443` is so common, in fact, that apps and browsers _infer_ its presence. The _absence_ of a port _means_ the port is `443`. With rare exceptions, domains on StartOS also use port `443`, and that is why your domains usually do not display a port. The port forwarding rule needed for these standard domains is always the same, which means you only have to do it once!
```

How you create a port forwarding rule depends on your gateway.

- **Routers**: port forwarding is supported by all routers and easy to do. Refer to your router's manual for instructions.
- **StartTunnel**: Access your VPS using SSH and run the following command, replacing variables accordingly.

      start-tunnel port-forward add <external_port> <internal_ip_port>
