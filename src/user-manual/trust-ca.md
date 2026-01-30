# Trusting Your Root CA

In order to establish a secure (HTTPS) connection with your server on the local network, it is necessary to download and trust your server's Root Certificate Authority (Root CA).

```admonish note
You must repeat this guide for every device that will connect to your server locally or using a VPN. This guide is _not_ necessary for devices that will connect using Tor or clearnet.
```

## Watch the video:

<div class="yt-video" data-id="BShfqimixEY" data-title="Trusting Your Root CA"></div>

## Obtaining your Server's Root CA

There are multiple ways to obtain your server's Root CA.

- ### Option 1: Download it from your StartOS-info.html file

  Following initial setup, you were required to download a StartOS-info.html file. Your Root CA can be downloaded from this file.

  ![Address Info](./assets/ca-download-address-info.png)


- ### Option 2: Download from your HTTP (_not_ HTTPS) landing page

  Visit your server's `http://<adjective-noun>.local` URL and click "Download".

  ![Trust Root CA Login](./assets/ca-download-login.png)


- ### Option 3: Send it to yourself

  Once you have downloaded your Root CA on any device, you can send it to yourself using email, messaging app, or other file sharing app.

## 2. Trust your Server's Root CA

Select your client device OS and follow instructions

- [Linux](../../device-guides/linux/ca.md)
- [Mac](../../device-guides/mac/ca.md)
- [Windows](../../device-guides/windows/ca.md)
- [Android/Graphene](../../device-guides/android/ca.md)
- [iOS](../../device-guides/ios/ca.md)




