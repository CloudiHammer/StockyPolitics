import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { detectLang, type Lang } from './lib/locale';

const STORAGE_KEY = 'lang';

const META: Record<Lang, { title: string; description: string }> = {
  es: {
    title: 'Inventario Fácil – Inventario y punto de venta para pequeños negocios',
    description:
      'Inventario Fácil está pensado para pequeños negocios: inventario en la nube, ventas en eventos, compartir con tu equipo y análisis con IA. Con Premium, exporta las facturas del evento a Excel para tu asesor o gestoría.',
  },
  en: {
    title: 'Inventario Fácil – Inventory and point of sale for small businesses',
    description:
      'Inventario Fácil is built for small businesses: cloud inventory, event sales, team sharing and AI insights. With Premium, export all event invoices to Excel for your accountant.',
  },
};

function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* almacenamiento no disponible */
  }
  return detectLang();
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Devuelve la variante del idioma activo: t('Hola', 'Hello'). */
  t: <T,>(es: T, en: T) => T;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description);
    // Los textos cambian de longitud: recalcular las animaciones ligadas al scroll.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => window.clearTimeout(id);
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: <T,>(es: T, en: T) => (lang === 'es' ? es : en) }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang debe usarse dentro de <LangProvider>');
  return ctx;
}
