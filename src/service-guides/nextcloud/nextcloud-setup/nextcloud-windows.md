# Nextcloud - Windows 

## Initial Config

It is advised to setup your Nextcloud devices on LAN (if available) for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

## Native Desktop Integration

If you prefer to use Microsoft's integrated Calendar and Contacts apps with your Windows machine, you can integrate directly.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps.  The steps below are adapted from the [Official Nextcloud guide](https://docs.nextcloud.com/server/24/user_manual/en/groupware/sync_windows10.html).  

Make sure you have first set up [LAN access](/device-guides/windows/ca.md).  Then do the following:

1. Launch the Windows Calendar app and click the gear icon (Settings), then select "Manage Accounts."

1. Select "Add Account" and choose "iCloud" (don't worry, it won't *really* be iCloud).

1. Enter an email, username and password. None of this information has to be valid and it will all be changed in the upcoming steps.  Click "Sign In" (or "Done" in Win10).

1. In the "Manage Accounts" menu, click on the account just created and select "Change Settings," and then "Change mailbox sync settings" (at the bottom of the page).

1. Scroll to the bottom again and fill in the following fields (as desired):

    - Calendar Server (CalDAV) - This link can be copy-pasted by clicking your Nextcloud Calendar app's "Calendar Settings" in the bottom-left, then "Copy primary CalDAV address" at the bottom of the expanded menu.
  
    - Contacts Server (CardDAV) - This link can be copy-pasted by clicking your Nextcloud Contacts app's "Contacts Settings" in the bottom-left, then the kebab (3 dots) menu next to "Contacts," and finally "Copy Link" at the top of the resulting menu.

1. Click "Done."

You should now be able to sync your native Windows Contacts and/or Calendar apps with the associated Nextcloud apps.

## Standalone Clients

### File Syncing - Nextcloud Desktop

This is Nextcloud's official client application for file syncing and account management.  The latest version of the official Nextcloud client is available on their [download page](https://nextcloud.com/install/#install-clients).

### LAN Setup

Make sure you have first set up [LAN access](/device-guides/windows/ca.md).  Then do the following:

1. Download the appropriate desktop client from https://nextcloud.com/install/#install-clients
1. Open the client and click "Log In"
1. From your server's Nextcloud Service page, go to "Interfaces" and copy the LAN address
1. Enter your LAN address under "Server Address" and click "Next"
1. You will be asked to Trust your server's certificate, which is safe to do as you generate and sign this during LAN Setup
1. Tick the box for "Trust this certificate anyway" and click "Next"
1. This will launch a page in your web browser, click "Log In" and then "Grant access" to link the desktop client. You can close this browser window afterwards
1. Next, configure the local directory that you want to sync with Nextcloud. You may use the default or change it, and edit the sync settings to desired. When satisfied, click "Connect"
1. Files will begin to sync immediately and you will see a green check when this is complete.
1. That's it! From this desktop client you will recieve notifications, control accounts and syncing, and quickly access your Apps' WebUI pages

### Tor Setup

You will first need to have the [Tor daemon running](/device-guides/windows/tor.md).

1. On your desktop application, click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
1. Close the Settings screen and click the account in the top left again, then "Add Account."
1. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from Nextcloud -> Interfaces - Tor. This should start with ``http://`` and end with ``.onion``. Click Next.
1. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
1. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.