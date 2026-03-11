---
id: bitbox02
title: BitBox02 — Setup Guide
sidebar_label: BitBox02
sidebar_position: 4
description: Setup guide for the BitBox02 Bitcoin-only edition, the most beginner-friendly open-source hardware wallet.
keywords: [BitBox02, Shift Crypto, BitBoxApp, beginner hardware wallet, open-source]
tags: [level-1, hardware, BitBox02]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# BitBox02 Bitcoin-only Edition <HardeningBadge level={1} />

The BitBox02 Bitcoin-only edition from Shift Crypto is widely considered the most beginner-friendly fully open-source hardware wallet. It features a touch-sensitive slider for PIN entry, a minimal UI, and a companion app (BitBoxApp) that guides first-time users step-by-step.

## Security Properties

- **Open-source hardware and firmware** — [github.com/digitalbitbox](https://github.com/digitalbitbox)
- **Bitcoin-only firmware** — eliminates all altcoin attack surface
- **Secure chip** — ATECC608A with hardware random number generator
- **USB-C connection** — not air-gapped (see below for impact)
- **MicroSD backup** — optional encrypted seed backup to SD card

## What You Need

- BitBox02 Bitcoin-only edition
- USB-C to USB-A adapter (included)
- BitBoxApp (download from shiftcrypto.ch — verify PGP signature)
- MicroSD card for backup (optional but recommended)

## Why USB Here Is Acceptable

The BitBox02 connects via USB. As discussed in [Air-gapped vs USB](/hardware/air-gapped-vs-usb), this is acceptable for most threat models. The USB interface only transmits signed/unsigned PSBTs — private keys never leave the device. For Level 1 security, this tradeoff is correct: the simpler workflow removes user error (a major threat vector).

## Setup

### 1. Download and Verify BitBoxApp

```bash
# Download the PGP-signed hash file from shiftcrypto.ch
# Verify with Shift Crypto's published public key
gpg --verify BitBoxApp-x.y.z.dmg.asc BitBoxApp-x.y.z.dmg
```

### 2. First Boot

1. Connect BitBox02 to computer
2. Open BitBoxApp — it detects the device automatically
3. App walks you through:
   - Device pairing (verify device code shown on both screens)
   - PIN creation (slide left/right to select digits)
   - Seed generation or restore

### 3. Set PIN

The touch slider makes PIN entry unintuitive for side-channel observation — you can't determine the PIN by watching finger position.

Recommended: 6+ digit PIN that you can enter smoothly under observation.

### 4. Seed Generation

BitBoxApp guides you through:
1. Generate new wallet (hardware TRNG)
2. Display 24 seed words — write them down
3. Verify by re-entering words in random order

**Optional MicroSD backup:** BitBox02 can encrypt your seed and store it on a MicroSD card. This is convenient but adds a backup device to secure.

### 5. Pair with Sparrow Wallet

For more advanced features, pair with Sparrow instead of (or in addition to) BitBoxApp:

1. Sparrow: File → New Wallet → Add Hardware Wallet → BitBox02
2. Connect device, confirm on BitBox02 screen
3. Sparrow imports the xpub and creates a watch-only wallet

## Verification Best Practices

Always verify receive addresses on the BitBox02 screen:

- BitBoxApp: request address → confirm on device
- Sparrow: Receive tab → "Verify" button → confirm on device

## Limitations vs Air-gapped Devices

| Feature | BitBox02 | Passport/Coldcard |
|--------|---------|-----------------|
| Air-gapped | No (USB) | Yes |
| Beginner UX | Excellent | Moderate |
| Open source | Yes | Yes |
| Seed backup | SD card or paper | Paper/steel |
| Price | ~$149 | $199–$250 |

## Related Pages

- [Air-gapped vs USB](/hardware/air-gapped-vs-usb)
- [Hardware Comparison](/hardware/hardware-comparison)
- [Why Self-Custody](/intro/why-self-custody)
