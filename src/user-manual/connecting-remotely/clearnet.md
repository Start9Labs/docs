# Connecting Remotely - Clearnet

## Use Case

This connection method permits hosting service interfaces on the public Internet as standard (`.com`, `.net`, etc) domains.

By default, service interfaces are not publicly addressable. StartOS only permits access via private hosts, such as `localhost`, local IP addresses (e.g. `192.186.x.x`), local (`.local`) domains, and Tor (`.onion`) domains.

```admonish warning title="Exposing StartOS UI"
You can also expose your StartOS UI to the Internet, but this is not recommended, at least until 2FA support is added to StartOS. To do this, go to `System > StartOS UI` and complete steps 2-4 (above).
```

#### Contents

- [Opening your Server to the Internet](#opening-your-server-to-the-internet)
- [Adding ACME](#adding-acme)
- [Assigning a Domain](#assigning-a-domain)
- [Publicizing an Interface](#publicizing-an-interface)

## Opening your Server to the Internet

There are two ways of opening your server to the Internet. Note, this just is a pre-requisite step. No service interfaces will be exposed to the Internet until you publicize them later on.

- [Router Port Forwarding](#option-1-router-port-forwarding). Free, but exposes your server's IP address to visitors.

- [VPS Reverse Tunneling](#option-2-vps-reverse-tunneling). Hides your server's IP address from visitors, but requires renting a VPS.

### Option 1: Router Port Forwarding

1. If you have not already, assign a static IP address for your server on the LAN. This is easy to do and supported by all routers. Refer to your router's user manual for detailed instructions.

1. (optional but recommended) Enable dynamic DNS for your home IP address. Your Internet Service Provider (ISP) may unexpectedly change the IP address of your home. If this happens, it will break your clearnet connections until you redo the final step below. To prevent this, you can enable <a href="https://en.wikipedia.org/wiki/Dynamic_DNS" target="_blank">dynamic DNS</a>. Many routers offer this as a free or paid service. If not, there are third party services available.

1. Access the DNS settings for your domain (usually your domain registrar where you originally leased the domain) and create an "A" record. The "Host" should be `*.mydomain.com` and the "Value" should be your dynamic DNS address (recommended) or your home IP address.

   ```admonish warning
   It might take a few minutes for your "A" record to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
   ```

1. Open and forward ports. Most websites and APIs on the Internet are hosted on port `443`. Port `443` is so common, in fact, that browsers _infer_ its presence. The _absence_ of a port _means_ the port is `443`. For maximum compatibility, services on StartOS also use port `443` whenever possible, except it is expressed as `5443` for port forwarding purposes _only_. Therefore, it is highly likely you will want to open port `443` in your router and forward it to port `5443` on your server.

   Certain service interfaces, such as `Bitcoin RPC` and `Bitcoin P2P`, _do not_ use port `443`. In such cases, you will identify the correct port by viewing the details of the service interface, open that port in your router, and forward it to the same port on your server.

   ```admonish example title="Examples"

   In the examples below, replace `###.###.###.###` with your server's IP address from step 1 (above).

   #### Example 1

   You want to expose port `443` on your server. In your router, open port `443` and map it to `###.###.###.###:5443`

   #### Example 2

   You want to expose port `8332` on your server. In your router, open port `8332` and map it to `###.###.###.###:8332`
   ```

### Option 2: VPS Reverse Tunneling

Instead of forwarding ports on your router and exposing your server's IP address to the Internet, you can rent a small, Virtual Private Server (VPS) that proxies traffic in and out, thereby hiding your server's IP address.

1.  Rent a low-powered, inexpensive VPS that provides a static IP address. Provision it with the latest stable version of Debian. Copy down its IPv4 address and root password.

1.  Access the DNS settings for your domain (usually your domain registrar where you originally leased the domain) and create an "A" record. The "Host" should be `*.mydomain.com` and the "Value" should be your VPS's IPv4 address.

    ```admonish warning

    It might take a few minutes for your "A" record to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
    ```

1.  SSH into your StartOS server. [Instructions](../../user-manual/ssh.html)

1.  Run the following command, replacing `###.###.###.###` with the IPv4 address of your VPS:

        wg-vps-setup -i ###.###.###.###

    - When prompted, provide your VPS's root password.
    - When prompted, decide if you want the script to add your StartOS SSH public key to the VPS. This is recommended and can make debugging easier if a problem arises.
    - When prompted, choose a port for WireGuard to listen on and a name for the client. If you don't need to customize this, hit enter to accept the defaults.

    The script will automatically configure your VPS. Unless there is an issue, it will conclude with WireGuard server setup complete!

1.  Verify everything is working:

        nmcli c show

    You should see an entry with your StartOS server name (first 15 characters) of type `wireguard`.

## Adding ACME

<a href="https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment" target="_blank">Automatic Certificate Management Environment (ACME)</a> protocol is used for obtaining SSL/TLS certificates, allowing visitors to access your websites and APIs over secure HTTPS.

1. In StartOS go to `System > ACME > Add Provider`.

1. Select a provider to add. StartOS has built-in support for Let's Encrypt and Let's Encrypt Staging. Advanced users may add a custom ACME provider. Let's Encrypt Staging is for testing purposes only.

1. Provide a contact email address. This is required for the ACME provider to generate a certificate.

## Assigning a Domain

1. Select an interface to assign a domain.

1. In the "Clearnet" header, click "Add Domain".

1. Select the ACME provider and enter your subdomain/domain. For example, if you own `mydomain.com`, you can enter `mydomain.com` or `example.mydomain.com`. NOTE: the domain must be one you configured in [Opening your Server to the Internet](#opening-your-server-to-the-internet) (above).

   For ACME provider, you can also select `None (use system Root CA)` to generate certificates using your own Root CA. NOTE: anyone who accesses that website or API will need to first trust your Root CA on their phone/laptop.

## Publicizing an Interface

Publicizing an interface allows it to be accessed via the public hosts, such as public IP addresses, VPS reverse proxies, and clearnet (`.com`, `.net`, etc) domains, assuming they were successfully created (above).

1. Select an interface to make public.

1. In the "Clearnet" header, click "Make Public".
