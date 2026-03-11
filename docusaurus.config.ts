import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bitcoin Security Knowledge Base',
  tagline: 'Self-custody security from first hardware wallet to institutional multisig',
  favicon: 'img/favicon.ico',

  url: 'https://lucas1sanz.github.io',
  baseUrl: '/bitcoin/',

  organizationName: 'lucas1sanz',
  projectName: 'bitcoin',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none';",
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'no-referrer',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/og-image.png',
    navbar: {
      title: 'Bitcoin Security',
      logo: {
        alt: 'Bitcoin Shield Logo',
        src: 'img/bitcoin-shield.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/lucas1sanz/bitcoin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Why Self-Custody', to: '/intro/why-self-custody' },
            { label: 'Hardware Wallets', to: '/hardware/air-gapped-vs-usb' },
            { label: 'Seed Security', to: '/seed/dice-roll-generation' },
          ],
        },
        {
          title: 'Advanced',
          items: [
            { label: 'Multisig with Sparrow', to: '/advanced/multisig-sparrow' },
            { label: 'OpSec', to: '/opsec/duress-pins' },
          ],
        },
        {
          title: 'External',
          items: [
            { label: 'Lopp Resources', to: '/resources/lopp-links' },
            { label: 'Bitcoin Optech', to: '/resources/bitcoin-optech' },
          ],
        },
      ],
      copyright: `No tracking. No cookies. No external requests. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'shell-session', 'json', 'toml', 'ini', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
