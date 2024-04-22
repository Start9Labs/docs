## Sparrow

## Available For

- StartOS
- Mac
- Linux
- Windows

## Instructions

**Contents**

- [Using Sparrow on StartOS](#using-sparrow-on-startos)
- [Using Sparrow Desktop App](#using-sparrow-desktop-app)

### Using Sparrow on StartOS

1. Ensure Sparrow is installed and running if not already.

1. Click "Launch UI".

### Using Sparrow Desktop App

1. If you plan to connect remotely over Tor, ensure you are [running Tor on your device](../../../../user-manual/connecting.md#running-tor-on-your-phonelaptop). If connecting locally, you can skip this step.

1. If this is your first time using Sparrow, you will be guided to a screen to configure your Bitcoin server. Otherwise, you can find the server setup in `File > Preferences > Server > Configure Server`.

   - **Connecting to Bitcoin Core (recommended)**:

     1. In the `URL` field, enter your Bitcoin Core RPC URL (found in `Services > Bitcoin Core > Interfaces`).

        - If connecting locally, copy the `LAN Address`. _Remove_ the `https://` prefix and enter "443" for the port.

        - If connecting over Tor, copy the `Tor Address`. _Remove_ the `http://` prefix and enter 8332 for the port.

     1. In the `User / Pass` field, enter you Bitcoin Core RPC Username and Password (found in `Services > Bitcoin Core > Properties`)

   - **Connecting to electrs**:

     1. In the `URL` field, enter your electrs Tor hostname and port (found in `Services > electrs > Properties`). Currently, electrs can only be used over Tor.

1. If you are connecting over Tor

   - Enable `Use Proxy`.

   - For `URL`, enter "localhost".

   - For `Port`, enter "9050".

1. Click "Test Connection".
