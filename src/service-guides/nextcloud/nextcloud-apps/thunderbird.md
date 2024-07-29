# Thunderbird

**Content**
- [Calendar Syncing](#calendar-syncing)
- [Contact Syncing](#contact-syncing)

## Calendar Syncing

You can set up your devices using their [integrations](/service-guides/nextcloud/nextcloud-setup/), but if you wish to use a standalone client for your Calendar and Contacts syncing, we recommend Mozilla's [Thunderbird](https://www.thunderbird.net).

1. Install the [Calendar](nextcloud-calendar.md) and [Contacts](nextcloud-contacts.md) apps in Nextcloud if they are not currently installed.

1. Add your [RootCA](/user-manual/trust-ca.md) to your system and then configure [Thunderbird](/misc-guides/thunderbird-guides.md).

1. In Thunderbird, click on the calendar icon, then "New Address Book" in the bottom-left.

    ![thunderbird add calendar](../assets/thunderbird-calendar-step1.png)

1. Choose "On the network," then click "Next".

    ![thunderbird add calendar checkbox](../assets/thunderbird-calendar-step2.png)

1. Fill in the Username and Location fields with the credentials from Nextcloud > Properties on your Start9 server.  Click "Find calendars".

    ![thunderbird add calendar checkbox](../assets/thunderbird-calendar-step3.png)

4. Create a unique app password - In your Nextcloud WebUI, visit the top-right-hand menu and select "Personal Settings" -> "Security." At the bottom, under "Devices & Sessions," create a new app password with a name of your choice, such as "CalDAV." Copy the resulting password and paste it into Thunderbird.

    ![nextcloud app password ](../assets/native-nextcloud-integration-macos-step3.1.png)

    ![thunderbird add password](../assets/thunderbird-contact-step3.png)


5. Check which calendars you want to integrate and click "Subscribe".

    ![thunderbird add calendar subscribe](../assets/thunderbird-calendar-step5.png)

Your Nextcloud calendar will now sync with Thunderbird. Click on the "Contacts" tab above to add your contacts.



## Contact Syncing

1. Install the [Calendar](nextcloud-calendar.md) and [Contacts](nextcloud-contacts.md) apps in Nextcloud if they are not currently installed.

1. Add your [RootCA](/user-manual/trust-ca.md) to your system and then configure [Thunderbird](/misc-guides/thunderbird-guides.md).

1. Click on the Address Book icon, open the drop-down menu for "New Address Book" and click "Add CarDav Address Book".

    ![thunderbird add new contact book](../assets/thunderbird-contact-step1.png)

1. Fill in the Username and Location fields with the credentials from Nextcloud > Properties on your Start9 server. Click "Continue".

    ![thunderbird add new contact book](../assets/thunderbird-contact-step2.png)

1. Create a unique app password - In your Nextcloud WebUI, visit the top-right-hand menu and select "Personal Settings" -> "Security." At the bottom, under "Devices & Sessions," create a new app password with a name of your choice, such as "CalDAV." Copy the resulting password and paste it into Thunderbird.

    ![nextcloud app password ](../assets/native-nextcloud-integration-macos-step3.1.png)

    ![thunderbird add password](../assets/thunderbird-contact-step3.png)

Your Nextcloud contacts will now sync with Thunderbird.