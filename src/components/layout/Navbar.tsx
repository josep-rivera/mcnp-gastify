"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const GastifyLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="18" fill="#2D6A4F" />
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
    <span className="text-xl font-bold text-[#0D1F2D]">Gastify</span>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#caracteristicas", label: "Características" },
    { href: "#precios", label: "Precios" },
    { href: "#redes", label: "Descargar" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-200",
        scrolled ? "shadow-sm border-b border-[#E8EDE9]" : ""
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="Gastify – Inicio">
          <GastifyLogo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0D1F2D]/70 hover:text-[#2D6A4F] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2D6A4F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#245a41] transition-colors"
          >
            Descargar gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-[#0D1F2D]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8EDE9] px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#0D1F2D]/70 hover:text-[#2D6A4F] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2D6A4F] px-5 py-3 text-sm font-semibold text-white text-center hover:bg-[#245a41] transition-colors"
          >
            Descargar gratis
          </a>
        </div>
      )}
    </header>
  );
}
