# BlueWallet  with LNbits

```admonish note

This guide assumes you have already setup LNbits as per :ref:`this guide <connecting-lnbits>` with **LND** as your underlying node.

```

```admonish warning

**This will not work with CLN as your underlying node!**

```

1. Bluewallet requires that we use the LnbHub extension in order to connect to LNbits.

1. To do this, click **Manage Extensions**:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-extentions.png)

1. Click **MANAGE** under the LndHub extension:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub.png)

1. Click the two arrows on the right, then click install:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-install.png)

1. Now ensure that it says **Activated** underneath LndHub and then click **Extensions** on the left:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-activated.png)

1. Click **ENABLE**:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-enabled.png)

1. Click **OPEN** *or* **LndHub** under *Extensions*:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-open.png)

1. Make sure the wallet you just created is selected below the two QR codes:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-qr.png)

1. Open up BlueWallet and click on the three dots in the top right:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect1.jpg)

1. Click "Network" then "Tor settings":

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect2.jpg)

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect3.jpg)

1. Click "Start" and it should say "Done" after a short time:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect4.jpg)

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect5.jpg)

1. Head back to the main screen and click the **"+"** sign:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect6.jpg)

1. Click "Import wallet":

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect7.jpg)

1. Click "Scan or import a file"

1. *If you only want this wallet to be able to RECEIVE PAYMENTS, scan this QR code:*

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-qr-receive.png)

    *If you are happy for this wallet to be able to both receive and MAKE payments scan this QR code:*

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-lndhub-qr-send.png)

1. You'll see this once the wallet is added:

    ![Connect BlueWallet](../assets/connect-bluewallet-lnbits-connect8.jpg)

1. In addition to allocating sats to this wallet via the LNbits Superuser Account (see "Funding LNbits section" [here](../lnbits.md#funding-lnbits)), you can also receive funds the normal way by hitting "Receive" within BlueWallet.


```admonish note

Funds received this way must be sent from another lightning node, not the LND node underneath LNbits. A lightning payment that originates and terminates at the same node is technically a rebalance, not a normal payment.

```

Congratulations! BlueWallet is set up and ready to use lightning via your own lightning node - furthermore it will only be able to use your node in the way you allow it, via LNbits.