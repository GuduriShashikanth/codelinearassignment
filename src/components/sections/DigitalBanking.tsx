import Button from '../ui/Button';
import LearnMore from '../ui/LearnMore';
import Marquee from '../ui/Marquee';
import Reveal from '../ui/Reveal';
import PaperlessCta from './PaperlessCta';
import { Check } from '../ui/Icons';
import { digital, ticker } from '../../data/content';
import phone1 from '../../assets/phone-1.png';
import phone2 from '../../assets/phone-2.png';
import phone3 from '../../assets/phone-3.png';
import styles from './DigitalBanking.module.css';

const phones = [phone1, phone2, phone3];

export default function DigitalBanking() {
  return (
    <section className={styles.section}>
      <div className={styles.ticker}>
        <Marquee items={ticker} tone="light" />
      </div>

      <div className={`container ${styles.head}`}>
        <Reveal as="h2" className={styles.title}>
          {digital.title}
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={80}>
          {digital.subtitle}
        </Reveal>
        <Reveal className={styles.headActions} delay={140}>
          <Button href="#cta">{digital.cta}</Button>
          <LearnMore>{digital.learnMore}</LearnMore>
        </Reveal>
      </div>

      <div className={`container ${styles.features}`}>
        {digital.features.map((f, i) => (
          <div
            key={f.title}
            className={`${styles.feature} ${i % 2 === 1 ? styles.reverse : ''}`}
          >
            <Reveal className={styles.phoneWrap}>
              <div className={styles.phoneGlow} aria-hidden />
              <img
                src={phones[i]}
                alt={`N7 mobile app screen — ${f.title}`}
                className={styles.phone}
                loading="lazy"
                width={805}
                height={1629}
              />
            </Reveal>

            <Reveal className={styles.text} delay={90}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureBody}>{f.body}</p>
              <ul className={styles.points}>
                {f.points.map((p) => (
                  <li key={p}>
                    <Check className={styles.check} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <PaperlessCta
          title={digital.bottomCta.title}
          subtitle={digital.bottomCta.subtitle}
          primary={digital.bottomCta.primary}
          secondary={digital.bottomCta.secondary}
          boxed
        />
      </div>
    </section>
  );
}
