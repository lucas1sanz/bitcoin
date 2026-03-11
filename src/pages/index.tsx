import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import clsx from 'clsx';

interface FeatureItem {
  title: string;
  level: string;
  description: string;
  href: string;
  icon: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: 'Why Self-Custody',
    level: 'Start Here',
    description:
      'Understand why "not your keys, not your coins" matters — and what exchange custody really means.',
    href: '/intro/why-self-custody',
    icon: '🔑',
  },
  {
    title: 'Hardware Wallets',
    level: 'Level 1',
    description:
      'Compare Passport, Coldcard, and BitBox02. Learn air-gapped signing and set up your first secure wallet.',
    href: '/hardware/air-gapped-vs-usb',
    icon: '🛡️',
  },
  {
    title: 'Seed Security',
    level: 'Level 1',
    description:
      'Generate entropy with dice rolls, stamp your seed onto steel, and understand backup trade-offs.',
    href: '/seed/dice-roll-generation',
    icon: '🎲',
  },
  {
    title: 'Multisig',
    level: 'Level 2',
    description:
      'Set up 2-of-3 multisig with Sparrow or Specter. Eliminate single points of failure.',
    href: '/advanced/multisig-sparrow',
    icon: '🔐',
  },
  {
    title: 'OpSec',
    level: 'Level 3',
    description:
      'Duress PINs, KYC-free acquisition, physical security, and inheritance planning.',
    href: '/opsec/duress-pins',
    icon: '🕵️',
  },
  {
    title: 'Taproot & MuSig2',
    level: 'Level 2',
    description:
      'How Schnorr signatures enable privacy-preserving multisig indistinguishable from single-sig.',
    href: '/advanced/taproot-musig2',
    icon: '⚡',
  },
];

function FeatureCard({ title, level, description, href, icon }: FeatureItem) {
  return (
    <Link to={href} className={styles.featureCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <span className={styles.cardLevel}>{level}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroShield}>₿</div>
          <h1 className={styles.heroTitle}>Bitcoin Security Knowledge Base</h1>
          <p className={styles.heroSubtitle}>
            Self-custody security from your first hardware wallet to institutional multisig.
            <br />
            No tracking. No cookies. No external requests.
          </p>
          <div className={styles.heroCta}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="/intro/why-self-custody"
            >
              Start Learning
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaButtonSecondary)}
              to="/intro/spectrum-of-security"
            >
              Security Levels →
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>What You'll Learn</h2>
            <p>
              Structured around three security levels — from beginner-friendly single-sig to
              institutional-grade multisig.
            </p>
          </div>
          <div className={styles.grid}>
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.href} {...feature} />
            ))}
          </div>
        </section>

        <section className={styles.privacyBanner}>
          <div className={styles.privacyInner}>
            <h2>Privacy by Design</h2>
            <div className={styles.privacyItems}>
              <div className={styles.privacyItem}>
                <strong>Zero Tracking</strong>
                <span>No analytics, no cookies, no fingerprinting</span>
              </div>
              <div className={styles.privacyItem}>
                <strong>Tor Compatible</strong>
                <span>No external DNS — fonts and assets are self-hosted</span>
              </div>
              <div className={styles.privacyItem}>
                <strong>Local Search</strong>
                <span>Lunr.js search runs entirely in your browser</span>
              </div>
              <div className={styles.privacyItem}>
                <strong>Open Source</strong>
                <span>Content and config on GitHub — audit everything</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
