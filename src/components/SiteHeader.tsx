import { forwardRef, useState } from 'react';
import { btnPrimarySm } from '../lib/buttonClasses';
import { cn } from '../lib/cn';
import { detectDevice, preferredMobileStore, type MobileStore } from '../lib/detectPlatform';
import { publicUrl } from '../lib/publicUrl';
import { URL_APPLE, URL_PLAY } from '../lib/urls';

function initialStore(): MobileStore {
  if (typeof navigator === 'undefined') return 'google-play';
  return preferredMobileStore(detectDevice());
}

export const SiteHeader = forwardRef<HTMLElement>(function SiteHeader(_props, ref) {
  const [store] = useState<MobileStore>(initialStore);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-[1000] border-b border-slate-900/[0.06] bg-[rgba(246,248,252,0.72)] py-3 backdrop-blur-md backdrop-saturate-[160%] transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        '[&.is-visible]:translate-y-0 [&.is-visible]:opacity-100',
        '-translate-y-full opacity-0',
      )}
      id="top"
      ref={ref}
    >
      <div className="site-container flex items-center justify-between gap-4">
        <a
          className="inline-flex items-center gap-2.5 font-extrabold text-[var(--text-color)] no-underline"
          href="#top"
          aria-label="Inventario Fácil inicio"
          data-cursor-magnet
        >
          <img src={publicUrl('app-icon.png')} alt="" width={40} height={40} className="rounded-[14px] shadow-[var(--shadow)]" />
          <span>Inventario Fácil</span>
        </a>
        <nav className="hidden gap-5 text-[0.95rem] font-medium min-[900px]:flex" aria-label="Principal">
          <a className="text-[var(--text-light)] no-underline transition-colors hover:text-[var(--accent-1)]" href="#beneficios" data-cursor-magnet>
            Beneficios
          </a>
          <a className="text-[var(--text-light)] no-underline transition-colors hover:text-[var(--accent-1)]" href="#caracteristicas" data-cursor-magnet>
            Funciones
          </a>
          <a className="text-[var(--text-light)] no-underline transition-colors hover:text-[var(--accent-1)]" href="#comparativa" data-cursor-magnet>
            Comparativa
          </a>
          <a className="text-[var(--text-light)] no-underline transition-colors hover:text-[var(--accent-1)]" href="#precios" data-cursor-magnet>
            Precios
          </a>
          <a className="text-[var(--text-light)] no-underline transition-colors hover:text-[var(--accent-1)]" href="#faq" data-cursor-magnet>
            FAQ
          </a>
        </nav>
        <div className="flex shrink-0 items-center">
          {store === 'app-store' ? (
            <a
              href={URL_APPLE}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnPrimarySm, 'inline-flex items-center gap-1.5 px-3 py-2.5 text-[0.85rem] min-[480px]:text-[0.9rem]')}
              data-track={JSON.stringify({
                event: 'download_click',
                params: {
                  button_location: 'header_store',
                  button_text: 'App Store',
                  section: 'header',
                  store: 'app-store',
                },
              })}
              data-cursor-magnet
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </a>
          ) : (
            <a
              href={URL_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnPrimarySm, 'inline-flex items-center gap-1.5 px-3 py-2.5 text-[0.85rem] min-[480px]:text-[0.9rem]')}
              data-track={JSON.stringify({
                event: 'download_click',
                params: {
                  button_location: 'header_store',
                  button_text: 'Google Play',
                  section: 'header',
                  store: 'google-play',
                },
              })}
              data-cursor-magnet
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D9FF" />
                <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#00FF88" />
                <path d="M3.84 2.15L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#FF3A44" />
                <path d="M16.81 8.88L14.54 11.15L20.16 12.85L16.81 8.88Z" fill="#FFD200" />
              </svg>
              Google Play
            </a>
          )}
        </div>
      </div>
    </header>
  );
});
