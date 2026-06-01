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
        <div className="overflow-hidden rounded-3xl border border-border bg-surface-raised p-8 shadow-lg shadow-slate-200/60 sm:p-12 lg:p-16">
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
                className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/40 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-accent">{item.name}</p>
                <p className="mt-2 text-sm text-ink-muted transition group-hover:text-ink">
                  {item.description}
                </p>
              </a>
            ))}
          </div>

          <a
            href={site.links.email}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-accent-hover"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
