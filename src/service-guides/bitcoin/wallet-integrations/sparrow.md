# Sparrow

**Available For**

- StartOS
- Mac
- Linux
- Windows

**Contents**

- [Using Sparrow on StartOS](#sparrow-on-startos)
- [Using Sparrow Desktop App](#sparrow-desktop)

**Instructions**

## Sparrow on StartOS

```admonish tip

To choose between a connection to Bitcoin Core/Knots or to Electrs, instead of using the Sparrow's own UI you will instead set your choice in the StartOS UI at `Services > Sparrow > Actions`

```
```admonish note

You cannot connect hardware signing devices (wallets) to your server, they will not be detected by Sparrow.

```

1. Ensure Sparrow is installed and running if not already.

1. Click "Launch UI".

## Sparrow Desktop

1. If this is your first time using Sparrow, you will be guided to a screen to configure your Bitcoin or electrs server. Otherwise, you can find the server setup in `File > Preferences > Server > Configure Server`.

   - **Connecting to Bitcoin Core**:


      ```admonish note

      Sparrow's interface does not currently allow a user to set the protocol to `https` while also providing a custom port other than 443. This means it is not possible to connect to Bitcoin Core/Knots over LAN or Router VPN. You can however connect to Bitcoin Core/Knots over its Tor interface.
      
      ```
      
      1. In the `URL` field, enter your Bitcoin Tor hostname and port (found in `Services > Bitcoin Core/Knots` then the Interfaces section). You may select either the https or http as Sparrow will remove the protocol prefix automatically and add the port automatically.

      1. Select `User/Pass` as the `Authentication` option then enter a new user and password that you will now generate and copy from StartOS at `Services > Bitcoin Core/Knots > Actions > Generate RPC Credentials`

      1. Test your connection

   - **Connecting to electrs**:

      1. In the `URL` field, enter your electrs LAN Tor hostname and port (found in `Services > electrs` then the Interfaces section). Electrs may have both clearnet and Tor interfaces. 

      1. Test your connection

         ![Sparrow test connection](./assets/sparrow-desktop-electrs2.png)

      ```admonish tip

      If you're connecting to Electrs via Tor, you can either use the built in Tor daemon or setup up a [local proxy](../../../user-manual/connecting-remotely/tor.md#running-tor-in-the-background-on-your-phonelaptop). If you choose to run the local proxy, or already are then…

      - Enable `Use Proxy`.
      - For `URL`, enter "localhost".
      - For `Port`, enter "9050".

      Otherwise, if you are using Sparrow's own Tor daemon, keep `Use Proxy` diabled.
      ```