import { site } from "../data/content";

const footerLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: site.links.email },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-text-muted sm:flex-row">
        <p>© {year} {site.shortName}. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={
                link.label === "Email" ? undefined : "noopener noreferrer"
              }
              className="transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
