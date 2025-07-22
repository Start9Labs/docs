# Connecting Remotely - VLAN (Cloud VPN)

## Use Case

If you have access to a router and it includes a VPN server, that is usually the preferred [connection method](./router-vpn.md). A cloud-based VPN running on your own VPS may be preferable if:

1. You do not have access to a router (e.g. in a school or business setting).
1. Your router does not include a VPN server.
1. You do not want to set up dynamic DNS or update clients if your home IP address changes.

The result of this setup will be a brand new _local_ IP address (e.g. `192.168.x.x`) for your server that will display in the "local" section of every service interface. Only authorized devices have access to your server and installed services.

## Instructions

1.  Rent a low-powered, inexpensive VPS that provides a static IP address. Provision it with the latest stable version of Debian. Copy down its IPv4 address and root password.

1.  Access the DNS settings for your domain (usually your domain registrar where you originally leased the domain) and create an "A" record. The "Host" should be `*.mydomain.com` and the "Value" should be your VPS's IPv4 address.

    ```admonish warning

    It might take a few minutes for your "A" record to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
    ```

1.  SSH into your StartOS server. [Instructions](../../user-manual/ssh.html)

1.  Run the following command, replacing `###.###.###.###` with the IPv4 address of your VPS:

        wireguard-vps-proxy-setup -i ###.###.###.###

    - When prompted, provide your VPS's root password.
    - When prompted, decide if you want the script to add your StartOS SSH public key to the VPS. This is recommended and can make debugging easier if a problem arises.
    - When prompted, choose a port for WireGuard to listen on and a name for the client. If you don't need to customize this, hit enter to accept the defaults.

    The script will automatically configure your VPS. Unless there is an issue, it will conclude with WireGuard server setup complete!

1.  Verify everything is working:

        nmcli c show

    You should see an entry with your StartOS server name (first 15 characters) of type `wireguard`.

1.  In your service interfaces, you should now see a brand new `local` IP address (e.g. `192.168.x.x`) with a network interface named `wireguard`.
