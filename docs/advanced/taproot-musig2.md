---
id: taproot-musig2
title: Taproot and MuSig2
sidebar_label: Taproot & MuSig2
sidebar_position: 3
description: How Taproot and MuSig2 improve Bitcoin multisig privacy and efficiency, and what hardware wallet support looks like in 2024.
keywords: [Taproot, MuSig2, P2TR, Schnorr signatures, multisig privacy, Bitcoin upgrade]
tags: [level-2, taproot, multisig]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Taproot and MuSig2 <HardeningBadge level={2} />

Taproot (activated at block 709,632 in November 2021) introduced Schnorr signatures to Bitcoin. MuSig2 builds on Schnorr to enable n-of-n threshold signatures that are **indistinguishable from single-sig on-chain** — a major privacy and efficiency improvement over traditional multisig.

## Why This Matters

### Traditional Multisig (P2WSH)

A 2-of-3 P2WSH transaction reveals:
- The multisig policy (M and N) in the scriptPubKey
- All public keys involved
- Which M signers participated

This makes multisig wallets identifiable by chain analysis firms. Every participant in a P2WSH multisig is permanently marked.

### Taproot Multisig (P2TR + MuSig2)

A MuSig2 transaction looks identical to single-sig on-chain:
- Reveals only one aggregated public key
- Reveals only one aggregated Schnorr signature
- Policy and participants are completely hidden

The privacy gain is substantial. A MuSig2 coinbase reward, an exchange withdrawal, and a corporate treasury multisig are all indistinguishable.

## MuSig2 vs FROST

Two Schnorr-based multisig protocols exist:

| Protocol | Type | Hardware support (2024) |
|----------|------|------------------------|
| MuSig2 | N-of-N (requires ALL signers) | Coldcard (experimental), Jade |
| FROST | T-of-N (threshold) | Limited / in development |

MuSig2 requires all N participants to sign. FROST enables true M-of-N threshold with Schnorr. FROST hardware wallet support is still maturing.

## Current Hardware Wallet Support

As of 2024, MuSig2 support is limited:

- **Coldcard Mk4:** MuSig2 via PSBT extension fields (experimental, not production-recommended)
- **Jade:** MuSig2 support in development
- **Passport, BitBox02:** P2TR single-sig supported; MuSig2 not yet available
- **Ledger:** P2TR supported; MuSig2 in testing

**Practical recommendation:** Use P2WSH multisig today (Sparrow/Specter + any major hardware wallet). Transition to MuSig2 when hardware support matures and software has been audited in production.

## Taproot Single-Sig (Available Now)

Even without MuSig2, you can use Taproot addresses (P2TR) for single-sig:

- **Privacy:** Taproot outputs are unspent in one unified pool; your single-sig doesn't reveal it's single-sig until spending
- **Fees:** Taproot scripts can be cheaper than P2WPKH for complex spending conditions
- **Script path:** Taproot allows hidden backup spending conditions via MAST

Most hardware wallets support P2TR single-sig today. In Sparrow: create wallet → Script Type: P2TR.

## Understanding Schnorr Signature Aggregation

Traditional ECDSA (P2WPKH/P2WSH) signatures cannot be aggregated — each signature is independent. Schnorr signatures have a linear property that allows:

```
sig_aggregate = sig_1 + sig_2 + ... + sig_n
pubkey_aggregate = pubkey_1 + pubkey_2 + ... + pubkey_n
```

Verification: `sig_aggregate` valid under `pubkey_aggregate` → all N participants signed.

MuSig2 secures this process against rogue-key attacks using a commitment scheme before key aggregation.

## Wallet Descriptor for Taproot

P2TR single-sig descriptor in Sparrow:

```
tr([fingerprint/86'/0'/0']xpub.../0/*)
```

For MuSig2 when hardware support arrives:

```
tr(musig(xpub1, xpub2, xpub3)/0/*)
```

## Related Pages

- [Multisig with Sparrow](/advanced/multisig-sparrow)
- [Multisig with Specter](/advanced/multisig-specter)
- [Hardware Comparison](/hardware/hardware-comparison)
