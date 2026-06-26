import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Problem from "@/components/sections/Problem";
import SocialMedia from "@/components/sections/SocialMedia";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Gastify",
  description:
    "App de control de gastos personales para jóvenes peruanos. Registrá tus gastos en menos de 8 segundos.",
  url: "https://gastify.pe",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, iOS",
  inLanguage: "es-PE",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Gratuito",
      price: "0",
      priceCurrency: "PEN",
      description: "Plan gratuito con hasta 50 gastos mensuales",
    },
    {
      "@type": "Offer",
      name: "Plan Premium",
      price: "9.90",
      priceCurrency: "PEN",
      billingIncrement: "P1M",
      description: "Plan premium con gastos ilimitados y clasificación avanzada con IA",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: {
    "@type": "Organization",
    name: "Gastify",
    url: "https://gastify.pe",
    sameAs: [
      "https://www.instagram.com/gastify.pe/",
      "https://www.tiktok.com/@gastify0",
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}
