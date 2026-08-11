import { footer, whatsapp } from "../data/content";
import { ChevronIcon, InstagramIcon, MailIcon, PinIcon, WhatsappIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-5 pb-8 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <span className="font-heading text-2xl font-semibold text-white">
              New<span className="text-accent">.</span>
            </span>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Engenharia e Energia
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-accent transition hover:bg-accent hover:text-navy"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsapp.link}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-accent transition hover:bg-accent hover:text-navy"
              >
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-white">{footer.quickLinksTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-3 text-sm text-white/70 transition hover:text-accent">
                    <span className="checkmark shrink-0">
                      <ChevronIcon className="h-3 w-3" />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-white">{footer.contactTitle}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${footer.email}`} className="hover:text-accent">
                  {footer.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <WhatsappIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={whatsapp.link} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {footer.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.rights(year)}</p>
          <a href="#" className="hover:text-accent">
            {footer.privacyPolicy}
          </a>
        </div>
      </div>
    </footer>
  );
}
