# Connecting Remotely - Clearnet

#### Contents

- [Use Case](#use-case)
- [Adding a Public Domain](#adding-a-public-domain)
- [Configuring DNS](#configuring-dns)
- [Port Forwarding](#port-forwarding)

## Use Case

This connection method permits hosting a service interface on the public Internet.

## Adding a Public Domain

With few exceptions, you should add a domain to your service interface so that you and others can access it seamlessly, just like any other website or API.

1. On the service interface page in the "Public Domains" section, click "Add".

1. Enter the fully qualified domain name. For example, if you control `domain.com`, you could enter `domain.com` or `public.domain.com` or `nextcloud.public.domain.com`, etc.

1. Select a gateway to use for this domain. For help selecting a gateway, see [Gateways](./gateways.md)

   ```admonish warning title="Starlink and CGNAT"
   CGNAT gateways, such as Starlink, cannot be used for clearnet hosting. You must create a new gateway with StartTunnel. Refer to [Creating a StartTunnel Private Gateway](../../misc-guides/start-tunnel.md).
   ```

1. Select a Certificate Authority to use for this domain.

   ```admonish warning
   If you select your server's Root CA, only devices that have downloaded and trusted your server's Root CA will be able to access the domain without issue.
   ```

1. Click "Save".

1. If StartOS does not detect a satisfactory DNS record, you will be asked to create one. Continue to the section below.

1. A new `https://<your-public-domain>` address will appear in the "Addresses" table.

## Configuring DNS

1. Access your domain's DNS settings, usually in the registrar where you originally leased the domain.

1. In StartOS, find your domain, click "View DNS" from the menu, and create _one_ of the displayed records. Depending on the number of subdomains in your domain, you may see multiple options. For example, if your domain is `nextcloud.public.domain.com`, you will see options for `nextcloud.public.domain.com`, `*.public.domain.com`, and `*.domain.com`. In most cases, we recommend choosing the record with the least number of segments. In this case, `*.domain.com`. Then, next time you use _any_ subdomain of `domain.com`, you will _not_ need to create another DNS record.

1. Click "Test" to ensure the record was successfully detected by StartOS.

   ```admonish warning
   It might take a few minutes for your domain changes to take effect. You can test it using [https://dnschecker.org](https://dnschecker.org).
   ```

## Port Forwarding

```admonish note
Port forwarding is only necessary for private gateways, such as your router or StartTunnel. If you are running StartOS on a VPS, no port forwarding is needed.
```

To expose your `PUBLIC_IP:port` or `domain` address to the Internet, you must create a port forwarding rule in its corresponding gateway. The rule that needs to be created is conveniently displayed in the tooltip for each address.

```admonish warning title="Caution"
1. ACME providers will not sign certificates for IP addresses. Therefore, the `PUBLIC_IP:port` address is signed by your server's Root CA. This means only devices that have downloaded and trusted your server's Root CA will be able to access the IP address without issue.
1. Because of the need to trust your Root CA, and also because it is accepted practice to host websites and APIs on domains (`.com`, `.net`, etc) and not IP addresses, most people will _NOT_ use this `PUBLIC_IP:port` address and therefore _DO NOT_ need to create a port forwarding rule for it.
```

```admonish tip
Most websites and APIs on the Internet are hosted on port `443`. Port `443` is so common, in fact, that apps and browsers _infer_ its presence. The _absence_ of a port _means_ the port is `443`. With rare exceptions, domains on StartOS also use port `443`, and that is why your domains usually do not display a port. The port forwarding rule needed for these standard domains is always the same, which means you only have to do it once!
```

How you create a port forwarding rule depends on your gateway.

- **Routers**: port forwarding is supported by all routers and easy to do. Refer to your router's manual for instructions.

- **StartTunnel**: SSH into your StartTunnel VPS and run the following command, replacing variables accordingly.

      start-tunnel port-forward add <external_port> <internal_port>
