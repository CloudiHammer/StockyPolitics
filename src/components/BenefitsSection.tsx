import { cn } from '../lib/cn';

export function BenefitsSection() {
  return (
    <section className="bg-[var(--surface-color)] py-16 md:py-24" id="beneficios">
      <div className="site-container">
        <p className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-slate-900/[0.08] bg-white px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--text-light)]">
          <span className="inline-block h-2 w-2 rounded-full [background-image:var(--grad-brand)]" aria-hidden />
          Sin curva de aprendizaje
        </p>
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          Mejora tu gestión en tres pasos
        </h2>
        <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
          Menos papeles, menos errores y ventas que salen bien a la primera — en la feria, en la tienda o desde casa.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <article
            className={cn(
              'flex min-w-0 flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.07] bg-white/[0.96] px-6 pb-7 pt-6 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]',
            )}
          >
            <div className="sb-clock flex h-[72px] items-center justify-start" aria-hidden="true" />
            <h3 className="mb-2 mt-3 text-[1.125rem] font-bold tracking-tight text-[var(--text-color)]">
              Deja las hojas de Excel
            </h3>
            <p className="m-0 text-[0.9375rem] leading-[1.55] text-[var(--text-light)]">
              Añade productos en segundos, busca por nombre o categoría y actualiza stock desde el mostrador. Todo
              desde el móvil que ya llevas encima.
            </p>
          </article>
          <article
            className={cn(
              'flex min-w-0 flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.07] bg-white/[0.96] px-6 pb-7 pt-6 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]',
            )}
          >
            <div className="sb-bars flex h-[72px] items-end justify-start gap-1.5" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h3 className="mb-2 mt-3 text-[1.125rem] font-bold tracking-tight text-[var(--text-color)]">
              Nunca te quedes sin stock
            </h3>
            <p className="m-0 text-[0.9375rem] leading-[1.55] text-[var(--text-light)]">
              Visualiza entradas, salidas y productos parados. Con Premium, la IA te avisa de lo que no rota antes de
              que se convierta en dinero bloqueado.
            </p>
          </article>
          <article
            className={cn(
              'flex min-w-0 flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.07] bg-white/[0.96] px-6 pb-7 pt-6 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]',
            )}
          >
            <div className="sb-checks flex h-[72px] flex-col items-start justify-center gap-2.5" aria-hidden="true">
              <span className="sb-check" />
              <span className="sb-check" />
              <span className="sb-check" />
            </div>
            <h3 className="mb-2 mt-3 text-[1.125rem] font-bold tracking-tight text-[var(--text-color)]">
              Vende en eventos sin un TPV caro
            </h3>
            <p className="m-0 text-[0.9375rem] leading-[1.55] text-[var(--text-light)]">
              Punto de venta integrado con líneas, clientes e IVA — <strong>incluido en el plan gratuito</strong>. Con
              Premium, además, exportas todas las facturas del evento a Excel para tu gestoría.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
