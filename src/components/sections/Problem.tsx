import type { LucideIcon } from "lucide-react";
import { BarChart3, DollarSign, Eye } from "lucide-react";

const painPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: DollarSign,
    title: "Sin registro",
    description: "No sabés cuánto gastaste esta semana",
  },
  {
    icon: BarChart3,
    title: "Sin control",
    description: "El dinero se va antes de que termine el mes",
  },
  {
    icon: Eye,
    title: "Sin visibilidad",
    description: "No tenés idea de en qué gastás más",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative py-24 bg-white overflow-hidden">
      {/* Accent blob */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "35%", maxWidth: 400, opacity: 0.07 }}
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M350,60 C400,10 430,80 410,180 C390,280 300,330 210,320 C120,310 60,240 80,150 C100,60 300,110 350,60Z"
          fill="#2D6A4F"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#52B788]">
          El problema
        </span>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D1F2D] mb-6 tracking-tight">
          ¿A dónde se fue tu plata?
        </h2>

        <div className="mb-14">
          <p className="text-8xl sm:text-9xl font-extrabold text-[#2D6A4F] leading-none">
            57%
          </p>
          <p className="mt-4 text-lg text-[#0D1F2D]/60 max-w-sm mx-auto">
            de jóvenes gasta más de lo planeado cada mes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-3xl border border-[#E8EDE9] bg-white p-8 text-left shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 w-12 h-12 rounded-2xl bg-[#F7F9F8] flex items-center justify-center">
                  <Icon size={22} className="text-[#2D6A4F]" />
                </div>
                <h3 className="text-lg font-bold text-[#0D1F2D] mb-2">
                  {point.title}
                </h3>
                <p className="text-[#0D1F2D]/60 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
