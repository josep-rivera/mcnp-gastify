import PhoneMockup from "@/components/ui/PhoneMockup";

const PlayStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5c.5.3.5 1 0 1.3L4.5 21c-.5.33-1.5.33-1.5-.5z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-white">
      {/* Green blob top-right */}
      <svg
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: "55%", maxWidth: 700, opacity: 0.13 }}
        viewBox="0 0 600 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M550,80 C600,20 650,60 640,150 C630,240 570,280 530,340 C490,400 440,460 360,470 C280,480 200,430 170,350 C140,270 190,170 260,120 C330,70 500,140 550,80Z"
          fill="#2D6A4F"
        />
      </svg>

      {/* Light blob bottom-left */}
      <svg
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width: "45%", maxWidth: 500, opacity: 0.08 }}
        viewBox="0 0 500 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20,300 C-20,240 10,160 80,110 C150,60 240,80 300,130 C360,180 370,270 320,330 C270,390 190,420 120,400 C50,380 60,360 20,300Z"
          fill="#52B788"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#F7F9F8] border border-[#E8EDE9] rounded-full px-4 py-2 text-sm font-medium text-[#2D6A4F] w-fit">
              <span className="text-base">⭐</span>
              4.8 &bull; +10,000 descargas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0D1F2D] leading-tight tracking-tight">
              Controlá tus gastos{" "}
              <span className="text-[#2D6A4F]">en menos de 8 segundos</span>
            </h1>

            <p className="text-lg text-[#0D1F2D]/65 leading-relaxed max-w-lg">
              Gastify es la{" "}
              <strong className="text-[#0D1F2D]/80">app de control de gastos</strong>{" "}
              para jóvenes peruanos. Registrá, categorizá y tomá el control de
              tu plata.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0D1F2D] text-white rounded-2xl px-6 py-3.5 font-semibold text-sm hover:bg-[#1a3347] transition-colors"
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none mb-0.5">Disponible en</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0D1F2D] text-white rounded-2xl px-6 py-3.5 font-semibold text-sm hover:bg-[#1a3347] transition-colors"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none mb-0.5">Descargalo en el</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
