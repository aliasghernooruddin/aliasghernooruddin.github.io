import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-14 max-w-2xl">
      {label && (
        <Reveal className="mb-5 flex items-center gap-3">
          {index && (
            <span className="font-serif text-sm italic text-accent">
              {index}
            </span>
          )}
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            {label}
          </span>
        </Reveal>
      )}
      <Reveal as="h2" delay={80}>
        <span className="block font-display text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
          {title}
        </span>
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={160}
          className="mt-5 text-lg leading-relaxed text-ink-muted"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
