# Nextcloud Bookmarks

[Nextcloud Bookmarks](https://apps.nextcloud.com/apps/bookmarks) is software for sorting, tagging, searching, sharing, and (most importantly) syncing your browser's bookmarks via your server.  First set up your [client devices](/service-guides/nextcloud/nextcloud-setup/), so that Nextcloud will automatically keep your bookmarks synced.

Available for:

- Web Interface
- Mobile
    - Android
- Desktop Browsers
    - Chrome
    - Edge
    - Firefox

## NC App Setup

1. Begin by downloading Bookmarks from your Nextcloud service's App Store (Top-right menu -> Apps).

    ```admonish tip
    
    Use the "Search" function to quickly find the App you are looking for

    ```

1. Once installed/enabled, you will get a new icon in your top menu for "Bookmarks."  Click it to get started.

    - At this point you can begin adding bookmarks directly into the app, or import them from a browser.  These are always available by accessing your Nextcloud from your client devices.

    - The real power here is in the ability to import or sync across devices.  There are several clients that can accomplish this, which can be found on the [NC Bookmarks Github Page](https://github.com/nextcloud/bookmarks#third-party-clients).  For our example, and the recommended option if you click "Sync with your browser" from the Bookmarks welcome page, is [Floccus](https://floccus.org/).

1. (Optional) In the "Settings" menu in the bottom-left, you may change the Nextcloud location in which to store your bookmarks.  If you change this or create a new folder, be sure to reflect this change in Floccus below.

## Browser & Mobile Setups

### Floccus (Browser & Android)


1. Download the appropriate Floccus extension for your browser or app from the App Store, F-Droid, or Play Store.

1. Open the Floccus browser extension and click "+NEW ACCOUNT", select "Nextcloud Bookmarks", and then add your server address and login via Nextcloud.

1. (Optional) Edit the folder paths if changed above and select a local folder to save bookmarks to.

1. On the final setup page, use the defaults unless you are absolutely sure what you are doing.  Click "Continue" and you're ready to sync!

    ```admonish note
    
    Repeat this process for any additional devices or browsers that you'd like to keep in sync.
    
    ```