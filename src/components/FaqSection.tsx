import { publicUrl } from '../lib/publicUrl';
import { useLang } from '../i18n';

export function FaqSection() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="site-container-narrow">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          {t('Preguntas frecuentes', 'Frequently asked questions')}
        </h2>
        <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
          {t('Respuestas rápidas antes de descargar', 'Quick answers before you download')}
        </p>
        <div className="flex flex-col gap-3">
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Qué diferencia hay entre Gratis y Premium?', 'What is the difference between Free and Premium?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                <>
                  Con el plan Gratis llevas un inventario real (hasta 30 productos, 3 eventos y 10 ventas por evento),
                  compartes con tu equipo y tienes sincronización en la nube. Premium quita todos los límites y suma
                  análisis con IA, exportación de inventario y <strong>facturas a Excel</strong>, imágenes en productos y
                  reportes avanzados. Tienes la tabla completa en la{' '}
                  <a className="font-medium text-[var(--accent-1)]" href="#comparativa">
                    comparativa
                  </a>
                  .
                </>,
                <>
                  The Free plan runs a real inventory (up to 30 products, 3 events and 10 sales per event), lets you share
                  with your team and syncs to the cloud. Premium removes every limit and adds AI analysis, inventory and{' '}
                  <strong>invoice export to Excel</strong>, product photos and advanced reports. See the full table in the{' '}
                  <a className="font-medium text-[var(--accent-1)]" href="#comparativa">
                    comparison
                  </a>
                  .
                </>,
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Me cobrarán algo si pruebo Premium?', 'Will I be charged if I try Premium?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                <>
                  El primer mes de Premium es <strong>gratis</strong>. Se gestiona desde Google Play o App Store, así que el
                  cobro solo se activa si no cancelas antes de que acabe el periodo de prueba. Puedes cancelar en cualquier
                  momento desde tu tienda de apps y seguir usando Inventario Fácil gratis con los límites del plan gratuito.
                </>,
                <>
                  The first month of Premium is <strong>free</strong>. It is managed through Google Play or the App Store, so
                  you are only charged if you do not cancel before the trial ends. You can cancel anytime from your app store
                  and keep using Inventario Fácil for free within the Free plan limits.
                </>,
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Puedo usar Inventario Fácil en varios dispositivos?', 'Can I use Inventario Fácil on several devices?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                'Sí. Tus datos se sincronizan en la nube para que puedas acceder desde el móvil o tablet con la misma cuenta.',
                'Yes. Your data syncs to the cloud so you can access it from your phone or tablet with the same account.',
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Cómo funciona compartir un inventario?', 'How does inventory sharing work?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                'Puedes crear inventarios compartidos e invitar a otras personas mediante un código. Ideal para equipos, familias o clubes.',
                'You can create shared inventories and invite other people with a code. Ideal for teams, families or clubs.',
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Qué incluye el análisis inteligente?', 'What does the smart analysis include?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                'Con Premium, Inventario Fácil analiza tus movimientos para mostrar la salud del inventario, alertas de rotación y recomendaciones accionables.',
                'With Premium, Inventario Fácil analyses your activity to show inventory health, turnover alerts and actionable recommendations.',
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Puedo exportar las facturas de un evento para mi asesor?', 'Can I export an event’s invoices for my accountant?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                <>
                  Sí, pero <strong>solo con Inventario Fácil Premium</strong>. En la pantalla del evento, abre el menú de tres
                  puntos (⋮) y elige «Exportar a Excel» para descargar las facturas y compartirlas con tu asesor, gestoría u
                  otra persona que las necesite.
                </>,
                <>
                  Yes, but <strong>only with Inventario Fácil Premium</strong>. On the event screen, open the three-dot menu (⋮)
                  and choose “Export to Excel” to download the invoices and share them with your accountant or anyone who
                  needs them.
                </>,
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Puedo cancelar Premium cuando quiera?', 'Can I cancel Premium whenever I want?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t(
                'Sí. El primer mes es gratis y puedes cancelar la suscripción en cualquier momento desde la tienda correspondiente.',
                'Yes. The first month is free and you can cancel your subscription anytime from the relevant store.',
              )}
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              {t('¿Dónde está mi información?', 'Where is my information stored?')}
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              {t('Consulta nuestra', 'See our')}{' '}
              <a className="font-medium text-[var(--accent-1)]" href={publicUrl('privacy.html')}>
                {t('Política de Privacidad', 'Privacy Policy')}
              </a>{' '}
              {t('para detalles sobre datos y seguridad.', 'for details on data and security.')}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
