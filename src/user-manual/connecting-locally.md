# Connecting Locally

## Use Case

Local connections are the fastest possible, as they do not reach out to the Internet. You must be connected to the same Local Area Network (LAN) as your server.

## Watch the Video: 

<div style="position: relative; width: 100%; max-width: 900px; margin: 2em auto; aspect-ratio: 16 / 9; background: #000; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/lAMI43MC7fQ"
    title="Creating Backups"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>

## Local domain

During initial setup, your server receives a random local (`[adjective-noun].local`) domain. This domain uses [Multicast DNS (mDNS)](https://en.wikipedia.org/wiki/Multicast_DNS) to serve as an alias for your server's LAN IP address.

> [!TIP]
> The local domain is useful because, by default, your router will sometimes change your server's IP address on the LAN. If your server's LAN IP address changes, the local domain will continue to work, even if you move or get a new router!

## IP Address

Your router automatically assigns your server an IP address on the LAN. The address can be found (1) in your StartOS dashboard at `System -> StartOS UI`, (2) in your router dashboard, or (3) by `pinging` your server Local domain from the command line of a computer on the same network.

By default, your router will sometimes change your server's IP address on the LAN. To avoid this, we _highly_ recommend assigning a static IP address. This is _necessary_ if you intend to access your server via VPN or clearnet. It also makes the local domain unnecessary. All routers support setting a static IP address for a device on the LAN. Refer to your router's user manual for detailed instructions.

## Instructions

1. Ensure you are connected to the same LAN as your server.
1. If you haven't already, [Trust your Server's Root CA](./trust-ca.md) on the connecting device.
1. Visit your server's local domain or IP address from any browser.
