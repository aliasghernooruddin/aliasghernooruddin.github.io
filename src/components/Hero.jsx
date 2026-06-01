import { site } from "../data/content";
import profilePhoto from "../logo.jpeg";

const headlineWords = site.headline.split(" ");

const stats = [
  { value: "7+ yrs", label: "Engineering experience" },
  { value: "SWVL", label: "Currently building at" },
  { value: "2", label: "SaaS products shipped" },
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised/70 px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-soft backdrop-blur"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for senior roles &amp; consulting
          </p>
          <p
            className="rise font-serif text-base italic text-ink-muted"
            style={{ animationDelay: "120ms" }}
          >
            {site.title}
          </p>
        </div>

        {/* Statement headline */}
        <h1 className="max-w-[60rem] font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.75rem]">
          {headlineWords.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
              <span
                className="rise"
                style={{ animationDelay: `${180 + i * 45}ms` }}
              >
                {word}
                {i < headlineWords.length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h1>

        {/* Body + CTAs + portrait */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div
            className="rise max-w-xl"
            style={{ animationDelay: `${180 + headlineWords.length * 45 + 80}ms` }}
          >
            <p className="text-lg leading-relaxed text-ink-soft">
              {site.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-surface transition-all duration-300 hover:gap-3 hover:bg-accent"
              >
                View work
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="link-underline text-sm font-semibold text-ink"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Portrait */}
          <figure
            className="rise group relative mx-auto w-fit lg:mx-0"
            style={{ animationDelay: `${180 + headlineWords.length * 45 + 160}ms` }}
          >
            <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-accent-soft/70 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
            <img
              src={profilePhoto}
              alt={`${site.name} — portrait`}
              width={300}
              height={360}
              className="h-64 w-56 rounded-[1.5rem] border border-surface-raised object-cover shadow-[0_24px_60px_-24px_rgba(27,26,23,0.4)] grayscale transition-all duration-700 group-hover:grayscale-0 sm:h-72 sm:w-64"
            />
            <figcaption className="mt-4 flex items-center gap-2 text-sm">
              <span className="font-display font-semibold text-ink">
                {site.name}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-faint" />
              <span className="font-serif italic text-ink-muted">Karachi</span>
            </figcaption>
          </figure>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rise"
              style={{ animationDelay: `${180 + headlineWords.length * 45 + 240 + i * 80}ms` }}
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
