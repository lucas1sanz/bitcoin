---
id: dice-roll-generation
title: Seed Generation via Dice Rolls
sidebar_label: Dice Roll Generation
sidebar_position: 1
description: How to generate a Bitcoin seed phrase using physical dice for provably unbiased entropy, compatible with Coldcard and Passport.
keywords: [dice rolls, entropy, seed generation, BIP39, Coldcard dice, Passport dice, provable randomness]
tags: [level-1, seed, entropy]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Dice Roll Generation <HardeningBadge level={1} />

Hardware wallet random number generators are trusted by billions in Bitcoin. But if you want **provably unbiased entropy** that you can verify yourself, dice rolls are the gold standard. No firmware trust required.

## Why Dice Rolls

A standard die produces one of 6 outcomes per roll. 99 dice rolls produce approximately 256 bits of entropy (log₂(6^99) ≈ 255.9 bits) — sufficient for a 24-word BIP39 seed.

| Rolls | Bits of Entropy | Equivalent |
|-------|----------------|-----------|
| 50 | ~129 bits | Marginal (128-bit security) |
| 62 | ~160 bits | Acceptable |
| 99 | ~256 bits | **Recommended — matches 24-word seed** |

Using 99 rolls is the standard recommendation. More rolls don't hurt; fewer rolls reduce security.

## What You Need

- **Casino-grade die** — precision-machined, not plastic toy dice (pip-drilled dice are biased)
- **Flat rolling surface**
- Your hardware wallet (Coldcard or Passport)
- Paper and pen to record roll sequence (optional but verifiable)

Casino-grade dice: GPI Casino, KEM, Midwest Game Supply — available on Amazon for ~$15.

## Process: Coldcard

1. Power on Coldcard (no SIM needed for this step)
2. Navigate to: **Advanced → Dice Rolls**
3. Roll the die, enter each result (1–6) using the keypad
4. Coldcard displays running entropy accumulation
5. After 99+ rolls, press ✔ to generate seed
6. Coldcard derives a 24-word BIP39 seed using SHA256(roll sequence)

```
[Display shows during rolling]
Dice rolls so far: 43
SHA256 of input: a3f2...9c1e
Keep rolling or press OK to generate
```

## Process: Passport

1. Navigate to: **Settings → New Seed → Dice Rolls**
2. Enter each roll result via the touchscreen
3. After 99 rolls, Passport generates the seed words
4. Write down all 24 words in order

## Process: Manual (No Hardware Wallet)

If you want to verify the derivation or generate a seed without trusting any device:

```bash
# Record your 99 dice rolls as a string, e.g.:
ROLLS="1234561234...56123456"

# Hash the rolls
echo -n "$ROLLS" | sha256sum

# Use the hash as entropy to derive BIP39 words
# Using Python's mnemonic library:
python3 -c "
from mnemonic import Mnemonic
import hashlib

rolls = '$ROLLS'
entropy_bytes = hashlib.sha256(rolls.encode()).digest()
# Use first 32 bytes for 24 words
mnemo = Mnemonic('english')
words = mnemo.to_mnemonic(entropy_bytes)
print(words)
"
```

:::warning
Manual derivation requires a trusted, airgapped computer running verified software. The hardware wallet approach is simpler and more secure for most users.
:::

## Recording Your Rolls (Optional Verification)

Record each roll result before entering it into the device. After generating the seed, you can independently verify that the device applied the same SHA256 derivation to your roll sequence.

```
Roll 1:  4
Roll 2:  2
Roll 3:  6
Roll 3:  1
...
Roll 99: 5

SHA256("4261...5") = [matches display]
```

This verifies the device is using your entropy, not substituting its own.

## After Generation

1. Write all 24 words on paper — **verify each word against the BIP39 wordlist**
2. Test your backup immediately by wiping and restoring from the seed words
3. Transfer to [steel plates](/seed/steel-plates) for long-term storage

## Related Pages

- [Steel Plates](/seed/steel-plates)
- [Paper vs Metal Backup](/seed/paper-vs-metal)
- [Coldcard Setup](/hardware/coldcard)
- [Passport Setup](/hardware/passport)
