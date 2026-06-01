import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { products } from "../data/content";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Shipped products, not just frameworks"
          description="Real platforms in production — from invoicing SaaS to WhatsApp-powered business messaging."
        />

        <div className="grid gap-7 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-surface-raised/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_70px_-40px_rgba(27,26,23,0.45)] sm:p-10">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${product.accent}`}
                    >
                      {product.tagline}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted">
                      {product.role}
                    </p>
                  </div>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-semibold ${product.iconBg}`}
                  >
                    {product.name.charAt(0)}
                  </span>
                </div>

                <p className="leading-relaxed text-ink-muted">
                  {product.description}
                </p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2.5 text-sm text-ink-soft"
                    >
                      <svg
                        className={`h-3.5 w-3.5 shrink-0 ${product.accent}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {product.links?.length > 0 && (
                  <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-border pt-7">
                    <span className="font-serif text-sm italic text-ink-faint">
                      {product.year}
                    </span>
                    <div className="ml-auto flex flex-wrap items-center gap-4">
                      {product.links.map((link, i) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            i === 0
                              ? "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
                              : "link-underline text-sm font-medium text-ink-muted hover:text-ink"
                          }
                        >
                          {link.label}
                          {i === 0 && (
                            <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                              →
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
