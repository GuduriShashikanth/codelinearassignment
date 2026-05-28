import Button from '../ui/Button';
import LearnMore from '../ui/LearnMore';
import Reveal from '../ui/Reveal';
import { insights } from '../../data/content';
import brandMark from '../../assets/brand-mark.png';
import styles from './Insights.module.css';

export default function Insights() {
  const [featured, ...rest] = insights.articles;

  return (
    <section className={styles.section} id="insights">
      <span className={styles.glow} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <Reveal as="h2" className={styles.title}>
            {insights.title}
          </Reveal>
          <Reveal delay={120}>
            <Button href="#insights" variant="outline">
              {insights.cta}
            </Button>
          </Reveal>
        </div>

        <div className={styles.cards}>
          <Reveal as="article" className={`${styles.card} ${styles.featured}`}>
            <div className={styles.featuredArt}>
              <img src={brandMark} alt="" loading="lazy" />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.kicker}>{featured.kicker}</span>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <p className={styles.meta}>
                {featured.author} &nbsp;&nbsp; {featured.date}
              </p>
              <a href="#" className={`${styles.readMore} mono-label`}>
                read more
              </a>
            </div>
          </Reveal>

          {rest.map((a, i) => (
            <Reveal
              as="article"
              key={i}
              className={styles.card}
              delay={i * 90}
            >
              <span className={styles.kicker}>{a.kicker}</span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.meta}>
                {a.author} &nbsp;&nbsp; {a.date}
              </p>
              <a href="#" className={`${styles.readMore} mono-label`}>
                read more
              </a>
            </Reveal>
          ))}

          <div className={styles.viewAll}>
            <LearnMore href="#insights">{insights.viewAll}</LearnMore>
          </div>
        </div>
      </div>
    </section>
  );
}
