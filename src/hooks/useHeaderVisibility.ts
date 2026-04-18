import { type RefObject, useEffect } from 'react';

export function useHeaderVisibility(headerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.toggle('is-visible', window.scrollY > 72);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);
}
