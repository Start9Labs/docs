# Creating a StartTunnel Private Gateway

## Use Case

You can think of StartTunnel as a "virtual router in the cloud". You can use it for private, remote access, or to expose service interfaces to the public Internet without revealing your home IP address.

## Instructions

1.  Rent a VPS from a provider of your choosing. StartTunnel does not require significant resources, so the minimum processor (CPU), memory (RAM), and storage (disk) should be enough. For transfer (bandwidth), a good rule of thumb is to match your home Internet's maximum _upload_ speed. For most use cases, the cheapest option offered by the VPS provider is good enough.

1.  Provision the VPS with the latest version of Debian.

1.  Access the VPS via SSH.

1.  Install StartTunnel:

        @TODO

1.  Using the StartTunnel UI or CLI, add your server as a device.

1.  Download or copy the resulting `start-tunnel.conf`.

1.  In StartOS, navigate to `System -> Gateways` and click "Add".

1.  Give the gateway a name. For example, "StartTunnel 1".

1.  Upload or paste `start-tunnel.conf`.

1.  Click "Save".
