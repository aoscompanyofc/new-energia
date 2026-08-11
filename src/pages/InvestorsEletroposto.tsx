import { Helmet } from "react-helmet-async";
import { ServiceHero } from "../components/ServiceHero";
import { ServiceOverview } from "../components/ServiceOverview";
import { HowItWorks } from "../components/HowItWorks";
import { ServiceFAQ } from "../components/ServiceFAQ";
import { FinalCTA } from "../components/FinalCTA";
import { eletropostoInvestment } from "../data/investorsContent";

export default function InvestorsEletroposto() {
  const data = eletropostoInvestment;

  return (
    <>
      <Helmet>
        <title>{data.hero.title} | New Energia</title>
        <meta name="description" content={data.hero.subtitle} />
      </Helmet>
      <ServiceHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        image={data.hero.image}
        breadcrumbLabel={data.hero.breadcrumbLabel}
      />
      <ServiceOverview
        image={data.overview.image}
        imageAlt={data.overview.imageAlt}
        heading={data.overview.heading}
        leadParagraph={data.overview.leadParagraph}
        paragraphs={data.overview.paragraphs}
        blocks={data.overview.blocks}
        closingNote={data.overview.closingNote}
      />
      <HowItWorks title={data.howItWorks.title} steps={data.howItWorks.steps} />
      <ServiceFAQ items={data.faq} />
      <FinalCTA title={data.finalCta.title} text={data.finalCta.text} cta={data.finalCta.cta} />
    </>
  );
}
