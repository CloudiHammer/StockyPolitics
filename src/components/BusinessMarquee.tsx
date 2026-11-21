export function BusinessMarquee() {
  return (
    <section className="relative py-16 md:py-24" id="negocios">
      <div className="site-container">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          Ideal para pequeños negocios
        </h2>
        <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
          Inventario Fácil encaja en la vida real del comercio pequeño: ferias, mercadillos, tiendas de barrio, talleres y equipos que
          necesitan claridad sin software caro ni formaciones eternas
        </p>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track-rev flex w-max gap-4 text-[0.9rem] opacity-90">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏪 Tiendas y comercios
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🎪 Ferias y mercadillos
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🔧 Talleres
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🛒 Venta online
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏪 Tiendas y comercios
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🎪 Ferias y mercadillos
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🔧 Talleres
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🛒 Venta online
              </span>
            </div>
          </div>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track-fwd flex w-max gap-4 text-[0.9rem] opacity-90">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🍽️ Hostelería ligera
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏠 Emprende desde casa
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏊 Clubes y asociaciones
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                👥 Equipos con inventario compartido
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🍽️ Hostelería ligera
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏠 Emprende desde casa
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                🏊 Clubes y asociaciones
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                👥 Equipos con inventario compartido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
