---
id: seedqr
title: SeedQR — Compact Seed Backup
sidebar_label: SeedQR
sidebar_position: 4
description: How to encode and use SeedQR — a QR code representation of your BIP39 seed for faster air-gapped recovery.
keywords: [SeedQR, QR code seed backup, Coldcard SeedQR, Passport SeedQR, compact seed]
tags: [level-2, seed, SeedQR]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# SeedQR <HardeningBadge level={2} />

SeedQR is an open standard for encoding a BIP39 seed phrase as a QR code. Developed by SeedSigner (the DIY air-gapped signing device project), SeedQR is now supported by Passport, Coldcard, and other major hardware wallets.

## Why SeedQR

Traditional seed word entry on hardware wallets is slow — typing 24 words one at a time takes minutes and is error-prone. SeedQR allows:

- **Instant loading** — scan the QR instead of typing 24 words
- **Air-gapped backup** — printed QR on paper or engraved on steel
- **Compact format** — a 24-word seed fits in a small QR code

## How SeedQR Encodes a Seed

BIP39 words are each assigned a number from 0–2047. SeedQR encodes these numbers as a decimal string:

```
Word 1: "zone" = 2047  → "2047"
Word 2: "zero" = 2046  → "2046"
...all 24 words concatenated as zero-padded 4-digit numbers
```

For 24 words: 24 × 4 digits = 96-character numeric string → compact QR code.

## Compact SeedQR

The standard SeedQR stores word indices as decimal (base-10). The "Compact SeedQR" variant uses binary encoding — more efficient, results in a smaller, denser QR code. Most hardware wallets support both formats.

## Hardware Wallet Support

| Device | Display SeedQR | Import via SeedQR |
|--------|---------------|------------------|
| Coldcard Mk4 | Yes | Yes |
| Passport (Batch 2) | Yes | Yes |
| SeedSigner | Yes | Yes |
| Jade | Yes | Yes |
| BitBox02 | No | No |

## Creating a SeedQR Backup

### Method 1: Display on Hardware Wallet

**Coldcard:**
```
Advanced → Seed QR → Display (shows QR of current seed)
```

**Passport:**
```
Backup → Export Seed QR → Display
```

Scan the displayed QR with a QR reader on a **completely offline device** to verify the encoding. Never display or scan seed QRs near a networked camera.

### Method 2: Generate Manually

Using the SeedSigner's documented algorithm, you can generate a SeedQR from word indices using any QR generator on an airgapped computer.

```python
# Map BIP39 words to indices
from mnemonic import Mnemonic
mnemo = Mnemonic('english')
wordlist = mnemo.wordlist

seed_words = ["zone", "zero", ...]  # your 24 words
indices = [wordlist.index(w) for w in seed_words]

# Standard SeedQR: 4-digit zero-padded decimal
qr_data = ''.join(f"{i:04d}" for i in indices)
# qr_data is the string to encode as a QR code
```

## Storing SeedQR Backups

### Printed Paper QR

- Print on archival paper with laser printer (toner lasts longer than inkjet)
- Laminate for water resistance
- Store in opaque envelope in a secure location

### Steel-Engraved QR

Some vendors offer steel plates with QR codes laser-engraved. This is fire and flood resistant. Test scannability before trusting the backup.

### Titanium-Etched QR

Higher cost, higher durability. Useful for very long-term or institutional storage.

## Security Considerations

:::warning
A SeedQR backup is as sensitive as your written seed words. Anyone who scans it has your Bitcoin. Store and protect it accordingly.
:::

SeedQR does NOT add security — it changes the format of the backup. All the physical security practices for seed words apply equally to SeedQR backups.

**Advantage over written words:** Harder to read at a glance (a photo of a QR from across a room may be unreadable, while seed words would be clearly visible). This is marginal security, not a primary control.

## Related Pages

- [Steel Plates](/seed/steel-plates)
- [Coldcard Setup](/hardware/coldcard)
- [Passport Setup](/hardware/passport)
- [Dice Roll Generation](/seed/dice-roll-generation)
