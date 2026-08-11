import { Link } from "react-router-dom";

type ServiceHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  breadcrumbLabel: string;
};

export function ServiceHero({ title, subtitle, image, breadcrumbLabel }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-40 sm:pb-20">
      <img
        src={image}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-navy/65" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h1 className="font-heading text-4xl font-semibold uppercase text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base text-white/85 sm:text-lg">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <nav aria-label="breadcrumb" className="rounded-pill bg-white px-5 py-2 text-xs font-medium text-navy/70 shadow-sm">
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2 text-navy/30">/</span>
            <span className="text-navy">{breadcrumbLabel}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
