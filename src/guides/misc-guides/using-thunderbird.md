# Using Thunderbird

**Contents**

- [Trusting your Root CA](#trusting-your-root-ca)
- [Enabling Tor](#using-tor)
  - [Mac](#mac)
  - [Linux](#linux)
  - [WIndows](#windows)

## Trusting Your Root CA

1. Ensure you have already [trusted your Root CA](../../user-manual/trust-ca.md).

1. In the Thunderbird hamburger menu, click `Settings`.

1. Using the search bar, enter `config`, then select `Config Editor...`.

1. Using the new search bar, search for `security.enterprise_roots.enabled`, and set the value to `true`.

## Enabling Tor

### Mac

1. Once you have [configured Mac for Tor](../device-guides/mac/tor.md), no additional steps are required.

### Linux

1.  Ensure you have already [configured Linux for Tor](../device-guides/linux/tor.md).

1.  You need a `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. You can get Start9's standard file from a terminal, by using the following command:

        sudo wget -P ~/ https://start9.com/assets/proxy.pac

1.  Determine the full path of `proxy.pac`, which we will use later, by executing the following command in the terminal, and copying its output to your clipboard:

        echo file://$HOME/proxy.pac

1.  In the Thunderbird hamburger menu, click `Settings`.

1.  Using the search bar, enter `proxy`, then select `Settings...`.

1.  Select `Automatic proxy configuration URL`, then paste the path copied from above. Be aware, the triple `///` is intentional, and your path _will_ be different from the one below - namely, YOUR_LINUX_USERNAME will be your actual linux username:

        file:///home/YOUR_LINUX_USERNAME/proxy.pac

### Windows

1.  Ensure you have already [configured Windows for Tor](../device-guides/windows/tor.md).

1.  You need a `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. Click <a href="https://start9.com/assets/proxy.pac" download>here</a> to get the one offered by Start9. Save it somewhere you will not delete it, and remember where you save it. For example:

        C:\Program Files\Tor Browser\proxy.pac

1.  In the Thunderbird hamburger menu, click `Settings`.

1.  Using the search bar, enter `proxy`, then select `Settings...`.

1.  Select the box `Automatic proxy configuration URL`, then paste in the path to your PAC file from earlier, prefixed with `file://` and with all backslashes (`\`) replaced by forward slashes (`/`). For example:

        file://C:/Program Files/Tor Browser/proxy.pac
