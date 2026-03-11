---
id: passport
title: Foundation Passport — Setup Guide
sidebar_label: Passport
sidebar_position: 2
description: Step-by-step setup guide for the Foundation Passport air-gapped hardware wallet, including seed generation and Sparrow pairing.
keywords: [Passport, Foundation Devices, air-gapped, QR code, hardware wallet setup]
tags: [level-1, hardware, Passport]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Foundation Passport <HardeningBadge level={1} />

The Passport (Batch 2 and Passport Prime) is a fully open-source, air-gapped hardware wallet from Foundation Devices. It communicates exclusively via QR codes and has no USB data channel — only a USB-C port for charging.

## Security Properties

- **Open-source hardware and firmware** — fully auditable
- **Air-gapped by design** — no USB data transfer ever
- **Secure element** — ATECC608A for PIN protection and anti-tamper
- **Supply chain validation** — ships with a security bag and device attestation
- **Battery-powered** — can operate completely isolated

## What You Need

- Passport device (verify seal intact)
- Two AA batteries or USB-C charger
- 12 or 24 blank index cards (for seed words), or steel backup plates
- Sparrow Wallet on an airgapped or online computer

## Initial Setup

### 1. Verify the Device

Before powering on, inspect the holographic security seal on the box. Foundation publishes the serial number verification process at their website. Verify the device attestation via the Passport's built-in supply-chain validation screen on first boot.

### 2. Set a Strong PIN

```
Recommended PIN: 6–8 digits, memorized — NOT written down
Warning: Wrong PIN 21 times = device wipes itself
```

Choose a PIN you can remember under stress. The Passport uses a 4–12 digit numeric PIN. Longer is better.

### 3. Generate Your Seed

**Option A: Passport generates entropy**
- Navigate to: Settings → Generate New Seed
- Passport uses hardware RNG (TRNG) seeded from user interaction
- Write down all 24 words **in order**, verify by re-entering

**Option B: Dice rolls (recommended for paranoid users)**
- Navigate to: Settings → Import Seed → Dice Rolls
- Roll a casino-grade die 99+ times, entering each result
- Passport converts rolls to BIP39 seed words

See [Dice Roll Generation](/seed/dice-roll-generation) for the full process.

### 4. Back Up Your Seed

Write the 24 words on paper first (to verify accuracy), then transfer to steel. See [Steel Plates](/seed/steel-plates) for recommendations.

:::danger
Your seed is your Bitcoin. Anyone with these 24 words controls your funds. Store them in a secure location, separate from your Passport device.
:::

### 5. Pair with Sparrow Wallet

1. In Sparrow: File → New Wallet → Add Hardware Wallet → Scan QR
2. On Passport: Navigate to Settings → Connect Wallet → Sparrow
3. Passport displays the account xpub as an animated QR code
4. Sparrow scans and imports the watch-only wallet

### 6. Receive Bitcoin

Always verify your receive address **on the Passport screen** before sending funds to it:

1. In Sparrow: Receive tab → copy address
2. On Passport: Tools → Address Explorer → verify it matches

## Signing Transactions

1. In Sparrow: create transaction, click "Create Transaction" → "Finalize"
2. Click "Show QR" — Sparrow displays animated PSBT QR
3. On Passport: Scan QR → review output amounts and destination
4. Confirm on Passport → Passport displays signed PSBT as animated QR
5. Sparrow scans signed QR → Broadcast

## Firmware Updates

Updates are delivered via MicroSD card. Download from Foundation's GitHub, verify the SHA256 hash, transfer to SD, and update via Settings → Firmware.

## Related Pages

- [Air-gapped vs USB](/hardware/air-gapped-vs-usb)
- [Dice Roll Generation](/seed/dice-roll-generation)
- [Steel Plates](/seed/steel-plates)
- [Multisig with Sparrow](/advanced/multisig-sparrow)
