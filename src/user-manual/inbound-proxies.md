# Inbound Proxies

#### Contents

- [Use Case](#use-case)
- [Getting an Inbound Proxy](#getting-an-inbound-proxy)
- [Adding an Inbound Proxy to StartOS](#adding-an-inbound-proxy-to-startos)

## Use Case

An inbound proxy enables clients from outside the LAN to reach your server UI and/or installed services. There are two types of inbound proxies: _private_ and _public_.

- **Private**: authorized clients can access your server UI and every service interface of your installed services.

- **Public**: _specific_ service interfaces are exposed to the public Internet without revealing your home IP address. Only service interfaces that you explicitly declare "Public" are exposed.

## Getting an Inbound Proxy

<!-- @TODO -->

## Adding an Inbound Proxy to StartOS

```admonish warning
Here you are providing information about a proxy that _already exists_. You are describing an existing proxy, not creating a new one.

For instructions on how to get an inbound proxy, see [Getting an Inbound Proxy](#getting-an-inbound-proxy) above.
```

1.  Navigate to `System -> Inbound Proxies`

1.  Click "Add"

1.  Use the form to accurately describe your proxy, including providing the Wireguard config file. StartOS cannot validate this file to ensure it matches your description of its private/public nature. Any mismatch will result in a failure. For example, if you selected "Public" but the proxy is for private access only.
