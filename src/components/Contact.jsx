import Reveal from "./Reveal";
import { site } from "../data/content";

const social = [
  { name: "Email", href: site.links.email, description: site.email, external: false },
  { name: "Phone", href: site.links.phone, description: site.phone, external: false },
  { name: "LinkedIn", href: site.links.linkedin, description: "Connect professionally", external: true },
  { name: "GitHub", href: site.links.github, description: "View code & projects", external: true },
  { name: "Twitter / X", href: site.links.twitter, description: "@aliasghernoor", external: true },
  { name: "Stack Overflow", href: site.links.stackoverflow, description: "Answers & contributions", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-5 flex items-center gap-3">
          <span className="font-serif text-sm italic text-accent">05</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Contact
          </span>
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl"
        >
          Let&apos;s build something{" "}
          <span className="font-serif font-normal italic text-accent">
            useful
          </span>
          .
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          Open to senior engineering roles, founding engineer opportunities, and
          consulting on SaaS, AI, and business automation.
        </Reveal>

        <Reveal delay={200}>
          <a
            href={site.links.email}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-base font-semibold text-surface transition-all duration-300 hover:gap-4 hover:bg-accent"
          >
            Send an email
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {social.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 60}
              className="bg-surface-raised/80"
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors duration-300 hover:bg-surface-raised"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <span className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-ink-muted transition-colors group-hover:text-ink-soft">
                  {item.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
