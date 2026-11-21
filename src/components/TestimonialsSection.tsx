// Reseñas reales de Google Play (capturas en public/screenshots/reseñas).
// Si se añaden nuevas opiniones, mantén este mismo shape.
import { useLang } from '../i18n';

type Review = {
  name: string;
  initials: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: 'José Fernando R.',
    initials: 'JR',
    rating: 5,
    text: 'Aplicación fácil de manejar. Me ayuda en mi trabajo al tener al día mi stock. Actualizaciones periódicas para mejorar la funcionalidad. Gracias.',
  },
  {
    name: 'Carlos Blanco',
    initials: 'CB',
    rating: 5,
    text: 'Aplicación perfecta para la gestión de inventario, un gran descubrimiento. Funciona de 10.',
  },
  {
    name: 'Laura de Arquer',
    initials: 'LA',
    rating: 5,
    text: 'Súper útil!!',
  },
  {
    name: 'Adriana Pérez',
    initials: 'AP',
    rating: 5,
    text: 'Muy buena app :)',
  },
];


function Stars({ value }: { value: number }) {
  const { t } = useLang();
  return (
    <span className="inline-flex gap-0.5 text-amber-400" aria-label={t(`${value} sobre 5`, `${value} out of 5`)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < value ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m10 2 2.5 5.2 5.7.8-4.1 4 1 5.6L10 15l-5.1 2.7 1-5.6-4.1-4 5.7-.8L10 2Z" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}

export function TestimonialsSection() {
  const { t } = useLang();
  const aggregate = { rating: t('5,0', '5.0'), label: t('Opiniones verificadas', 'Verified reviews') };
  return (
    <section
      className="bg-[var(--background-color)] py-16 md:py-24"
      id="testimonios"
      aria-labelledby="testimonialsTitle"
    >
      <div className="site-container">
        <div className="mx-auto mb-10 flex max-w-[720px] flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-2">
            <Stars value={5} />
            <span className="text-[0.95rem] font-bold text-[var(--text-color)]">{aggregate.rating}</span>
            <span className="text-[0.85rem] text-[var(--text-light)]">· {aggregate.label}</span>
          </div>
          <h2
            id="testimonialsTitle"
            className="m-0 mb-3 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-[var(--text-color)]"
          >
            {t('Pequeños negocios que ya lo llevan al día', 'Small businesses already on top of it')}
          </h2>
          <p className="m-0 max-w-[600px] text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-[var(--text-light)]">
            {t(
              'Opiniones reales de usuarios. Todas empezaron, como tú, con la versión gratuita.',
              'Real user reviews (originally written in Spanish). They all started, like you, with the free version.',
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {reviews.map((r) => (
            <article
              key={r.name + r.initials}
              className="flex flex-col rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white px-6 py-6 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white [background-image:var(--grad-brand)]"
                  aria-hidden
                >
                  {r.initials}
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-[0.95rem] font-bold text-[var(--text-color)]">{r.name}</span>
                  <Stars value={r.rating} />
                </div>
              </div>
              <p className="m-0 text-[0.95rem] leading-[1.6] text-[var(--text-light)]">“{r.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
