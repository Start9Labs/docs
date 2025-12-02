# Using StartTunnel

## Installation

Follow the [official StartTunnel installation instructions](https://github.com/Start9Labs/start-os/blob/next/major/START-TUNNEL.md) to install StartTunnel on a VPS.

The instructions below assume you chose to initialize the StartTunnel web interface. If not, you can do everything using the start-tunnel CLI.

## Adding your StartOS Server

1.  In StartTunnel, navigate to `Devices` and click "Add".

1.  Fill out the form:

    - Give your server a name (e.g. "Start9 Server").
    - Select a subnet (the default subnet, `10.59.0.1/24`, is fine).
    - Accept/choose what IP address your server will have on the a LAN.
    - Click "Save".

1.  Download the resulting `start-tunnel.conf`, (or copy to your clipboard).

1.  In StartOS, navigate to `System -> Gateways` and click "Add".

1.  Give the gateway a name (e.g. "StartTunnel 1").

1.  Upload `start-tunnel.conf` (or paste from your clipboard).

1.  Click "Save".

1.  StartOS will now see your StartTunnel VPS as a private gateway, no different from your home router. Each service interface will automatically acquire new LAN and public IP addresses that correspond your StartTunnel gateway.

## Adding a Client Device for Private Access

These instructions must be completed for each client device (cell phone, laptop, etc) you want to have private, remote access to your server.

1. Install the Wireguard app on your client device.

1. In StartTunnel, navigate to `Devices` and click "Add".

1. Give the device a name (e.g. "Phone"), select a subnet, choose a LAN IP address, and click "Save".

1. The resulting `start-tunnel.conf` must be imported into the Wireguard app on your client device. If it is a phone or tablet, you can scan the QR code. If it is a laptop, download/upload the file, or copy/paste the contents. Refer to your device's instructions for importing and enabling a wireguard VPN.

1. Service interfaces are now accessible to the client device at their LAN addresses corresponding to the StartTunnel gateway.

## Forwarding Ports for Clearnet Hosting

In order to expose a service interface to the public Internet, it is necessary to create a port forwarding rule in StartTunnel.

1. In StartOS, navigate to the service interface you want to expose.

1. Under `Gateways`, make sure your StartTunnel gateway is enabled.

1. If you intend to use a domain, add it under `Public Domains`.

1. Under `Addresses`, find the `Public` address you want to expose. A domain is usually best, but it is also possible to expose `IP:port`.

1. Click the blue "ⓘ" icon.

1. Find the line that says "Requires port forwarding in gateway..." and take note of the `:externalPort -> IP:internalPort`.

1. In StartTunnel, navigate to `Port Forwards` and click "Add".

1. Select the external IP address you want to use (there is usually only one), then provide the port forward information noted above and click "Save".
