# Enabling Tor (Firefox)

#### Contents

- [All Platforms](#all-platforms)
- [Linux](#linux)
- [Mac](#mac)
- [Windows](#windows)
- [Android/Graphene](#androidgraphene)

## All Platforms

1. Ensure you have already followed instruction for running Tor on your platform.
   - [Mac](../../device-guides/mac/tor.md)
   - [Linux](../../device-guides/linux/tor.md)
   - [Windows](../../device-guides/windows/tor.md)
   - [Android/Graphene](../../device-guides/android/tor.md)

1. Open Firefox and enter `about:config` in the URL bar. Accept any warnings that appear.

1. Search for `dom.securecontext.allowlist_onions` and set the value to "true".

## Mac

1. Ensure you have completed the steps under [All Platforms](#all-platforms).

1. In the main hamburger menu, click "Settings".

1. Using the search bar, enter `proxy`, then select `Settings...`.

1. Select both boxes: `Use System Proxy Settings` _and_ `Proxy DNS when using SOCKS v5`.

1. Click "OK".

1. Restart Firefox.

1. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

## Linux

> [!WARNING]
> If you cannot connect after following this guide, your Firefox may be installed in a jailed environment, such as an AppImage, Flatpak, or SNAP. Ubuntu uses a SNAP for Firefox, so you may experience issues on Ubuntu-based systems. Please install Firefox via an alternate method that does not isolate Firefox from the wider filesystem.

1.  Ensure you have completed the steps under [All Platforms](#all-platforms).

1.  You need a `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. You can get Start9's standard file from a terminal, by using the following command:

        wget -P ~/ https://start9.com/assets/proxy.pac

1.  Determine the full path of `proxy.pac`, which we will use later, by executing the following command in the terminal, and copying its output to your clipboard:

        echo file://$HOME/proxy.pac

1.  In the main hamburger menu, click "Settings".

1.  Using the search bar, enter `proxy`, then select `Settings...`.

1.  Select `Automatic proxy configuration URL`, then paste the path copied from above. Be aware, the triple `///` is intentional, and your path _will_ be different from the one below - namely, YOUR_LINUX_USERNAME will be your actual linux username:

        file:///home/YOUR_LINUX_USERNAME/proxy.pac

1.  Select the box `Proxy DNS when using SOCKS v5`.

1.  Click `OK`.

1.  Restart Firefox.

1.  Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

## Windows

1.  Ensure you have completed the steps under [All Platforms](#all-platforms).

1.  You need a `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. Click [here](https://start9.com/assets/proxy.pac) to get the one offered by Start9. Save it somewhere you will not delete it, and remember where you save it. For example:

        C:\Program Files\Tor Browser\proxy.pac

1.  In the main hamburger menu, click "Settings".

1.  Using the search bar, enter `proxy`, then select `Settings...`.

1.  Select the box `Automatic proxy configuration URL`, then paste in the path to your PAC file from earlier, prefixed with `file://` and with all backslashes (`\`) replaced by forward slashes (`/`). For example:

        file://C:/Program Files/Tor Browser/proxy.pac

1.  Select the box `Proxy DNS when using SOCKS v5`.

1.  Click `OK`.

1.  Restart Firefox.

1.  Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

## Android/Graphene

1. Ensure you have completed the steps under [All Platforms](#all-platforms).

1. You need a `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. Click [here](https://start9.com/assets/proxy.pac) to get the one offered by Start9.

1. Search for `network.proxy.autoconfig_url`, and set the value to `file:///storage/emulated/0/Download/proxy.pac`. This is the default location of a the proxy.pac file downloaded above, although your path may vary.

1. Search for `network.proxy.type` into the search bar, and set the value to `2`:

1. Search for `network.proxy.socks_remote_dns`, and set the value to `true`.

1. Search for `network.http.referer.hideOnionSource` and set the value to `true`

1. (**GrapheneOS users only**): Head to `Settings -> Apps -> Firefox Beta -> Permissions -> Photos and videos -> Configure Storage Scopes -> ADD FILE`, then navigate to where you placed the proxy.pac file.

1. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.
