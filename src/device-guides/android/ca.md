# Trusting Your Root CA (Android/Graphene)

This guide applies to Android 13+, GrapheneOS, CalyxOS, and LineageOS

1. Ensure you have [downloaded your Root CA](../../../user-manual/trust-ca.md#download-your-root-ca).

1. Go to `Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway`, then select your custom-named `adjective-noun.crt` certificate.

   ![Setup](./assets/ca-android-certificate.png)

1. If using Firefox, you must use [Firefox Beta](https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta), then complete [this final step](../../misc-guides/firefox-guides/ca.md#android--graphene).
