import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { BenefitsSection } from './components/BenefitsSection';
import { BusinessMarquee } from './components/BusinessMarquee';
import { ComparisonTable } from './components/ComparisonTable';
import { CtaFinal } from './components/CtaFinal';
import { FaqSection } from './components/FaqSection';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { GuaranteeStrip } from './components/GuaranteeStrip';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { RoiSection } from './components/RoiSection';
import { ScreenshotsFan } from './components/ScreenshotsFan';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { StickyMobileCta } from './components/StickyMobileCta';
import { TestimonialsSection } from './components/TestimonialsSection';
import { UserFirstSection } from './components/UserFirstSection';
import { useAnalytics } from './hooks/useAnalytics';
import { useAuroraParallax } from './hooks/useAuroraParallax';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useHeaderVisibility } from './hooks/useHeaderVisibility';
import { useLenisGsap } from './hooks/useLenisGsap';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useScrollProgress(progressRef);
  useAuroraParallax(auroraRef);
  useHeaderVisibility(headerRef);
  useCustomCursor(cursorDotRef, cursorRingRef);
  useLenisGsap();
  useAnalytics();

  useEffect(() => {
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[10050] h-[3px] w-0 origin-left bg-[linear-gradient(90deg,var(--primary-color),var(--secondary-color),var(--accent-1))]"
        aria-hidden="true"
        ref={progressRef}
      />
      <div className="aurora" aria-hidden="true" ref={auroraRef}>
        <span className="aurora__blob aurora__blob--1" />
        <span className="aurora__blob aurora__blob--2" />
        <span className="aurora__blob aurora__blob--3" />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className="cursor" aria-hidden="true" ref={cursorDotRef} />
      <div className="cursor-follower" aria-hidden="true" ref={cursorRingRef} />

      <SiteHeader ref={headerRef} />

      <main>
        <Hero />
        <BenefitsSection />
        <FeaturesShowcase />
        <BusinessMarquee />
        <ScreenshotsFan />
        <ComparisonTable />
        <RoiSection />
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeStrip />
        <FaqSection />
        <UserFirstSection />
        <CtaFinal />
      </main>

      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
