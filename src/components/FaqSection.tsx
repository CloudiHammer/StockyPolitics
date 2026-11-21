import { publicUrl } from '../lib/publicUrl';

export function FaqSection() {
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="site-container-narrow">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          Preguntas frecuentes
        </h2>
        <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
          Respuestas rápidas antes de descargar
        </p>
        <div className="flex flex-col gap-3">
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Qué diferencia hay entre Gratis y Premium?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Con el plan Gratis llevas un inventario real (hasta 30 productos, 3 eventos y 10 ventas por evento),
              compartes con tu equipo y tienes sincronización en la nube. Premium quita todos los límites y suma
              análisis con IA, exportación de inventario y <strong>facturas a Excel</strong>, imágenes en productos y
              reportes avanzados. Tienes la tabla completa en la{' '}
              <a className="font-medium text-[var(--accent-1)]" href="#comparativa">
                comparativa
              </a>
              .
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Me cobrarán algo si pruebo Premium?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              El primer mes de Premium es <strong>gratis</strong>. Se gestiona desde Google Play o App Store, así que el
              cobro solo se activa si no cancelas antes de que acabe el periodo de prueba. Puedes cancelar en cualquier
              momento desde tu tienda de apps y seguir usando Inventario Fácil gratis con los límites del plan gratuito.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Puedo usar Inventario Fácil en varios dispositivos?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Sí. Tus datos se sincronizan en la nube para que puedas acceder desde el móvil o tablet con la misma cuenta.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Cómo funciona compartir un inventario?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Puedes crear inventarios compartidos e invitar a otras personas mediante un código. Ideal para equipos,
              familias o clubes.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Qué incluye el análisis inteligente?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Con Premium, Inventario Fácil analiza tus movimientos para mostrar la salud del inventario, alertas de rotación y
              recomendaciones accionables.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Puedo exportar las facturas de un evento para mi asesor?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Sí, pero <strong>solo con Inventario Fácil Premium</strong>. En la pantalla del evento, abre el menú de tres puntos (⋮) y
              elige «Exportar a Excel» para descargar las facturas y compartirlas con tu asesor, gestoría u otra persona que
              las necesite.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Puedo cancelar Premium cuando quiera?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Sí. El primer mes es gratis y puedes cancelar la suscripción en cualquier momento desde la tienda correspondiente.
            </p>
          </details>
          <details className="rounded-[var(--border-radius)] border border-slate-900/10 bg-white px-4" data-cursor-magnet>
            <summary className="cursor-pointer list-none py-4 pl-2 pr-2 font-semibold [&::-webkit-details-marker]:hidden">
              ¿Dónde está mi información?
            </summary>
            <p className="m-0 border-t border-slate-900/[0.08] px-2 pb-4 pt-0 text-[var(--text-light)]">
              Consulta nuestra{' '}
              <a className="font-medium text-[var(--accent-1)]" href={publicUrl('privacy.html')}>
                Política de Privacidad
              </a>{' '}
              para detalles sobre datos y seguridad.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
