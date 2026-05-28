import { useState } from 'react';
import LearnMore from '../ui/LearnMore';
import Reveal from '../ui/Reveal';
import { Bolt, ChevronLeft, ChevronRight } from '../ui/Icons';
import { caseStudies } from '../../data/content';
import brandMark from '../../assets/brand-mark.png';
import styles from './CaseStudies.module.css';

export default function CaseStudies() {
  const slides = caseStudies.slides;
  const [index, setIndex] = useState(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const active = slides[index];

  return (
    <section className={styles.section} id="cases">
      <Reveal as="h2" className={styles.title}>
        {caseStudies.title}
      </Reveal>

      <div className={`container ${styles.stage}`}>
        <div className={styles.stack} aria-hidden>
          <span className={styles.behind2} />
          <span className={styles.behind1} />
        </div>

        <Reveal
          className={styles.card}
          key={index /* re-trigger enter animation per slide */}
        >
          <div className={styles.art}>
            <img src={brandMark} alt="" loading="lazy" />
          </div>
          <div className={styles.body}>
            <span className={styles.kicker}>{active.kicker}</span>
            <h3 className={styles.cardTitle}>{active.title}</h3>
            <p className={styles.brand}>
              <span className={styles.brandIcon}>
                <Bolt width={14} height={14} />
              </span>
              {active.brand}
            </p>
            <a href="#" className={`${styles.readMore} mono-label`}>
              read more
            </a>
          </div>
        </Reveal>
      </div>

      <div className={`container ${styles.controls}`}>
        <div className={styles.nav}>
          <button
            className={styles.arrow}
            onClick={() => go(-1)}
            aria-label="Previous case study"
          >
            <ChevronLeft width={20} height={20} />
          </button>
          <div className={styles.dots} role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to case study ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
          <button
            className={styles.arrow}
            onClick={() => go(1)}
            aria-label="Next case study"
          >
            <ChevronRight width={20} height={20} />
          </button>
        </div>

        <LearnMore href="#cases">{caseStudies.viewAll}</LearnMore>
      </div>
    </section>
  );
}
