import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import CloudBanking from './components/sections/CloudBanking';
import Efficiency from './components/sections/Efficiency';
import PaperlessCta from './components/sections/PaperlessCta';
import DigitalBanking from './components/sections/DigitalBanking';
import Insights from './components/sections/Insights';
import CaseStudies from './components/sections/CaseStudies';
import { paperlessCta } from './data/content';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CloudBanking />
        <Efficiency />
        <PaperlessCta
          title={paperlessCta.title}
          subtitle={paperlessCta.subtitle}
          primary={paperlessCta.primary}
          secondary={paperlessCta.secondary}
          watermark={paperlessCta.watermark}
          boxed
        />
        <DigitalBanking />
        <Insights />
        <CaseStudies />
        <PaperlessCta
          id="cta"
          title={paperlessCta.title}
          subtitle={paperlessCta.subtitle}
          primary={paperlessCta.primary}
          secondary={paperlessCta.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
