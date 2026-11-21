/*
 * Idioma de las páginas legales (privacidad, términos, eliminar cuenta).
 * Misma lógica que la landing (src/lib/locale.ts + src/i18n.tsx): ?lang=, luego la elección guardada
 * en localStorage ("lang", compartida con la landing) y, si no hay, detección por navegador y zona horaria.
 * Sin JavaScript se muestra la versión en español.
 */
(function () {
  var SPANISH_ZONES = [
    'Europe/Madrid', 'Atlantic/Canary', 'Africa/Ceuta',
    'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey', 'America/Matamoros',
    'America/Chihuahua', 'America/Ciudad_Juarez', 'America/Ojinaga', 'America/Mazatlan', 'America/Bahia_Banderas',
    'America/Hermosillo', 'America/Tijuana', 'America/Ensenada',
    'America/Guatemala', 'America/Tegucigalpa', 'America/El_Salvador', 'America/Managua', 'America/Costa_Rica',
    'America/Panama', 'America/Havana', 'America/Santo_Domingo', 'America/Puerto_Rico',
    'America/Bogota', 'America/Lima', 'America/Caracas', 'America/Santiago', 'America/Punta_Arenas',
    'Pacific/Easter', 'America/Guayaquil', 'Pacific/Galapagos', 'America/La_Paz', 'America/Asuncion',
    'America/Montevideo', 'Africa/Malabo',
    'America/Buenos_Aires', 'America/Catamarca', 'America/Cordoba', 'America/Jujuy', 'America/Mendoza', 'America/Rosario'
  ];

  function detect() {
    var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || [];
    if (langs[0] && String(langs[0]).toLowerCase().indexOf('es') === 0) return 'es';
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* sin Intl */ }
    if (tz.indexOf('America/Argentina/') === 0 || SPANISH_ZONES.indexOf(tz) !== -1) return 'es';
    return 'en';
  }

  function initial() {
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'es' || q === 'en') return q;
      var saved = window.localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) { /* almacenamiento no disponible */ }
    return detect();
  }

  function apply(lang) {
    var root = document.documentElement;
    root.lang = lang;
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    var blocks = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < blocks.length; i++) blocks[i].hidden = blocks[i].getAttribute('data-lang') !== lang;
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('aria-pressed', String(buttons[j].getAttribute('data-set-lang') === lang));
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-set-lang]');
    if (!btn) return;
    var lang = btn.getAttribute('data-set-lang');
    try { window.localStorage.setItem('lang', lang); } catch (err) { /* almacenamiento no disponible */ }
    apply(lang);
  });

  apply(initial());
})();
