# Using StartTunnel

## Watch The Video: Intro To StartTunnel

<div style="position: relative; width: 100%; max-width: 900px; margin: 2em auto; aspect-ratio: 16 / 9; background: #000; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/KZ2_jwayAgg"
    title="Creating Backups"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>

## Installation

Follow the official [StartTunnel installation instructions](https://github.com/Start9Labs/start-tunnel/blob/master/README.md#install) to install StartTunnel on a VPS.

The instructions below assume you chose to initialize the StartTunnel web interface during installation. If not, you can do everything using the start-tunnel CLI.

## Adding your StartOS Server

In this section, you will add your server to a specific subnet of your StartTunnel instance. This is similar to plugging your server into your router. The server is joining a private network.

1.  In StartTunnel, navigate to `Devices` and click "Add".

1.  Fill out the form:
    - Give your server a name (e.g. "Start9 Server").
    - Select a subnet for the server to join (the default is fine).
    - Accept/choose what IP address your server will have on the a subnet. (the default is fine).
    - Click "Save".

1.  Download the resulting `start-tunnel.conf`, (or copy to your clipboard).

1.  In StartOS, navigate to `System -> Gateways` and click "Add".

1.  Give the gateway a name (e.g. "StartTunnel").

1.  Upload `start-tunnel.conf` (or paste from your clipboard).

1.  Click "Save".

1.  StartOS will now see your StartTunnel VPS as a private gateway, no different from your home router. Each service interface will automatically acquire new LAN and public IP addresses that correspond your StartTunnel gateway.

## Adding a Client Device for Private Access

These instructions must be completed for each client device (cell phone, laptop, etc) you want to have private, remote access to your server.

1. Install the WireGuard app on your client device.

1. In StartTunnel, navigate to `Devices` and click "Add".

1. Give the device a name (e.g. "Phone"), select the same subnet as your server, accept/choose a LAN IP address, and click "Save".

1. The resulting `start-tunnel.conf` must be imported into the WireGuard app on your client device. If it is a phone or tablet, you can scan the QR code. If it is a laptop, download/upload the file, or copy/paste the contents. Refer to your device's instructions for importing and enabling a wireguard VPN.

1. Service interfaces are now accessible to the client device at their LAN addresses corresponding to the StartTunnel gateway.

## Forwarding Ports for Clearnet Hosting

In order to expose a service interface to the public Internet, it is necessary to create a port forwarding rule in StartTunnel.

1. In StartOS, navigate to the service interface you want to expose.

1. Under `Gateways`, make sure your StartTunnel gateway is enabled.

1. If you intend to use a domain, add it under `Public Domains`.

1. Under `Addresses`, find the `Public` address you want to expose. A domain is usually best, but it is also possible to expose `IP:port`.

1. Click the blue "ⓘ" icon.

1. Find the line that says "Requires port forwarding in gateway..." and take note of the `externalPort -> internalPort` (e.g. `443 -> 5443`).

1. In StartTunnel, navigate to `Port Forwards` and click "Add".

1. Select the external IP address you want to use (there is usually only one), then provide the port forward information noted above.

1. If you are forwarding port `443 -> 5443`, you will see a checkbox to also forward port `80 -> 5443`. This is highly recommended, as it will automatically handle redirecting HTTP -> HTTPS. For example, if someone visits `http://your-domain.com` or just `your-domain.com`, they will be automatically redirected to `https://your-domain.com`.

1. Click "Save".
