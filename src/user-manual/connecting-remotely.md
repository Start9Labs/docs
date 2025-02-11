# Connecting Remotely

#### Contents

- [Connecting over Router VPN](#connecting-over-router-vpn)
- [Connecting over Tor](#connecting-over-tor)
- [Connecting using WireGuard Script and a VPS](#connecting-using-wireguard-script-and-a-vps)

## Connecting over Router VPN

**Prerequisite**

- [Trusting Your Root CA](./trust-ca.md)

Most modern routers have VPN functionality built-in. Refer to your router's user manual for instructions to complete the following steps.

1. Assign a static IP address to your server.

2. Enable your router's VPN.

   ```admonish tip title="Enable Dynamic DNS (Optional)"

   Rarely, your ISP may unexpectedly change your home IP address. If this happens, it will break your VPN connection until you re-complete the steps below. To prevent this, you can enable Dynamic DNS in your router, which is usually a paid service. To learn more about Dynamic DNS, click [here]().
   ```

3. Download your VPN config file from your router.

4. Install OpenVPN on your client device(s) and establish a VPN connection to your LAN using the config file from above.

## Connecting over Tor

```admonish warning

It is normal for Tor connections to be slow or unreliable at times.
```

### Using a Tor Browser

You can connect to your server from anywhere in the world, privately and anonymously, by visiting its unique `http://....onion` URL from any Tor-enabled browser.

**Recommended Browsers**

- **Mac, Linux, Windows, Android/Graphene**: <a href="https://torproject.org/download" target="_blank">Tor Browser</a>
- **iOS**: <a href="https://onionbrowser.com" target="_blank">Onion Browser</a>

### Running Tor in the _background_ on your Phone/Laptop

By running Tor on your phone or laptop, certain apps will be able to connect to your server over Tor, even if the apps themselves do not natively support Tor. Select the guide specific to your phone/laptop:

- [Mac](../device-guides/mac/tor.md)
- [Linux](../device-guides/linux/tor.md)
- [Windows](../device-guides/windows/tor.md)
- [Android/Graphene](../device-guides/android/tor.md)
- [iOS](../device-guides/ios/tor.md)

## Connecting using WireGuard Script and a VPS
Connecting over your router VPN will expose your home LAN IP address.  If you don't want to do that you can rent a small Virtual Private Server with a static IP address.  Then create a wireguard VPN connection between the VPS and your StartOS server.  This will expose the VPS IP address instead of your home LAN IP address.  It also allows you to access your StartOS server by browsing to the VPS IP address.  To make that easy, StartOS includes a wireguard vps setup script that can help automate this... 

**Prerequisites**
- You will need the IP address (IPV4) of your VPS server and the root password
- SSH access to your StartOS server - [Using SSH](https://staging.docs.start9.com/user-manual/ssh.html)

### First SSH to your StartOS server.  
Once connected, run the command:
wg-vps-setup -i IPV4 address of your VPS
It will prompt for the Linux server password (not your StartOS password)
After entering the password it will print a welcome message and then prompt for port and name.  If you aren't sure of what to do, accept the defaults – just hit enter and continue.
The script will execute - installing packages, configuring wireguard and unless there is an issue it will conclude with WireGuard server setup complete!

To verify it is correct use the following command:
nmcli c show
You will see an entry with your StartOS server name (first 15 characters) of type wireguard.

### Second Configure ACME (Automantic Certificate Management Environment).  
This will allow you to generate SSL (https) certificates for Clearnet hosting.

In StartOS go to System -> Manage -> ACME.  
If you don't have your own provider, select Let's Encrypt and provide an email address.  
Once added you will need to assign it an email address.  The email address may be stored in the certificate.  It may be used by LetsEncrypt to email you notifications.  You can enter any email address you like here.
When done it should look like this:

### Third Configure StartOS and Services to be accessible via public IP address

#### For the overall Server UI
Go to System -> Insights -> About
Under Web Addresses you will see the ways you can access your StartOS server.  Click the Make Public button and it will add a new entry showing your VPS IP address
You can test this by clicking the open in a new window button on the right hand side of that row.  You can also copy the link or display a QR code for it.  

#### For each service
Select the service you want to reach via clearnet.
Click on Interfaces and again click the Make Public button to allow access via your wireguard IP address and port number 
You can test this by clicking the open in a new window button on the right hand side of that row.  You can also copy the link or display a QR code for it.  

### Fourth Point your domain to your VPS and let StartOS map subdomains to services

#### Update your domain to point to your VPS
Add a new A record with *.yourdomain.com and the IP address of your VPS running wireguard.  If your VPS IP address is 172.67.191.233 and your domain name is johnsmith.com the A record would have name of "*.johnsmith.com", Type of "A", record of "172.67.191.233" and TTL of 14400 (usually the default)

After adding the A record it may take some time to propogate.  You can check propagation using a website like dnschecker.org

You should test the DNS setup by trying to ping to any subdomain and confirm it reaches the VPS IP address.  For example, pinging "test.johnsmith.com" should return 172.67.191.233.  At this point if you use your web browser to try browsing to a subdomain it will direct the request to your VPS which will route via Wireguard to your StartOS server.  You next have to configure StartOS to respond to these subdomain based requests.

#### Configure StartOS services to respond to domain based web requests
Select the service you want to reach via domain name.
Click on Interfaces and then click the Add Domain button to allow access via domain name.
Select Standard type (not TOR), enter the domain name you want this service to respond to and the ACME Provider you set up earlier.
Save that and you will now see that in addition to the IP based access (and local access) you can now access this service by the  domain name you specified (no port required).  



