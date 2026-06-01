import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { achievements, education, experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          label="Experience"
          title="Seven years building backends"
          description="From junior full-stack to senior backend — across mobility, SaaS, and product teams."
        />

        <div className="space-y-px overflow-hidden rounded-3xl border border-border bg-border">
          {experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              delay={index * 80}
              className="bg-surface-raised/80 transition-colors duration-500 hover:bg-surface-raised"
            >
              <article className="grid gap-6 p-7 sm:grid-cols-[170px_1fr] sm:gap-10 sm:p-9">
                <div className="sm:pt-1">
                  <p className="font-display text-sm font-semibold tabular-nums text-ink">
                    {job.period}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink sm:text-2xl">
                      {job.role}
                    </h3>
                    <span className="text-ink-faint">·</span>
                    <span className="font-display text-xl font-semibold text-accent sm:text-2xl">
                      {job.company}
                    </span>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-faint">
                      {job.team}
                    </span>
                  </div>

                  <p className="mt-2 font-serif text-[0.95rem] italic text-ink-muted">
                    {job.context}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point.slice(0, 36)}
                        className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-line" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Education & recognition */}
        <div className="mt-7 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="rounded-3xl border border-border bg-surface-raised/70 p-7">
            <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <span className="font-serif text-sm italic text-accent">iv.</span>
              Education
            </h3>
            <p className="mt-5 font-display text-lg font-semibold text-ink">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{education.school}</p>
            <p className="mt-1 font-serif text-sm italic text-ink-faint">
              {education.year}
            </p>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-surface-raised/70 p-7">
            <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <span className="font-serif text-sm italic text-accent">v.</span>
              Recognition
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {achievements.map((item) => (
                <div key={item.title}>
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </p>
                    <span className="font-serif text-sm italic text-accent">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
