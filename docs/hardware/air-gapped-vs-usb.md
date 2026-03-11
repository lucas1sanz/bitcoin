---
id: air-gapped-vs-usb
title: Air-gapped vs USB Hardware Wallets
sidebar_label: Air-gapped vs USB
sidebar_position: 1
description: Understanding the security difference between air-gapped hardware wallets (QR/SD card) and USB-connected devices.
keywords: [air-gapped, USB wallet, QR code signing, hardware wallet security, attack surface]
tags: [level-1, hardware]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Air-gapped vs USB Hardware Wallets <HardeningBadge level={1} />

The most fundamental hardware wallet security distinction is whether the device ever creates a physical connection to a networked computer.

## USB-Connected Wallets

USB wallets (Ledger, Trezor, BitBox02 in USB mode) communicate directly with your computer over USB. The signing happens on the device — private keys never leave — but the USB channel creates a potential attack surface:

- **USB firmware attacks** — malicious firmware delivered over USB (rare but demonstrated in research)
- **Supply-chain interdiction** — USB interface can be probed during shipping
- **Side-channel over USB** — power analysis attacks are easier over physical connection

For most users, USB wallets are perfectly safe. The attacks above require sophisticated, targeted adversaries.

## Air-gapped Wallets

Air-gapped wallets (Passport, Coldcard in air-gapped mode, Jade with Bluetooth off) never connect to a networked computer. Communication happens via:

| Medium | Direction | Examples |
|--------|-----------|---------|
| QR codes | Bidirectional | Passport, Coldcard (PSBT QR) |
| MicroSD card | Bidirectional | Coldcard, Jade |
| Camera scan only | One-way receive | Most wallets |

The air gap eliminates the entire USB/Bluetooth attack surface. The tradeoff is workflow friction — you must physically transfer data via camera or SD card.

## Which Should You Choose?

```
Threat: Remote/automated attacks only
→ USB is fine. Ledger Nano X, BitBox02, Trezor Safe 3.

Threat: Targeted physical access, sophisticated adversary
→ Air-gapped. Passport, Coldcard Mk4.

Threat: Institutional, jurisdiction-level adversary
→ Air-gapped multisig with diverse hardware.
```

## Practical Workflow Comparison

**USB signing (Sparrow + BitBox02):**
1. Connect BitBox02 via USB
2. Sparrow shows PSBT to sign
3. Confirm on device screen
4. Signed transaction returned automatically

**Air-gapped signing (Sparrow + Passport):**
1. Sparrow displays PSBT as animated QR
2. Scan with Passport camera
3. Review and sign on Passport
4. Passport displays signed PSBT as animated QR
5. Sparrow scans signed PSBT from Passport screen

The air-gapped workflow takes ~60 seconds more. For most signings, that is a reasonable price for the eliminated attack surface.

## Recommendation

Start with whatever you will actually use correctly. A USB wallet you understand completely beats an air-gapped wallet you connect via USB anyway "just to make it easier."

See [Passport](/hardware/passport), [Coldcard](/hardware/coldcard), and [BitBox02](/hardware/bitbox02) for device-specific setup guides.
