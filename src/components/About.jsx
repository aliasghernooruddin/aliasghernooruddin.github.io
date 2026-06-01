import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { about, approach, focus, interests } from "../data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="01"
          label="About"
          title="Engineer and product builder"
          description="From architecture to growth — focused on products that solve real problems."
        />

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-6">
            {about.map((paragraph, i) => (
              <Reveal
                key={paragraph.slice(0, 40)}
                as="p"
                delay={i * 90}
                className={
                  i === 0
                    ? "text-2xl leading-snug tracking-[-0.01em] text-ink first-letter:font-serif first-letter:text-accent"
                    : "text-lg leading-relaxed text-ink-muted"
                }
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <div className="space-y-10">
            <Reveal>
              <h3 className="mb-5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                <span className="font-serif text-sm italic text-accent">
                  i.
                </span>
                Currently focused on
              </h3>
              <ul className="space-y-3.5">
                {focus.map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mb-5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                <span className="font-serif text-sm italic text-accent">
                  ii.
                </span>
                How I work
              </h3>
              <ul className="space-y-3 text-ink-soft">
                {approach.map((item) => (
                  <li
                    key={item}
                    className="border-l border-border-strong pl-4 leading-snug transition-colors duration-300 hover:border-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <h3 className="mb-5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                <span className="font-serif text-sm italic text-accent">
                  iii.
                </span>
                Areas of interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-surface-raised/60 px-3 py-1.5 text-[0.8rem] text-ink-soft transition-all duration-300 hover:border-accent-line hover:text-accent"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
