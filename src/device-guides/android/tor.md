# Connecting over Tor (Android/Graphene)

Some apps have Tor built-in; they do not require additional software or configurations. Most apps, however, do not have Tor built-in. They require an app called Orbot.

#### Contents

- [Running Orbot](#running-orbot)
- [Orbot VPN Apps](#orbot-vpn-apps)

## Running Orbot

#. Install Orbot from the <a href="https://play.google.com/store/apps/details?id=org.torproject.android" target="_blank">Play Store</a> or F-Droid.

```admonish tip

For F-Droid, enable the Guardian Project repository by going to `F-Droid > Settings > Repositories > Guardian Project Official Releases`
```

1. Open Orbot and click "Start VPN":

   ![Start Orbot](./assets/tor-android-orbot-vpn-start.jpeg)

1. Open the kebab menu in the bottom right and click "Settings":

1. Make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are both checked:

   ![Orbot settings](./assets/tor-android-orbot-vpn-on.jpeg)

## Orbot VPN Apps

Apps that support using a Socks5 Proxy can use Orbot as-is; no need to add them as VPN apps. Other apps, however, must to be added. If this applies to you, continue below.

1. In **Android**, go to `Settings > Network & Internet > Advanced > Private DNS` and toggle Private DNS to "off".

1. In Orbot, click "Choose Apps" and select the apps you want to utilize Tor.

   ![Orbot select apps](./assets/tor-android-orbot-vpn-choose-apps.jpeg)
