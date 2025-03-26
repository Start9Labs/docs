# Connecting Locally

## Use Case

Local connections are the fastest possible, as they do not reach out to the Internet. To connect locally, you must be connected to the same LAN as your server.

## Instructions

1. Ensure you have already [Trusted your server's Root CA](./trust-ca.md) on this device.
1. Visit your server's unique `.local` _or_ `IP` address from any browser.
   - Your `.local` address was provided during initial setup.
   - Your `IP` address can be found in your router dashboard.
   - Both addresses are available in your StartOS dashboard under `System > StartOS UI`.

```admonish tip title="Assign a Static IP"
Your router will periodically change your server's IP address on the LAN. To prevent this, assign a static IP address for your server on the LAN. This is easy to do and supported by all routers. Refer to your router's user manual for detailed instructions.
```
