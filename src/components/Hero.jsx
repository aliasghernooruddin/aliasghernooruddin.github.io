import { site } from "../data/content";

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-1.5 text-sm font-medium text-ink-muted shadow-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for senior roles & consulting
        </p>

        <h1 className="max-w-4xl font-display text-[2.75rem] leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">{site.shortName}</span>
          <span className="mt-2 block font-sans text-[0.5em] font-medium tracking-normal text-ink-muted sm:text-[0.45em]">
            {site.title}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {site.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted/90">
          {site.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-accent-hover"
          >
            View products built
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface-raised px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-accent/40 hover:text-accent"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
