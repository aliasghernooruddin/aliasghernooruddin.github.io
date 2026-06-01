import { site } from "../data/content";

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised/80 px-4 py-1.5 text-sm text-text-muted backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Available for senior roles & consulting
        </p>

        <h1 className="max-w-4xl font-display text-[2.75rem] leading-[1.1] text-text sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">{site.shortName}</span>
          <span className="block mt-2 text-text-muted/90 text-[0.55em] font-sans font-normal tracking-normal sm:text-[0.5em]">
            {site.title}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
          {site.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted/80">
          {site.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-surface shadow-lg shadow-accent/20 transition hover:bg-accent/90"
          >
            View products built
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface-raised/50 px-7 py-3.5 text-sm font-medium text-text transition hover:border-accent/40 hover:text-accent"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
