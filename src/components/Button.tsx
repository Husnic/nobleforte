import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "dark" | "outline" | "outlineLight";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">);

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-navy-deep hover:brightness-105 shadow-sm shadow-gold/30",
  dark: "bg-navy text-white hover:bg-navy-deep",
  outline: "border border-navy/20 text-navy hover:border-navy/50 hover:bg-navy/5",
  outlineLight: "border border-white/35 text-white hover:border-white/70 hover:bg-white/10",
};

export function Button({ href, variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
