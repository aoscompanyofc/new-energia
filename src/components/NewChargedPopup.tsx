import { useEffect, useState } from "react";
import { CloseIcon } from "./Icons";
import { PillButton } from "./PillButton";
import newChargedLogo from "../assets/logo/new-charged-logo.webp";

const CONSUMIDOR_URL = "https://consumidor.energianew.com.br/";

export function NewChargedPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newcharged-popup-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-navy p-6 text-center ring-1 ring-white/10 sm:p-9">
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <img src={newChargedLogo} alt="NewCharged" className="mx-auto h-10 w-auto" />

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Inauguração · 15 de agosto
        </p>

        <h2
          id="newcharged-popup-title"
          className="mt-3 font-heading text-2xl font-medium leading-tight text-white sm:text-3xl"
        >
          Carregue seu carro sem custo nenhum!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
          Amanhã, dia 15 de agosto, é a inauguração do nosso eletroposto na Rodoviária de Belo
          Horizonte. Venha conhecer e carregue seu veículo elétrico gratuitamente.
        </p>

        <dl className="mx-auto mt-7 grid max-w-sm grid-cols-3 gap-4 border-y border-white/10 py-5">
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-white/50">Data</dt>
            <dd className="font-heading text-2xl font-semibold text-white">15/08</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-white/50">Local</dt>
            <dd className="font-heading text-lg font-semibold leading-tight text-white">Rodoviária BH</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-white/50">Recarga</dt>
            <dd className="font-heading text-2xl font-semibold text-white">Grátis</dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <PillButton href={CONSUMIDOR_URL} target="_blank" rel="noreferrer">
            Entrar no site
          </PillButton>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-accent"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
