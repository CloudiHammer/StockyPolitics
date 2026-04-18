import { publicUrl } from '../lib/publicUrl';

export function SiteFooter() {
  return (
    <footer className="bg-[#0f1419] px-0 pb-8 pt-16 text-white/85">
      <div className="site-container grid gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={publicUrl('iconappStockyPNG.png')} alt="" width={48} height={48} className="mb-3 rounded-[14px]" />
          <p className="m-0">Stocky — inventario y punto de venta para pequeños negocios.</p>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">Producto</h3>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href="#precios">
            Precios
          </a>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href="#caracteristicas"
          >
            Funciones
          </a>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href="#faq">
            FAQ
          </a>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">Legal</h3>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href={publicUrl('privacy.html')}>
            Privacidad
          </a>
          <a className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]" href={publicUrl('terms.html')}>
            Términos
          </a>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href={publicUrl('delete-account.html')}
          >
            Eliminar cuenta
          </a>
        </div>
        <div>
          <h3 className="m-0 mb-3 text-[0.85rem] font-semibold uppercase tracking-wider text-white/55">Contacto</h3>
          <a
            className="mb-2 block text-[0.95rem] text-white/85 no-underline hover:text-[var(--primary-color)]"
            href="mailto:contact@stockyinventory.com"
          >
            contact@stockyinventory.com
          </a>
        </div>
      </div>
      <div className="mx-auto my-10 h-[3px] max-w-[1200px] w-[calc(100%-2.5rem)] rounded-sm [background-image:var(--grad-brand)]" />
      <div className="site-container text-center text-[0.9rem] text-white/55">
        <p className="m-0">&copy; 2024–2026 Stocky — Inventario Fácil. Todos los derechos reservados.</p>
        <p className="mt-2">Hecho con ❤️ para pequeñas empresas que sueñan en grande</p>
      </div>
    </footer>
  );
}
