# Private Domains

#### Contents

- [Use Case](#use-case)
- [Adding a Private Domain](#adding-a-private-domain)
- [Setting up DNS](#setting-up-dns)

## Use Case

A private domain is similar to your server's [local domain](./connecting-locally.md#local-domain), except it also works for VPN connectivity, and it can be _anything_. It can be a real domain you control, a made up domain, or even a domain controlled by someone else.

Similar to your local domain, private domains can only be accessed when connected to the same LAN as your server, either physically or via VPN, and they require trusting your server's Root CA.

## Adding a Private Domain

1. If you haven't already, assign a static IP address to your server on the LAN. Refer to your router's user manual for detailed instructions.

1. On the service interface page in the "Private Domains" section, click "Add".

1. Enter a fully qualified domain name. It can be _anything_. For example: `domain.com`, `private.domain.internal`, `nextcloud.private`, `nextcloud.fake-tld`, or `facebook.com`.

1. Click "Save".

1. A new `https://<your-private-domain>` address will appear in the "Addresses" table.

## Setting up DNS

### Real Domains you Control

If your private domain is a real domain that you control, you have two options for setting up DNS:

- **Option 1**: Access your domain's DNS settings, usually in the registrar where you originally leased the domain, and create a record that resolves the domain to your server's _LAN IP address_. Remember, this domain is only accessible to devices connected to your LAN, either physically or via VPN.

- **Option 2**: Follow instructions for [Fake Domains or Domains you do not Control](#fake-domains-or-domains-you-do-not-control)

### Fake Domains or Domains you do not Control

When you add a private domain to StartOS, a corresponding DNS record is _automatically_ added to StartOS's internal DNS server. To complete the picture, configure your private gateway to use StartOS for DNS.

- **Router**: Set StartOS as your router's primary DNS server. All routers support this feature. Refer to your router's user manual for detailed instructions.

  ```admonish warning
  It is possible that StartOS is already using your router for DNS. Therefore you cannot instruct your router to use StartOS for DNS. This is circular. If StartOS detects a potential circular DNS situation, it will warn you. To resolve this issue, override [the DNS servers used by StartOS](./dns#setting-static-dns-servers) to no longer use your router.
  ```

- **StartTunnel**: SSH into your StartTunnel VPS and run the following command

      start-tunnel dns defer
