export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
