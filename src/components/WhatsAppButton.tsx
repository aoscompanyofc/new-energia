import type { AnchorHTMLAttributes } from "react";
import { whatsapp } from "../data/content";
import { WhatsappIcon } from "./Icons";

type WhatsAppButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  label?: string;
};

export function WhatsAppButton({ label = whatsapp.label, className = "", ...rest }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsapp.link}
      target="_blank"
      rel="noreferrer"
      className={`btn-pill ${className}`}
      {...rest}
    >
      <span>{label}</span>
      <span className="btn-pill__circle">
        <WhatsappIcon className="h-4 w-4" />
      </span>
    </a>
  );
}
