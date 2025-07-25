# Lightning Network

Bitcoin's Lightning Network is a second-layer scaling solution designed to enable faster and cheaper transactions on the Bitcoin blockchain. It allows users to create off-chain payment channels, which can facilitate multiple transactions without needing to record each one on the main blockchain.

**Contents**
- [Getting Started and Tips](#gettingstarted)
- [Implementations (LND, CLN)](#implementations)
- [Alby Hub](#alby-hub)
- [Ride the Lightning (RTL)](#ride-the-lightning-rtl)
- [LNbits](#lnbits)

## Getting Started and Tips

- [Opening Your First Channel](./opening-channels.md) - We use Ride The Lightning (RTL) as the tool to interact with and to fund our CLN or LND wallet, then open a private channel to Start9.

- [Getting Inbound Liquidity](./getting-inbound-liquidity.md) - We look at the ways to be able to *receive* payments having only just opened a channel with all the liquidity on your side.


## Implementations

StartOS currently supports two independent Lightning Network implementations available as services in the marketplace: LND and CLN. Follow the prefered guide bellow to learn how to get started and to connect wallets.

- [LND Guide](https://github.com/Start9Labs/lnd-startos/docs/introduction.md)
- [CLN Guide](https://github.com/Start9Labs/cln-startos/docs/introduction.md)


## Alby Hub

Alby Hub lets you manage your own lightning node, make payments, receive tips, and connect to apps with one click. Set up Alby Hub to work with your locally installed LND service or alternatively use the embedded LDK "light" node inside Alby Hub.

- [Alby Hub](https://github.com/Start9Labs/albyhub-startos/docs/introduction.md)


## Ride the Lightning (RTL)

RTL is a full function web user interface to help manage lightning node operations. RTL is available for LND and CLN, including both together at the same time on the same server.

- [RTL](https://github.com/Start9Labs/rtl-startos/docs/introduction.md)


## LNbits

LNbits core is a powerful wallet accounts system you can use to create secure sub-wallets on top of LND or CLN, allowing you to be an "Uncle Jim" to friends and family. Extremely extensible, it can also provide a wide range of other features like connecting bolt cards or ATMs.

- [LNbits](./lnbits/)
