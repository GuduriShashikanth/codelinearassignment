import { ArrowRight } from '../ui/Icons';
import Reveal from '../ui/Reveal';
import { footer } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="div" className={styles.brand}>
          <span className={`grad-text ${styles.wordmark}`}>N7</span>
        </Reveal>

        <div className={styles.content}>
          <ul className={styles.offices}>
            {footer.offices.map((o) => (
              <li key={o.city}>
                <h4 className={styles.city}>{o.city}</h4>
                <p className={styles.addr}>{o.address}</p>
              </li>
            ))}
          </ul>

          <div className={styles.columns}>
            {footer.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.link}>
                        <span>{link}</span>
                        <ArrowRight className={styles.arrow} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
