---
id: duress-pins
title: Duress PINs and Decoy Wallets
sidebar_label: Duress PINs
sidebar_position: 1
description: How to use Coldcard's duress wallet and brick-me PIN features to protect Bitcoin under physical coercion.
keywords: [duress PIN, decoy wallet, brick-me PIN, Coldcard duress, coercion, $5 wrench attack]
tags: [level-3, opsec, coercion]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Duress PINs and Decoy Wallets <HardeningBadge level={3} />

The "$5 wrench attack" refers to an attacker bypassing cryptography through physical coercion — threatening violence unless you reveal your PIN or seed. Technical security cannot stop a determined attacker with physical access to you.

Duress features provide plausible deniability and damage limitation.

## Coldcard's Duress System

Coldcard Mk4 supports three coercion responses:

### 1. Duress PIN → Decoy Wallet

Configure a separate PIN that opens a different wallet derived from the same seed:

```
Real PIN:   1234-5678  →  Real wallet (large amount)
Duress PIN: 9999-1111  →  Decoy wallet (small amount)
```

The decoy wallet has a different derivation path. It looks like a real wallet. An attacker has no way to verify whether it's the real wallet without knowledge of your holdings.

**Setup:**
```
Coldcard: Advanced → Duress Wallet
Enter a new duress PIN (different from real PIN)
Coldcard confirms: "Duress wallet set"
```

**Load the decoy wallet with a believable small amount** — an empty decoy is suspicious. A few hundred dollars worth of BTC looks plausible as a "spending wallet."

### 2. Brick-Me PIN

A special PIN that permanently destroys the Coldcard's secure element:

```
Real PIN:   1234-5678  →  Wallet access
Duress PIN: 9999-1111  →  Decoy wallet
Brick PIN:  0000-0000  →  Device permanently destroyed
```

Once the brick-me PIN is entered, the device cannot be recovered. Your Bitcoin remains safe because the attacker never had your seed words — only the device.

:::warning
The brick-me PIN destroys the device permanently. No recovery is possible. Ensure your seed backup is secure before configuring this.
:::

**Setup:**
```
Coldcard: Advanced → Danger Zone → Brick Me PIN
Enter the PIN you want to act as a brick trigger
Confirm
```

### 3. Wrong-PIN Wipe

After 21 incorrect PIN attempts, Coldcard wipes itself. This protects against automated brute-force.

## Strategy Considerations

### Duress Wallet Funding

Load the decoy wallet with enough to be plausible but not worth the risk. Consider:

- Amount relative to your perceived holdings (an attacker may have researched you)
- Amount that satisfies a "petty theft" level attacker but not a professional
- Behavioral plausibility — the decoy wallet should have transaction history

### What an Attacker Can Verify

An attacker with your device and duress PIN can:
- See the wallet balance and transaction history
- See the derivation path (unusual path suggests decoy — use default path for decoy)
- Attempt to access another wallet via different PINs (but they don't know how many PINs exist)

An attacker cannot:
- Determine if there is a real wallet without the real PIN
- Recover funds if the brick-me PIN has been entered
- Verify whether the balance shown is all your Bitcoin

### Geographic Separation as Primary Defense

The most effective coercion defense is not technical — it's not having the ability to produce funds under pressure:

- Multisig where quorum requires devices in different locations
- Time-locks that prevent spending for hours or days
- A trusted third party who must co-sign

If your multisig requires a co-signer who is not present, you genuinely cannot produce funds under immediate coercion. This is more robust than duress PINs.

## Privacy as Prevention

The best defense against the wrench attack is not being identified as a Bitcoin holder:

- Don't discuss holdings publicly or on social media
- Use KYC-free acquisition where possible (see [KYC-free Bitcoin](/opsec/kyc-free-bitcoin))
- Keep your Bitcoin node and wallet activity private

## Passport's Approach

The Passport (as of Batch 2) does not support a hardware-level duress PIN, but you can create a separate passphrase-derived wallet with a small amount and disclose only that passphrase under coercion.

## Related Pages

- [KYC-free Bitcoin](/opsec/kyc-free-bitcoin)
- [Physical Security](/opsec/physical-security)
- [Coldcard Setup](/hardware/coldcard)
