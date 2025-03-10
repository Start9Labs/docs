# Connecting Remotely - Clearnet

This connection method allows for exposing specific resources to the Internet as standard (`.com`, `.net`, etc) websites and APIs. Any resource not explicitly made public will remain private. For example, you can expose your Bitcoin peer-to-peer interface to the Internet, while leaving your Bitcoin RPC interface private.

#### Contents

- [Add ACME](#1-add-acme)
- [Add Domains](#2-add-domains)
- [Expose to Internet](#3-expose-to-the-internet)

## 1. Add ACME

<a href="https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment" target="_blank">Automatic Certificate Management Environment (ACME)</a> protocol is used for obtaining SSL/TLS certificates for your exposed services, allowing visitors to access your website or API over secure HTTPS.

1. In StartOS go to `System > ACME > Add Provider`.

1. Select a provider to add. StartOS has built-in support for Let's Encrypt and Let's Encrypt Staging. Advanced users may add a custom ACME provider.

1. Provide a contact email address. This is required for the ACME provider to generate a certificate.

## 2. Add Domains

1. For a particular service, select an interface you want to make public.

1. In the "Clearnet" section header, click "Make Public".

1. Click "Add Domain".

1. Select an ACME provider to use and enter your subdomain/domain. For example, if you own `mydomain.com`, you can enter `mydomain.com` or `example.mydomain.com`. For ACME provider, you can also select `None (use system Root CA)` to generate certificates using your own Root CA, but anyone who accesses that website or API will need to first trust your Root CA on their phone/laptop.

```admonish warning title="Exposing StartOS UI"

You can also expose your StartOS UI to the Internet, but this is not recommended, at least until 2FA support is added to StartOS. To do this, go to `System > StartOS UI` and complete steps 2-4 (above).
```

## 3. Expose to the Internet

There are two ways of exposing your public interfaces to the Internet.

- [Router Port Forwarding](#option-1-router-port-forwarding). Free, but exposes your server's IP address.

- [VPS Reverse Tunneling](#option-2-vps-reverse-tunneling). Hides your server's IP address, but requires renting a VPS.

### Option 1: Router Port Forwarding

1. In your router settings, assign a static IP address for your server on the LAN. Refer to your router's user manual for detailed instructions.

1. (optional but recommended) Enable dynamic DNS for your home IP address. Your Internet Service Provider (ISP) may unexpectedly change the IP address of your home. If this happens, it will break your clearnet connections until you redo the final step below. To prevent this, you can enable <a href="https://en.wikipedia.org/wiki/Dynamic_DNS" target="_blank">dynamic DNS</a>. Many routers offer this as a free or paid service. If not, there are third party services available.

1. Access the DNS settings for your domain (usually your domain registrar where you originally leased the domain) and create an "A" record. The "Host" should be `*.mydomain.com` and the "Value" should be your dynamic DNS address (recommended) or your home IP address.

   ```admonish warning

   It might take a few minutes for your "A" record to take effect. You can test it using <a href="https://dnschecker.org" target="_blank">https://dnschecker.org</a>.
   ```

1. Determine which ports need to be forwarded. For any public interface with a domain, identify the port at the end of the URL. If there is no port, the port is `5443`. For example, if the URL is `https://mydomain.com`, the port is `5443`. If the URL is `https://mydomain.com:8332` the port is `8332`.

1. For each port (above), create a port forwarding rule in your router, such that the port to be opened (the "external" port) matches the port you want to expose on your server (the "internal" port), except for port `5443`. To expose port `5443` on your server, you must open port `443` on your router. The rule itself must forward traffic to your server's IP address. All routers support port forwarding. Refer to your router's user manual for detailed instructions.

   ```admonish example title="Examples"

   In the examples below, your server's IP address on the LAN is `192.168.1.10`. You should replace this IP address with your server's actual IP address.

   #### Example 1

   You want to expose port `5443` on your server. In your router, open port `443` and map it to `192.168.1.10:5443`

   #### Example 2

   You want to expose port `8332` on your server. In your router, open port `8332` and map it to `192.168.1.10:8332`
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
    - When prompted, decide if you want the script to add your SSH public key to the VPS. This is recommended and can make debugging easier if a problem arises.
    - When prompted, choose a port for WireGuard to listen on and a name for the client. If you don't need to customize this, hit enter to accept the defaults.

    The script will automatically configure your VPS. Unless there is an issue, it will conclude with WireGuard server setup complete!

1.  Verify everything is working:

        nmcli c show

    You should see an entry with your StartOS server name (first 15 characters) of type `wireguard`.
