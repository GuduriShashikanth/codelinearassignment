import Button from '../ui/Button';
import LearnMore from '../ui/LearnMore';
import Reveal from '../ui/Reveal';
import { cloud } from '../../data/content';
import aml from '../../assets/aml-dashboard.png';
import styles from './CloudBanking.module.css';

export default function CloudBanking() {
  return (
    <section className={styles.section} id="cloud">
      <span className={styles.watermark} aria-hidden>
        7
      </span>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal as="h2" className={styles.title}>
            {cloud.title}
          </Reveal>
          <Reveal as="p" className={styles.subtitle} delay={90}>
            {cloud.subtitle}
          </Reveal>
          <Reveal className={styles.actions} delay={160}>
            <Button href="#cta">{cloud.cta}</Button>
            <LearnMore>{cloud.learnMore}</LearnMore>
          </Reveal>
        </div>

        <Reveal className={styles.visual} delay={120}>
          <img
            src={aml}
            alt="AML dashboard with suspicious transactions chart and STR summary"
            loading="lazy"
            width={2298}
            height={1385}
          />
        </Reveal>
      </div>
    </section>
  );
}
