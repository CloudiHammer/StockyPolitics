import { isArgentina } from './locale';

const URL_PLAY_DEFAULT = 'https://play.google.com/store/apps/details?id=com.stocky.stocky';
const URL_PLAY_ARGENTINA = 'https://play.google.com/store/apps/details?id=com.manugranda.inventariofacil';

/** En Argentina se publica una ficha distinta de Google Play. */
export const URL_PLAY = isArgentina() ? URL_PLAY_ARGENTINA : URL_PLAY_DEFAULT;
export const URL_APPLE =
  'https://apps.apple.com/us/app/stocky-inventario-f%C3%A1cil/id6754176626';
export const EMAIL = 'contact@stockyinventory.com';
