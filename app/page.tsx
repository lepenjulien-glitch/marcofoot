import Nav from '@/components/landing/Nav';
import CineHero from '@/components/landing/CineHero';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import CountersSection from '@/components/landing/CountersSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import WhoSection from '@/components/landing/WhoSection';
import PricingSection from '@/components/landing/PricingSection';
import BridgeSection from '@/components/landing/BridgeSection';
import WaitlistSection from '@/components/landing/WaitlistSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import ScrollObserver from '@/components/landing/ScrollObserver';

function Sep() {
  return <div className="sep" />;
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <CineHero />
      <Sep />
      <ProblemSection />
      <Sep />
      <SolutionSection />
      <Sep />
      <CountersSection />
      <Sep />
      <FeaturesSection />
      <Sep />
      <WhoSection />
      <Sep />
      <PricingSection />
      <Sep />
      <BridgeSection />
      <Sep />
      <WaitlistSection />
      <Sep />
      <FaqSection />
      <Footer />
      <ScrollObserver />
    </>
  );
}
