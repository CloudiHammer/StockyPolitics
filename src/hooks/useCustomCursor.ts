import { type RefObject, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCustomCursor(
  dotRef: RefObject<HTMLElement | null>,
  ringRef: RefObject<HTMLElement | null>,
) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    const magnets = document.querySelectorAll('[data-cursor-magnet]');
    const onEnter = () => {
      dot.classList.add('is-hover');
      ring.classList.add('is-hover');
    };
    const onLeave = () => {
      dot.classList.remove('is-hover');
      ring.classList.remove('is-hover');
    };
    magnets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      magnets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [dotRef, ringRef, reduced]);
}
