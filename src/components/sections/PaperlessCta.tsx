import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import styles from './PaperlessCta.module.css';

interface Props {
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  /** large faint background word, e.g. "CB7" */
  watermark?: string;
  /** boxed = rounded card with gradient border (standalone section variant) */
  boxed?: boolean;
  id?: string;
}

export default function PaperlessCta({
  title,
  subtitle,
  primary,
  secondary,
  watermark,
  boxed = false,
  id,
}: Props) {
  return (
    <section
      className={`${styles.section} ${boxed ? styles.boxed : ''}`}
      id={id}
    >
      <div className={`container ${styles.shell}`}>
        {watermark && (
          <span className={styles.watermark} aria-hidden>
            {watermark}
          </span>
        )}
        <div className={styles.inner}>
          <div className={styles.copy}>
            <Reveal as="h2" className={styles.title}>
              {title}
            </Reveal>
            <Reveal as="p" className={styles.subtitle} delay={80}>
              {subtitle}
            </Reveal>
          </div>
          <Reveal className={styles.actions} delay={140}>
            <Button href="#cta" variant="outline">
              {secondary}
            </Button>
            <Button href="#cta">{primary}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
