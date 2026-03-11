---
id: multisig-specter
title: Multisig with Specter Desktop
sidebar_label: Multisig — Specter
sidebar_position: 2
description: Setting up multisig Bitcoin self-custody using Specter Desktop, with Bitcoin Core full node integration.
keywords: [Specter Desktop, multisig, Bitcoin Core, full node, Electrum, self-sovereign node]
tags: [level-2, multisig, Specter]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Multisig with Specter Desktop <HardeningBadge level={2} />

Specter Desktop is a multisig-focused wallet interface that connects directly to a Bitcoin Core full node. Unlike Sparrow (which can use Electrum servers), Specter enforces full node sovereignty by design.

## Why Specter vs Sparrow

| Feature | Specter Desktop | Sparrow Wallet |
|---------|----------------|---------------|
| Backend | Bitcoin Core only | Bitcoin Core, Electrum, or public server |
| UI paradigm | Web browser (localhost) | Native desktop app |
| Multisig UX | First-class | Excellent |
| Hardware wallet support | USB + air-gapped | USB + air-gapped |
| Full node required | Yes (by design) | Optional |
| Platform | Linux, macOS, Windows | Linux, macOS, Windows |

## Prerequisites

- Bitcoin Core node (fully synced — ~700GB disk space)
- Specter Desktop installed
- 2–3 hardware wallets with independent seeds
- Port 7777 accessible locally (default Specter port)

## Step 1: Set Up Bitcoin Core

```bash
# Install Bitcoin Core (verify PGP signatures from bitcoincore.org)
# bitcoin.conf recommended settings:

server=1
txindex=1
rpcuser=specter
rpcpassword=CHANGE_THIS_TO_RANDOM_STRING
rpcallowip=127.0.0.1
```

Full sync takes days. Use a fast SSD. Pruned mode is possible but limits some functionality.

## Step 2: Connect Specter to Bitcoin Core

1. Open Specter Desktop (http://localhost:7777)
2. Settings → Bitcoin Core Node
3. Enter RPC credentials from bitcoin.conf
4. Specter verifies connection: ✓ Connected

## Step 3: Add Hardware Wallet Devices

Specter's "Devices" section manages hardware wallets:

1. Specter: **Add Device** → select manufacturer
2. Connect hardware wallet via USB or air-gap (QR/SD)
3. Specter imports xpub for the default derivation path

Repeat for each hardware wallet in your multisig setup.

## Step 4: Create Multisig Wallet

1. Specter: **Add Wallet → Multisig**
2. **Quorum:** set M and N (e.g., 2 of 3)
3. **Script type:** P2WSH (native SegWit recommended)
4. **Select devices:** choose your hardware wallets
5. **Create Wallet** — Specter constructs the wallet descriptor

## Step 5: Receive and Verify Addresses

For each receive address:

1. Specter: **Addresses** tab → click an address → **Verify**
2. Specter instructs you to verify on each device
3. Each connected device displays the address for confirmation

Verify on at least 2 of 3 devices before sending funds.

## Step 6: Signing Flow

1. Specter: **Send** → fill in recipient and amount
2. **Create PSBT** — Specter generates unsigned transaction
3. For each hardware wallet:
   - USB: connect device → Specter prompts → sign on device screen
   - Air-gapped: **"Show QR"** → scan with Coldcard/Passport → scan back signed QR
4. After M signatures collected → **Broadcast**

## Backing Up the Wallet

Specter stores wallet descriptors locally. Export and back up:

1. Specter: **Settings → Export** → download wallet backup JSON
2. Store with each seed backup (descriptor is not secret)

## Tor Integration (Optional)

Specter can expose its interface over Tor for remote access:

```toml
# In Specter config
tor = true
tor_service_dir = ~/.specter/tor
```

This allows signing from a remote location without exposing your home IP.

## Related Pages

- [Multisig with Sparrow](/advanced/multisig-sparrow)
- [KYC-free Bitcoin](/opsec/kyc-free-bitcoin)
- [Physical Security](/opsec/physical-security)
