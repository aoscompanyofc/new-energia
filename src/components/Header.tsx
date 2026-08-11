import { useEffect, useState } from "react";
import { nav } from "../data/content";
import { ChevronIcon, CloseIcon, MenuIcon } from "./Icons";
import { PillButton } from "./PillButton";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="New — Engenharia e Energia">
          <span className="font-heading text-2xl font-semibold leading-none text-white">
            {nav.logoTitle}
            <span className="text-gold">.</span>
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:block">
            {nav.logoSubtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="font-heading text-sm text-gold">
            Home
          </a>
          <a href="#sobre" className="font-heading text-sm text-white transition hover:text-gold">
            Sobre
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 font-heading text-sm text-white transition hover:text-gold"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((v) => !v)}
            >
              {nav.servicesLabel}
              <ChevronIcon className={`h-3 w-3 rotate-90 transition-transform ${isServicesOpen ? "-rotate-90" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-full w-64 overflow-hidden rounded-xl bg-navy shadow-xl ring-1 ring-white/10">
                {nav.services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block border-b border-gold/20 px-5 py-3 text-sm text-white/90 transition last:border-b-0 hover:bg-gold hover:text-navy"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#portfolio" className="font-heading text-sm text-white transition hover:text-gold">
            Portfólio
          </a>
          <a href="#contato" className="font-heading text-sm text-white transition hover:text-gold">
            Contato
          </a>
        </nav>

        <div className="hidden lg:block">
          <PillButton href="#contato">{nav.cta}</PillButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-navy lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-heading text-2xl font-semibold text-white">
              {nav.logoTitle}
              <span className="text-gold">.</span>
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              aria-label="Fechar menu"
              onClick={() => setIsMobileOpen(false)}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-4">
            <a href="#home" className="border-b border-white/10 py-4 font-heading text-lg text-gold" onClick={() => setIsMobileOpen(false)}>
              Home
            </a>
            <a href="#sobre" className="border-b border-white/10 py-4 font-heading text-lg text-white" onClick={() => setIsMobileOpen(false)}>
              Sobre
            </a>
            <button
              type="button"
              className="flex items-center justify-between border-b border-white/10 py-4 font-heading text-lg text-white"
              onClick={() => setIsMobileServicesOpen((v) => !v)}
            >
              {nav.servicesLabel}
              <ChevronIcon className={`h-4 w-4 rotate-90 transition-transform ${isMobileServicesOpen ? "-rotate-90" : ""}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="flex flex-col gap-1 bg-white/5 px-4">
                {nav.services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="border-b border-white/10 py-3 text-sm text-white/80 last:border-b-0"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
            <a href="#portfolio" className="border-b border-white/10 py-4 font-heading text-lg text-white" onClick={() => setIsMobileOpen(false)}>
              Portfólio
            </a>
            <a href="#contato" className="border-b border-white/10 py-4 font-heading text-lg text-white" onClick={() => setIsMobileOpen(false)}>
              Contato
            </a>
            <div className="pt-6">
              <PillButton href="#contato" onClick={() => setIsMobileOpen(false)}>
                {nav.cta}
              </PillButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
