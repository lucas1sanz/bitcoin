---
id: why-self-custody
title: Why Self-Custody Matters
sidebar_label: Why Self-Custody
sidebar_position: 1
description: Understanding why holding your own Bitcoin keys is essential — and what you risk by leaving coins on an exchange.
keywords: [self-custody, not your keys, exchange risk, Bitcoin security, cold storage]
tags: [intro, fundamentals]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Why Self-Custody Matters <HardeningBadge level={1} />

> **"Not your keys, not your coins."** — Andreas Antonopoulos

When you hold Bitcoin on an exchange, you hold an IOU. The exchange holds the private keys. You hold a database entry. That distinction has wiped out billions of dollars in user funds across dozens of exchange collapses.

## What Can Go Wrong With Exchanges

| Risk | Historical Examples |
|------|---------------------|
| Exchange insolvency | Mt. Gox (850,000 BTC lost), FTX ($8B shortfall) |
| Hack | Bitfinex 2016 (120,000 BTC), Binance 2019 (7,000 BTC) |
| Regulatory freeze | Accounts frozen by government order |
| KYC/AML seizure | Funds flagged, withdrawal blocked indefinitely |
| CEO exit scam | QuadrigaCX ($190M "lost") |

None of these risks exist when you hold your own keys. A hardware wallet that is offline cannot be hacked remotely. Bitcoin on-chain cannot be frozen by a bank. No counterparty means no counterparty risk.

## What Self-Custody Requires

Self-custody requires you to take responsibility for:

1. **Key generation** — using sufficient entropy, ideally offline
2. **Seed backup** — durable, secret, geographically distributed
3. **Device security** — hardware wallet PIN, firmware updates
4. **Spending workflow** — verifying addresses on-device before signing

This knowledge base walks you through each step, from your first hardware wallet to institutional-grade multisig.

## Who Should Self-Custody?

**Everyone holding Bitcoin they intend to keep long-term.** The threshold varies by individual:

- For amounts under a few hundred dollars, the learning curve may genuinely outweigh the risk of a reputable exchange.
- For amounts over ~$1,000, self-custody is the rational choice — a single incident on a custodied platform could exceed the effort of setting up a hardware wallet.
- For amounts over ~$10,000, multisig and advanced OpSec become worth the additional complexity.

## The Learning Curve Is a Feature

Bitcoin's self-custody model forces you to understand what you're securing. That understanding is protective. Users who deeply understand key management are less susceptible to phishing, less likely to lose their seed, and better equipped to evaluate new tools.

Start with [Level 1 — Air-gapped Entry](/hardware/air-gapped-vs-usb). You can always add complexity later.
