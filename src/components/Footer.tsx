import Link from "next/link";
import Logo from "./Logo";
import { footerNav, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-xw grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="white" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <p className="mt-5 text-sm text-white/70">{siteConfig.address}</p>
          <div className="mt-3 flex flex-col gap-1 text-sm text-white/70">
            {siteConfig.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-sky w-fit">
                {p}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {footerNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-sky">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {siteConfig.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-sky">
                  {e}
                </a>
              </li>
            ))}
            <li>
              <Link href="/fees" className="hover:text-sky">
                Fees &amp; Online Payment
              </Link>
            </li>
            <li>
              <Link href="/parent-portal" className="hover:text-sky">
                Parent Portal
              </Link>
            </li>
            <li>
              <Link href="/staff-portal" className="hover:text-sky">
                Staff Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xw flex flex-col gap-2 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} NobleForte Academy. All rights reserved.
          </span>
          <span className="font-medium text-white/60">
            NobleForte Academy — Distinction &amp; Dignity
          </span>
        </div>
      </div>
    </footer>
  );
}
