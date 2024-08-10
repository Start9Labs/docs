# Nextcloud Cookbook

[Nextcloud Cookbook](https://apps.nextcloud.com/apps/cookbook) is software for viewing, syncing, and organizing recipes.  First set up your [client devices](/service-guides/nextcloud/nextcloud-setup/), so that Nextcloud will automatically keep your recipes synced.

Available for:

- Web Interface
- Mobile
    - Android
    - iOS

## NC App Setup

1. Begin by downloading Cookbook from your Nextcloud service's App Store (Top-right menu -> Apps).

    ```admonish tip
    
    Use the "Search" function to quickly find the App you are looking for

    ```

1. Once installed/enabled, you will get a new icon in your top menu for "Cookbook."  Click it to get started.

1. You can now start adding recipes.  Simply find a recipe online and copy the URL into the box on the left.  In most cases, this will be translated into an easy-to-read recipe with ingredients and steps, and without all the distractions and junk included with most recipe pages.

    ```admonish tip
    
    Tag and categorize your recipes!  Basic settings are available in the bottom-left menu.

    ```

## Mobile Setups


### Nextcloud Cookbook (Android / iOS)

There are 2 versions of this app available on Android, and one on iOS.  Check this [repository](https://github.com/nextcloud/cookbook/) for details.

1. Go to your app store of choice and install the Nextcloud Cookbook app.

1. (Android connection) You can select a previously connected Nextcloud account, or scan an app-specific QR, created under Nextcloud's main menu -> Personal Settings -> Security

1. (iOS connection) You will be prompted to enter the following:

    - Server URL - get this from your server's Services -> Nextcloud -> Interfaces (LAN is recommended)
    - Username - get this from your server's Services -> Nextcloud -> Properties (admin is default)
    - Password - get this from your server's Services -> Nextcloud -> Properties

    ```admonish note
    
    You may need to enable "self-signed certificates" for LAN.  This is safe to do as you are the signer of the cert and owner of all involved hardware.

    ```

1. As soon as you connect and sync, you will see your Cookbook!
