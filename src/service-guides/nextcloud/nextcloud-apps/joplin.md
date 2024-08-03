# Joplin

[Joplin](https://joplinapp.org/)  is an open source note-taking app. Capture your thoughts and securely access them from any device.  First set up your [client devices](/service-guides/nextcloud/nextcloud-setup/), so that Nextcloud will automatically keep your notes synced.

Clients available for:

- Desktop
    - Linux
    - Mac
    - Windows

- Mobile
    - Android
    - iOS

## Connecting Joplin to Nextcloud (Mac Desktop Example)

This guide will go over how to connect Joplin running on a desktop machine to your Start9 server's Nextcloud over LAN.

```admonish note

This guide assumes your Nextcloud username is "embassy," replace with your username if different.

```


You will need your device set up to connect via [LAN](/user-manual/trust-ca.md) first.

1. First go into Nextcloud on your server and click on the "Files" app icon.

    ![Click on Folders](../assets/joplin/joplin-setup0.png)


1. Click on the + icon, then "New folder".

    ![New Folder](../assets/joplin/joplin-setup1.png)


1. Create a new folder called "joplin" and click the arrow to the right.

    ![Joplin Directory](../assets/joplin/joplin-setup3.png)


1. Click on "Files settings" in the bottom left and copy the WebDAV link.

    ![Files Settings](../assets/joplin/joplin-setup4.png)


    ![WedDAV Link](../assets/joplin/joplin-setup5.png)


1. Open up Joplin, click on "Joplin" in the top left and click "Preferences" (on Mac).

    ![Preferences](../assets/joplin/joplin-setup7.png)


1. Click on "Synchronisation".

    ![Click on Synchronisation](../assets/joplin/joplin-setup8.png)


1. Under "Synchronisation target" select "Nextcloud", paste the WebDAV and append onto the end of it "joplin" so the entire URL should look like this (replace ``xxxx`` with your unique Nextcloud LAN address): ``https://xxxx.local/remote.php/dav/files/embassy/joplin``.

    ![Click on Synchronization](../assets/joplin/joplin-setup9.png)


1. Under "Nextcloud username" enter "embassy" (or your username).

1. Under "Nextcloud password" enter your password.

1. The username and password for your Nextcloud can be found in your server's UI by clicking on the Nextcloud service then clicking on "Properties".

    ![Select Nextcloud and enter URL](../assets/joplin/joplin-setup10.png)

    ![Select Nextcloud and enter URL](../assets/joplin/joplin-setup11.png)


1. Now click "Show advanced settings".

    ![Select Nextcloud and enter URL](../assets/joplin/joplin-setup12.png)

1. Scroll down then check the box that says "Ignore TLS certificate errors".

    ![Select Nextcloud and enter URL](../assets/joplin/joplin-setup13.png)
 

1. Now scroll back up and select "Check sychronisation configuration" and you should see the following success message:

    ![Select Nextcloud and enter URL](../assets/joplin/joplin-setup14.png)


1. You have now connected your Joplin client to your Start9 server's Nextcloud and your notes will sync automatically!
