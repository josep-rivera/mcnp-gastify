import { PlusCircle, Tag, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: PlusCircle,
    title: "Registrá",
    description: "Ingresá monto, descripción y listo. En menos de 8 segundos.",
  },
  {
    number: "02",
    Icon: Tag,
    title: "Categorizá",
    description: "La IA clasifica tu gasto automáticamente. Sin hacer nada extra.",
  },
  {
    number: "03",
    Icon: TrendingUp,
    title: "Controlá",
    description:
      "Visualizá tus gastos con gráficos claros y recibí alertas de presupuesto.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#F7F9F8]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#52B788]">
          Simple y rápido
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D1F2D] mb-4 tracking-tight">
          Cómo funciona
        </h2>
        <p className="text-lg text-[#0D1F2D]/60 mb-16 max-w-md mx-auto">
          En 3 pasos simples, tomás el control de tu plata
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-[#E8EDE9]"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Number badge */}
              <div className="relative z-10 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#2D6A4F] flex items-center justify-center mx-auto mb-0">
                  <step.Icon size={24} className="text-white" />
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8EDE9] p-8 shadow-sm w-full">
                <span className="text-5xl font-extrabold text-[#2D6A4F]/20 block mb-3 leading-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-[#0D1F2D] mb-3">{step.title}</h3>
                <p className="text-[#0D1F2D]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
