# Domains

#### Contents

- [Use Case](#use-case)
- [Adding an ACME Provider](#adding-an-acme-provider)
- [Allocating a Domain](#allocating-a-domain)
- [Updating DNS Records](#updating-dns-records)

## Use Case

Adding a domain to StartOS means you can use it and its subdomains to host service interfaces on the public Internet.

## Adding an ACME Provider

StartOS uses the <a href="https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment" target="_blank">Automatic Certificate Management Environment (ACME) protocol</a> to automatically obtain SSL/TLS certificates for domains, allowing visitors to access them over secure, HTTPS connections trusted by their apps and browsers.

```admonish note
It is not _necessary_ to add an ACME provider. You can sign certificates using your server's Root CA. If you do this, however, only devices that have downloaded and trusted your server's Root CA will be able to access the domain without issue.
```

1. Navigate to `System > Domains > ACME Providers` and click "Add".

1. Select a provider to add. StartOS has built-in support for Let's Encrypt and Let's Encrypt Staging. Advanced users may add a custom ACME provider. Let's Encrypt Staging is recommended for testing purposes and for testing purposes only.

1. Provide a contact email address. This is required for the ACME provider to generate a certificate.

## Adding a Domain

1. Navigate to `System > Domains > Domains` and click "Add".

1. Enter a domain/subdomain. For example, if you control `domain.com`, you could enter `domain.com` or `subdomain.domain.com`. In either case, all possible subdomains of the added domain will be available for assignment to service interfaces.

1. Select a default ACME provider for this domain (usually Let's Encrypt). It can be overridden later on a case-by-case basis.

   Select `None (use system Root CA)` to generate certificates using your server's Root CA. NOTE: if you use your Root CA, only devices that have downloaded and trusted your server's Root CA will be able to access the domain without encountering a scary message.

1. Select a public gateway for this domain. For help selecting a gateway, see [Gateways](./gateways.md)

## Updating DNS Records

1. Access the DNS settings for the domain you want to use, usually in the registrar where you originally leased the domain.

1. In StartOS, find your domain and click "View DNS" in its menu.

1. Create the DNS records displayed.

1. Click "Test DNS" to ensure the records were successfully detected.

   ```admonish warning
   It might take a few minutes for your domain changes to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
   ```
