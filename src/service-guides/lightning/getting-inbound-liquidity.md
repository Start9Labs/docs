# Getting Inbound Liquidity

Before you read this, it's important to [understand the important concept of liquidity](https://bitcoin.design/guide/how-it-works/liquidity/). This guide summarizes some of the ways you can get some inbound liquidity after opening a new or [first channel](./opening-channels.md).

## Spending Sats

The simplest way to gain inbound liquidity is to spend some of your outbound liquidity. Whether you send this to yourself or spend it on a purchase, the end result will be inbound liquidity equal to the amount you have spent.

Let's say you have opened a channel of 1 million sats and you'd like this "balanced" so that you have 500k outbound and 500k inbound. To do this, you'll have to send 500k sats from your node to somewhere else.

**Common options**

- Buy something you'd ordinarily buy using a service like Bitrefill or The Bitcoin Company, then buy back the sats with fiat.

- Send 500k sats to another wallet you control, or pay your friend the 500k sats you owe!

- Donate to [Start9](https://donate.start9.com)

## "Loop Out", or perform a _swap_

Oftentimes when people open a channel, again, let's use 1 million sats as an example, they'd like to be both _better connected_ to the Lightning Network with more than one channel and have inbound and outbound liquidity on both channels. But if you've just opened a channel with the majority of your on-chain funds, you now have just one channel with all your funds as outbound liquidity.

To get some of these sats back as on-chain funds, and so free up the channel so that it has some inbound liquidity, we need to send sats via lightning and have them come back to us at an on-chain Bitcoin address (optionally back to your CLN or LND node to open another channel).

This is typically done using third-party services such as Loop, Boltz, Deezy, and probably a few others. They'll provide you with a lightning invoice to pay and ask you in turn for a Bitcoin address to send to. In return for this service, you'll pay a percentage fee.

> [!NOTE]
> In using a swap service, you'll not only pay the third-party a fee for their service, but you'll also be charged for the resulting on-chain fee. This means when swapping or "looping" out 500k, you'll receive the majority but not all of it back. This means any second channel you open will be smaller than the first unless you add more on-chain funds.

> [!WARNING]
> Start9 doesn't recommend, vouch for or have any relationship with the third-parties listed as examples.

You can acheive the same effect as using an official swap tool with many lightning wallets that have their own swapping functionality built in. Though this is generally intended for you to be able to pay an on-chain invoice/address through the app rather than for channel management, it can be useful in a pinch. Send to the wallet over lightning, send back to yourself onchain, paying the wallet's own swap fees in the process.

## Get peers to open channels to you

When you open a channel to someone else, by default, you'd have all the liquidity on your side of that channel. You'd have only outbound liquidity. On your channel partner's side of the channel, they would see that all the liquidity is on your side and that they only have inbound liquidity.

In the same way that you're giving someone else inbound liquidity by opening your channel to them, you can get inbound liquidity by having someone open a channel to you.

You can convince someone to do this, pay someone to do this, or make friends with others and open reciprocal channels as a group.

**Buying Lquidity**

There are those who make a business out of selling liquidity. These businesses will charge a fee to open a channel to you from their well-connected nodes, giving you inbound liquidity to use immediately. They will typically agree to keep the channel open for a specific period of time. Examples of these businesses include LNBig and Deezy.

There are also marketplaces where ordinary users sell their liquidity. These could probably be considered a better option. Most sellers are well connected but not heavily centralized, and you have a channel partner you can reach out to and talk with. They'd often be willing to keep the channel open longer if you ask them or if you use it. One popular market for this is [Magma](https://amboss.space/magma).

**Swapping Liquity**

The easiest, cheapest, and best way to get and offer liquidity is to make agreements with fellow Lightning Network users and open reciprocal channels as a group. You'll often have a chance to learn from more experienced peers (i.e., how to do a circular rebalance) and get two channels by just opening one yourself. For example, in a triangular swap, you open with A, A opens with B, B opens with you. Each user gets 2 channels and 50% inbound. The best example of this is [lightning network+](https://lightningnetwork.plus/)
