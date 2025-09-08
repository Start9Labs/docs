# Installing StartTunnel on a VPS

## Use Case

You can think of StartTunnel as a "virtual router in the cloud", resulting in a new gateway your server can use to expose service interfaces to the public Internet.

## Instructions

1. Rent a VPS from a provider of your choosing. Make sure it has at least 500MB of Memory (RAM). For transfer (bandwidth), a good rule of thumb is to match your home Internet's maximum _upload_ speed, since that will generally be the bottleneck anyway. Any amount of storage is fine. The cheapest, lowest-powered option is usually enough.

1. Provision the VPS with the latest version of Debian.

1. Access the VPS via SSH.

1. Install start-tunnel: `curl -fsSL https://start9.com/... | bash`.

1. Upon completion, your Wireguard config will display in the terminal. Copy the contents to your clipboard and follow instructions to [add your new gateway to StartOS](../user-manual/gateways.md#adding-a-gateway)
