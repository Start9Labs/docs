# Creating a StartTunnel Private Gateway

## Understanding StartTunnel

You can think of StartTunnel as a "virtual router in the cloud". You can use it for private, remote access, or to expose service interfaces to the public Internet without revealing your home IP address.

There are three important concepts in StartTunnel:

- **Subnet**: a private network, similar to a local area network (LAN) created by your home router. by default, only authorized devices can join the network. Each subnet has a predefined, limited set of IP addresses that can be assigned to devices.

- **Device**: any phone, laptop, or server connected to a subnet. Each device receives one of the IP addresses available for that subnet.

- **Port Forward**:

## Installation

1.  Rent a VPS from a provider of your choosing. StartTunnel does not require significant resources, so the minimum processor (CPU), memory (RAM), and storage (disk) should be enough. For transfer (bandwidth), a good rule of thumb is to match your home Internet's maximum _upload_ speed. For most use cases, the cheapest option offered by the VPS provider will be good enough.

1.  Provision the VPS with the latest version of Debian.

1.  Access the VPS via SSH.

1.  Install StartTunnel:

        @TODO

## Initializing the web interface

By default, StartTunnel can be used via the start-tunnel CLI. If you choose to enable the web interface (recommended in most cases), StartTunnel can be accessed as a website in the browser, or programmatically via API.

1.  Use start-tunnel CLI to initialize the web interface. Replace <IP> with the public IP address of your VPS (e.g. 69.1.1.42). If your VPS has more than one public IP address, choose one. By default, the web interface will be hosted on port `8443`. If you want a different port, you can provide the `--port` flag, just be sure to choose a port that will not create future conflict with other ports.

                start-tunnel web init <IP>

1.  Select whether to auto generate a self-signed certificate or provide your own. In either case, the certificate should be signed for all intended hosts. For example, the IP address of your VPS and/or any domains.

1.  When prompted for a password, enter one, or leave it blank to automatically generate one.

1.  You will receive a success message that the webserver is running, as well as your SSL certificate and password.

## Adding your StartOS Server

1.  In StartTunnel, navigate to `Devices` and click "Add".

1.  Give the device a name (e.g. "StartOS Server"), select a subnet, choose a LAN IP address, and click "Save".

1.  Download the resulting `start-tunnel.conf`, or copy the contents to your clipboard.

1.  In StartOS, navigate to `System -> Gateways` and click "Add".

1.  Give the gateway a name. For example, "StartTunnel 1".

1.  Upload `start-tunnel.conf`, or paste the contents.

1.  Click "Save".

1.  StartOS will now see your StartTunnel VPS as a private gateway, no different from your home router. Each service interface will automatically acquire new LAN addresses that correspond your new StartTunnel gateway.

## Adding a Client Device for Private Access

These instructions must be completed for each client device (cell phone, laptop, etc) you want to have private, remote access to your server.

1. Install the Wireguard app on your client device.

1. In StartTunnel, navigate to `Devices` and click "Add".

1. Give the device a name (e.g. "Phone"), select a subnet, choose a LAN IP address, and click "save".

1. The resulting `start-tunnel.conf` must be imported into the Wireguard app on your client device. If it is a phone or tablet, you can scan the QR code. If it is a laptop, download/upload the file, or copy/paste the contents. Refer to your device's instructions for importing and enabling a wireguard VPN.

1. Service interfaces are now accessible to the client device at their LAN addresses corresponding to the StartTunnel gateway.

## Forwarding Ports for Clearnet Hosting

In order to expose a service interface to the public Internet, it is necessary to create a port forwarding rule in StartTunnel.

1. In StartOS, navigate to the service interface you want to expose.

1. Under `Gateways`, make sure your StartTunnel gateway is enabled.

1. If you intend to use a domain, add it under `Public Domains`.

1. Under `Addresses`, find the `Public` address you want to expose. A domain is usually best, but it is also possible to expose `IP:port`.

1. Click the "ⓘ" icon.

1. Find the line that says "Requires port forwarding in gateway..." and take note of the `:externalPort -> IP:internalPort`.

1. In StartTunnel, navigate to `Port Forwards` and click "Add".

1. Select the external IP address you want to use (there is usually only one), then provide the port forward information noted above and click "Save".
