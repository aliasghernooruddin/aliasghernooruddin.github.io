import SectionHeading from "./SectionHeading";
import { expertise } from "../data/content";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-y border-border/60 bg-surface-raised/30 px-6 py-20 lg:py-28"
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-raised/50 p-6 transition hover:border-accent/30 hover:bg-surface-raised"
            >
              <span className="mb-4 block font-display text-5xl text-border transition group-hover:text-accent/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-text-muted">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-muted"
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
