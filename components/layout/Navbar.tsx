"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-home-display">
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-ink border-b border-transparent" : "border-b border-transparent"
        }`}
      >
        <Container>
          <nav
            className={`flex items-center justify-between transition-[padding] duration-500 ${
              scrolled ? "py-4" : "py-6"
            }`}
          >
            <Link
              href="/"
              className={`text-lg font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-white" : "text-text-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              Gilbert Mugisha
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm uppercase tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-text-secondary hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`group inline-flex items-center gap-2 border px-5 py-3 text-sm uppercase tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "border-white/30 text-white hover:border-white"
                    : "border-border-strong text-text-primary hover:border-ink"
                }`}
              >
                Let&apos;s Talk
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  &#8599;
                </span>
              </Link>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px]"
            >
              <span
                className={`h-px w-6 transition-[transform,background-color] duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45 bg-white" : scrolled ? "bg-white" : "bg-ink"
                }`}
              />
              <span
                className={`h-px w-6 transition-[transform,background-color] duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45 bg-white" : scrolled ? "bg-white" : "bg-ink"
                }`}
              />
            </button>
          </nav>
        </Container>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-ink text-white transition-[clip-path] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "[clip-path:circle(150%_at_calc(100%-2rem)_2rem)]" : "[clip-path:circle(0%_at_calc(100%-2rem)_2rem)]"
        }`}
      >
        <Container className="flex h-full flex-col justify-center gap-8 pb-24">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-h1 font-medium leading-none text-white"
              style={{
                transitionDelay: open ? `${i * 60 + 120}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-8 text-sm uppercase tracking-wide text-gray-400"
          >
            {site.email}
          </a>
        </Container>
      </div>
    </header>
  );
}
