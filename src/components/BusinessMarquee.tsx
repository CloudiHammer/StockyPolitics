import { useLang } from '../i18n';

export function BusinessMarquee() {
  const { t } = useLang();
  return (
    <section className="relative py-16 md:py-24" id="negocios">
      <div className="site-container">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]">
          {t('Ideal para pequeños negocios', 'Perfect for small businesses')}
        </h2>
        <p className="mx-auto mb-12 max-w-[640px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)] md:mb-12">
          {t(
            'Inventario Fácil encaja en la vida real del comercio pequeño: ferias, mercadillos, tiendas de barrio, talleres y equipos que necesitan claridad sin software caro ni formaciones eternas',
            'Inventario Fácil fits the real life of small retail: fairs, markets, neighbourhood shops, workshops and teams that need clarity without expensive software or endless training',
          )}
        </p>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track-rev flex w-max gap-4 text-[0.9rem] opacity-90">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏪 Tiendas y comercios', '🏪 Shops and stores')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🎪 Ferias y mercadillos', '🎪 Fairs and markets')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🔧 Talleres', '🔧 Workshops')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🛒 Venta online', '🛒 Online sales')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏪 Tiendas y comercios', '🏪 Shops and stores')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🎪 Ferias y mercadillos', '🎪 Fairs and markets')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🔧 Talleres', '🔧 Workshops')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🛒 Venta online', '🛒 Online sales')}
              </span>
            </div>
          </div>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track-fwd flex w-max gap-4 text-[0.9rem] opacity-90">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🍽️ Hostelería ligera', '🍽️ Small hospitality')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏠 Emprende desde casa', '🏠 Home-based businesses')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏊 Clubes y asociaciones', '🏊 Clubs and associations')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('👥 Equipos con inventario compartido', '👥 Teams with shared inventory')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🍽️ Hostelería ligera', '🍽️ Small hospitality')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏠 Emprende desde casa', '🏠 Home-based businesses')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('🏊 Clubes y asociaciones', '🏊 Clubs and associations')}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/[0.08] bg-white px-[18px] py-3 font-semibold shadow-[var(--shadow)]">
                {t('👥 Equipos con inventario compartido', '👥 Teams with shared inventory')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
