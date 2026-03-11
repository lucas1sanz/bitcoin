import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'intro/why-self-custody',
        'intro/spectrum-of-security',
      ],
    },
    {
      type: 'category',
      label: 'Level 1 — Air-gapped Entry',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Hardware Wallets',
          collapsed: false,
          items: [
            'hardware/air-gapped-vs-usb',
            'hardware/passport',
            'hardware/coldcard',
            'hardware/bitbox02',
            'hardware/hardware-comparison',
          ],
        },
        {
          type: 'category',
          label: 'Seed Security',
          collapsed: false,
          items: [
            'seed/dice-roll-generation',
            'seed/steel-plates',
            'seed/paper-vs-metal',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Level 2 — Paranoid Path',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Level 2 — Paranoid Path',
        description: 'Advanced protocols for high-value holdings: multisig, air-gapped signing, and SeedQR.',
        slug: '/advanced',
      },
      items: [
        'advanced/multisig-sparrow',
        'advanced/multisig-specter',
        'advanced/taproot-musig2',
        'advanced/seedqr',
      ],
    },
    {
      type: 'category',
      label: 'Level 3 — Institutional Hardening',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Level 3 — Institutional Hardening',
        description: 'OpSec, physical security, and practices for organizations managing large Bitcoin treasuries.',
        slug: '/opsec',
      },
      items: [
        'opsec/duress-pins',
        'opsec/kyc-free-bitcoin',
        'opsec/physical-security',
      ],
    },
    {
      type: 'category',
      label: 'External Resources',
      collapsed: true,
      items: [
        'resources/lopp-links',
        'resources/bitcoin-optech',
      ],
    },
  ],
};

export default sidebars;
