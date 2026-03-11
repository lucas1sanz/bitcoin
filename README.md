# Bitcoin Self-Custody Security Reference

A practical, no-nonsense reference site for Bitcoin self-custody security hardening — from first withdrawal to institutional-grade multisig.

**Live site:** [lucas1sanz.github.io/bitcoin](https://lucas1sanz.github.io/bitcoin)

---

## Structure

```
/
├── index.html          # Landing page / level selector hub
├── level1.html         # The Basics (Beginner)
├── level2.html         # Hardware Security (Intermediate)
├── level3.html         # Hardening (Paranoid)
├── level4.html         # High Sovereignty (Institutional)
├── resources.html      # Curated external links with level filtering
├── search.html         # Full-site search powered by Lunr.js
└── assets/
    ├── css/            # base, layout, components, responsive
    ├── js/             # nav, search, filter, search-index
    └── img/            # bitcoin-logo.svg
```

## Stack

- Plain HTML/CSS/JS — no build step
- GitHub Pages serves the repo root directly
- [Lunr.js](https://lunrjs.com) via CDN for client-side search (only loaded on `search.html`)
- No trackers, no cookies, no analytics

## Running Locally

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

Or any static file server. No build step required.

## Content Levels

| Level | Audience | Topics |
|-------|----------|--------|
| **L1 — Basics** | Beginner | Exchange failures, withdrawal checklist, mobile wallets, seed phrases, first backup |
| **L2 — Hardware** | Intermediate | Hardware wallets (Coldcard, Trezor, Ledger, BitBox02), address verification, firmware updates |
| **L3 — Hardening** | Paranoid | BIP-39 passphrase, metal backups, own node, Sparrow wallet, coin control, Tor |
| **L4 — Sovereignty** | Institutional | Air-gapped signing, multisig 2-of-3, seed XOR, inheritance, physical security, OpSec |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Content is [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Code is MIT.

---

No trackers. No cookies. No affiliate links.
