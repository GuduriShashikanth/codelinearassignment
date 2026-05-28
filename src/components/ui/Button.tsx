import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from './Icons';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'outline-light';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  withArrow?: boolean;
  children: ReactNode;
}

/**
 * Pill CTA button. Renders an anchor so it works as a link in this static
 * marketing page; swap to <button> in a real app via the `as` pattern.
 */
export default function Button({
  variant = 'primary',
  withArrow = false,
  children,
  className = '',
  href = '#',
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]} mono-label ${className}`}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {withArrow && <ArrowRight className={styles.arrow} />}
    </a>
  );
}
