# WiFi

```admonish danger title="Not Recommended"
Servers sold by Start9 do _not_ include WiFi cards, and Start9 recommends _against_ using WiFi unless absolutely necessary.

Ethernet connections are faster and more reliable.
```

```admonish danger title="Deprecated"
WiFi support will be removed in StartOS v0.4.1 including for servers that may already have a WiFi interface. If you do not have access to Ethernet, you can use a WiFi extender to connect to the local network, then connect your server to the extender via Ethernet. Please contact Start9 support with any questions or concerns. 
```

## Use Case

## WiFi adapter built-in

### Connecting to a WiFi network in StartOS

You should have already set up your server in a location with ethernet and be able to log in from a client machine.

1. Under 'System -> WiFi' select your country (this is for limiting to local civilian radio frequencies)
1. Choose your WiFi network
1. Enter your WiFi password and click `Save and Connect`

That's it!

```admonish tip
You should use either wired ethernet or WiFi to connect your server, it isn't recommended that you use both at the same time.
```

```admonish warning
WiFi is consistently less easy to work with than wired ethernet and is not a recommended solution. Common issues include:

- WiFi networks set up on routers being seperate networks (i.e. "guest" networks or a different subnet)
- Dropped connections confused with the server being down
- Issues with routers when wired ethernet and WiFi are both connected

These can make it difficult to troubleshoot when contacting support.
```
