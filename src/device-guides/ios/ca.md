# Trusting Your Root CA (iOS)

1. Ensure you have [downloaded your Root CA](../../../user-manual/trust-ca.md#download-your-root-ca).

1. Open your iCloud Downloads folder and click on the certificate. It will display a dialog box that says `Profile Downloaded`. Click "Close".

1. Head to _Settings > General > VPN & Device Management_:

   ![Settings management](./assets/ca-ios-settings-management.png)

1. Under "DOWNLOADED PROFILE", click your Root CA:

   ![Settings select profile](./assets/ca-ios-settings-select-profile.png)

1. Click "Install":

   ![Settings profile install](./assets/ca-ios-settings-select-profile-2.png)

1. Click "Install" again:

   ![Settings profile install again](./assets/ca-ios-settings-select-profile-3.png)

1. Click "Install" for a 3rd time:

   ![Settings profile install yet again](./assets/ca-ios-settings-select-profile-4.png)

1. You should see green text with a check-mark saying "Verified" under the Profile Installed dialog:

   ![Settings profile verified](./assets/ca-ios-settings-profile-verified.png)

   ```admonish note

   On recent versions of iOS this check-mark does not appear. It may return in the next version of iOS if removing it was a mistake.
    
   ```


1. Tap "Done".

1. Go to `General > About > Certificate Trust Settings` and enable your Root Ca:

   ![Settings trust](./assets/ca-ios-settings-trust.png)

1. Click "Continue".
