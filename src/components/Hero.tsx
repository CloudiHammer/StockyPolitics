import { Fragment } from 'react';
import { btnPrimaryShine, btnRow, btnShineOverlay } from '../lib/buttonClasses';
import { cn } from '../lib/cn';
import { URL_APPLE, URL_PLAY } from '../lib/urls';

const marqueeItems = [
  'Gratis · Hasta 30 productos',
  'Punto de venta en eventos',
  'Comparte inventarios con tu equipo',
  'Premium: 1 mes gratis',
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-br from-amber-600 via-emerald-600 to-indigo-800 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4rem)] pb-12 text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="hero-blob-a absolute -left-[18%] -top-[15%] h-[min(26rem,70vw)] w-[min(26rem,70vw)] rounded-full bg-amber-200/90 blur-[64px] mix-blend-screen opacity-50" />
        <span className="hero-blob-b absolute -bottom-[8%] -right-[12%] h-[min(24rem,65vw)] w-[min(24rem,65vw)] rounded-full bg-sky-300/75 blur-[64px] mix-blend-screen opacity-50 max-md:mix-blend-normal max-md:opacity-40" />
        <span className="hero-blob-c absolute left-[35%] top-[38%] h-[min(17.5rem,50vw)] w-[min(17.5rem,50vw)] rounded-full bg-emerald-200/55 blur-[64px] mix-blend-screen opacity-50 max-md:mix-blend-normal max-md:opacity-40" />
        <div
          className="absolute -inset-[20%] opacity-[0.22] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_15%,transparent_70%)]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)`,
            backgroundSize: '44px 44px',
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 12% 8%, rgba(255,255,255,0.38), transparent 58%),
            radial-gradient(ellipse 75% 55% at 88% 90%, rgba(0,0,0,0.14), transparent 55%)`,
        }}
        aria-hidden
      />
      <div className="site-container relative z-[5] w-full max-w-full min-w-0">
        <div className="relative z-[6] grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="mx-auto flex w-full min-w-0 max-w-xl flex-col items-center gap-6 rounded-[1.75rem] border border-white/12 bg-black/15 p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:max-w-2xl sm:p-8 lg:mx-0 lg:max-w-none lg:justify-self-center lg:border-white/15 lg:bg-black/20 lg:p-8 lg:shadow-[0_12px_48px_rgba(0,0,0,0.2)] lg:backdrop-blur-md xl:p-10">
            <div className="relative inline-block">
              <span
                className="pointer-events-none absolute -inset-2.5 rounded-full border-2 border-white/45 shadow-[0_0_48px_rgba(255,255,255,0.28)] animate-[heroLogoRing_3.5s_ease-in-out_infinite] motion-reduce:animate-none"
                aria-hidden
              />
              <img
                src="/iconappStockyPNG.png"
                alt="Stocky"
                width={120}
                height={120}
                decoding="async"
                className="relative z-[1] block h-auto w-[min(7rem,26vw)] rounded-full border-4 border-white/90 bg-white/15 p-2 shadow-[0_22px_50px_rgba(0,0,0,0.32)]"
              />
            </div>
            <p className="m-0 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/95 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-white to-sky-200 shadow-[0_0_12px_rgba(255,255,255,0.9)]" aria-hidden />
              <span className="text-balance">Stock en la nube · Ventas en eventos · Equipo sincronizado</span>
            </p>
            <h1 id="heroTitle" className="m-0 flex w-full flex-col items-center gap-1">
              <span className="text-[clamp(1.85rem,4.2vw,2.35rem)] font-bold tracking-tight text-white/95 drop-shadow-md">
                Stocky
              </span>
              <span className="bg-gradient-to-r from-white via-amber-100 to-sky-100 bg-clip-text text-[clamp(2.5rem,6.5vw,3.75rem)] font-black leading-tight tracking-tighter text-transparent drop-shadow-md max-md:!text-white max-md:[-webkit-text-fill-color:#fff] max-md:bg-none">
                Inventario fácil
              </span>
            </h1>
            <ul className="m-0 flex w-full max-w-xl flex-wrap justify-center gap-2 p-0 sm:max-w-none">
              {['Stock y ventas en el bolsillo', 'Sin curva de aprendizaje', 'Vende en eventos desde el móvil'].map((t) => (
                <li
                  key={t}
                  className="relative list-none rounded-full border border-white/20 bg-black/15 py-2 pl-8 pr-3.5 text-[0.88rem] font-semibold text-white/95 backdrop-blur-sm"
                >
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[0.75rem] text-emerald-200">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="m-0 max-w-prose text-balance text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-white/95">
              Controla el stock, vende en eventos y comparte inventarios con tu equipo. Todo desde el móvil, sin
              complicaciones — pensado para autónomos, tiendas pequeñas y proyectos que empiezan desde casa.
            </p>
            <div className="flex w-full flex-wrap justify-center gap-3">
              <a
              href={URL_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimaryShine}
              data-cursor-magnet
              data-track={JSON.stringify({
                event: 'download_click',
                params: {
                  button_location: 'hero_play',
                  button_text: 'Descargar en Google Play',
                  section: 'hero',
                },
              })}
            >
              <span className={btnRow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                    fill="#00D9FF"
                  />
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#00FF88" />
                  <path d="M3.84 2.15L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#FF3A44" />
                  <path d="M16.81 8.88L14.54 11.15L20.16 12.85L16.81 8.88Z" fill="#FFD200" />
                  <path d="M20.16 12.85L14.54 12.85L16.81 15.12L20.16 12.85Z" fill="#00D9FF" />
                </svg>
                Descargar en Google Play
              </span>
              <span className={btnShineOverlay} aria-hidden="true" />
              </a>
              <a
              href={URL_APPLE}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimaryShine}
              data-cursor-magnet
              data-track={JSON.stringify({
                event: 'download_click',
                params: {
                  button_location: 'hero_apple',
                  button_text: 'Descargar en App Store',
                  section: 'hero',
                },
              })}
            >
              <span className={btnRow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Descargar en App Store
              </span>
              <span className={btnShineOverlay} aria-hidden="true" />
              </a>
            </div>
            <p className="m-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.85rem] text-white/90">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[0.78rem] font-bold text-white ring-1 ring-white/25 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                Premium: 1 mes gratis
              </span>
              <span aria-hidden>·</span>
              <span className="text-balance">Gratis para siempre hasta 30 productos</span>
            </p>
          </div>

          <div
            className="relative hidden min-h-[min(26rem,50vh)] w-full justify-self-center lg:flex lg:max-w-none lg:items-center lg:justify-center"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[min(20rem,50vw)] w-[min(20rem,50vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-300/35 via-emerald-300/20 to-indigo-400/30 blur-3xl" />
            <div className="relative w-full max-w-[17.5rem]">
              <div className="absolute -left-1 top-[6%] z-[2] max-w-[10.5rem] -rotate-6 rounded-xl border border-white/35 bg-white/18 px-2.5 py-1.5 text-[0.72rem] font-semibold leading-tight text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md">
                Ventas en ferias
              </div>
              <div className="absolute -right-1 top-[18%] z-[2] rotate-3 rounded-xl border border-white/35 bg-white/18 px-2.5 py-1.5 text-[0.72rem] font-semibold leading-tight text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md">
                IA en el inventario
              </div>
              <div className="absolute -bottom-1 left-[6%] z-[2] -rotate-3 rounded-xl border border-white/35 bg-white/18 px-2.5 py-1.5 text-[0.72rem] font-semibold leading-tight text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md">
                Sincronizado en la nube
              </div>
              <div className="absolute -bottom-2 right-[4%] z-[2] rotate-6 rounded-xl border border-white/35 bg-white/18 px-2.5 py-1.5 text-[0.72rem] font-semibold leading-tight text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md">
                Tu equipo al día
              </div>

              <div className="relative rounded-[1.5rem] border border-white/30 bg-gradient-to-b from-white/16 to-white/[0.07] p-4 shadow-[0_28px_64px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="h-2 w-20 rounded-full bg-white/40" />
                    <div className="h-2 w-32 rounded-full bg-white/22" />
                  </div>
                  <div className="flex gap-1.5 pt-0.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-300/90" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-white/35" />
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { accent: 'bg-emerald-400/45', line1: 'w-[78%]', line2: 'w-[52%]' },
                    { accent: 'bg-sky-400/45', line1: 'w-[68%]', line2: 'w-[44%]' },
                    { accent: 'bg-amber-300/50', line1: 'w-[85%]', line2: 'w-[38%]' },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-white/18 bg-black/22 px-3 py-2.5 shadow-inner"
                    >
                      <div className={cn('h-10 w-10 shrink-0 rounded-lg ring-1 ring-white/25', row.accent)} />
                      <div className="min-w-0 flex-1 space-y-1.5 py-0.5">
                        <div className={cn('h-2 rounded-full bg-white/30', row.line1)} />
                        <div className={cn('h-2 rounded-full bg-white/16', row.line2)} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative z-[6] mt-10 w-full rounded-[1.25rem] border border-white/20 bg-white/10 px-1 py-3.5 shadow-inner backdrop-blur-md lg:mt-12"
          aria-hidden
        >
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4 text-[0.9rem] opacity-90 motion-reduce:animate-none">
              {[0, 1].map((dup) => (
                <Fragment key={dup}>
                  {marqueeItems.map((t) => (
                    <Fragment key={`${dup}-${t}`}>
                      <span>{t}</span>
                      <span>·</span>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a
        href="#beneficios"
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-85"
        aria-label="Desplazar a beneficios"
      >
        <span className="h-10 w-0.5 animate-[scrollBounce_2s_ease-in-out_infinite] rounded-full bg-white/85 motion-reduce:animate-none" />
      </a>
    </section>
  );
}
