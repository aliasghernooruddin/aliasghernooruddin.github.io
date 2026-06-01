import SectionHeading from "./SectionHeading";
import { approach, infrastructure, interests } from "../data/content";

export default function Interests() {
  return (
    <section className="border-t border-border bg-surface-raised/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Focus areas"
              title="Areas of interest"
            />
            <ul className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-muted transition hover:border-accent/40 hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-ink-muted">
              Cloud & infrastructure
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {infrastructure.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-surface-muted px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              label="Approach"
              title="How I work"
              description="Currently growing freelance & consulting, pursuing senior and founding engineer roles, and building AI-focused products."
            />
            <ul className="space-y-4">
              {approach.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/50 pl-4 leading-relaxed text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
