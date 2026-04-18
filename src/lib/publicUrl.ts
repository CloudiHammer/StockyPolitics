/** Archivos en `public/` con el prefijo `base` (GitHub Pages + dominio propio en /). */
export function publicUrl(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${p}`;
}
