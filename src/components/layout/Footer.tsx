const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.52V6.85a4.85 4.85 0 01-1.01-.16z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0D1F2D] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="18" cy="18" r="18" fill="#52B788" />
                <text
                  x="18"
                  y="24"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                >
                  G
                </text>
              </svg>
              <span className="text-xl font-bold">Gastify</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tu dinero, bajo control.
            </p>
            <p className="text-white/40 text-xs">
              La app de finanzas personales hecha para jóvenes peruanos.
            </p>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Redes sociales
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/gastify.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <InstagramIcon />
                @gastify.pe
              </a>
              <a
                href="https://www.tiktok.com/@gastify0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <TikTokIcon />
                @gastify0
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/terminos"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Términos de uso
              </a>
              <a
                href="/privacidad"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Política de privacidad
              </a>
              <a
                href="mailto:hola@gastify.pe"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © 2026 Gastify. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
