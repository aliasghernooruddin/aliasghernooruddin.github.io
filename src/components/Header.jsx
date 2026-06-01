import { useEffect, useState } from "react";
import { navLinks, site } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-surface/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem]">
        <a
          href="#"
          className="font-display text-xl text-text transition-colors hover:text-accent"
        >
          {site.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.links.email}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-surface transition hover:bg-accent/90"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-border text-text md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden">
          <nav
            className="flex h-full flex-col items-center justify-center gap-8"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.links.email}
              className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-semibold text-surface"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
