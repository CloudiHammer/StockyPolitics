export type DeviceKind = 'ios' | 'android' | 'unknown';

/** iPhone / iPad / iPod → App Store; Android → Google Play; escritorio y otros → Google Play. */
export type MobileStore = 'google-play' | 'app-store';

export function detectDevice(): DeviceKind {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'unknown';
}

export function preferredMobileStore(device: DeviceKind): MobileStore {
  return device === 'ios' ? 'app-store' : 'google-play';
}
