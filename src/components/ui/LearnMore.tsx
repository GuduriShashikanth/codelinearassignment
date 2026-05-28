import { ArrowRight } from './Icons';
import styles from './LearnMore.module.css';

interface Props {
  children?: string;
  href?: string;
  size?: 'sm' | 'xs';
  className?: string;
}

/** Gradient mono "learn more →" inline link. */
export default function LearnMore({
  children = 'learn more',
  href = '#',
  size = 'sm',
  className = '',
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.link} ${styles[size]} mono-label ${className}`}
    >
      <span className={styles.text}>{children}</span>
      <ArrowRight className={styles.arrow} />
    </a>
  );
}
