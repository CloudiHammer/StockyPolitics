import { useEffect, useState } from 'react';
import { cn } from '../lib/cn';
import { publicUrl } from '../lib/publicUrl';
import { detectDevice, preferredMobileStore, type MobileStore } from '../lib/detectPlatform';
import { URL_APPLE, URL_PLAY } from '../lib/urls';

function initialStore(): MobileStore {
  if (typeof navigator === 'undefined') return 'google-play';
  return preferredMobileStore(detectDevice());
}

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const [store] = useState<MobileStore>(initialStore);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const ctaFinal = document.getElementById('contacto');
    if (!hero) return;

    let heroInView = true;
    let ctaInView = false;

    const update = () => {
      setVisible(!heroInView && !ctaInView);
    };

    const heroObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          heroInView = e.isIntersecting && e.intersectionRatio > 0.25;
        });
        update();
      },
      { threshold: [0, 0.25, 0.5] },
    );
    heroObs.observe(hero);

    let ctaObs: IntersectionObserver | null = null;
    if (ctaFinal) {
      ctaObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            ctaInView = e.isIntersecting && e.intersectionRatio > 0.1;
          });
          update();
        },
        { threshold: [0, 0.1, 0.3] },
      );
      ctaObs.observe(ctaFinal);
    }

    return () => {
      heroObs.disconnect();
      ctaObs?.disconnect();
    };
  }, []);

  const isApple = store === 'app-store';

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-3 transition-transform duration-300 md:hidden',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
      aria-hidden={!visible}
    >
      <div
        className="pointer-events-auto rounded-2xl border border-slate-900/[0.08] bg-white/95 p-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-md"
        role="region"
        aria-label={isApple ? 'Descargar Stocky en el App Store' : 'Descargar Stocky en Google Play'}
      >
        <div className="mb-2 flex items-center gap-2.5 pl-1">
          <img
            src={publicUrl('iconappStockyPNG.png')}
            alt=""
            width={36}
            height={36}
            aria-hidden="true"
            className="h-9 w-9 shrink-0 rounded-xl"
          />
          <div className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-[0.9rem] font-bold text-[var(--text-color)]">Stocky</span>
            <span className="block truncate text-[0.72rem] text-[var(--text-light)]">
              {isApple ? 'Disponible en App Store' : 'Disponible en Google Play'}
            </span>
          </div>
        </div>
        {isApple ? (
          <a
            href={URL_APPLE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[2.75rem] w-full items-center justify-center gap-2 rounded-xl border border-slate-900/15 bg-[var(--text-color)] px-3 py-2.5 text-center text-[0.8rem] font-bold leading-tight text-white"
            data-track={JSON.stringify({
              event: 'download_click',
              params: {
                button_location: 'sticky_cta_mobile',
                button_text: 'Descargar en App Store',
                section: 'sticky',
                store: 'app-store',
              },
            })}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="text-balance">Descargar en App Store</span>
          </a>
        ) : (
          <a
            href={URL_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[2.75rem] w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-center text-[0.8rem] font-bold leading-tight text-white shadow-[var(--shadow)] [background-image:var(--grad-brand)]"
            data-track={JSON.stringify({
              event: 'download_click',
              params: {
                button_location: 'sticky_cta_mobile',
                button_text: 'Descargar en Google Play',
                section: 'sticky',
                store: 'google-play',
              },
            })}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D9FF" />
              <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#00FF88" />
              <path d="M3.84 2.15L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#FF3A44" />
              <path d="M16.81 8.88L14.54 11.15L20.16 12.85L16.81 8.88Z" fill="#FFD200" />
            </svg>
            <span className="text-balance">Descargar en Google Play</span>
          </a>
        )}
      </div>
    </div>
  );
}
