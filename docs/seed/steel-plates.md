---
id: steel-plates
title: Steel Plate Seed Backup
sidebar_label: Steel Plates
sidebar_position: 2
description: How to stamp or engrave your Bitcoin seed phrase onto stainless steel for fire, flood, and corrosion resistance.
keywords: [steel plate, seed backup, Cryptosteel, Coldbit, Bilodeau, fire resistant, stainless steel]
tags: [level-1, seed, backup]
---

import HardeningBadge from '@site/src/components/HardeningBadge';

# Steel Plate Seed Backup <HardeningBadge level={1} />

Paper deteriorates. Ink fades. Houses burn. Steel survives.

Stainless steel seed backups are the standard for long-term Bitcoin seed storage. A properly made steel backup can survive house fires (800°C+), floods, and decades of storage.

## Methods

### 1. Letter Stamps (DIY)

**Materials:** 1/4" stainless steel letter stamps, steel plate or tile, safety glasses, hammer

**Process:**
1. Purchase 304 or 316 stainless steel plate (3mm+ thick)
2. Mark grid lines with a scribe or marker
3. Stamp each letter firmly — verify impression depth
4. Wipe clean, verify all letters are legible

**Cost:** ~$50–80 for stamps + plates
**Durability:** Excellent — fully mechanical, no adhesive or ink

:::tip
You only need the first 4 letters of each BIP39 word. All 2048 words are uniquely identified by their first 4 characters. Stamp: `ZONE ZERO ZEAL ZINC` not `ZONE ZERO ZEALOUS ZINCIFY`.
:::

### 2. Commercial Plates

| Product | Method | Material | Price | Notes |
|---------|--------|---------|-------|-------|
| Cryptosteel Capsule | Insert tiles | 304 SS | ~$90 | No stamping required |
| Coldbit Steel | Stamp | 304 SS | ~$40 | DIY stamping guide included |
| Bilodeau BTC | Stamp or engrave | 316 SS | ~$60 | Thicker steel |
| SteelWallet | Letter cards | 304 SS | ~$30 | Card-based, no tools |
| Keystone Tablet | Punch cards | 304 SS | ~$25 | Budget option |

### 3. Laser Engraving

Professional laser engraving on steel produces excellent results but requires access to a laser engraver and raises OPSEC concerns (operator knows your seed words unless you use opaque envelopes and pre-generated plates).

For self-custody, letter stamps are preferred over third-party engraving.

## Fire and Flood Testing

Independent testers (including Jameson Lopp) have subjected commercial plates to standardized fire and water tests:

- **Fire test:** 30 min at 800°C — all 304+ SS products survived
- **Flood test:** 24h submersion — no degradation
- **Corrosion test:** Salt spray — 316 SS outperforms 304 SS

The weakest links are typically plastic spacers in tile-based systems (they melt above ~200°C). Pure steel construction with no plastic components is preferred.

## What to Stamp/Engrave

Store the first 4 letters of each word plus position number:

```
1:ZONE  2:ZERO  3:ZEAL  4:ZINC  5:YOGA  6:WILD
7:WORK  8:WOLF  9:WASH 10:WANT 11:WAGE 12:WADE
...
```

Include the word positions. An unordered list of seed words is useless.

## Storage Strategy

:::danger
Do NOT store your steel plate and your hardware wallet together. Physical separation is the point.
:::

**Recommended locations:**
- Home safe (fire-rated, bolted to structure)
- Bank safety deposit box (jurisdiction risk — weigh carefully)
- Trusted family member's location
- Professional vault service

For multisig, each seed backup should be stored in a different location and, ideally, different jurisdiction.

## Testing Your Backup

After stamping, test the backup:

1. Wipe your hardware wallet (Advanced → Danger Zone → Erase Wallet)
2. Restore from the steel plate seed words
3. Verify the derived wallet address matches your previous wallet

If they don't match, your backup has an error. Find and fix it now, not in an emergency.

## Related Pages

- [Paper vs Metal Backup](/seed/paper-vs-metal)
- [Dice Roll Generation](/seed/dice-roll-generation)
- [Physical Security](/opsec/physical-security)
