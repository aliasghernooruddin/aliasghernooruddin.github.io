import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { expertise } from "../data/content";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-y border-border bg-surface-muted/40 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          label="Expertise"
          title="What I work on"
          description="Full-stack product development with a bias toward shipping and scaling."
        />

        <div className="border-t border-border">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group grid gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-surface-raised/50 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-3">
                <div className="flex items-start gap-4 sm:block">
                  <span className="font-display text-3xl font-semibold tabular-nums text-ink-faint transition-colors duration-500 group-hover:text-accent sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink transition-transform duration-500 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
