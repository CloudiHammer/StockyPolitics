import { useState } from 'react';
import { btnBase, btnLightBlock, btnSm } from '../lib/buttonClasses';
import { cn } from '../lib/cn';
import { URL_APPLE, URL_PLAY } from '../lib/urls';

const btnOutlineBlockSm = cn(
  btnBase,
  btnSm,
  'w-full border-2 border-slate-400/55 bg-transparent text-[var(--text-color)] hover:border-slate-500/80',
);

type FreeRow = { kind: 'limit' | 'check'; text: string };

const freeRows: FreeRow[] = [
  { kind: 'limit', text: 'Hasta 30 productos' },
  { kind: 'limit', text: 'Puedes ampliar viendo un anuncio puntual' },
  { kind: 'limit', text: 'Hasta 3 eventos' },
  { kind: 'limit', text: 'Hasta 10 ventas por evento' },
  { kind: 'check', text: 'Sincronización en la nube' },
  { kind: 'check', text: 'Reportes básicos' },
];

function LimitIcon() {
  return (
    <span
      className="absolute left-0 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-amber-100 text-amber-800"
      aria-hidden
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <rect x="5" y="11" width="14" height="10" rx="1.5" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    </span>
  );
}

export function PricingSection() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="bg-[var(--surface-color)] py-16 md:py-24" id="precios">
      <div className="site-container">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          Elige Tu Plan
        </h2>
        <p className="mx-auto mb-8 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)]">
          Empieza gratis y, cuando necesites más capacidad o exportar facturas a Excel, pasa a Premium con el primer mes
          gratis.
        </p>

        <div className="mx-auto mb-10 flex w-fit flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div
            className="relative flex rounded-full border border-slate-900/[0.08] bg-slate-900/[0.06] p-1"
            role="group"
            aria-label="Periodo de facturación"
          >
            <button
              type="button"
              className={cn(
                'relative z-[1] rounded-full border-0 px-[22px] py-2.5 font-semibold transition-colors duration-200',
                !yearly ? 'bg-white text-[var(--text-color)] shadow-sm' : 'bg-transparent text-[var(--text-light)]',
              )}
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
            >
              Mensual
            </button>
            <button
              type="button"
              className={cn(
                'relative z-[1] rounded-full border-0 px-[22px] py-2.5 font-semibold transition-colors duration-200',
                yearly ? 'bg-white text-[var(--text-color)] shadow-sm' : 'bg-transparent text-[var(--text-light)]',
              )}
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
            >
              Anual
            </button>
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.78rem] font-bold uppercase tracking-wider transition-colors',
              yearly ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-900/[0.06] text-[var(--text-light)]',
            )}
          >
            Ahorra 47 %
          </span>
        </div>

        <div className="mx-auto grid max-w-[960px] gap-7 min-[860px]:grid-cols-2">
          <article className="relative flex flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white px-7 py-9 shadow-[var(--shadow)] min-[860px]:px-7 min-[860px]:py-9">
            <h3 className="m-0 mb-2 text-2xl">Gratuito</h3>
            <p className="m-0 text-[2.75rem] font-extrabold leading-none">
              <span className="align-super text-xl">€</span>0
            </p>
            <p className="mb-1 mt-2 text-[0.9rem] text-[var(--text-light)]">Sin caducidad</p>
            <p className="mb-4 text-[0.8rem] font-semibold uppercase tracking-wider text-amber-800/90">Con límites</p>
            <ul className="m-0 mb-6 list-none p-0">
              {freeRows.map((row) => (
                <li
                  key={row.text}
                  className={cn(
                    'relative border-b border-slate-900/[0.06] py-2.5 pl-8 text-[0.95rem] leading-snug',
                    row.kind === 'limit' ? 'text-[var(--text-color)]' : 'pl-7 text-[var(--text-color)]',
                  )}
                >
                  {row.kind === 'limit' ? (
                    <>
                      <LimitIcon />
                      <span className="font-medium">{row.text}</span>
                    </>
                  ) : (
                    <>
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold text-[var(--secondary-color)]"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {row.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2">
              <a
                href={URL_PLAY}
                target="_blank"
                rel="noopener noreferrer"
                className={btnOutlineBlockSm}
                data-cursor-magnet
                data-track={JSON.stringify({
                  event: 'download_click',
                  params: { button_location: 'pricing_free_play', button_text: 'Google Play', section: 'pricing' },
                })}
              >
                Google Play
              </a>
              <a
                href={URL_APPLE}
                target="_blank"
                rel="noopener noreferrer"
                className={btnOutlineBlockSm}
                data-cursor-magnet
                data-track={JSON.stringify({
                  event: 'download_click',
                  params: { button_location: 'pricing_free_apple', button_text: 'App Store', section: 'pricing' },
                })}
              >
                App Store
              </a>
            </div>
          </article>

          <article
            className="relative flex flex-col overflow-hidden rounded-[var(--border-radius-lg)] px-7 py-9 text-white shadow-[var(--shadow-xl),0_0_60px_rgba(255,183,77,0.35)] min-[860px]:px-7 min-[860px]:py-9"
            style={{ backgroundImage: 'var(--grad-brand)' }}
          >
            <span className="absolute right-[-36px] top-[18px] z-[1] rotate-45 bg-white/95 px-10 py-1.5 text-xs font-extrabold text-[#7b1fa2]">
              Más popular
            </span>
            <span className="relative z-[2] mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/25 px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white ring-1 ring-white/40 backdrop-blur-sm">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m8.5 12 2.5 2.5L15.5 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              1 mes gratis
            </span>
            <h3 className="relative z-[2] m-0 mb-2 text-2xl">Premium</h3>

            {yearly ? (
              <>
                <p className="relative z-[2] m-0 flex flex-wrap items-baseline gap-x-1 gap-y-0 text-[2.75rem] font-extrabold leading-none" id="premiumPrice">
                  <span className="align-super text-xl">€</span>
                  <span id="premiumAmount">7,92</span>
                  <span className="text-[1.35rem] font-bold opacity-95">/mes</span>
                </p>
                <p className="relative z-[2] mb-1 mt-2 text-[0.9rem] font-medium opacity-95" id="premiumPeriod">
                  Facturación anual: <strong className="font-bold text-white">94,99 €</strong> al año
                </p>
                <p className="relative z-[2] mb-4 text-[0.85rem] opacity-90">≈ 0,26 € al día</p>
              </>
            ) : (
              <>
                <p className="relative z-[2] m-0 flex flex-wrap items-baseline gap-x-1 gap-y-0 text-[2.75rem] font-extrabold leading-none" id="premiumPrice">
                  <span className="align-super text-xl">€</span>
                  <span id="premiumAmount">14,99</span>
                  <span className="text-[1.35rem] font-bold opacity-95">/mes</span>
                </p>
                <p className="relative z-[2] mb-4 mt-2 text-[0.85rem] opacity-90" id="premiumPeriod">
                  ≈ 0,50 € al día
                </p>
              </>
            )}

            <p className="relative z-[2] mb-3 rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-[0.92rem] font-semibold leading-snug text-white shadow-sm backdrop-blur-sm">
              Sin techos en productos, eventos y ventas; además compartir con tu equipo, exportar a Excel e IA:
            </p>

            <ul className={cn('relative z-[2] m-0 mb-5 list-none p-0 text-white/95')}>
              {[
                'Sin anuncios',
                'Productos, eventos y ventas ilimitados por evento',
                'Compartir inventarios con tu equipo',
                <>
                  <strong>Análisis inteligente con IA</strong> — salud del inventario y recomendaciones
                </>,
                'Reportes y estadísticas avanzados',
                'Exportación del inventario a Excel con historial',
                <>
                  <strong>Exportación de facturas del POS a Excel</strong> (menú ⋮ del evento) — para tu gestoría.
                </>,
                'Imágenes en productos',
              ].map((t, i) => (
                <li
                  key={i}
                  className="relative border-b border-white/20 py-2 pl-7 before:absolute before:left-0 before:font-extrabold before:text-[#c8ff8a] before:content-['✓']"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p className="relative z-[2] mb-4 text-center text-[0.95rem] font-semibold leading-snug text-white">
              Primer mes gratis · Sin permanencia
              <br />
              <span className="text-[0.88rem] font-medium opacity-95">
                Cancela cuando quieras desde Google Play o App Store
              </span>
            </p>

            <div className="relative z-[2] mt-auto flex flex-col gap-2.5">
              <a
                href={URL_PLAY}
                target="_blank"
                rel="noopener noreferrer"
                className={btnLightBlock}
                data-track={JSON.stringify({
                  event: 'download_click',
                  params: { button_location: 'pricing_premium_play', button_text: 'Google Play', section: 'pricing' },
                })}
                data-cursor-magnet
              >
                Probar 1 mes gratis · Google Play
              </a>
              <a
                href={URL_APPLE}
                target="_blank"
                rel="noopener noreferrer"
                className={btnLightBlock}
                data-track={JSON.stringify({
                  event: 'download_click',
                  params: { button_location: 'pricing_premium_apple', button_text: 'App Store', section: 'pricing' },
                })}
                data-cursor-magnet
              >
                Probar 1 mes gratis · App Store
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
