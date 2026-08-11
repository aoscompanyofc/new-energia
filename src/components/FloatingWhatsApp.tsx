import { whatsapp } from "../data/content";
import { WhatsappIcon } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsapp.link}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsapp.label}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
