import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gastify – App de Control de Gastos Personales | Perú",
  description:
    "Gastify es la app gratuita para controlar tus gastos personales en menos de 8 segundos. Descárgala gratis en Android e iOS. Hecha para jóvenes peruanos.",
  keywords: [
    "app de control de gastos Perú",
    "aplicación para ahorrar dinero",
    "cómo controlar mis gastos",
    "app de finanzas personales para universitarios",
    "control de gastos Lima",
    "app ahorro jóvenes Perú",
  ],
  authors: [{ name: "Gastify" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gastify.pe",
  },
  openGraph: {
    title: "Gastify – App de Control de Gastos Personales | Perú",
    description:
      "Gastify es la app gratuita para controlar tus gastos personales en menos de 8 segundos. Hecha para jóvenes peruanos.",
    url: "https://gastify.pe",
    siteName: "Gastify",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://gastify.pe/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gastify – Tu dinero, bajo control.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastify – App de Control de Gastos Personales | Perú",
    description:
      "Gastify es la app gratuita para controlar tus gastos personales en menos de 8 segundos.",
    images: ["https://gastify.pe/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0D1F2D]">
        {children}
      </body>
    </html>
  );
}
