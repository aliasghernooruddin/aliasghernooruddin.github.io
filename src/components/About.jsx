import SectionHeading from "./SectionHeading";
import { about, focus, interests } from "../data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineer and product builder"
          description="From architecture to growth — focused on products that solve real problems."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-text-muted">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface-raised/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
                Currently focused on
              </h3>
              <ul className="space-y-3">
                {focus.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-text-muted before:mt-2.5 before:block before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
                Areas of interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-surface-muted/50 px-3 py-1.5 text-sm text-text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
