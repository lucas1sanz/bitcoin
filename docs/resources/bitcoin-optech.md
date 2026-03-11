---
id: bitcoin-optech
title: Bitcoin Optech
sidebar_label: Bitcoin Optech
sidebar_position: 2
description: Overview of Bitcoin Optech — the technical newsletter and resource hub for Bitcoin protocol development and best practices.
keywords: [Bitcoin Optech, newsletter, Taproot, MuSig2, technical Bitcoin, protocol development]
tags: [resources, external, technical]
---

# Bitcoin Optech

Bitcoin Optech (Bitcoin Operations Technology Group) publishes a weekly technical newsletter covering Bitcoin protocol development, wallet best practices, and network changes. It is the primary technical resource for developers and advanced users tracking Bitcoin's evolution.

## What Optech Covers

- **Weekly newsletter** — protocol proposals (BIPs), soft fork activation discussions, implementation news
- **Topics index** — comprehensive glossary of Bitcoin technical concepts with cross-references
- **Compatibility matrix** — which wallets support which features (Taproot, PSBT, descriptor wallets, etc.)
- **Podcast** — audio version of weekly newsletter

## Topics Relevant to Self-Custody

The Optech Topics index covers:

| Topic | Relevance |
|-------|----------|
| Taproot | P2TR addresses, Schnorr signatures |
| MuSig2 | Threshold signatures for multisig |
| PSBT | Partially Signed Bitcoin Transactions — the standard for hardware wallet signing |
| Descriptors | Output script descriptors — how multisig wallets encode policy |
| FROST | Future threshold signatures |
| Miniscript | Composable spending policies |
| Payment batching | Fee optimization for institutional spenders |
| Package relay | Mempool improvements affecting CPFP fee bumping |

## Using the Compatibility Matrix

Optech maintains a wallet/service compatibility matrix tracking feature support:

- PSBT support
- Taproot sending and receiving
- Descriptor wallets
- Lightning compatibility
- Hardware wallet integration

This is useful when evaluating new wallets or checking if your current wallet supports a specific feature.

## PSBT — The Foundation of Hardware Wallet Signing

Partially Signed Bitcoin Transactions (BIP 174, updated in BIP 370 for PSBTv2) are the interchange format between software wallets and hardware signing devices. Understanding PSBT helps you:

- Understand what data moves between Sparrow and your hardware wallet
- Verify that signing tools are using the standard correctly
- Evaluate new tools' security model

The Optech PSBT page covers the full spec with explanations of each field.

## Newsletter Archive

Optech newsletters are archived and searchable. Notable topics for self-custody users:

- **Taproot activation** — series of newsletters covering the BIP341/342 rollout
- **Hardware wallet round-ups** — periodic coverage of hardware wallet development
- **Mining pool privacy** — coinbase output patterns that reveal mining origin
- **CoinJoin implementations** — technical comparison of Whirlpool, WabiSabi, JoinMarket

## Finding Optech

Visit **bitcoinops.org** directly (manual URL — no referrer). The newsletter archive, topics index, and compatibility matrix are all freely accessible without registration.

The GitHub repository (github.com/bitcoinops/bitcoinops.github.io) contains all newsletter content in Markdown, suitable for offline reading.

## Related Pages

- [Taproot and MuSig2](/advanced/taproot-musig2)
- [Multisig with Sparrow](/advanced/multisig-sparrow)
- [Lopp Resources](/resources/lopp-links)
