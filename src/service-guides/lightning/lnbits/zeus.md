# Zeus with LNbits

> [!WARNING]
> This is not the same as connecting Zeus directly to your lightning node - using LNbits allows us to allocate a specific amount of funds to Zeus instead of giving it full access to your lightning node. We can also use LNbits to permit Zeus to **just receive** satoshis, or the ability to both **receive and spend** satoshis.

> [!NOTE]
> This guide assumes you have already setup LNbits as per [this guide](../lnbits.md).

> [!WARNING]
> **This will not work with CLN as your underlying node!**

1.  Zeus requires that we use the LnbHub extension in order to connect to LNbits.

1.  To do this, click **Manage Extensions**:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-extentions.png)

1.  Click **MANAGE** under the LndHub extension:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub.png)

1.  Click the two arrows on the right, then click install:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-install.png)

1.  Now ensure that it says **Activated** underneath LndHub and then click **Extensions** on the left:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-activated.png)

1.  Click **ENABLE**:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-enabled.png)

1.  Click **OPEN** _or_ **LndHub** under _Extensions_:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-open.png)

1.  Make sure the wallet you just created is selected below the two QR codes:

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-qr.png)

1.  Install [Zeus](https://zeusln.app/).

1.  Open it up and click **SCAN NODE CONFIG**.

1.  _If you only want this wallet to be able to RECEIVE PAYMENTS, scan this QR code:_

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-qr-receive.png)

    _If you are happy for this wallet to be able to both receive and MAKE payments scan this QR code:_

    ![Connect Zeus](../assets/connect-bluewallet-lnbits-lndhub-qr-send.png)

1.  Once scanned, name the wallet if you wish, then hit **SAVE NODE CONFIG**.

    ![Connect Zeus](../assets/connect-zeus-lnbits-connect1.jpg)

1.  Zeus will now connect to your node and you'll see this screen:

        ![Connect Zeus](../assets/connect-zeus-lnbits-connect2.jpg)

    > [!NOTE]
    > If it doesn't work, please manually restart the Zeus app.

1.  In addition to allocating sats to this wallet via the LNbits Superuser Account (see "Funding LNbits section" [here](../lnbits.md#funding-lnbits)), you can also receive funds the normal way by hitting **Request** within Zeus.

        ![Connect Zeus](../assets/connect-zeus-lnbits-connect3.jpg)

    > [!NOTE]
    > This will only work if your node has inbound liquidity. And you cannot send sats from the LND node LNbits is using as that is not a regular lightning payment - that is a reblanace.

1.  Once you have added sats, you can click on this button within Zeus and see your new balance

Congratulations! Zeus is set up and ready to use lightning via your own lightning node - furthermore it will only be able to use your node in the way you allow it, via LNbits.
