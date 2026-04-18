/** Archivos en `public/` con el prefijo `base` correcto (p. ej. GitHub Pages en /StockyPolitics/). */
export function publicUrl(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${p}`;
}
