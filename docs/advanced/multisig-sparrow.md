---
id: multisig-sparrow
title: 2-of-3 Multisig with Sparrow Wallet
sidebar_label: Multisig — Sparrow
sidebar_position: 1
description: Step-by-step guide to setting up 2-of-3 multisig Bitcoin custody using Sparrow Wallet with three hardware wallets.
keywords: [multisig, Sparrow Wallet, 2-of-3, PSBT, hardware wallet multisig, Bitcoin multisig setup]
tags: [level-2, multisig, Sparrow]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# 2-of-3 Multisig with Sparrow Wallet <HardeningBadge level={2} />

Multisig requires M-of-N hardware wallets to sign a transaction. A 2-of-3 setup means any 2 of your 3 hardware wallets can authorize spending — one device can be lost or compromised without losing funds.

## Prerequisites

- 3 hardware wallets from **different manufacturers** (e.g., Passport + Coldcard + BitBox02)
- 3 separate seed backups in separate locations
- Sparrow Wallet installed on an airgapped or online computer
- Understanding of single-sig custody

## Threat Model Addressed

| Threat | Single-sig | 2-of-3 Multisig |
|--------|-----------|-----------------|
| One device lost | Funds at risk if backup found | Safe — need 2 keys |
| One device stolen | At risk if PIN bypassed | Safe — need 2 keys |
| One seed backup found | Total loss | Safe — need 2 seeds |
| All devices in one location fire | Total loss | Safe — seeds distributed |

## Step 1: Generate Keys on Each Device

Set up each hardware wallet independently with its own seed:

1. **Wallet 1 (Passport):** Follow [Passport setup guide](/hardware/passport)
2. **Wallet 2 (Coldcard):** Follow [Coldcard setup guide](/hardware/coldcard)
3. **Wallet 3 (BitBox02):** Follow [BitBox02 setup guide](/hardware/bitbox02)

:::danger
Each wallet MUST have a completely independent seed. Never use the same seed on multiple devices in a multisig. That defeats the purpose.
:::

## Step 2: Export XPUBs

Export the extended public key (xpub) from each device. Sparrow uses these to construct the multisig wallet descriptor without needing private keys.

**Passport:** Settings → Connect Wallet → Sparrow → Display QR or export to SD
**Coldcard:** Advanced → MicroSD → Export Wallet → Generic JSON
**BitBox02:** Paired with Sparrow natively; Sparrow imports xpub directly

## Step 3: Create the Multisig Wallet in Sparrow

1. Sparrow: **File → New Wallet**
2. Name the wallet (e.g., "2of3-main")
3. Select **Policy Type: Multi Signature**
4. Set **M of N: 2 of 3**
5. Select **Script Type: P2WSH** (native SegWit — lowest fees)
6. For each cosigner slot, click "Add Hardware Wallet" or "Scan QR" to import each xpub
7. Click **Apply** — Sparrow generates the wallet descriptor

## Step 4: Verify and Back Up the Wallet Descriptor

The wallet descriptor encodes all 3 xpubs and the multisig policy. **If you lose this descriptor, you may not be able to recover your funds even with all 3 seeds.** BIP380 standardizes descriptors, and any compatible wallet can reconstruct the multisig from the descriptor.

```
# Example multisig descriptor (yours will differ)
wsh(sortedmulti(2,
  [fingerprint1/48'/0'/0'/2']xpub...,
  [fingerprint2/48'/0'/0'/2']xpub...,
  [fingerprint3/48'/0'/0'/2']xpub...
))
```

1. Sparrow: **File → Export Wallet** → save as JSON and as QR (for hardware wallet import)
2. Store a copy of the descriptor with **each seed backup** (not a security concern — descriptor is public info)
3. Import the descriptor onto each hardware wallet so they can display multisig receive addresses

## Step 5: Import Descriptor to Each Hardware Wallet

**Coldcard:**
```
# Copy descriptor JSON to MicroSD
# On Coldcard: Settings → Multisig → Import from SD
```

**Passport:**
```
# Display descriptor QR in Sparrow
# Scan with Passport: Settings → Multisig
```

This step is critical: after import, each device can verify receive addresses independently. Always verify a receive address on at least 2 devices before sending funds.

## Step 6: Receiving Bitcoin

1. Sparrow: **Receive** tab → copy address
2. Verify address on **2 or more hardware wallets**
3. Send Bitcoin to verified address

## Step 7: Signing Transactions

To spend funds, you need signatures from any 2 of 3 wallets:

1. Sparrow: **Send** → fill in recipient, amount, fee → **Create Transaction**
2. Sparrow: **Finalize** → **"Show QR"** or **"Save PSBT"**
3. Sign with **Wallet 1** (scan QR or MicroSD) → returns partially signed PSBT
4. Import partially signed PSBT back into Sparrow
5. Sign with **Wallet 2** → returns fully signed transaction
6. Sparrow: **Broadcast**

## Ongoing Maintenance

- Test the signing workflow quarterly with a small amount
- Verify each seed backup annually
- Keep the wallet descriptor backed up with each seed
- Update hardware wallet firmware on a regular schedule (but verify signatures first)

## Related Pages

- [Hardware Comparison](/hardware/hardware-comparison)
- [Multisig with Specter](/advanced/multisig-specter)
- [Taproot and MuSig2](/advanced/taproot-musig2)
- [Physical Security](/opsec/physical-security)
