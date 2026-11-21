import { publicUrl } from '../lib/publicUrl';
import { EMAIL } from '../lib/urls';
import { useLang } from '../i18n';

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0f1419] px-0 pb-8 pt-16 text-white/85">
      <div className="site-container grid gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={publicUrl('app-icon.png')} alt="" width={48} height={48} className="mb-3 rounded-[14px]" />
          <p className="m-0">
            {t(
              'Inventario Fácil — inventario y punto de venta para pequeños negocios.',
              'Inventario Fácil — inventory and point of sale for small businesses.',
            )}
          </p>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">{t('Producto', 'Product')}</h3>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href="#precios">
            {t('Precios', 'Pricing')}
          </a>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href="#caracteristicas"
          >
            {t('Funciones', 'Features')}
          </a>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href="#faq">
            FAQ
          </a>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">Legal</h3>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href={publicUrl('privacy.html')}>
            {t('Privacidad', 'Privacy')}
          </a>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href={publicUrl('terms.html')}>
            {t('Términos', 'Terms')}
          </a>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href={publicUrl('delete-account.html')}
          >
            {t('Eliminar cuenta', 'Delete account')}
          </a>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">{t('Contacto', 'Contact')}</h3>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </div>
      </div>
      <div className="mx-auto my-10 h-[3px] max-w-[1200px] w-[calc(100%-2.5rem)] rounded-sm [background-image:var(--grad-brand)]" />
      <div className="site-container text-center text-[0.9rem] text-white/55">
        <p className="m-0">
          &copy; 2024–2026 Inventario Fácil. {t('Todos los derechos reservados.', 'All rights reserved.')}
        </p>
        <p className="mt-2">
          {t('Hecho con ❤️ para pequeñas empresas que sueñan en grande', 'Made with ❤️ for small businesses that dream big')}
        </p>
      </div>
    </footer>
  );
}
