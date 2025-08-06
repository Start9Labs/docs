# Domains

#### Contents

- [Use Case](#use-case)
- [Adding a Domain](#adding-a-domain)
- [Updating DNS Records](#updating-dns-records)

## Use Case

Adding a domain to StartOS means you can use it and its subdomains to host service interfaces on the public Internet.

## Adding a Domain

1. Navigate to `System > Domains` and click "Add".

1. Enter a domain/subdomain. For example, if you control `domain.com`, you could enter `domain.com` or `subdomain.domain.com`. In either case, all possible subdomains of the added domain will be available for assignment to service interfaces.

1. Select a gateway to use for this domain. For help selecting a gateway, see [Gateways](./gateways.md)

## Updating DNS Records

1. Access the DNS settings for the domain you want to use, usually in the registrar where you originally leased the domain.

1. In StartOS, find your domain and click "Manage DNS" in its menu.

1. Create the DNS records displayed.

1. Click "Test" to ensure the records were successfully detected.

   ```admonish warning
   It might take a few minutes for your domain changes to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
   ```
