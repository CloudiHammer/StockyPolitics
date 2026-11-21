import { btnPrimaryOnBrand, btnRow, btnShineOverlay } from '../lib/buttonClasses';
import { URL_APPLE, URL_PLAY, EMAIL } from '../lib/urls';

export function CtaFinal() {
  return (
    <section
      className="relative overflow-hidden py-[100px] text-center text-white [background-image:var(--grad-brand)] [background-size:100%_100%]"
      id="contacto"
    >
      {/* Oscurece zonas muy claras del degradado para que el blanco se lea sin tocar tipografía */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/10 to-slate-950/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 animate-[meshMove_14s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1), transparent 42%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.22), transparent 48%)',
        }}
        aria-hidden
      />
      <div className="site-container relative z-[1]">
        <h2 className="m-0 mb-3 text-[clamp(1.85rem,4vw,2.75rem)] font-extrabold">
          Empieza gratis en 2 minutos
        </h2>
        <p className="mx-auto mb-6 max-w-[620px] text-[1.1rem] opacity-95">
          Descarga Inventario Fácil, añade tus primeros productos y decide luego si activas Premium. El primer mes es gratis y
          cancelas cuando quieras.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={URL_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimaryOnBrand}
            data-cursor-magnet
            data-track={JSON.stringify({
              event: 'download_click',
              params: {
                button_location: 'cta_final_play',
                button_text: 'Descargar en Google Play',
                section: 'cta_final',
              },
            })}
          >
            <span className={btnRow}>Descargar en Google Play</span>
            <span className={btnShineOverlay} aria-hidden="true" />
          </a>
          <a
            href={URL_APPLE}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimaryOnBrand}
            data-cursor-magnet
            data-track={JSON.stringify({
              event: 'download_click',
              params: {
                button_location: 'cta_final_apple',
                button_text: 'Descargar en App Store',
                section: 'cta_final',
              },
            })}
          >
            <span className={btnRow}>Descargar en App Store</span>
            <span className={btnShineOverlay} aria-hidden="true" />
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-[0.95rem] opacity-95">
          Gratis para siempre hasta 30 productos · Premium: primer mes gratis · Sin permanencia
        </p>
        <p className="mx-auto mt-3 text-[0.9rem] opacity-85">
          ¿Prefieres escribirnos?{' '}
          <a className="text-white underline underline-offset-2" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
