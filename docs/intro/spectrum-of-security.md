---
id: spectrum-of-security
title: The Spectrum of Security
sidebar_label: Security Spectrum
sidebar_position: 2
description: A framework for choosing the right level of Bitcoin self-custody complexity based on your holdings and threat model.
keywords: [threat model, security levels, multisig, hardware wallet, risk assessment]
tags: [intro, fundamentals]
---

# The Spectrum of Security

Bitcoin security is not binary. There is a continuous spectrum from "exchange account" to "geographically-distributed 3-of-5 multisig with time-locks." Choosing the right point on that spectrum depends on your **holdings size**, **threat model**, and **operational capacity**.

## The Three Levels

### Level 1 — Air-gapped Entry

**Who:** First hardware wallet, under ~$50,000 in BTC
**Setup time:** 2–4 hours
**Risk addressed:** Exchange collapse, remote hack

- Single-sig hardware wallet (Passport, Coldcard, BitBox02)
- Seed words backed up on steel plates
- Air-gapped signing where possible

This level is adequate for most individuals. The marginal security of multisig does not justify the added complexity at typical beginner holdings sizes.

### Level 2 — Paranoid Path

**Who:** Serious holders, $50,000–$500,000 in BTC
**Setup time:** 8–16 hours
**Risk addressed:** Single point of failure, physical theft of device+seed

- 2-of-3 multisig (Sparrow Wallet or Specter Desktop)
- Hardware wallets from different manufacturers for each key
- SeedQR for airgapped backup
- Separate geographic locations for each seed

At this level you are protecting against an attacker who has physical access to one of your locations.

### Level 3 — Institutional Hardening

**Who:** Organizations, treasuries, $500,000+
**Setup time:** Days to weeks
**Risk addressed:** Insider threat, coercion, inheritance failure, legal seizure

- 3-of-5 multisig with geographic distribution across jurisdictions
- Duress PINs on hardware wallets
- KYC-free acquisition practices
- Formal inheritance and key-recovery procedures
- Professional physical security

## Choosing Your Level

```
Your holdings:  < $10k     →  Level 1 (single-sig, good seed backup)
                $10k–$100k →  Level 1 or 2 depending on risk tolerance
                > $100k    →  Level 2 minimum
                > $500k    →  Level 3 or equivalent professional custody
```

## Threat Model Questions

Ask yourself:

1. **Who knows I hold Bitcoin?** — Public holders have a higher kidnapping/coercion risk.
2. **Do I travel internationally with devices?** — Border crossings require special consideration.
3. **What happens to my Bitcoin if I die?** — Inheritance planning is part of security.
4. **How often do I need to transact?** — High-friction setups are harder to maintain.

Match your setup to your actual threats, not theoretical worst-case scenarios.

## Start Simple, Layer Complexity

The best security setup is one you actually maintain. A 3-of-5 multisig you don't understand is more dangerous than a single-sig wallet you understand completely.

Start with [Why Self-Custody](/intro/why-self-custody), then move to [Hardware Wallets](/hardware/air-gapped-vs-usb).
