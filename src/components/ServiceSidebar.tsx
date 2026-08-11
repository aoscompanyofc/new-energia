import { Link } from "react-router-dom";
import { nav, type ServiceKey } from "../data/content";
import { images } from "../data/images";
import { ChevronIcon } from "./Icons";
import { PillButton } from "./PillButton";

type ServiceSidebarProps = {
  activeKey: ServiceKey;
};

export function ServiceSidebar({ activeKey }: ServiceSidebarProps) {
  return (
    <aside className="flex flex-col gap-6">
      <div className="rounded-2xl bg-navy p-6">
        <h3 className="font-heading text-lg font-semibold text-white">Nossos serviços</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {nav.services.map((service) => (
            <li key={service.key}>
              <Link
                to={service.href}
                className={`flex items-center gap-3 text-sm transition hover:text-gold ${
                  service.key === activeKey ? "text-gold" : "text-white/80"
                }`}
              >
                <span className="checkmark">
                  <ChevronIcon className="h-3 w-3" />
                </span>
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gold p-6">
        <img
          src={images.aboutTeam}
          alt=""
          width={320}
          height={280}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative">
          <h3 className="font-heading text-lg font-semibold text-navy">
            Agende uma consultoria gratuita sobre energia solar!
          </h3>
          <div className="mt-5">
            <PillButton href="/#contato" variant="outline-dark">
              Invista com a NEW
            </PillButton>
          </div>
        </div>
      </div>
    </aside>
  );
}
