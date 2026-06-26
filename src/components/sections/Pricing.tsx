import { Check } from "lucide-react";

const freeFeatures = [
  "Hasta 50 gastos mensuales",
  "Clasificación automática básica",
  "Resumen mensual visual",
  "2 categorías de presupuesto",
];

const premiumFeatures = [
  "Gastos ilimitados",
  "Clasificación automática avanzada con IA",
  "Reportes detallados + exportación PDF",
  "Presupuestos ilimitados por categoría",
  "Alertas inteligentes personalizadas",
  "Acceso anticipado a nuevas funciones",
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-[#F7F9F8]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#52B788]">
            Precios
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D1F2D] mb-4 tracking-tight">
            Planes y precios
          </h2>
          <p className="text-lg text-[#0D1F2D]/60">
            Empezá gratis, crecé cuando quieras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Free plan */}
          <div className="rounded-3xl border border-[#E8EDE9] bg-white p-10 flex flex-col shadow-sm">
            <span className="text-sm font-semibold text-[#2D6A4F] mb-3 uppercase tracking-widest">
              Gratis
            </span>
            <div className="mb-2">
              <span className="text-5xl font-extrabold text-[#0D1F2D]">S/ 0</span>
            </div>
            <p className="text-sm text-[#0D1F2D]/50 mb-8">Para siempre</p>

            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#0D1F2D]/70">
                  <Check size={16} className="text-[#52B788] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-2xl border-2 border-[#2D6A4F] text-[#2D6A4F] font-semibold py-3.5 hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              Descargar gratis
            </a>
          </div>

          {/* Premium plan */}
          <div className="rounded-3xl bg-[#2D6A4F] p-10 flex flex-col shadow-xl relative overflow-hidden">
            {/* Más popular badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-[#52B788] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Más popular
              </span>
            </div>

            {/* Background blob decoration */}
            <svg
              className="absolute top-0 right-0 pointer-events-none"
              style={{ width: "60%", opacity: 0.1 }}
              viewBox="0 0 300 300"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M250,30 C300,-20 340,60 320,150 C300,240 220,290 140,270 C60,250 20,160 60,90 C100,20 200,80 250,30Z"
                fill="white"
              />
            </svg>

            <span className="text-sm font-semibold text-[#52B788] mb-3 uppercase tracking-widest relative z-10">
              Premium
            </span>
            <div className="mb-1 relative z-10">
              <span className="text-5xl font-extrabold text-white">S/ 9.90</span>
              <span className="text-white/70 text-sm">/mes</span>
            </div>
            <p className="text-white/60 text-sm mb-8 relative z-10">
              o S/ 79.90/año{" "}
              <span className="text-[#95D5B2] font-semibold">(ahorrá 32%)</span>
            </p>

            <ul className="flex flex-col gap-4 mb-10 flex-1 relative z-10">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                  <Check size={16} className="text-[#52B788] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-2xl bg-white text-[#2D6A4F] font-bold py-3.5 hover:bg-[#F7F9F8] transition-colors relative z-10"
            >
              Empezar Premium
            </a>

            <p className="text-white/40 text-xs text-center mt-4 relative z-10">
              La suscripción se gestiona desde la app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
