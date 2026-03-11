---
id: paper-vs-metal
title: Paper vs Metal Seed Backup
sidebar_label: Paper vs Metal
sidebar_position: 3
description: When paper seed backups are acceptable and when you need steel — a practical decision framework.
keywords: [paper backup, metal backup, seed security, BIP39 backup, laminated paper]
tags: [level-1, seed, backup]
---

# Paper vs Metal Seed Backup

Paper is the default first backup medium. Steel is the permanent home. Understanding when to upgrade from paper to metal helps you avoid both under-protecting and over-engineering your setup.

## Paper Backup

### When Paper Is Acceptable

- **Immediate backup** — paper while you verify the setup, before metal arrives
- **Small test amounts** — learning on a wallet with trivial funds
- **Temporary migration** — moving between wallets, steel plates ordered

### Paper Best Practices

If you use paper:

1. **Archive-grade paper** — 90lb or heavier, acid-free
2. **Archival ink** — gel ink, not ballpoint (ballpoint fades in 10–20 years)
3. **Laminate** — 5mil lamination adds water resistance (not fire resistance)
4. **Dark storage** — UV degrades paper and ink; store in opaque envelope
5. **Multiple copies** — paper is fragile; make 2–3 copies in different locations

### Paper's Fatal Weaknesses

| Threat | Paper | Steel |
|--------|-------|-------|
| House fire (600°C+) | Destroyed | Survives |
| Flood | Destroyed (unless laminated) | Survives |
| 20-year degradation | Possible ink fade | No degradation |
| UV light | Ink fades | No effect |
| Cheap, easy setup | ✓ | Requires tools or purchase |

## Metal Backup

### When Metal Is Required

- Any amount you cannot afford to lose
- Long-term storage (5+ years)
- Inheritance planning — heirs may need to access in 30 years
- Geographic separation across multiple locations

### Metal Options by Cost

```
$0     Stainless steel shim (hardware store) + letter stamps you own
$25    Keystone Tablet, SteelWallet
$40    Coldbit Steel
$90    Cryptosteel Capsule
$200+  Custom engraved plates
```

The $40–90 range covers most use cases well. See [Steel Plates](/seed/steel-plates) for a full comparison.

## Decision Framework

```
Holding value:  Test amounts (<$100)  → Paper is fine temporarily
                Small (<$1,000)       → Paper with lamination + 2 copies
                Medium ($1,000–10k)   → Steel required
                Large (>$10k)         → Steel + geographic distribution

Time horizon:   < 1 year             → Paper acceptable with caveats
                1–5 years            → Steel strongly recommended
                5+ years             → Steel mandatory

Inheritance:    Yes                  → Steel, geographically distributed
```

## Hybrid Approach

Many users use a hybrid approach:

1. **Paper** — generated during setup, kept secure while steel backup arrives
2. **Steel** — primary long-term backup
3. **Encrypted digital** — optional tertiary backup (e.g., encrypted with Veracrypt, stored offline)

The encrypted digital backup is controversial. If the encryption is strong and the file is truly offline, it adds resilience. If the encryption password is weak or the file is cloud-synced, it adds risk.

## Passphrase Backups

If you use a BIP39 passphrase (25th word), **back it up separately from your seed words.** The passphrase should be:

- Memorized if possible
- If written, stored in a completely different location from the seed words
- Never stored on a device that has seen your seed words

A passphrase backup strategy that stores seed + passphrase in the same location defeats the purpose.

## Related Pages

- [Steel Plates](/seed/steel-plates)
- [Dice Roll Generation](/seed/dice-roll-generation)
- [Physical Security](/opsec/physical-security)
