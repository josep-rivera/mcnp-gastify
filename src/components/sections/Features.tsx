import { BarChart3, Bell, Smartphone, Sparkles, Zap } from "lucide-react";

const features = [
  {
    Icon: Zap,
    title: "Registro ultrarrápido",
    description: "Monto, descripción y categoría en menos de 8 segundos.",
  },
  {
    Icon: Sparkles,
    title: "Clasificación automática",
    description: "IA que aprende de tus hábitos y categoriza sola.",
  },
  {
    Icon: BarChart3,
    title: "Reportes visuales",
    description: "Gráficos mensuales para entender a dónde va tu plata.",
  },
  {
    Icon: Bell,
    title: "Alertas de presupuesto",
    description: "Notificaciones en tiempo real cuando estás por pasarte.",
  },
  {
    Icon: Smartphone,
    title: "Android e iOS",
    description: "Disponible para todos. Sin excusas.",
  },
];

export default function Features() {
  return (
    <section id="caracteristicas" className="relative py-24 bg-white overflow-hidden">
      {/* Background blob */}
      <svg
        className="absolute left-0 bottom-0 pointer-events-none"
        style={{ width: "40%", maxWidth: 450, opacity: 0.06 }}
        viewBox="0 0 450 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50,350 C10,290 20,200 80,140 C140,80 240,70 310,130 C380,190 400,300 350,370 C300,440 200,440 120,410 C60,390 90,410 50,350Z"
          fill="#2D6A4F"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#52B788]">
            Funcionalidades
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D1F2D] tracking-tight">
            Todo lo que necesitás para{" "}
            <span className="text-[#2D6A4F]">controlar tu plata</span>
          </h2>
        </div>

        {/* Feature grid: 3 + 2 centered on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            // Last two items get centered on the 3-col grid
            const isLastRow = i >= 3;
            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border border-[#E8EDE9] bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                  isLastRow ? "lg:col-start-auto" : ""
                }`}
                style={
                  isLastRow && features.length === 5
                    ? i === 3
                      ? { gridColumnStart: 1, gridColumn: "1" }
                      : { gridColumnStart: 3, gridColumn: "3" }
                    : {}
                }
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7F9F8] border border-[#E8EDE9] flex items-center justify-center mb-6 group-hover:bg-[#2D6A4F] transition-colors">
                  <feature.Icon
                    size={22}
                    className="text-[#2D6A4F] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0D1F2D] mb-2">{feature.title}</h3>
                <p className="text-[#0D1F2D]/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
