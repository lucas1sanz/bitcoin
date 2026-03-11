---
id: coldcard
title: Coldcard Mk4 — Setup Guide
sidebar_label: Coldcard
sidebar_position: 3
description: Complete setup guide for the Coldcard Mk4, including PIN setup, seed generation, duress wallet, and air-gapped signing via PSBT.
keywords: [Coldcard, Mk4, PSBT, air-gapped, duress PIN, Coinkite, hardware wallet]
tags: [level-1, hardware, Coldcard]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Coldcard Mk4 <HardeningBadge level={1} />

The Coldcard Mk4 from Coinkite is the most security-focused hardware wallet for advanced users. It supports fully air-gapped operation via MicroSD, has dual secure elements, and includes features like duress wallets, brick-me PIN, and the ability to verify the supply chain via a bag number system.

## Security Properties

- **Dual secure elements** — ATECC608B (Microchip) + SE050 (NXP)
- **Open-source firmware** — [github.com/Coldcard/firmware](https://github.com/Coldcard/firmware)
- **Air-gapped via MicroSD** — no USB data transfer required
- **Duress PIN** — opens a decoy wallet with a small amount
- **Brick-me PIN** — immediately destroys the device on entry
- **Anti-phishing words** — two secret words shown after PIN, verify device authenticity

## What You Need

- Coldcard Mk4 (in Coinkite security bag — verify bag number at their site)
- MicroSD card (FAT32 formatted, 2–32 GB)
- USB-C power supply OR portable battery
- Steel backup plates

## Initial Setup

### 1. Verify the Bag Number

Before unsealing, log the bag number at Coinkite's verification page. If the bag shows signs of tampering, do not use the device.

### 2. Power On and Set PIN

The Coldcard uses a two-part PIN system for protection against physical observation:

```
Part 1 (prefix): 2–6 digits — you memorize these
Anti-phishing words: device shows 2 secret words after prefix
Part 2 (suffix): 2–6 digits — you memorize these
```

**Write down the anti-phishing words.** If they ever change, the device has been replaced or tampered with.

Set an **Optional Duress PIN** — a separate PIN that unlocks a decoy wallet. See [Duress PINs](/opsec/duress-pins) for strategy.

### 3. Generate Seed

**Option A: Device-generated**
- Advanced → New Seed Words → 24 Words
- Coldcard uses hardware TRNG

**Option B: Dice rolls (strongly recommended)**
- Advanced → Dice Rolls
- Roll 99+ times, Coldcard derives seed using SHA256

**Option C: Import existing BIP39 seed**
- Advanced → Import Existing → 24 Words

### 4. Verify Seed

After recording words, go to Advanced → View Seed Words to verify. Never skip this step.

### 5. Configure Air-gapped Operation

```
Settings → USB → Disable USB (for maximum air-gap)
```

All subsequent interaction happens via MicroSD.

### 6. Export XPUB to Sparrow

1. Advanced → MicroSD Card → Export Wallet → Sparrow
2. Coldcard writes `coldcard-export.json` to MicroSD
3. In Sparrow: File → New Wallet → Import → Coldcard → select the JSON file

## Air-gapped Signing (PSBT via MicroSD)

1. In Sparrow: create transaction → Finalize → "Save PSBT"
2. Save to MicroSD card
3. Insert SD card into Coldcard: Ready to Sign → select PSBT file
4. Review: destination address, amount, fee
5. Press ✔ to sign — Coldcard writes signed PSBT to SD
6. In Sparrow: Load Transaction → load signed PSBT → Broadcast

:::tip
Always verify the destination address on the Coldcard screen against your known recipient address. This is the moment that matters — all other steps are setup.
:::

## QR Signing (Coldcard Mk4)

The Mk4 includes a QR code scanner. You can use animated PSBT QR codes instead of MicroSD:

1. Sparrow: Show QR (animated PSBT)
2. Coldcard: Scan QR → sign → display signed QR
3. Sparrow: Scan signed QR

## Advanced Features

| Feature | Location |
|---------|---------|
| Duress PIN | Advanced → Duress Wallet |
| Brick-me PIN | Advanced → Danger Zone → Brick Me |
| Seed XOR | Advanced → Seed XOR |
| Multisig setup | Settings → Multisig |

## Related Pages

- [Duress PINs](/opsec/duress-pins)
- [Dice Roll Generation](/seed/dice-roll-generation)
- [Multisig with Sparrow](/advanced/multisig-sparrow)
- [SeedQR](/advanced/seedqr)
