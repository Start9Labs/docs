# Connecting Remotely - Clearnet

#### Contents

- [Use Case](#use-case)
- [Publishing a Service Interface](#publishing-the-service-interface)
- [Assigning a Domain](#assigning-a-domain)
- [Forwarding Ports](#forwarding-ports)

## Use Case

This connection method permits hosting select service interfaces on the public Internet as `IP:Port` addresses or as standard (`.com`, `.net`, etc) domains.

## Publishing a Service Interface

This creates the necessary rules in StartOS to permit public access.

1. Navigate to a service and select a service interface to expose

1. Click "Make Public"

1. Notice each gateway listed (except Tor) has received a _new_ `PUBLIC_IP:port` URL.

   ```admonish warning title="Important"
   1. The new `PUBLIC_IP:port` URL is _NOT_ reachable _until and unless_ you create a corresponding port forwarding rule (see [Forward Ports](#4-forward-ports) below) in its parent gateway. If you are running StartOS on a VPS, the URL should be immediately reachable, no port forwarding rule is necessary.
   1. ACME providers will not sign certificates for IP addresses. Therefore, the `PUBLIC_IP:port` URL is signed by your server's Root Certificate Authority (Root CA). This means only devices that have downloaded and trusted your server's Root CA will be able to access the URL without encountering a scary message.
   1. Because of the need to trust your Root CA, and also because it is accepted practice to host websites and APIs on domains (`.com`, `.net`, etc) and not IP addresses, most people will _NOT_ use this `PUBLIC_IP:port` URL and therefore _DO NOT_ need to create a port forwarding rule for it.
   ```

## Assigning a Domain

With few exceptions, you should add a domain to your public service interface so that you and others can access it seamlessly, just like any other website or API.

1. On the service interface page, locate the gateway you intend to use for clearnet access, and click "Assign Domain".

1. Select a base domain to assign. If you have not yet added a base domain, [see the instructions](../domains.md)

1. Optionally add a subdomain. For example, if your base domain is `domain.com`, you could enter `nextcloud` as the subdomain, resulting in `nextcloud.domain.com`. If your base domain is `server.domain.com`, you could enter `nextcloud` as the subdomain, resulting in `nextcloud.server.domain.com` NOTE: domain/subdomain combinations are unique. If you use `nextcloud.domain.com` here, you cannot also use it somewhere else.

1. Select an ACME provider to use (almost always Let's Encrypt). If you have not yet added an ACME provider, [see the instructions](../acme.md).

   For ACME provider, you can also select `None (use system Root CA)` to generate a certificate using your server's Root CA. NOTE: if you use your Root CA, only devices that have downloaded and trusted your server's Root CA will be able to access the domain without encountering a scary message.

## Forwarding Ports

```admonish note
If you are running StartOS on a VPS with a public IP address, every port is inherently open, so you can skip this step.
```

To expose your `PUBLIC_IP:port` or your `domain` to the Internet, you must create a port forwarding rule in its gateway. The rule that needs to be created is conveniently displayed alongside the URL itself.

Most domains do not display a port. The port forwarding rule that needs to be created for these domains is always the same, which means you only have to do it once. The next time you assign a domain to a public service interface on the same gateway, it will just work!

How you create a port forwarding rule depends on your gateway.

- **Routers**: port forwarding is supported by all routers and easy to do. Refer to your router's manual for instructions.
- **StartTunnel**: Access your VPS using SSH and run the following command, replacing variables accordingly.

      start-tunnel port-forward add <external_port> <internal_ip_port>

```admonish warning title="tip"
Most websites and APIs on the Internet are hosted on port `443`. Port `443` is so common, in fact, that apps and browsers _infer_ its presence. The _absence_ of a port _means_ the port is `443`. With rare exceptions, domains on StartOS also use port `443`, and that is why your domains rarely display a port.
```
