import Reveal from '../ui/Reveal';
import { Check } from '../ui/Icons';
import { efficiency } from '../../data/content';
import kyc from '../../assets/kyc-dashboard.png';
import styles from './Efficiency.module.css';

export default function Efficiency() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.visual}>
          <img
            src={kyc}
            alt="KYC dashboard showing branch metrics and customer response analytics"
            loading="lazy"
            width={2298}
            height={1385}
          />
        </Reveal>

        <div className={styles.content}>
          <Reveal as="h2" className={styles.title}>
            {efficiency.title}
          </Reveal>

          <Reveal as="h3" className={styles.listTitle} delay={80}>
            {efficiency.listTitle}
          </Reveal>

          <Reveal className={styles.lists} delay={120}>
            {efficiency.columns.map((col, ci) => (
              <ul key={ci}>
                {col.map((item) => (
                  <li key={item}>
                    <Check className={styles.check} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </Reveal>
        </div>
      </div>

      <div className={`container ${styles.highlights}`}>
        {efficiency.highlights.map((h, i) => (
          <Reveal as="div" key={i} className={styles.highlight} delay={i * 90}>
            <span className={styles.bar} aria-hidden />
            <p>{h}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
