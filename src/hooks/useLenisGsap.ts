import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const MOBILE_MQ = '(max-width: 900px)';

export function useLenisGsap() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    const start = () => {
      if (window.matchMedia(MOBILE_MQ).matches) return;
      lenis = new Lenis({ smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      tick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    const stop = () => {
      if (tick) {
        gsap.ticker.remove(tick);
        tick = null;
      }
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };

    const onBreakpoint = () => {
      stop();
      start();
      ScrollTrigger.refresh();
    };

    start();

    const mq = window.matchMedia(MOBILE_MQ);
    mq.addEventListener('change', onBreakpoint);

    return () => {
      mq.removeEventListener('change', onBreakpoint);
      stop();
    };
  }, [reduced]);
}
