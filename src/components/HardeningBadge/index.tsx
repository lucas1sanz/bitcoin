import React from 'react';
import styles from './styles.module.css';

interface HardeningBadgeProps {
  level: 1 | 2 | 3;
}

const LEVEL_CONFIG = {
  1: { label: 'Level 1', className: styles.level1 },
  2: { label: 'Level 2', className: styles.level2 },
  3: { label: 'Level 3', className: styles.level3 },
};

export default function HardeningBadge({ level }: HardeningBadgeProps): JSX.Element {
  const config = LEVEL_CONFIG[level];
  return (
    <span className={`${styles.badge} ${config.className}`}>
      {config.label}
    </span>
  );
}
