import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/cn';
import { publicUrl } from '../lib/publicUrl';
import { useLang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const shotsEs = [
  { src: publicUrl('screenshots/dashboard.png'), alt: 'Dashboard principal de Inventario Fácil', caption: 'Dashboard' },
  { src: publicUrl('screenshots/inventory.png'), alt: 'Lista de inventario', caption: 'Inventario' },
  { src: publicUrl('screenshots/compartir.png'), alt: 'Compartir inventario', caption: 'Compartir' },
  { src: publicUrl('screenshots/analisis.png'), alt: 'Análisis inteligente', caption: 'Análisis IA' },
  { src: publicUrl('screenshots/analytics.png'), alt: 'Analíticas avanzadas', caption: 'Analíticas' },
  {
    src: publicUrl('screenshots/exportarFacturas.png'),
    alt: 'Exportar facturas del evento a Excel — Premium',
    caption: 'Exportar facturas (Premium)',
  },
];

const shotsEn = [
  { src: publicUrl('screenshots/dashboard.png'), alt: 'Inventario Fácil main dashboard', caption: 'Dashboard' },
  { src: publicUrl('screenshots/inventory.png'), alt: 'Inventory list', caption: 'Inventory' },
  { src: publicUrl('screenshots/compartir.png'), alt: 'Share inventory', caption: 'Sharing' },
  { src: publicUrl('screenshots/analisis.png'), alt: 'Smart analysis', caption: 'AI analysis' },
  { src: publicUrl('screenshots/analytics.png'), alt: 'Advanced analytics', caption: 'Analytics' },
  {
    src: publicUrl('screenshots/exportarFacturas.png'),
    alt: 'Export event invoices to Excel — Premium',
    caption: 'Export invoices (Premium)',
  },
];

export function ScreenshotsFan() {
  const { t } = useLang();
  const shots = t(shotsEs, shotsEn);
  const fanRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const fan = fanRef.current;
    if (!fan) return;

    const st = ScrollTrigger.create({
      trigger: fan,
      start: 'top 75%',
      onEnter: () => fan.setAttribute('data-aligned', 'true'),
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
  }, [lightbox]);

  return (
    <>
      <section className="relative bg-gradient-to-b from-white/[0.92] to-[rgba(246,248,252,0.95)] py-16 md:py-24" id="capturas">
        <div className="site-container">
          <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
            {t('Ve Inventario Fácil en acción', 'See Inventario Fácil in action')}
          </h2>
          <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
            {t(
              'Desde el inventario compartido hasta el punto de venta y la exportación de facturas (Premium)',
              'From shared inventory to point of sale and invoice export (Premium)',
            )}
          </p>
          <div
            className="flex flex-wrap justify-center gap-3 py-10 [perspective:1400px] md:gap-4"
            id="shotFan"
            ref={fanRef}
          >
            {shots.map((s) => (
              <button
                key={s.src}
                type="button"
                className={cn(
                  'cursor-zoom-in rounded-[var(--border-radius-lg)] border-0 bg-transparent p-0 shadow-[var(--shadow-lg)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'shot-fan-item odd:[transform:rotateY(-18deg)_translateZ(0)]',
                  'even:[transform:rotateY(14deg)_translateY(12px)]',
                  'hover:z-[2] hover:[transform:rotateY(0deg)_scale(1.03)]',
                  'motion-reduce:!transform-none',
                )}
                onClick={() => setLightbox({ src: s.src, caption: s.caption })}
                data-cursor-magnet
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={280}
                  height={606}
                  className="h-auto max-h-[min(420px,52vh)] w-auto rounded-[var(--border-radius-lg)] max-md:max-h-[min(320px,52vh)]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[20000] grid place-content-center gap-4 bg-black/82 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            type="button"
            className="fixed right-6 top-5 grid h-12 w-12 place-content-center rounded-full border-0 bg-white/12 text-3xl leading-none text-white"
            aria-label={t('Cerrar', 'Close')}
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <img
            className="mx-auto h-auto max-h-[min(86vh,900px)] w-auto rounded-2xl"
            src={lightbox.src}
            alt={lightbox.caption}
          />
          <p className="m-0 text-center font-semibold text-white">{lightbox.caption}</p>
        </div>
      )}
    </>
  );
}
