import Button from '../ui/Button';
import LearnMore from '../ui/LearnMore';
import Reveal from '../ui/Reveal';
import { solutionsSection, type IconName } from '../../data/content';
import coreIcon from '../../assets/icons/core.svg';
import digitalIcon from '../../assets/icons/digital.svg';
import openIcon from '../../assets/icons/open.svg';
import originationIcon from '../../assets/icons/origination.svg';
import managementIcon from '../../assets/icons/management.svg';
import styles from './Solutions.module.css';

const iconMap: Record<IconName, string> = {
  core: coreIcon,
  digital: digitalIcon,
  open: openIcon,
  origination: originationIcon,
  management: managementIcon,
};

export default function Solutions() {
  return (
    <section className={styles.section} id="solutions">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <Reveal as="h2" className={styles.title}>
            {solutionsSection.title}
          </Reveal>
          <Reveal delay={120}>
            <Button href="#cta" variant="outline">
              {solutionsSection.cta}
            </Button>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {solutionsSection.items.map((item, i) => (
            <Reveal as="li" key={item.title} className={styles.card} delay={i * 70}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>
                  <img src={iconMap[item.icon]} alt="" width={44} height={44} />
                </span>
                {item.tag && <span className={styles.tag}>{item.tag}</span>}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
              <LearnMore />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
