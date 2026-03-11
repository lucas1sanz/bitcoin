---
id: hardware-comparison
title: Hardware Wallet Comparison
sidebar_label: Comparison Table
sidebar_position: 5
description: Side-by-side comparison of Passport, Coldcard Mk4, and BitBox02 across security, usability, and feature dimensions.
keywords: [hardware wallet comparison, Passport vs Coldcard, BitBox02, open-source hardware wallet]
tags: [level-1, hardware]
---

# Hardware Wallet Comparison

A quick reference table comparing the three wallets covered in this knowledge base.

## Quick Comparison

| Feature | Passport Batch 2 | Coldcard Mk4 | BitBox02 BTC-only |
|---------|-----------------|-------------|------------------|
| **Air-gapped** | Yes (QR only) | Yes (QR + MicroSD) | No (USB-C) |
| **Open-source HW** | Yes | Partial (schematics) | Yes |
| **Open-source FW** | Yes | Yes | Yes |
| **Secure element** | ATECC608A | ATECC608B + SE050 | ATECC608A |
| **Duress wallet** | No | Yes | No |
| **Brick-me PIN** | No | Yes | No |
| **Display type** | Color touchscreen | B&W, 4 navigation keys | OLED, touch slider |
| **Battery** | AA batteries | USB power only | USB power only |
| **MicroSD** | Yes | Yes | Yes (optional) |
| **QR signing** | Yes (animated) | Yes (Mk4) | No |
| **Multisig support** | Yes | Yes | Yes |
| **SeedQR import** | Yes | Yes | No |
| **Price** | ~$199 | ~$250 | ~$149 |
| **Best for** | Beginners + paranoid | Advanced users | Beginners |

## Security Architecture

### Passport
Foundation Devices publishes full hardware schematics and firmware. The air-gap is enforced by design — the PCB has no USB data lines, only a charging circuit. The ATECC608A stores the PIN attempt counter; 21 failed attempts wipes the device. Supply-chain attestation is built into first boot.

### Coldcard Mk4
Coinkite's dual-secure-element design adds defense in depth: if one chip is compromised, the other remains a barrier. The brick-me PIN permanently destroys the device, which is useful in coercive situations. The anti-phishing words system detects device substitution.

### BitBox02
Shift Crypto's design prioritizes simplicity and auditability. The touch slider for PIN entry reduces shoulder-surfing risk. The Bitcoin-only firmware variant has a smaller attack surface than multi-asset devices.

## Choosing Between Them

**Choose Passport if:**
- You want the best balance of UX and security
- Air-gap is a priority but you want color display and intuitive UI
- You're building a multisig with diverse manufacturers

**Choose Coldcard if:**
- You want maximum features and are comfortable with the learning curve
- You need duress wallet or brick-me PIN functionality
- You are an advanced user who wants granular control

**Choose BitBox02 if:**
- This is your first hardware wallet
- You prioritize simplicity and guided setup
- USB connectivity is acceptable in your threat model

## Multisig Manufacturer Diversity

For 2-of-3 multisig, use wallets from **different manufacturers**. A firmware bug, supply chain compromise, or legal order targeting one manufacturer won't affect the others.

Recommended combination: **Passport + Coldcard + BitBox02** (covers all three manufacturers above, all open-source, all different architectures).

## Related Pages

- [Passport](/hardware/passport)
- [Coldcard](/hardware/coldcard)
- [BitBox02](/hardware/bitbox02)
- [Multisig with Sparrow](/advanced/multisig-sparrow)
