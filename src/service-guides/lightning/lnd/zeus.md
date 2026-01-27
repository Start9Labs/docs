# LND - Zeus

Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning. If you'd like to connect via LNbits, which allows allocation of funds, please see [this guide](../lnbits.md).

Available For:

- Android
- iOS

> [!NOTE]
> This guide will go over how to connect Zeus to **LND**. If you'd like to connect Zeus to CLN instead - please use [this guide](../cln/zeus.md).

1. Download [Zeus](https://zeusln.app/) for your device.

1. Log into StartOS and select Services -> LND -> Properties.

1. Tap the QR code icon for **LND Connect REST URL** to display the QR code.

1. In Zeus, tap "Scan node config". Allow camera access, scan the QR code, and then tap 'Save node config'. Zeus will fill in your node details based on the information in the QR code.

1. Click **SAVE NODE CONFIG**

> [!TIP]
> If you already have other nodes configured in Zeus, go to Settings.-> Connect a node -> + . Then scan the QR code, and tap "Save node config".

That's it. You can now use your LND Node via Zeus.
