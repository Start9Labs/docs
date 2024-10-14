# Lightning Network

**Contents**

## Getting Started

- [Opening Your First Channel](./opening-channels.md) - We use Ride The Lightning (RTL) as the tool to interact with and to fund our CLN or LND wallet, then open a private channel to Start9.

- [Getting Inbound Liquidity](./getting-inbound-liquidity.md) - We look at the common ways to receive payments having only just opened a channel with all the liquidity on your side.


## Connecting to CLN

- [Connect Directly to Core Lightning](./cln/) - Core Lightning is one of the two lightning implementations found on StartOS. It was created and is maintained by [Blockstream](https://blockstream.com/).
    - [Alby Browser Extension](./cln/alby-extension.md)
    - [Ride the Lightning](./cln/rtl.md)
    - [Zeus](./cln/zeus.md)


## Connecting to LND

- [Connect Directly to LND](./lnd/) - LND is the second of the two lightning implementations found on StartOS. It was created and is maintained by [Lightning Labs](https://lightning.engineering/).
    - [Alby Browser Extension](./lnd/alby-extension.md)
    - [BitBanana](./lnd/bitbanana.md)
    - [Fully Noded](./lnd/fully-noded.md)
    - [RTL](./lnd/rtl.md)
    - [Zeus](./lnd/zeus.md)
- [Connecting to LND via Lightning Node Connect (LNC)](./lnc.md) - Lightning Node Connect (LNC) provides a very simple way to connect to an LND node that does not require the Tor network.

## Using LNbits

  - [Connect to LNbits wallets](./lnbits.md) – Create and connect to a walled-off wallet in a layer above your lightning network implementation of CLN or LND.
    - [The Concept](./lnbits.md#the-concept)
    - [What lightning node should I use?](./lnbits.md#what-lightning-node-should-i-use)
    - [Setting up LNbits](./lnbits.md#setting-up-ln-bits)
        - [Alby Browser Extension](./lnbits/alby-extension.md)
        - [BlueWallet](./lnbits/bluewallet.md)
        - [Zeus](./lnbits/zeus.md)
