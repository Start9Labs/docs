# Connecting Locally

To connect locally, you must be connected to the same LAN as your server. Local connections are the fastest possible, as they do not reach out to the Internet.

#### Contents

- [Using .local (preferred)](#using-local-preferred)
- [Using IP Address](#using-local-preferred)

## Using .local (preferred)

1. Ensure you have [trusted your Root CA](./trust-ca.md).

1. Visit your server's unique `.local` address from any browser.

## Using IP Address

```admonish danger title="Important - Set a Static IP"

Your router will automatically change your server's IP address on the LAN from time to time. To prevent this, assign a static IP address for your server. All routers support this functionality. Refer to your router's user manual for instructions.
```

1. Ensure you have [trusted your Root CA](./trust-ca.md).

1. Visit your server's unique IP address from any browser. You can find your server's IP address in StartOS under `System > About`, or in your router settings.
