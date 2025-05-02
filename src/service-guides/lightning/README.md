# Lightning Network

Bitcoin's Lightning Network is a second-layer scaling solution designed to enable faster and cheaper transactions on the Bitcoin blockchain. It allows users to create off-chain payment channels, which can facilitate multiple transactions without needing to record each one on the main blockchain.

**Contents**
- [Getting Started and Tips](#gettingstarted)
- [Implementations](#implementations)
  - [LND (Lightning Network Daemon)](#lnd-lightning-network-daemon)
  - [CLN (Core Lightning)](#cln-core-lightning)
- [Alby Hub](#alby-hub)
- [LNbits](#lnbits)

## Getting Started

- [Opening Your First Channel](./opening-channels.md) - We use Ride The Lightning (RTL) as the tool to interact with and to fund our CLN or LND wallet, then open a private channel to Start9.

- [Getting Inbound Liquidity](./getting-inbound-liquidity.md) - We look at the common ways to receive payments having only just opened a channel with all the liquidity on your side.


## Implementations

StartOS currently supports two independent Lightning Network implementations available as services in the marketplace: LND and CLN.

### LND (Lightning Network Daemon)

Developed by Lightning Labs, LND is the most widely used implementation for creating and managing Lightning Network nodes. It the implementation that is most widely supported and is required by other services like Alby Hub. (More on [LND](https://github.com/lightningnetwork/lnd))

  - [Connect Directly to LND](./lnd/) - These tools connect directly to LND.
  - [Alby Hub](./lnd/alby-hub.md) – Learn how to set up Alby Hub on StartOS.
  - [Connecting to LND via Lightning Node Connect (LNC)](./lnc.md) - Lightning Node Connect (LNC) acts as a proxy to connect to your LND, useful if you are running LND behind TOR.



### CLN (Core Lightning)

Formerly known as c-lightning, CLN is developed by Blockstream. It focuses on modularity and performance. CLN is designed to be efficient and stable. (More on [Blockstream](https://blockstream.com/)).

  - [Connect Directly to Core Lightning](./cln/) - These tools connect directly to CLN.



## Alby Hub

Alby Hub lets you manage your own lightning node, make payments, receive tips, and connect to apps with one click. Set up Alby Hub to work with your locally installed LND service or alternatively use the embedded LDK light node inside Alby Hub. (More on [Alby Hub](https://albyhub.com))

- [Alby Hub](./lnd/alby-hub.md) – Learn how to set up Alby Hub on StartOS.


## LNbits

LNbits core is a powerful wallet accounts system you can use to create secure sub-wallets on top of LND or CLN, allowing you to be an "Uncle Jim" to friends and family. Extremely extensible, it can also provide a wide range of other features like connecting bolt cards or ATMs. (More on [LNbits](https://lnbits.com/))

- [Connect to LNbits wallets](./lnbits/) – Create and connect to a walled-off wallet in a layer above your lightning network implementation of CLN or LND.
