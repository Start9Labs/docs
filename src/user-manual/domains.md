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

1. Navigate to `System > Domains > ACME Providers -> Add`.

1. Select a provider to add. StartOS has built-in support for Let's Encrypt and Let's Encrypt Staging. Advanced users may add a custom ACME provider. Let's Encrypt Staging is recommended for testing purposes and for testing purposes only.

1. Provide a contact email address. This is required for the ACME provider to generate a certificate.

## Allocating a Domain

1. Navigate to `System > Domains > Domains -> Allocate`.

1. Select a default ACME provider. This can be overridden later on a case-by-case basis.

1. Select a gateway. For help selecting a gateway, see [Gateways](./gateways.md)

1. Enter the domain/subdomain you want to allocate to the selected gateway. For example, if you control `domain.com`, you could allocate `domain.com` or `subdomain.domain.com`. In either case, every subdomain of the domain you provide will be available for assignment to service interfaces.

## Updating DNS Records

1. Access the DNS settings for the domain you want to use, usually in the registrar where you originally leased the domain.

1. Create the appropriate records as instructed by StartOS.

1. Click "Test" to ensure the records are successfully detected.

   ```admonish warning
   It might take a few minutes for your domain changes to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
   ```
