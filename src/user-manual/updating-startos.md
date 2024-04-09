# Updating StartOS

```admonish info

StartOS does not have automatic updates and will _never_ update without your approval. That said, we highly recommended keeping StartOS up to date for the latest security and performance patches, as well as to take advantage of new features.
```

**Contents**

1. [Updating through the UI](#updating-through-the-ui)
1. [Update by Re-flashing](#update-by-re-flashing)

## Update through the UI

1. When a new version of StartOS is available, a rocket badge will appear on the "System" tab.

1. Go to `System > Software Update`.

1. Read the release notes and click "Begin Update".

   ```admonish danger

   Ensure you have a stable Internet connection before beginning an OS update, and do not unplug your server while StartOS is downloading.
   ```

1. While the new version of StartOS is downloading, you may continue to use your device as usual.

1. Once the download is complete, you will be prompted to restart your server to complete the update.

   ```admonish danger

   Updates can take up to an _hour_ to complete. During this time, there is no indication of progress and your StartOS UI will be unreachable. **DO NOT UNPLUG YOUR SERVER DURING THIS TIME!**
   ```

## Update by Re-flashing

If you updating to an unreleased version of StartOS, or something went wrong with a UI update (very rare), it may be necessary to update StartOS by re-flashing. Follow the guide for [Flashing StartOS]().
