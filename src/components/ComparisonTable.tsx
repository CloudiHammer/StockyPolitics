import { btnOutlineBlock, btnPrimaryShine, btnRow, btnShineOverlay } from '../lib/buttonClasses';
import { cn } from '../lib/cn';
import { URL_APPLE, URL_PLAY } from '../lib/urls';
import { useLang } from '../i18n';

type CellValue = string | { kind: 'no' } | { kind: 'yes' } | { kind: 'yesWith'; text: string };

type Row = { label: string; free: CellValue; premium: CellValue; highlight?: boolean };

const rowsEs: Row[] = [
  { label: 'Productos', free: 'Hasta 30', premium: 'Ilimitados', highlight: true },
  { label: 'Eventos', free: 'Hasta 3', premium: 'Ilimitados', highlight: true },
  { label: 'Ventas por evento', free: 'Hasta 10', premium: 'Ilimitadas', highlight: true },
  { label: 'Anuncios', free: 'Para ampliar productos y ventas ', premium: 'Sin anuncios' },
  { label: 'Reportes y estadísticas', free: 'Básicos', premium: 'Avanzados' },
  {
    label: 'Análisis inteligente con IA',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'Incluido' },
    highlight: true,
  },
  {
    label: 'Exportar inventario a Excel',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'Con historial' },
  },
  {
    label: 'Exportar facturas del evento a Excel',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'Para tu gestoría' },
    highlight: true,
  },
  { label: 'Imágenes en productos', free: { kind: 'no' }, premium: { kind: 'yes' } },
  { label: 'Sincronización en la nube', free: { kind: 'yes' }, premium: { kind: 'yes' } },
  { label: 'Compartir inventarios con tu equipo', free: { kind: 'no' }, premium: { kind: 'yes' } },
];

const rowsEn: Row[] = [
  { label: 'Products', free: 'Up to 30', premium: 'Unlimited', highlight: true },
  { label: 'Events', free: 'Up to 3', premium: 'Unlimited', highlight: true },
  { label: 'Sales per event', free: 'Up to 10', premium: 'Unlimited', highlight: true },
  { label: 'Ads', free: 'To add more products and sales', premium: 'No ads' },
  { label: 'Reports and statistics', free: 'Basic', premium: 'Advanced' },
  {
    label: 'Smart AI analysis',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'Included' },
    highlight: true,
  },
  {
    label: 'Export inventory to Excel',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'With history' },
  },
  {
    label: 'Export event invoices to Excel',
    free: { kind: 'no' },
    premium: { kind: 'yesWith', text: 'For your accountant' },
    highlight: true,
  },
  { label: 'Product photos', free: { kind: 'no' }, premium: { kind: 'yes' } },
  { label: 'Cloud sync', free: { kind: 'yes' }, premium: { kind: 'yes' } },
  { label: 'Share inventories with your team', free: { kind: 'no' }, premium: { kind: 'yes' } },
];

function Cell({ value, isPremium }: { value: CellValue; isPremium?: boolean }) {
  const { t } = useLang();
  if (typeof value === 'string') {
    return (
      <span className={cn('text-[0.95rem] font-semibold', isPremium ? 'text-[#7b1fa2]' : 'text-[var(--text-color)]')}>
        {value}
      </span>
    );
  }
  if (value.kind === 'no') {
    return (
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/[0.06] text-slate-500"
        aria-label={t('No incluido', 'Not included')}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  if (value.kind === 'yes') {
    return (
      <span
        className={cn(
          'inline-flex h-6 w-6 items-center justify-center rounded-full font-extrabold',
          isPremium ? 'bg-emerald-200/80 text-emerald-900' : 'bg-emerald-100 text-emerald-700',
        )}
        aria-label={t('Incluido', 'Included')}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={cn(
          'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-extrabold',
          isPremium ? 'bg-emerald-200/80 text-emerald-900' : 'bg-emerald-100 text-emerald-700',
        )}
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </span>
      <span className={cn('text-[0.85rem] font-semibold', isPremium ? 'text-[#7b1fa2]' : 'text-[var(--text-color)]')}>
        {value.text}
      </span>
    </span>
  );
}

export function ComparisonTable() {
  const { t } = useLang();
  const rows = t(rowsEs, rowsEn);
  return (
    <section className="bg-[var(--background-color)] py-16 md:py-24" id="comparativa" aria-labelledby="compareTitle">
      <div className="site-container">
        <h2
          id="compareTitle"
          className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]"
        >
          {t('Gratis vs Premium, de un vistazo', 'Free vs Premium at a glance')}
        </h2>
        <p className="mx-auto mb-10 max-w-[680px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)]">
          {t(
            'Mismos controles, el plan que elijas. Premium desbloquea ilimitado, análisis con IA y la exportación de facturas que tu gestoría pide cada mes.',
            'Same controls, whichever plan you choose. Premium unlocks unlimited use, AI analysis and the invoice export your accountant asks for every month.',
          )}
        </p>

        <div className="mx-auto max-w-[960px] overflow-hidden rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white shadow-[var(--shadow)]">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] items-stretch gap-0 md:grid-cols-[1.6fr_1fr_1fr]">
            <div className="flex items-end border-b border-slate-900/[0.08] px-4 py-5 md:px-6">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.08em] text-[var(--text-light)]">
                {t('Característica', 'Feature')}
              </span>
            </div>
            <div className="flex flex-col items-center justify-end gap-1 border-b border-l border-slate-900/[0.08] px-3 py-5 text-center md:px-5">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--text-light)]">
                {t('Gratuito', 'Free')}
              </span>
              <span className="text-[1.1rem] font-extrabold text-[var(--text-color)]">0 €</span>
              <span className="text-[0.75rem] text-[var(--text-light)]">{t('para siempre', 'forever')}</span>
            </div>
            <div
              className="flex flex-col items-center justify-end gap-1 border-b border-l border-slate-900/[0.08] px-3 py-5 text-center text-white md:px-5"
              style={{ backgroundImage: 'var(--grad-brand)' }}
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                {t('1 mes gratis', '1 month free')}
              </span>
              <span className="text-[1.1rem] font-extrabold">Premium</span>
              <span className="text-[0.75rem] opacity-95">{t('desde 7,92 €/mes', 'from €7.92/month')}</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                'grid grid-cols-[1.2fr_1fr_1fr] items-center gap-0 md:grid-cols-[1.6fr_1fr_1fr]',
                i % 2 === 1 && 'bg-slate-900/[0.02]',
              )}
            >
              <div className="flex items-center gap-2 px-4 py-4 md:px-6">
                <span
                  className={cn(
                    'text-[0.95rem] leading-tight text-[var(--text-color)]',
                    row.highlight ? 'font-semibold' : 'font-medium',
                  )}
                >
                  {row.label}
                </span>
                {row.highlight && (
                  <span className="hidden rounded-full bg-amber-100 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-amber-800 md:inline-block">
                    {t('Clave', 'Key')}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center border-l border-slate-900/[0.06] px-3 py-4 text-center md:px-5">
                <Cell value={row.free} />
              </div>
              <div className="flex items-center justify-center border-l border-slate-900/[0.06] bg-amber-50/50 px-3 py-4 text-center md:px-5">
                <Cell value={row.premium} isPremium />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center justify-center gap-3 text-center">
          <p className="text-[0.95rem] text-[var(--text-light)]">
            {t(
              <>
                ¿Dudas? Prueba Premium <strong>gratis durante 1 mes</strong> y cancela cuando quieras.
              </>,
              <>
                Not sure? Try Premium <strong>free for 1 month</strong> and cancel anytime.
              </>,
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#precios"
              className={btnPrimaryShine}
              data-cursor-magnet
              data-track={JSON.stringify({
                event: 'cta_click',
                params: { button_location: 'comparison_premium', button_text: 'Probar Premium 1 mes gratis', section: 'comparativa' },
              })}
            >
              <span className={btnRow}>{t('Probar Premium 1 mes gratis', 'Try Premium free for 1 month')}</span>
              <span className={btnShineOverlay} aria-hidden="true" />
            </a>
            <a
              href={URL_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnOutlineBlock, 'w-auto px-[22px]')}
              data-cursor-magnet
              data-track={JSON.stringify({
                event: 'download_click',
                params: { button_location: 'comparison_free', button_text: 'Empezar gratis - Play', section: 'comparativa' },
              })}
            >
              {t('Empezar gratis · Play', 'Start free · Play')}
            </a>
            <a
              href={URL_APPLE}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnOutlineBlock, 'w-auto px-[22px]')}
              data-cursor-magnet
              data-track={JSON.stringify({
                event: 'download_click',
                params: { button_location: 'comparison_free', button_text: 'Empezar gratis - App Store', section: 'comparativa' },
              })}
            >
              {t('Empezar gratis · App Store', 'Start free · App Store')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
