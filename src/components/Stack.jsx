import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { stack } from "../data/content";

const groups = [
  { key: "backend", title: "Backend & APIs", items: stack.backend },
  { key: "cloud", title: "Cloud & infrastructure", items: stack.cloud },
  { key: "meta", title: "Meta & messaging", items: stack.meta },
];

const marqueeItems = [...stack.backend, ...stack.cloud, ...stack.meta];

export default function Stack() {
  return (
    <section className="scroll-mt-24 border-t border-border bg-surface-muted/40 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          label="Toolkit"
          title="Technologies & platforms"
          description="The stack behind the products — chosen for reliability and speed to market."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal
              key={group.key}
              delay={index * 90}
              className="bg-surface-raised/80 p-7 transition-colors duration-500 hover:bg-surface-raised"
            >
              <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <span className="font-serif text-sm italic text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 text-ink-soft"
                  >
                    <span className="h-px w-3 bg-border-strong transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
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
