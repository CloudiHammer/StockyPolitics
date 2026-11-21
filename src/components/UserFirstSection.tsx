import { useLang } from '../i18n';
import { EMAIL } from '../lib/urls';

export function UserFirstSection() {
  const { t } = useLang();
  return (
    <section
      className="relative bg-gradient-to-b from-white/[0.92] to-[rgba(246,248,252,0.95)] py-16"
      id="hecha-contigo"
      aria-labelledby="user-first-title"
    >
      <div className="site-container max-w-2xl">
        <div className="rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white/[0.95] p-7 shadow-[var(--shadow)] md:px-8 md:py-8">
          <h2
            id="user-first-title"
            className="m-0 mb-3 text-center text-[clamp(1.35rem,3.5vw,1.75rem)] font-extrabold tracking-tight text-[var(--text-color)]"
          >
            {t('Hecha por y para ti', 'Made by and for you')}
          </h2>
          <p className="m-0 text-center text-[1rem] leading-[1.65] text-[var(--text-light)]">
            {t(
              'Inventario Fácil lo construimos escuchando a las personas que la usan cada día. ¿Echas algo en falta o se te ocurre cómo mejorarla?',
              'We build Inventario Fácil by listening to the people who use it every day. Missing something, or have an idea to make it better?',
            )}{' '}
            <a
              className="font-semibold text-[var(--accent-1)] underline decoration-transparent underline-offset-[3px] transition-colors hover:text-[#1565c0]"
              href={`mailto:${EMAIL}`}
            >
              {t('Escríbenos', 'Write to us')}
            </a>{' '}
            {t('— leemos todo lo que llega.', '— we read everything.')}
          </p>
        </div>
      </div>
    </section>
  );
}
