import { Helmet } from "react-helmet-async";
import { PageHero } from "../components/PageHero";
import { AboutIntro } from "../components/AboutIntro";
import { FounderSection } from "../components/FounderSection";
import { TeamSection } from "../components/TeamSection";
import { StatsCounter } from "../components/StatsCounter";
import { MissionVision } from "../components/MissionVision";
import { ImpactStatement } from "../components/ImpactStatement";
import { PortfolioShowcase } from "../components/PortfolioShowcase";
import { FinalCTA } from "../components/FinalCTA";
import { images } from "../data/images";
import { sobrePage } from "../data/content";

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre a New Energia | Engenharia e Energia Solar</title>
        <meta
          name="description"
          content="Conheça a New Energia: engenheiros com experiência real em grandes usinas solares, atuando em geração distribuída, armazenamento, mobilidade elétrica e eficiência energética."
        />
      </Helmet>
      <PageHero
        title={sobrePage.hero.title}
        image={images.aboutHero}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sobre" }]}
      />
      <AboutIntro />
      <FounderSection />
      <TeamSection />
      <StatsCounter />
      <MissionVision />
      <ImpactStatement />
      <PortfolioShowcase />
      <FinalCTA />
    </>
  );
}
