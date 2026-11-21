/**
 * Detección de país e idioma sin llamadas externas (no se envía la IP a ningún servicio).
 * - País: zona horaria del dispositivo (Intl) y, como respaldo, la región del idioma del navegador (es-AR, en-AR…).
 * - Idioma: español si el navegador está en español o el dispositivo está en un país hispanohablante; inglés en el resto.
 */

export type Lang = 'es' | 'en';

function timeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    return '';
  }
}

function browserLanguages(): string[] {
  if (typeof navigator === 'undefined') return [];
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  return list.filter(Boolean).map((l) => l.toLowerCase());
}

/** Zonas horarias de Argentina (incluye alias antiguos). */
const AR_ZONES = new Set([
  'America/Buenos_Aires',
  'America/Catamarca',
  'America/Cordoba',
  'America/Jujuy',
  'America/Mendoza',
  'America/Rosario',
]);

/** Zonas horarias de países hispanohablantes. */
const SPANISH_ZONES = new Set([
  // España
  'Europe/Madrid', 'Atlantic/Canary', 'Africa/Ceuta',
  // México
  'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey', 'America/Matamoros',
  'America/Chihuahua', 'America/Ciudad_Juarez', 'America/Ojinaga', 'America/Mazatlan', 'America/Bahia_Banderas',
  'America/Hermosillo', 'America/Tijuana', 'America/Ensenada',
  // Centroamérica y Caribe
  'America/Guatemala', 'America/Tegucigalpa', 'America/El_Salvador', 'America/Managua', 'America/Costa_Rica',
  'America/Panama', 'America/Havana', 'America/Santo_Domingo', 'America/Puerto_Rico',
  // Sudamérica
  'America/Bogota', 'America/Lima', 'America/Caracas', 'America/Santiago', 'America/Punta_Arenas',
  'Pacific/Easter', 'America/Guayaquil', 'Pacific/Galapagos', 'America/La_Paz', 'America/Asuncion',
  'America/Montevideo',
  // Guinea Ecuatorial
  'Africa/Malabo',
]);

function isArgentinaZone(tz: string): boolean {
  return tz.startsWith('America/Argentina/') || AR_ZONES.has(tz);
}

export function isArgentina(): boolean {
  const tz = timeZone();
  if (tz) return isArgentinaZone(tz);
  return browserLanguages().some((l) => l.endsWith('-ar'));
}

export function detectLang(): Lang {
  if (browserLanguages()[0]?.startsWith('es')) return 'es';
  const tz = timeZone();
  if (isArgentinaZone(tz) || SPANISH_ZONES.has(tz)) return 'es';
  return 'en';
}
