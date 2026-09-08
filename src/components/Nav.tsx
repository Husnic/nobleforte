"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { primaryNav, portalNav, siteConfig } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setDropdown(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(11,38,68,0.08)]" : ""
      }`}
    >
      <div className="hidden border-b border-navy/[0.06] bg-navy text-white md:block">
        <div className="container-xw flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5 text-white/80">
            <a href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`} className="hover:text-white">
              {siteConfig.phones[0]}
            </a>
            <a href={`mailto:${siteConfig.emails[0]}`} className="hover:text-white">
              {siteConfig.emails[0]}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {portalNav.map((p) => (
              <Link key={p.href} href={p.href} className="text-white/80 hover:text-white">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-xw flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => {
            const active =
              pathname === link.href || link.children?.some((c) => c.href === pathname);

            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-navy" : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() => setDropdown((d) => (d === link.label ? null : link.label))}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-navy" : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      dropdown === link.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    dropdown === link.label
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white p-2 shadow-xl shadow-navy/10">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === child.href
                            ? "bg-sky-light text-navy"
                            : "text-navy/70 hover:bg-sky-light/60 hover:text-navy"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/admissions"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-navy transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-navy transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-4 bg-navy transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="container-xw flex flex-col gap-1 border-t border-navy/10 py-4">
            {primaryNav.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileGroup((g) => (g === link.label ? null : link.label))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy/80 hover:bg-navy/5"
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileGroup === link.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`grid overflow-hidden pl-3 transition-[grid-template-rows] duration-200 ${
                      mobileGroup === link.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-navy/60 hover:bg-navy/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy/80 hover:bg-navy/5"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="my-2 border-t border-navy/10" />
            {portalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy/60 hover:bg-navy/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy-deep"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
