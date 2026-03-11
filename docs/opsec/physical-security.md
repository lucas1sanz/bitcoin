---
id: physical-security
title: Physical Security for Bitcoin
sidebar_label: Physical Security
sidebar_position: 3
description: Physical security practices for hardware wallets, seed backups, and Bitcoin holders — safes, geographic distribution, and inheritance planning.
keywords: [physical security, safe, geographic distribution, inheritance, Bitcoin security, hardware wallet storage]
tags: [level-3, opsec, physical]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Physical Security for Bitcoin <HardeningBadge level={3} />

Technical security ends at the physical layer. The strongest cryptography offers no protection if an attacker has physical access to your seed backup or can coerce you in person.

## The Physical Threat Model

| Threat | Defense |
|--------|---------|
| House fire/flood | Steel backup, geographic distribution |
| Burglary | Hidden safe, geographic distribution |
| Targeted theft | No identification as Bitcoin holder |
| Coercion | Duress wallet, multisig geographic distribution |
| Death/incapacitation | Inheritance planning, dead man's switch |
| Seizure by authorities | Jurisdiction diversity, multisig |

## Safe Selection

### For Hardware Wallets (Relatively Accessible)

A good quality residential safe:
- **Fire rating:** UL Class 350 (interior stays below 350°F for 30 min)
- **Burglary rating:** TL-15 or TL-30 (tool-resistant)
- **Installation:** Bolted to floor joists or concrete — an unbolted safe can be removed
- **Weight:** Heavier is better — empty weight 150+ lbs deters casual removal

**Recommended brands:** AMSEC, Fort Knox, Gardall, Liberty (higher-end models)

### For Seed Backups (Rarely Accessed)

A different, more concealed location than the hardware wallet:
- Hidden compartment separate from the obvious safe
- Bank safe deposit box (consider jurisdiction risk for large amounts)
- Professional vault service

**Key principle:** Hardware wallet and seed backup should NEVER be in the same location. Theft of one should not compromise the other.

## Geographic Distribution

### Single-Sig Setup

- Device: Home safe
- Seed backup: Bank deposit box or trusted family member's location
- Distance: Minimum 50 miles recommended (different disaster zones)

### 2-of-3 Multisig Setup

Distribute across 3 locations:
```
Location A (home safe):        Device 1 + Seed 1 + Wallet Descriptor
Location B (trusted person):   Device 2 + Seed 2 + Wallet Descriptor
Location C (bank vault):       Seed 3 + Wallet Descriptor (no device required)
```

No single location compromise results in fund loss:
- Location A stolen: Attacker has 1 of 3 keys. Funds safe. Move funds urgently.
- Location A destroyed: Use Locations B + C to recover. No fund loss.

### 3-of-5 Institutional Setup

For institutional treasuries:
- 5 key locations across at least 3 jurisdictions
- At least 1 location outside your country of residence
- Legal entities or trusted third parties (not individuals) at some locations

## Concealment Strategy

The most secure safe is one nobody knows exists. Obvious safes in master bedroom closets are the first target for burglars.

**Concealment options:**
- Book safes (for small amounts)
- Under-floor safes beneath carpet/floorboards
- Faux walls or electrical panels
- Buried steel containers (expensive, specialized)

**Don't rely on concealment alone** — it fails when someone has time to search. Use concealment + quality safe + geographic distribution.

## Inheritance Planning

Bitcoin held in self-custody is at risk of permanent loss if you die without a clear inheritance plan.

### The Problem

Your heirs need:
1. The seed words or wallet descriptor
2. Instructions for how to use them
3. A way to receive the information only upon your death

### Options

**Letter + Legal Executor:**
- Write a detailed "Bitcoin inheritance letter" with seed backup locations and instructions
- Store with your will, given to executor only upon death
- Risk: executor must be trusted; legal process can be slow

**Multisig for Inheritance:**
- Include a trusted lawyer or family member as a key holder in your multisig
- They hold 1 of 3 keys — cannot access funds alone, but can help recover after death
- Requires teaching them how to co-sign

**Dead Man's Switch Services:**
- Services like Sarcophagus or custom-built solutions that release information after a defined period without check-in
- Cryptographic guarantee without trust in a third party

**Commercial Custody Services:**
- Casa, Unchained Capital offer inheritance planning as part of multisig services
- They hold 1 key; you hold 2; they release on proof of death

### What to Document

At minimum, your inheritance documentation should include:
1. The fact that Bitcoin exists and roughly how much
2. Where to find the hardware wallets
3. Where to find the seed backups
4. The wallet descriptor (if multisig)
5. Step-by-step instructions for a non-technical person
6. Contact information for someone who can help (Bitcoin-literate friend or service)

## Related Pages

- [Duress PINs](/opsec/duress-pins)
- [KYC-free Bitcoin](/opsec/kyc-free-bitcoin)
- [Steel Plates](/seed/steel-plates)
- [Multisig with Sparrow](/advanced/multisig-sparrow)
