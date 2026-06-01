import SectionHeading from "./SectionHeading";
import { expertise } from "../data/content";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-y border-border bg-surface-muted/50 px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Expertise"
          title="What I work on"
          description="Full-stack product development with a bias toward shipping and scaling."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-surface-raised p-6 shadow-sm transition hover:border-accent/30 hover:shadow-md"
            >
              <span className="mb-4 block font-display text-5xl text-slate-200 transition group-hover:text-accent-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-accent-soft/60 px-2.5 py-1 text-xs font-medium text-accent-hover"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
