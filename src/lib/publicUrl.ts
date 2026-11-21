/** Archivos en `public/` con el prefijo `base` (sitio servido en la raíz /). */
export function publicUrl(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${p}`;
}
