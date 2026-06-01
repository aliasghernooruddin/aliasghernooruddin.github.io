import { site } from "../data/content";

const footerLinks = [
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "Twitter", href: site.links.twitter, external: true },
  { label: "Email", href: site.links.email, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 pb-12 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-base italic text-ink-muted">
              {site.title}
            </p>
            <p className="mt-2 font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
              {site.name}
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-7 gap-y-3"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-ink-muted sm:flex-row">
          <p>
            © {year} {site.shortName}. All rights reserved.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-ink"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
