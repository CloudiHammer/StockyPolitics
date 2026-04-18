import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '../lib/cn';
import { publicUrl } from '../lib/publicUrl';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type ShotKey = 'dashboard' | 'inventory' | 'compartir' | 'analisis' | 'exportar' | 'cloud';

type Tier = 'free' | 'premium';

const steps: {
  shot: ShotKey;
  tier: Tier;
  badge?: 'collab' | 'ia';
  icon: string;
  title: string;
  body: ReactNode;
  cloud?: boolean;
}[] = [
  {
    shot: 'dashboard',
    tier: 'free',
    icon: '📊',
    title: 'Panel y analíticas',
    body: 'Visión global del inventario, movimientos recientes, gráficas de ventas y métricas clave en un solo vistazo. Desde el primer día, sin configurar nada.',
  },
  {
    shot: 'inventory',
    tier: 'free',
    icon: '📦',
    title: 'Gestión de Inventario',
    body: 'Añade, edita y organiza productos con búsqueda rápida por nombre o categoría. Con Premium, también en imágenes.',
  },
  {
    shot: 'compartir',
    tier: 'free',
    badge: 'collab',
    icon: '🔗',
    title: 'Compartir Inventario',
    body: 'Colabora con tu equipo o familia: crea inventarios compartidos e invita por código. Todos ven los cambios sincronizados en la nube.',
  },
  {
    shot: 'analisis',
    tier: 'premium',
    badge: 'ia',
    icon: '✨',
    title: 'Análisis Inteligente con IA',
    body: 'Evalúa la salud de tu inventario, detecta baja rotación y recibe recomendaciones basadas en tus movimientos para liberar dinero parado.',
  },
  {
    shot: 'exportar',
    tier: 'premium',
    icon: '🧾',
    title: 'Exportación de facturas a Excel',
    body: (
      <>
        El punto de venta en eventos (líneas, clientes e IVA) está también en el plan Gratuito, con límites. Con
        Premium desbloqueas ventas ilimitadas por evento y <strong>exportas todas las facturas a Excel</strong> desde
        el menú del evento — listas para enviar a tu asesor o gestoría por email.
      </>
    ),
  },
  {
    shot: 'cloud',
    tier: 'free',
    icon: '☁️',
    title: 'Sincronización en la Nube',
    body: 'Tus datos seguros y accesibles desde cualquier dispositivo, con respaldo automático.',
    cloud: true,
  },
];

function TierBadge({ tier, badge }: { tier: Tier; badge?: 'collab' | 'ia' }) {
  if (tier === 'premium') {
    return (
      <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-amber-400/95 to-purple-700/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
        <span>Premium</span>
        {badge === 'ia' && <span className="opacity-85">· IA</span>}
      </span>
    );
  }
  return (
    <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-emerald-100 ring-1 ring-emerald-300/30">
      <span>Gratis</span>
      {badge === 'collab' && <span className="opacity-85">· Colaborativo</span>}
    </span>
  );
}

export function FeaturesShowcase() {
  const [active, setActive] = useState<ShotKey>('dashboard');
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

    const stepEls = sectionRef.current.querySelectorAll<HTMLElement>('[data-shot]');
    const root = sectionRef.current;
    const ctx = gsap.context(() => {
      stepEls.forEach((step) => {
        const shot = step.dataset.shot as ShotKey;
        ScrollTrigger.create({
          trigger: step,
          start: 'top 58%',
          end: 'bottom 42%',
          onEnter: () => setActive(shot),
          onEnterBack: () => setActive(shot),
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--bg-ink)] py-16 text-slate-200 md:py-24"
      id="caracteristicas"
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(900px 480px at 15% -10%, rgba(255,183,77,0.06), transparent 55%)',
            'radial-gradient(800px 420px at 92% 25%, rgba(33,150,243,0.055), transparent 50%)',
          ].join(', '),
        }}
        aria-hidden
      />
      <div className="site-container relative z-[1]">
        <h2 className="m-0 mb-3 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-slate-100">
          Todo lo que necesita un pequeño negocio
        </h2>
        <p className="mx-auto mb-12 max-w-[660px] text-center text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-slate-300/85 md:mb-12">
          Inventario, POS en eventos, equipo y analíticas. Cada tarjeta indica si está en el plan Gratis o en Premium.
        </p>
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(280px,340px)] lg:items-start lg:gap-12">
          <div>
            {steps.map((s) => {
              const isActive = active === s.shot;
              const variant =
                s.tier === 'premium'
                  ? 'border-amber-400/45 bg-gradient-to-br from-amber-400/[0.08] to-purple-900/20'
                  : s.badge === 'collab'
                    ? 'border-sky-400/35 bg-white/[0.06]'
                    : 'border-white/10 bg-white/[0.06]';
              return (
                <article
                  key={s.shot}
                  className={cn(
                    'mb-5 rounded-[var(--border-radius-lg)] border p-7 transition-[border-color,box-shadow] duration-300 last:mb-0 md:px-7 md:py-7',
                    variant,
                    isActive && 'border-amber-400/55 shadow-[0_0_0_1px_rgba(255,183,77,0.25)]',
                  )}
                  data-shot={s.shot}
                >
                  <TierBadge tier={s.tier} badge={s.badge} />
                  <div className="mb-2 text-3xl" aria-hidden="true">
                    {s.cloud ? (
                      <span className="text-slate-200">
                        <svg viewBox="0 0 64 64" width={48} height={48} fill="none" className="inline">
                          <circle cx="22" cy="28" r="10" stroke="currentColor" strokeWidth="2" />
                          <rect x="34" y="22" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                          <path d="M12 44h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    ) : (
                      s.icon
                    )}
                  </div>
                  <h3 className="m-0 mb-2 text-xl">{s.title}</h3>
                  <p className="m-0 text-[0.98rem] text-slate-300/90">{s.body}</p>
                </article>
              );
            })}
          </div>
          <div className="relative mx-auto w-full max-w-[min(300px,78vw)] lg:sticky lg:top-[100px] max-lg:static max-lg:top-auto">
            <div className="relative rounded-[36px] border border-white/25 bg-[rgba(15,23,42,0.85)] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]">
              <div
                className="absolute left-1/2 top-3.5 z-[2] h-[22px] w-[28%] -translate-x-1/2 rounded-b-2xl bg-[#0a0a0a]"
                aria-hidden="true"
              />
              <div className="relative aspect-[390/844] overflow-hidden rounded-[28px] bg-slate-950">
                <img
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[450ms]',
                    active === 'dashboard' && 'z-[1] opacity-100',
                  )}
                  data-key="dashboard"
                  src={publicUrl('screenshots/dashboard.png')}
                  alt="Dashboard y analíticas de Stocky"
                  width={390}
                  height={844}
                  aria-hidden={active !== 'dashboard'}
                />
                <img
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[450ms]',
                    active === 'inventory' && 'z-[1] opacity-100',
                  )}
                  data-key="inventory"
                  src={publicUrl('screenshots/inventory.png')}
                  alt="Inventario en Stocky"
                  width={390}
                  height={844}
                  aria-hidden={active !== 'inventory'}
                />
                <img
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[450ms]',
                    active === 'compartir' && 'z-[1] opacity-100',
                  )}
                  data-key="compartir"
                  src={publicUrl('screenshots/compartir.png')}
                  alt="Compartir inventario"
                  width={390}
                  height={844}
                  aria-hidden={active !== 'compartir'}
                />
                <img
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[450ms]',
                    active === 'analisis' && 'z-[1] opacity-100',
                  )}
                  data-key="analisis"
                  src={publicUrl('screenshots/analisis.png')}
                  alt="Análisis inteligente"
                  width={390}
                  height={844}
                  aria-hidden={active !== 'analisis'}
                />
                <img
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[450ms]',
                    active === 'exportar' && 'z-[1] opacity-100',
                  )}
                  data-key="exportar"
                  src={publicUrl('screenshots/exportarFacturas.png')}
                  alt="Exportar facturas del evento a Excel"
                  width={390}
                  height={844}
                  aria-hidden={active !== 'exportar'}
                />
                <div
                  className={cn(
                    'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500/35 to-emerald-500/28 text-center text-slate-200 opacity-0 transition-opacity duration-[450ms]',
                    active === 'cloud' && 'z-[1] opacity-100',
                  )}
                  data-key="cloud"
                  aria-hidden={active !== 'cloud'}
                >
                  <div className="px-6 py-6">
                    <span className="sb-dot mx-1.5 inline-block h-3 w-3 rounded-full [background-image:var(--grad-brand)]" />
                    <span className="sb-dot sb-dot--d1 mx-1.5 inline-block h-3 w-3 rounded-full [background-image:var(--grad-brand)]" />
                    <span className="sb-dot sb-dot--d2 mx-1.5 inline-block h-3 w-3 rounded-full [background-image:var(--grad-brand)]" />
                    <p className="mt-3 font-medium">Sincronización en la nube segura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
