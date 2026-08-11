import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Hero } from "../components/Hero";
import { Benefits } from "../components/Benefits";
import { About } from "../components/About";
import { ImpactAccordion } from "../components/ImpactAccordion";
import { ClientsCarousel } from "../components/ClientsCarousel";
import { ServicesCards } from "../components/ServicesCards";
import { PortfolioShowcase } from "../components/PortfolioShowcase";
import { FinalCTA } from "../components/FinalCTA";
import { StatsCounter } from "../components/StatsCounter";
import { SuppliersCarousel } from "../components/SuppliersCarousel";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ block: "start" });
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>New Energia | Engenharia em Energia Solar, BESS e Eficiência Energética</title>
        <meta
          name="description"
          content="Soluções completas em geração distribuída, usinas de investimento, O&M, BESS, mobilidade elétrica e eficiência energética. Engenharia com precisão técnica do início ao fim."
        />
      </Helmet>
      <Hero />
      <Benefits />
      <About />
      <ImpactAccordion />
      <ClientsCarousel />
      <ServicesCards />
      <PortfolioShowcase />
      <FinalCTA />
      <StatsCounter />
      <SuppliersCarousel />
      <FAQ />
      <ContactForm />
    </>
  );
}
