import gsap from 'gsap';
import { type RefObject, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useAuroraParallax(auroraRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const aurora = auroraRef.current;
    if (!aurora) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      gsap.to(aurora, { x, y, duration: 1.2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [auroraRef, reduced]);
}
