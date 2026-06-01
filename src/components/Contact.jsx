import SectionHeading from "./SectionHeading";
import { site } from "../data/content";

const social = [
  {
    name: "Email",
    href: site.links.email,
    description: site.email,
    external: false,
  },
  {
    name: "Phone",
    href: site.links.phone,
    description: site.phone,
    external: false,
  },
  {
    name: "LinkedIn",
    href: site.links.linkedin,
    description: "Connect professionally",
    external: true,
  },
  {
    name: "GitHub",
    href: site.links.github,
    description: "View code & projects",
    external: true,
  },
  {
    name: "Twitter / X",
    href: site.links.twitter,
    description: "@aliasghernoor",
    external: true,
  },
  {
    name: "Stack Overflow",
    href: site.links.stackoverflow,
    description: "Answers & contributions",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-raised to-surface-muted/80 p-8 sm:p-12 lg:p-16">
          <SectionHeading
            label="Contact"
            title="Let's build something useful"
            description="Open to senior engineering roles, founding engineer opportunities, and consulting on SaaS, AI, and business automation."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-border/80 bg-surface/50 p-6 transition hover:border-accent/40 hover:bg-surface"
              >
                <p className="text-sm font-semibold text-accent">
                  {item.name}
                </p>
                <p className="mt-2 text-text-muted transition group-hover:text-text">
                  {item.description}
                </p>
              </a>
            ))}
          </div>

          <a
            href={site.links.email}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-surface shadow-lg shadow-accent/20 transition hover:bg-accent/90"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
