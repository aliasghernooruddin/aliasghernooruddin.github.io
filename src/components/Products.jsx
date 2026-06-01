import SectionHeading from "./SectionHeading";
import { products } from "../data/content";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Products built"
          title="Shipped products, not just frameworks"
          description="Real platforms in production — from invoicing SaaS to WhatsApp-powered business messaging."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className={`flex flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg ${product.accent}`}
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    {product.tagline && (
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {product.tagline}
                      </p>
                    )}
                    <h3 className="mt-2 font-display text-3xl text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{product.role}</p>
                  </div>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${product.iconBg}`}
                  >
                    {product.name.charAt(0)}
                  </span>
                </div>

                <p className="flex-1 leading-relaxed text-ink-muted">
                  {product.description}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-ink-muted"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
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
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border/80 pt-6">
                    {product.links.map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          i === 0
                            ? "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-accent-hover"
                            : "inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent"
                        }
                      >
                        {link.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
