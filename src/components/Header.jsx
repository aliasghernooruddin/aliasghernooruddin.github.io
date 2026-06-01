import { useEffect, useState } from "react";
import { navLinks, site } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-surface/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:h-20">
        <a
          href="#"
          className="group flex items-center gap-2.5 text-ink"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-surface transition-transform duration-500 group-hover:rotate-[360deg]">
            A
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight">
            {site.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                <span className="text-ink-faint">
                  {isActive ? "● " : ""}
                </span>
                {link.label}
              </a>
            );
          })}
          <a
            href={site.links.email}
            className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface-raised px-4 py-2 text-[0.8rem] font-semibold text-ink shadow-sm transition-all duration-300 hover:border-ink hover:bg-ink hover:text-surface"
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-surface-raised text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/97 backdrop-blur-xl md:hidden">
          <nav
            className="flex h-full flex-col items-center justify-center gap-2"
            aria-label="Mobile"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="rise font-display text-4xl font-medium tracking-tight text-ink"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.links.email}
              className="rise mt-8 rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-surface"
              style={{ animationDelay: `${navLinks.length * 80}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              Get in touch →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
