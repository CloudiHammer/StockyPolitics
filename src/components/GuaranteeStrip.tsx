const items = [
  {
    title: '1 mes gratis de Premium',
    body: 'Prueba todas las funciones sin límites durante el primer mes. Sin compromiso.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="m8.5 12 2.5 2.5L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cancela cuando quieras',
    body: 'Gestiona la suscripción desde tu Google Play o App Store. En cualquier momento.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Sin permanencia',
    body: 'Ni contratos largos ni letra pequeña. Mantienes todo lo que hayas añadido aunque vuelvas al plan gratis.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 13c1.5-1.5 3.5-3 7-3s5.5 1.5 7 3M5 17c1.5-1.5 3.5-3 7-3s5.5 1.5 7 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export function GuaranteeStrip() {
  return (
    <section className="bg-[var(--background-color)] py-10 md:py-14" aria-label="Garantías y compromiso">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-4 rounded-[var(--border-radius-lg)] border border-slate-900/[0.08] bg-white px-5 py-6 shadow-[var(--shadow)] md:grid-cols-3 md:gap-6 md:px-8 md:py-7">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"
                aria-hidden
              >
                {it.icon}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="text-[0.95rem] font-bold text-[var(--text-color)]">{it.title}</span>
                <span className="text-[0.875rem] leading-[1.5] text-[var(--text-light)]">{it.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
