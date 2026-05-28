import { useEffect, useState } from 'react';
import { ChevronDown } from '../ui/Icons';
import { nav } from '../../data/content';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrap}`}>
        <nav
          className={`${styles.pill} ${scrolled ? styles.scrolled : ''}`}
          aria-label="Primary"
        >
          <a href="#top" className={styles.logo} aria-label="N7 home">
            N7
          </a>

          <ul className={styles.links}>
            {nav.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={`${styles.link} mono-label`}>
                  {l.label}
                  {l.hasMenu && <ChevronDown className={styles.chev} />}
                </a>
              </li>
            ))}
          </ul>

          <a href="#cta" className={`${styles.demoBtn} mono-label`}>
            Request Demo
          </a>

          <button
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.barTop : ''} />
            <span className={open ? styles.barMid : ''} />
            <span className={open ? styles.barBot : ''} />
          </button>
        </nav>
      </div>

      {/* mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="mono-label"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className={`${styles.drawerCta} mono-label`}
            onClick={() => setOpen(false)}
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
