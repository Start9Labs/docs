# Using Proxies

#### Contents

- [Use Case](#use-case)
- [Getting a Proxy](#getting-a-proxy)
- [Adding a Proxy to StartOS](#adding-a-proxy-to-startos)

## Use Case

StartOS supports using Wireguard proxies to proxy traffic to and from your server and installed services.

-**Inbound Proxies**
An inbound proxy enables clients from outside the LAN to reach your server UI and/or installed services. There are two types of inbound proxies: _private_ and _public_.

    - **Private**: authorized clients can access your server UI and every service interface of your installed services

    - **Public**: _specific_ service interfaces are exposed to the public Internet without revealing your home IP address. Only service interfaces that you explicitly declare "Public" are exposed.

-**Outbound Proxies**
An outbound proxy redirects _all_ outgoing Internet traffic from your server and installed services, masking its IP address. If you already have an inbound proxy, you can re-use it as an outbound proxy, or you can use a separate proxy just for outbound traffic. Currently, only StartOS only supports enabling _one_ outbound proxy at a time.

## Getting a Proxy

<!-- @TODO -->

## Adding a Proxy to StartOS

```admonish warning
Here you are providing information about a proxy that _already exists_. You are describing an existing proxy, not creating a new one.

For instructions on how to get a proxy, see [Getting a Proxy](#getting-a-proxy) above.
```

1.  Navigate to `System -> Proxies`

1.  Click "Add"

1.  Use the form to accurately describe your proxy, including providing the Wireguard config file. StartOS cannot validate this file to ensure it matches your description of its capabilities. Any mismatch will result in a failure. For example, if you selected "Inbound/Outbound" but the proxy only supports outbound traffic, or if you selected "Public" but the proxy is for private access only.
