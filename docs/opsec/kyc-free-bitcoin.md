---
id: kyc-free-bitcoin
title: KYC-free Bitcoin Acquisition
sidebar_label: KYC-free Bitcoin
sidebar_position: 2
description: Legal methods for acquiring Bitcoin without KYC identity verification — peer-to-peer, mining, and Bitcoin ATMs.
keywords: [KYC-free, no-KYC Bitcoin, peer-to-peer, Bisq, Hodl Hodl, Bitcoin ATM, privacy]
tags: [level-3, opsec, privacy, KYC]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# KYC-free Bitcoin Acquisition <HardeningBadge level={3} />

KYC (Know Your Customer) requirements mean exchanges collect and store identity documents tied to Bitcoin purchases. This data is:

- Subject to data breaches (multiple exchanges have been hacked with user data exposed)
- Shared with government agencies on request
- Used by chain analysis firms to trace your Bitcoin on-chain
- A permanent record linking your identity to specific UTXOs

KYC-free acquisition protects privacy by breaking the link between your legal identity and your Bitcoin holdings.

:::note Legal Notice
All methods described here are legal in most jurisdictions. You remain responsible for tax reporting obligations on Bitcoin gains regardless of acquisition method. This is privacy advice, not tax evasion advice.
:::

## Method 1: Peer-to-Peer Trading (Bisq)

Bisq is a decentralized, open-source Bitcoin exchange that runs on Tor by default:

- **No central server** — trades happen directly between peers
- **No account required** — Bisq is just software, no registration
- **Tor by default** — network-level privacy
- **Payment methods:** Bank transfer, Zelle, Revolut, cash by mail, face-to-face

**Trade limits:** Bisq limits trade sizes (typically 0.25 BTC per trade for new accounts) to prevent fraud. Build reputation over multiple trades.

**Fees:** Bisq charges ~0.1–0.3% trading fees plus Bitcoin mining fees.

## Method 2: Hodl Hodl

Hodl Hodl is a non-custodial peer-to-peer exchange. Unlike Bisq, it has a web interface but uses multisig escrow — the platform never holds your Bitcoin:

- **Multisig escrow** — 2-of-3: buyer, seller, platform
- **Fewer payment method restrictions** than Bisq
- **Requires email for some features** — less private than Bisq but accessible
- **KYC optional** — can trade without verification up to certain limits

## Method 3: Face-to-Face

Bitcoin can be purchased for cash in person via:
- Local Bitcoin meetups (many cities have regular meetups)
- LocalBitcoins (now shut down), Bisq in-person trades
- Personal network — friends, family, acquaintances who hold Bitcoin

Cash transactions with no digital trail provide maximum privacy. Safety considerations apply — meet in public places, verify amounts.

## Method 4: Bitcoin ATMs

Bitcoin ATMs allow cash-to-Bitcoin purchases:

- Most ATMs require phone number and sometimes ID for larger amounts
- Limits before KYC vary by operator and jurisdiction ($900–$3,000 typical)
- Higher fees than peer-to-peer (5–15% is common)
- ATM operator cameras record the transaction

For small amounts below the KYC threshold, Bitcoin ATMs are a convenient no-identity option. Above thresholds, they become tracked.

## Method 5: Mining

Running a Bitcoin miner produces Bitcoin not linked to any exchange account. Mining revenue is:
- Not linked to an identity exchange
- Taxable as ordinary income in most jurisdictions (at fair market value when received)
- Increasingly dominated by large mining pools — solo mining is rarely profitable

For home miners (Bitaxe, small ASICs), the privacy benefit is real but economic returns are marginal.

## Method 6: Earn Bitcoin Directly

Accepting Bitcoin as payment for goods or services is the most privacy-preserving method — no exchange involved:

- Freelance work paid in Bitcoin
- Selling products priced in Bitcoin
- Peer-to-peer service exchange

## Post-Acquisition Privacy

KYC-free acquisition is only the start. On-chain behavior also matters:

- **Use a full node** — don't use public Electrum servers (they see your addresses)
- **Avoid address reuse** — each receive address should be used once
- **CoinJoin** — Whirlpool (Sparrow/Samourai) or JoinMarket for mixing existing UTXOs
- **Lightning Network** — payments over Lightning reveal less on-chain data

## Mixing KYC and No-KYC UTXOs

Avoid mixing KYC coins (from exchanges) with no-KYC coins in the same transaction. Chain analysis can "taint" the no-KYC coins by association.

Keep separate wallets for KYC-acquired and no-KYC-acquired funds.

## Related Pages

- [Duress PINs](/opsec/duress-pins)
- [Physical Security](/opsec/physical-security)
- [Multisig with Specter](/advanced/multisig-specter)
