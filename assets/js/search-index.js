/* ============================================================
   search-index.js — Hand-authored Lunr corpus (~35 documents)
   Each document: { id, title, url, level, levelLabel, tags, body }
   ============================================================ */

var SEARCH_DOCUMENTS = [

  /* ── Level 1 — The Basics ─────────────────────────────── */
  {
    id: 'l1-why-self-custody',
    title: 'Why Self-Custody Matters',
    url: 'level1.html#why-self-custody',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'mt-gox ftx celsius exchange failure not your keys not your coins custodial risk',
    body: 'If you leave bitcoin on an exchange you are trusting a third party with your funds. Mt. Gox lost 850,000 BTC in 2014. FTX collapsed in November 2022 with an $8B shortfall, freezing customer withdrawals. Celsius Network halted withdrawals in June 2022 and filed for bankruptcy. The only way to fully own your bitcoin is to hold the private keys yourself.'
  },
  {
    id: 'l1-withdrawal-checklist',
    title: 'Exchange Withdrawal Checklist',
    url: 'level1.html#withdrawal-checklist',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'withdrawal test transaction clipboard hijacking address verification whitelist',
    body: 'Always send a small test transaction first. Verify the destination address on screen — clipboard-hijacking malware silently replaces copied addresses. Enable withdrawal address whitelisting with a 24-hour delay on your exchange account. Double-check the first 6 and last 4 characters of every address before confirming.'
  },
  {
    id: 'l1-mobile-wallets',
    title: 'Mobile Wallets Comparison',
    url: 'level1.html#mobile-wallets',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'blue wallet phoenix muun breez lightning mobile ios android',
    body: 'Blue Wallet supports both on-chain and Lightning. Phoenix (ACINQ) is a non-custodial Lightning wallet with automatic channel management. Muun is a self-custodial wallet with submarine swaps. Breez is non-custodial Lightning with a built-in podcast and point-of-sale. For on-chain cold storage a mobile wallet is not sufficient.'
  },
  {
    id: 'l1-seed-phrase',
    title: 'Understanding Your Seed Phrase',
    url: 'level1.html#seed-phrase',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'BIP-39 mnemonic entropy 12 words 24 words seed phrase private key derivation',
    body: 'A BIP-39 seed phrase is 12 or 24 words chosen from a 2048-word list. It encodes 128 or 256 bits of entropy. Anyone with your seed phrase has full access to all derived addresses. Never photograph your seed phrase, never type it into any website, never store it in cloud services like iCloud, Dropbox, or Google Drive. The phrase must be written on paper immediately and verified.'
  },
  {
    id: 'l1-first-backup',
    title: 'Your First Seed Backup',
    url: 'level1.html#first-backup',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'paper backup seed storage laminate two locations verify recovery',
    body: 'Write your seed phrase in uppercase block letters on acid-free paper. Store copies in two geographically separate locations — not both in your home. Consider laminating the paper for moisture protection. Immediately verify your backup by wiping the wallet and recovering from the written seed before funding it. Never use a printer or scanner to copy the seed phrase.'
  },

  /* ── Level 2 — Hardware Security ─────────────────────── */
  {
    id: 'l2-hw-explainer',
    title: 'What a Hardware Wallet Actually Does',
    url: 'level2.html#hw-explainer',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'hardware wallet private key signing secure element offline cold storage',
    body: 'A hardware wallet keeps your private keys in a dedicated secure chip that never exposes them to the host computer. When you want to send bitcoin, the unsigned transaction travels to the device, is signed inside the secure element, and the signed transaction is sent back. The private key never leaves the device. This protects against malware on your computer.'
  },
  {
    id: 'l2-ledger',
    title: 'Ledger Security Analysis',
    url: 'level2.html#ledger',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'ledger nano S Plus X closed source firmware data breach 2020 connect kit 2023 supply chain',
    body: 'Ledger uses a closed-source ST33 secure element. In July 2020 a data breach exposed personal data of 270,000 customers including names, phone numbers, and physical addresses. In December 2023 the Ledger Connect Kit npm package was compromised via a supply-chain attack, draining wallets connected to dApps. The firmware is not fully open source, making independent auditing impossible.'
  },
  {
    id: 'l2-trezor',
    title: 'Trezor Security Analysis',
    url: 'level2.html#trezor',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'trezor open source model T model one secure element physical attack typosquatting 2023',
    body: 'Trezor is fully open-source hardware and firmware. The Model One and Model T lack a secure element, making them vulnerable to sophisticated physical attacks that can extract the seed via voltage glitching. Trezor Safe 3 adds an Optiga secure element. In 2023 phishing via typosquatting domains targeted Trezor users with fake firmware updates. Physical access attacks require expensive lab equipment and take several hours.'
  },
  {
    id: 'l2-coldcard',
    title: 'Coldcard MK4 Setup & Security',
    url: 'level2.html#coldcard',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'coldcard mk4 dual chip PSBT microSD air-gap duress PIN brick-me PIN coinkite open source',
    body: 'Coldcard uses a dual-chip architecture: a ATECC608A secure element and a separate STM32 microcontroller. The firmware is open-source and verifiable. It supports PSBT (BIP-174) via microSD for true air-gap operation with no USB required. The duress PIN reveals a decoy wallet; the brick-me PIN permanently destroys the device. Recommended for serious self-custody. Verify the bag tamper seal and bag number on coinkite.com before use.'
  },
  {
    id: 'l2-bitbox02',
    title: 'BitBox02 Setup & Security',
    url: 'level2.html#bitbox02',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'bitbox02 shiftcrypto open source secure element simple UX microSD backup',
    body: 'The BitBox02 Bitcoin-only edition is fully open-source hardware and firmware with an ATECC secure element. Backup is done to microSD card in encrypted form. The companion app BitBoxApp is also open source. Simple interface designed for users moving up from mobile wallets. Manufactured in Switzerland by Shift Crypto.'
  },
  {
    id: 'l2-address-verification',
    title: 'Verifying Receive Addresses on Device',
    url: 'level2.html#address-verification',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'receive address verification hardware wallet man-in-the-middle address substitution',
    body: 'Always verify your receive address on the hardware wallet screen before sharing it with a sender. Address substitution attacks — where malware replaces an address displayed on your computer — are common. Your hardware wallet is the only trusted display. For high-value receives, verify the address on the device, write it down, and compare it manually.'
  },
  {
    id: 'l2-firmware-update',
    title: 'Firmware Update Protocol',
    url: 'level2.html#firmware-update',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'firmware update signature verification supply chain attack update protocol',
    body: 'Before any firmware update verify the release signature using GPG or the manufacturer tools. Only download from the official site. Never update firmware while a large amount of bitcoin is at stake — restore from seed on a new device first. Read the release notes. After update confirm your addresses still match your backup derivation path.'
  },

  /* ── Level 3 — Hardening ──────────────────────────────── */
  {
    id: 'l3-passphrase',
    title: 'BIP-39 Passphrase (25th Word)',
    url: 'level3.html#passphrase',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'BIP-39 passphrase 25th word decoy wallet plausible deniability separate storage',
    body: 'A BIP-39 passphrase extends your 24-word seed with an arbitrary string to derive a completely different wallet. It enables plausible deniability: keep a small decoy balance on the wallet without passphrase. The passphrase must be stored completely separately from the seed words — never together. Any typo or character variation produces a different empty wallet with no warning. Test recovery before relying on it.'
  },
  {
    id: 'l3-metal-backups',
    title: 'Metal Seed Backups',
    url: 'level3.html#metal-backups',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'cryptosteel cryptotag zeus blockplate metal seed backup fire water corrosion titanium steel stamping tiles',
    body: 'Paper backups are destroyed by fire, flood, and humidity. Metal backups survive house fires (up to 1400°C for typical house fires; steel melts at ~1370°C — use titanium). Options: Cryptosteel Capsule (stainless tiles, 4-letter abbrev), Cryptotag Zeus (titanium, letter punches), Blockplate (steel, punch stamp). For stamping: work letter by letter, verify each word before the next. Store in waterproof container inside a fire-safe.'
  },
  {
    id: 'l3-own-node',
    title: 'Running Your Own Node',
    url: 'level3.html#own-node',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'bitcoin core node umbrel raspberry pi SSD full node sovereignty transaction validation privacy',
    body: 'Running a full node means you validate every transaction yourself without trusting anyone. Required: Raspberry Pi 4 (4GB+ RAM), 2TB+ SSD, Bitcoin Core or node-in-a-box software (Umbrel, myNode, RaspiBlitz). IBD (Initial Block Download) takes 1-3 days on a fast connection. After sync, configure Sparrow Wallet to connect to your node via RPC or Electrum server (Fulcrum or Electrs).'
  },
  {
    id: 'l3-sparrow',
    title: 'Sparrow Wallet as Control Plane',
    url: 'level3.html#sparrow',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'sparrow wallet PSBT coin control UTXO labeling own node Electrum server watch-only',
    body: 'Sparrow Wallet is a desktop Bitcoin wallet focused on privacy and control. It supports PSBT for hardware wallet signing, coin control for selecting UTXOs manually, connects to your own Electrum server or node, and provides full transparency into transaction construction. Recommended for watch-only accounts linked to Coldcard via PSBT. Label every UTXO at receive time with source information.'
  },
  {
    id: 'l3-coin-control',
    title: 'Coin Control and UTXO Management',
    url: 'level3.html#coin-control',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'coin control UTXO management privacy labeling consolidation change output dust',
    body: 'Bitcoin transactions consume specific UTXOs as inputs. Combining UTXOs from different sources links them on-chain and reduces privacy. Use coin control in Sparrow to select specific UTXOs for each transaction. Label UTXOs at receipt time: note the source, date, and context. Avoid consolidating UTXOs unless you have a strong reason. Be careful with change outputs — they reveal wallet structure to blockchain analysts.'
  },
  {
    id: 'l3-tor',
    title: 'Tor and Network Privacy',
    url: 'level3.html#tor',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'tor onion network privacy bitcoin.conf proxy Sparrow Tor settings IP address leakage',
    body: 'Without Tor, your IP address is visible to peers you connect to and potentially blockchain surveillance companies. Configure Bitcoin Core: proxy=127.0.0.1:9050, onlynet=onion in bitcoin.conf. Sparrow Wallet has a built-in Tor toggle under Preferences > Server. Run a Tor daemon or use the Tor Browser bundle. This hides which addresses belong to you when you broadcast transactions.'
  },

  /* ── Level 4 — High Sovereignty ──────────────────────── */
  {
    id: 'l4-airgap',
    title: 'Stateless Signing & Air-Gapped Wallets',
    url: 'level4.html#airgap',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'seedsigner stateless airgap PSBT QR microSD raspberry pi zero photon offline signing',
    body: 'SeedSigner is a DIY, stateless air-gapped signing device built on a Raspberry Pi Zero. It loads the seed from a QR code at signing time and never stores it — no keys persist between sessions. PSBT transactions are transferred via animated QR codes or microSD. Because it is stateless there is nothing to physically extract. Cost ~$50 in parts. Build from the official GitHub repo and verify the firmware hash.'
  },
  {
    id: 'l4-multisig',
    title: 'Multisig 2-of-3 Setup',
    url: 'level4.html#multisig',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'multisig 2-of-3 BIP-48 descriptor backup sparrow caravan key distribution geographic redundancy',
    body: 'A 2-of-3 multisig wallet requires any 2 of 3 private keys to spend. Use BIP-48 derivation (m/48h/0h/0h/2h for native segwit). Create with Sparrow Wallet (imports Coldcard xpubs via PSBT/microSD) or Caravan by Unchained. The output descriptor must be backed up separately — loss of the descriptor makes recovery harder. Distribute the 3 keys across different physical locations and different hardware wallet brands.'
  },
  {
    id: 'l4-seed-xor',
    title: 'Seed XOR and Secret Sharing',
    url: 'level4.html#seed-xor',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'seed XOR SLIP-39 shamir secret sharing backup scheme coldcard XOR split seed',
    body: 'Seed XOR (Coldcard feature) splits a BIP-39 seed into two XOR shares — both required to reconstruct the seed. This is a backup splitting scheme, not a spending policy (unlike multisig). SLIP-39 (Shamir\'s Secret Sharing) from Trezor splits the seed into n shares where m are required. Important distinction: XOR/SLIP-39 protects backup storage; multisig protects the spending policy. Do not conflate them.'
  },
  {
    id: 'l4-inheritance',
    title: 'Inheritance Planning',
    url: 'level4.html#inheritance',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'inheritance planning letter of instructions heir multisig casa covenant dead man switch',
    body: 'Without inheritance planning your bitcoin may be lost when you die. Write a Letter of Instructions sealed in an envelope with your lawyer or in a safety deposit box: explains what bitcoin is, how many wallets you have, how to access the seed phrases (not included in the letter — referenced by location), and attorney contact. Consider dedicating one multisig key to an heir. Casa Covenant service provides assisted inheritance. Update the letter after any wallet changes.'
  },
  {
    id: 'l4-physical-security',
    title: 'Physical Security for Bitcoin Holders',
    url: 'level4.html#physical-security',
    level: '4',
    levelLabel: 'Institutional',
    tags: '$5 wrench attack physical attack TL-30 safe geographic distribution home security threat model',
    body: 'The "$5 wrench attack" — physical coercion — bypasses all cryptographic security. Mitigations: never disclose holdings publicly; use a multisig where no single location holds enough keys; geographic key distribution means an attacker cannot access all keys in one visit; a TL-30-rated safe (30 minutes tool resistance) for hardware and paper backups; a duress PIN on Coldcard for plausible deniability.'
  },
  {
    id: 'l4-opsec',
    title: 'OpSec for High-Value Holders',
    url: 'level4.html#opsec',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'operational security opsec disclosure PO box hardware registration social media privacy high net worth',
    body: 'Never publicly disclose your bitcoin holdings or approximate amounts — not on social media, podcasts, or to acquaintances. Use a PO box or a friend\'s address for hardware wallet deliveries to avoid tying your home address to bitcoin activity. Do not register hardware wallets with the manufacturer. Use a dedicated email address for bitcoin accounts. Assume any KYC exchange has leaked your data.'
  },

  /* ── Resources ────────────────────────────────────────── */
  {
    id: 'res-hardware-wallets',
    title: 'Hardware Wallet Resources',
    url: 'resources.html#hardware-wallets',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'coldcard bitbox02 trezor seedsigner hardware wallet vendor',
    body: 'Official sites and documentation for Coldcard (coinkite.com), BitBox02 (shiftcrypto.ch), Trezor (trezor.io), SeedSigner (seedsigner.com). Includes firmware downloads and verification guides.'
  },
  {
    id: 'res-software-wallets',
    title: 'Software Wallet Resources',
    url: 'resources.html#software-wallets',
    level: '2',
    levelLabel: 'Intermediate',
    tags: 'sparrow electrum specter blue wallet desktop software wallet',
    body: 'Sparrow Wallet (sparrowwallet.com), Electrum (electrum.org), Specter Desktop (specter.solutions), Blue Wallet (bluewallet.io). Sparrow recommended for PSBT and coin control. Electrum for power users and scripting.'
  },
  {
    id: 'res-node-software',
    title: 'Node Software Resources',
    url: 'resources.html#node-software',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'bitcoin core umbrel mynode raspiblitz fulcrum electrs node software',
    body: 'Bitcoin Core (bitcoincore.org) is the reference implementation. Node-in-a-box options: Umbrel (umbrel.com), myNode (mynodebtc.com), RaspiBlitz (raspiblitz.org). Electrum server options: Fulcrum (fast), Electrs (lower resource use).'
  },
  {
    id: 'res-metal-backups',
    title: 'Metal Backup Resources',
    url: 'resources.html#metal-backups',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'cryptosteel cryptotag blockplate metal backup titanium steel seed storage',
    body: 'Cryptosteel Capsule, Cryptotag Zeus (titanium), Blockplate (steel punch). Comparison: Cryptotag uses titanium (melts at 1668°C); standard stainless steel can warp above 1400°C in prolonged fires. Blockplate is the most affordable stamping option.'
  },
  {
    id: 'res-education',
    title: 'Educational Resources',
    url: 'resources.html#education',
    level: '1',
    levelLabel: 'Beginner',
    tags: 'lopp bitcoin optech mastering bitcoin BTC sessions education learning',
    body: 'Jameson Lopp\'s bitcoin resources (lopp.net), Bitcoin Optech (bitcoinops.org) for technical newsletters, Mastering Bitcoin by Andreas Antonopoulos (available free on GitHub), BTC Sessions YouTube channel for practical tutorials.'
  },
  {
    id: 'res-privacy-tools',
    title: 'Privacy Tools for Bitcoin',
    url: 'resources.html#privacy-tools',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'tor whonix tails privacy operating system anonymity network',
    body: 'Tor (torproject.org) for network-level privacy. Whonix is a desktop OS that routes all traffic through Tor. Tails is an amnesic live OS that leaves no trace. For maximum privacy run Bitcoin Core inside Whonix or on a dedicated Tails USB for high-value transactions.'
  },
  {
    id: 'res-multisig',
    title: 'Multisig Coordinator Resources',
    url: 'resources.html#multisig-coordinators',
    level: '4',
    levelLabel: 'Institutional',
    tags: 'sparrow caravan liana multisig coordinator descriptor wallet',
    body: 'Sparrow Wallet supports multisig natively with PSBT export. Caravan by Unchained Capital (unchained.com/caravan) is a browser-based open-source multisig coordinator. Liana by Wizardsardine adds timelocked recovery paths.'
  },
  {
    id: 'res-bip-standards',
    title: 'BIP Standards Reference',
    url: 'resources.html#bip-standards',
    level: '3',
    levelLabel: 'Paranoid',
    tags: 'BIP-39 BIP-48 BIP-174 PSBT SLIP-39 bitcoin improvement proposals standards',
    body: 'BIP-39: Mnemonic code for generating deterministic keys. BIP-48: Multi-account hierarchy for deterministic multisig wallets. BIP-174: Partially Signed Bitcoin Transactions (PSBT). SLIP-39: Shamir\'s Secret Sharing for Mnemonic Codes (Trezor). All BIPs available at github.com/bitcoin/bips.'
  }

];
