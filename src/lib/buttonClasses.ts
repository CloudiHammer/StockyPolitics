import { cn } from './cn';

const transition = 'transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]';

/** Base pill button (links & focusable controls) */
export const btnBase = cn(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline border-0 cursor-pointer font-inherit',
  transition,
);

export const btnMd = 'px-[26px] py-3.5 text-base';
export const btnSm = 'px-4 py-2.5 text-[0.9rem]';

export const btnPrimary = cn(
  btnBase,
  btnMd,
  'relative overflow-hidden text-white shadow-[var(--shadow-lg)] [background-image:var(--grad-brand)] [background-size:100%_100%] hover:-translate-y-0.5 hover:shadow-[var(--shadow-xl)]',
);

/** Hero / CTA shine: wrap content + overlay span */
export const btnPrimaryShine = cn(btnPrimary, 'group/btn');
export const btnShineOverlay =
  'pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-[600ms] ease-out -translate-x-full group-hover/btn:translate-x-full';
export const btnRow = 'relative z-[1] inline-flex items-center gap-2';

export const btnGhost = cn(
  btnBase,
  btnSm,
  'bg-white/85 text-[var(--text-color)] border border-slate-900/[0.08]',
);

export const btnPrimarySm = cn(
  btnBase,
  btnSm,
  'relative overflow-hidden text-white shadow-[var(--shadow-lg)] [background-image:var(--grad-brand)] [background-size:100%_100%] hover:-translate-y-0.5 hover:shadow-[var(--shadow-xl)]',
);

/** Pricing (tarjeta clara): borde visible */
export const btnOutlineBlock = cn(
  btnBase,
  btnMd,
  'w-full border-2 border-slate-400/55 bg-transparent text-[var(--text-color)] hover:border-slate-500/80',
);

/** Pricing featured: white pill */
export const btnLightBlock = cn(
  btnBase,
  btnMd,
  'w-full bg-white text-[#5e2d7a] hover:-translate-y-0.5',
);

/** CTA sobre gradiente brand: botón blanco */
export const btnPrimaryOnBrand = cn(
  btnBase,
  btnMd,
  'relative overflow-hidden bg-white text-[#7b1fa2] shadow-[var(--shadow-lg)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-xl)] group/btn',
);
