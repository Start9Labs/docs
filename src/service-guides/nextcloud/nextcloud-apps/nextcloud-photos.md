# Nextcloud Photos

Nextcloud Photos is a basic gallery for viewing and managing your photos.  First set up your [client devices](/service-guides/nextcloud/nextcloud-setup/), so that Nextcloud will automatically keep your photos synced.

Clients available for:

- Mobile
    - Android

## NC App Setup

1. Photos is included by default and there will be an icon in your top menu for "Photos."  Click it and you will be in the web UI viewing your gallery.

## Desktop & Mobile Setups


### nc-photos (Android)

[nc-photos](https://gitlab.com/nkming2/nc-photos/) is a modern mobile photo gallery with a grid-based interface reminiscent of Google Photos.

1. First, install ``Photos (for Nextcloud)`` from the Google Play Store or from [the GitLab repository](https://gitlab.com/nkming2/nc-photos/-/wikis/Release). There is a ad-supported version and a paid version on the Play Store, but the GitLab APK is ad-free by default.

1. At the welcome screen, you will be reminded not to delete a special folder that will be created in your Nextcloud file directory and asked to enter your server URL. 

1. Select your prefered interface (``.local`` or ``.onion`` from StartOS's UI) and paste it into the field without ``http`` or ``https``.

1. Proceed to connect and authenticate automatically.

    - That's it! Photos will take some time to initially sync.

### Les Pas (Android) 

[Les Pas](https://github.com/scubajeff/lespas) is a great mobile gallery for viewing and organizing your photos, gifs, and videos.

1. First, install Les Pas from your favorite app store (Aurora, F-Droid, or Play Store), or from [the github repository](https://github.com/scubajeff/lespas/releases).

1. At the welcome screen, you will be asked to either enter your server URL or scan a QR code.  In your Nextcloud instance, click the top-right menu -> Personal Settings -> Hamburger (3 lines) Menu > Security > Devices & Sessions > "Create new app password."  Hit "Show QR Code" and then scan it with Les Pas.

1. You'll be sent to your Nextcloud instance to log in and grant access to the app.

    - That's it!  You're ready to view your photos with no third party involved!
