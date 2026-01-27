# Core Lightning - Zeus

Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning. If you'd like to connect via LNbits, which allows allocation of funds, please see [this guide](../lnbits.md).

Available For:

- Android
- iOS

> [!NOTE]
> This guide will go over how to connect Zeus to **CLN**. If you'd like to connect Zeus to LND instead - please use [this guide](../lnd/zeus.md).

1. Download [Zeus](https://zeusln.app/) for your device.

1. Log into StartOS and expand Services -> Core Lightning -> Config -> Advanced -> Plugins, then confirm the CLNRest is toggled on.

1. Now open Services -> Core Lightning -> Properties.

   ![LND Actions](../assets/connect-zeus-cln-qr.png)

1. Tap the QR code icon for **CLNRest Quick Connect** to display the QR code.

   ![LND Actions](../assets/connect-zeus-cln-connect.png)

1. In Zeus, tap "ADVANCED SET-UP", followed by "Connect a node", and finally click the 'scan' icon in the top right to scan the qr code from the previous step.

1. Click **SAVE NODE CONFIG**

> [!TIP]
> If you already have other nodes configured in Zeus, Click the 'Node' icon in the top right -> 'plus' icon -> 'scan' icon . Then scan the QR code, and tap "SAVE NODE CONFIG".
>
> ![LND Actions](../assets/connect-zeus-cln-addnode.png)

That's it. You can now use your CLN Node via Zeus.
