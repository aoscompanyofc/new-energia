import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ServiceHero } from "../components/ServiceHero";
import { ServiceOverview } from "../components/ServiceOverview";
import { HowItWorks } from "../components/HowItWorks";
import { ServiceFAQ } from "../components/ServiceFAQ";
import { FinalCTA } from "../components/FinalCTA";
import { servicesContent } from "../data/servicesContent";

export default function Service() {
  const { slug } = useParams<{ slug: string }>();
  const service = Object.values(servicesContent).find((entry) => entry.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.hero.title} | New Energia</title>
        <meta name="description" content={service.hero.subtitle} />
      </Helmet>
      <ServiceHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        image={service.hero.image}
        breadcrumbLabel={service.hero.breadcrumbLabel}
      />
      <ServiceOverview
        activeKey={service.key}
        image={service.overview.image}
        imageAlt={service.overview.imageAlt}
        heading={service.overview.heading}
        leadParagraph={service.overview.leadParagraph}
        paragraphs={service.overview.paragraphs}
        blocks={service.overview.blocks}
        closingNote={service.overview.closingNote}
      />
      <HowItWorks
        title={service.howItWorks.title}
        intro={service.howItWorks.intro}
        steps={service.howItWorks.steps}
        extraCard={service.howItWorks.extraCard}
        extraCardPosition={service.howItWorks.extraCardPosition}
      />
      <ServiceFAQ items={service.faq} />
      <FinalCTA title={service.finalCta.title} text={service.finalCta.text} cta={service.finalCta.cta} />
    </>
  );
}
