import { btnPrimaryShine, btnRow, btnShineOverlay } from '../lib/buttonClasses';
import { useLang } from '../i18n';

const cardsEs = [
  {
    figure: '~3 h/mes',
    title: 'Ahorra tiempo con la gestoría',
    body: 'Exporta todas las facturas del evento a Excel en dos toques y envíalas por email. Sin volver a picar a mano.',
  },
  {
    figure: '0 €',
    title: 'En software TPV extra',
    body: 'Un TPV con caja y líneas de venta dentro de la app que ya usas para el inventario. Sin licencias aparte.',
  },
  {
    figure: '−47 %',
    title: 'Con el plan anual',
    body: 'Paga una vez al año y te sale a menos de 8 € al mes. El primer mes sigue siendo gratis.',
  },
];

const cardsEn = [
  {
    figure: '~3 h/mo',
    title: 'Saved on bookkeeping',
    body: 'Export every event invoice to Excel in two taps and email it. No more typing it all in by hand.',
  },
  {
    figure: '€0',
    title: 'On extra POS software',
    body: 'A POS with checkout and sale lines inside the app you already use for inventory. No separate licences.',
  },
  {
    figure: '−47 %',
    title: 'With the yearly plan',
    body: 'Pay once a year and it comes to less than €8 a month. The first month is still free.',
  },
];

export function RoiSection() {
  const { t } = useLang();
  const cards = t(cardsEs, cardsEn);
  return (
    <section
      className="relative overflow-hidden bg-[var(--surface-color)] py-16 md:py-24"
      id="roi"
      aria-labelledby="roiTitle"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(600px 320px at 10% 0%, rgba(255,183,77,0.16), transparent 60%), radial-gradient(600px 320px at 90% 100%, rgba(33,150,243,0.14), transparent 60%)',
        }}
        aria-hidden
      />
      <div className="site-container relative z-[1]">
        <p className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-slate-900/[0.08] bg-white px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--text-light)]">
          <span
            className="inline-block h-2 w-2 rounded-full [background-image:var(--grad-brand)]"
            aria-hidden
          />
          {t('Tu inversión', 'Your investment')}
        </p>
        <h2
          id="roiTitle"
          className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]"
        >
          {t('Menos de un menú al mes', 'Less than a lunch a month')}
        </h2>
        <p className="mx-auto mb-4 max-w-[680px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)]">
          {t(
            <>
              Con el plan <strong>anual</strong>, Premium cuesta unos <strong>7,92 € al mes</strong> en la práctica —unos{' '}
              <strong>0,26 € al día</strong>. Por ese precio tienes productos, eventos y ventas ilimitados, análisis con IA y
              exportación de facturas a Excel para enviar a tu gestoría.
            </>,
            <>
              With the <strong>yearly</strong> plan, Premium works out at about <strong>€7.92 a month</strong> — roughly{' '}
              <strong>€0.26 a day</strong>. For that you get unlimited products, events and sales, AI analysis and invoice
              export to Excel to send to your accountant.
            </>,
          )}
        </p>
        <p className="mx-auto mb-10 max-w-[680px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)]">
          {t('Ventajas que notas en el día a día:', 'Benefits you notice every day:')}
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative flex flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white px-6 py-7 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <span
                className="bg-clip-text text-[2.25rem] font-black leading-none tracking-tight text-transparent [background-image:var(--grad-brand)]"
                aria-hidden
              >
                {c.figure}
              </span>
              <h3 className="mb-2 mt-3 text-[1.05rem] font-bold tracking-tight text-[var(--text-color)]">
                {c.title}
              </h3>
              <p className="m-0 text-[0.95rem] leading-[1.55] text-[var(--text-light)]">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center gap-3 text-center">
          <p className="text-[0.95rem] text-[var(--text-light)]">
            {t(
              'Primer mes gratis · Cancela cuando quieras desde la tienda · Sin permanencia',
              'First month free · Cancel anytime from the store · No commitment',
            )}
          </p>
          <a
            href="#precios"
            className={btnPrimaryShine}
            data-cursor-magnet
            data-track={JSON.stringify({
              event: 'cta_click',
              params: { button_location: 'roi_section', button_text: 'Ver planes', section: 'roi' },
            })}
          >
            <span className={btnRow}>{t('Ver planes y empezar gratis', 'See plans and start free')}</span>
            <span className={btnShineOverlay} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
