# Connecting Remotely - Tor

```admonish warning
It is normal for Tor connections to be slow or unreliable at times.
```

#### Contents

1. [Use Cases](#use-cases)
1. [Creating and Removing Addresses](#creating-and-removing-addresses)
1. [Connecting over Tor](#connecting-over-tor)

## Use Cases

StartOS supports adding and removing Tor (`.onion`) addresses from any service interface. Tor addresses can be used for three purposes:

1. Unless you share/leak a Tor address, it is totally private _and_ anonymous. Nobody knows it exists, and nobody knows it belongs to you. It is your secure, secret tunnel to the underlying website/API.

1. If you share/leak a Tor address _without_ associating it to your identity (not easy to do), it is anonymous but not private. People know it exists, but nobody knows it belongs to you. By this method, you can anonymously host a censorship-resistant website/API on the private web.

1. If you share/leak a Tor address and _also_ associate it with your identity, it is neither private nor anonymous. People know it exists, and they know it belongs to you. This is useful for hosting an identified yet still censorship-resistant website/API on the private web, or for sharing access to the websites/API with select friends and family.

## Creating and Removing Addresses

By default, newly installed services receive unique and randomly-generated Tor addresses for each interface. To add or remove a Tor address, simply navigate to the interface and look under the "Tor" section. If you delete all your Tor addresses, that service interface will no longer be accessible over Tor.

```admonish tip title="Vanity Addresses"
When adding a Tor address to a service interface, can upload a private key to create a vanity address.
<!-- @TODO recommend vanity address generator and provide instructions -->
```

## Connecting over Tor

### Using a Tor Browser

You can connect to your server and installed services from anywhere in the world, privately and anonymously, by visiting its unique `http://....onion` URL from any Tor-enabled browser.

```admonish info title="Recommended Browsers"
- Mac, Linux, Windows, Android/Graphene: <a href="https://torproject.org/download" target="_blank">Tor Browser</a>
- iOS: <a href="https://onionbrowser.com" target="_blank">Onion Browser</a>
```

### Running Tor in the _Background_ on your Phone/Laptop

By running Tor in the background on your phone or laptop, certain apps can connect over Tor, even if the apps themselves do not natively support connecting over Tor. Select the guide specific to your phone/laptop:

- [Mac](../device-guides/mac/tor.md)
- [Linux](../device-guides/linux/tor.md)
- [Windows](../device-guides/windows/tor.md)
- [Android/Graphene](../device-guides/android/tor.md)
- [iOS](../device-guides/ios/tor.md)
