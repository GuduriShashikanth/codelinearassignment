import { BrandGlyph } from './Icons';
import styles from './Marquee.module.css';

interface Props {
  items: string[];
  /** light = dark text on light bg (used inside the white Digital section) */
  tone?: 'dark' | 'light';
}

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export default function Marquee({ items, tone = 'light' }: Props) {
  const group = (
    <div className={styles.group} aria-hidden>
      {items.map((it, i) => (
        <span className={styles.item} key={i}>
          <span className={styles.text}>{it}</span>
          <BrandGlyph className={styles.star} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`${styles.marquee} ${styles[tone]}`}>
      <div className={styles.track}>
        {group}
        {group}
      </div>
    </div>
  );
}
