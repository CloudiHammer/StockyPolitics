import { useEffect } from 'react';

export function useAnalytics() {
  useEffect(() => {
    const startTime = Date.now();

    window.trackEvent?.('page_load', {
      page_title: document.title,
      page_url: window.location.href,
    });

    let scrolled = false;
    const onScroll = () => {
      if (scrolled) return;
      scrolled = true;
      window.trackEvent?.('page_scroll', { scroll_depth: 'started' });
    };
    window.addEventListener('scroll', onScroll, { passive: true, once: true });

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-track]');
      if (!el || !window.trackEvent) return;
      const raw = el.getAttribute('data-track');
      if (!raw) return;
      try {
        const payload = JSON.parse(raw) as {
          event: string;
          params?: Record<string, string>;
        };
        window.trackEvent(payload.event, payload.params || {});
      } catch {
        /* ignore */
      }
    };
    document.addEventListener('click', onClick);

    const seen = new Set<string>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sec = entry.target as HTMLElement;
          const id = sec.id || String(sec.className);
          if (seen.has(id)) return;
          seen.add(id);
          const h = sec.querySelector('h1, h2');
          window.trackEvent?.('section_view', {
            section_name: id,
            section_title: h?.textContent?.trim() || 'unknown',
          });
        });
      },
      { threshold: 0.45 },
    );

    document.querySelectorAll('section').forEach((s) => obs.observe(s));

    const onUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      window.trackEvent?.('page_time', {
        time_seconds: timeOnPage,
        page_title: document.title,
      });
    };
    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      window.removeEventListener('beforeunload', onUnload);
      obs.disconnect();
    };
  }, []);
}
