import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { hero } from '../../data/content';
import heroImg from '../../assets/hero-dashboard.png';
import logos from '../../assets/trusted-logos.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgGlow} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal as="h1" className={styles.title}>
            {hero.title}
          </Reveal>
          <Reveal as="p" className={styles.subtitle} delay={90}>
            {hero.subtitle}
          </Reveal>
          <Reveal className={styles.actions} delay={180}>
            <Button href="#cta">{hero.primary}</Button>
            <Button href="#cta" variant="outline">
              {hero.secondary}
            </Button>
          </Reveal>
        </div>

        <Reveal className={styles.visual} delay={120}>
          <div className={styles.glow} aria-hidden />
          <img
            src={heroImg}
            alt="N7 mobile banking dashboard showing account balance and recent activity"
            className={styles.dash}
            width={1877}
            height={944}
            fetchPriority="high"
          />
        </Reveal>
      </div>

      <Reveal className={`container ${styles.trusted}`} delay={120}>
        <span className={`mono-label ${styles.trustedLabel}`}>
          {hero.trustedBy}
        </span>
        <img
          src={logos}
          alt="Trusted by SHELLS, SmartFinder, Zoomerr, ArtVenue, kontrastr, WAVESMARATHON"
          className={styles.logos}
        />
      </Reveal>
    </section>
  );
}
