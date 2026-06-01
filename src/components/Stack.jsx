import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { stack } from "../data/content";

const marqueeItems = [
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Express.js",
  "FastAPI",
  "GraphQL",
  "Terraform",
];

export default function Stack() {
  return (
    <section className="scroll-mt-24 border-t border-border bg-surface-muted/40 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          label="Toolkit"
          title="Technologies & platforms"
          description="The stack behind seven years of production systems — chosen for reliability and speed to market."
        />

        <dl className="border-t border-border">
          {stack.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="grid items-baseline gap-3 border-b border-border py-6 sm:grid-cols-[210px_1fr] sm:gap-8">
                <dt className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <span className="font-serif text-sm italic text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {group.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-raised px-3 py-1.5 text-[0.82rem] text-ink-soft transition-all duration-300 hover:border-accent-line hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      {/* Marquee */}
      <div
        className="marquee relative mt-16 flex overflow-hidden border-y border-border py-5"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-medium text-ink-faint"
            >
              {item}
              <span className="text-accent">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
