import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRightIcon } from "./Icons";

type CommonProps = {
  variant?: "solid" | "outline" | "outline-dark" | "white";
  children: React.ReactNode;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

function variantClass(variant: CommonProps["variant"]) {
  switch (variant) {
    case "outline":
      return "btn-pill btn-pill--outline";
    case "outline-dark":
      return "btn-pill btn-pill--dark-outline";
    case "white":
      return "bg-white text-navy";
    default:
      return "btn-pill";
  }
}

export function PillButton(props: AnchorProps | ButtonProps) {
  const { variant = "solid", children, className = "", ...rest } = props;

  if ("as" in props && props.as === "button") {
    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={`${variantClass(variant)} ${className}`} {...buttonRest}>
        <span>{children}</span>
        <span className="btn-pill__circle">
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </button>
    );
  }

  const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a className={`${variantClass(variant)} ${className}`} {...anchorRest}>
      <span>{children}</span>
      <span className="btn-pill__circle">
        <ArrowUpRightIcon className="h-4 w-4" />
      </span>
    </a>
  );
}
