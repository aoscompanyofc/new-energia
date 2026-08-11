import { Link } from "react-router-dom";

type PageHeroProps = {
  title: string;
  image: string;
  breadcrumb: { label: string; href?: string }[];
};

export function PageHero({ title, image, breadcrumb }: PageHeroProps) {
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
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">{title}</h1>
        <div className="mt-8 flex justify-center">
          <nav
            aria-label="breadcrumb"
            className="rounded-pill bg-white px-5 py-2 text-xs font-medium text-navy/70 shadow-sm"
          >
            {breadcrumb.map((crumb, index) => (
              <span key={crumb.label}>
                {index > 0 && <span className="mx-2 text-navy/30">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-navy">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-navy">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
