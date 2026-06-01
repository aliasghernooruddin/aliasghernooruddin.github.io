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
              className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised/50"
            >
              <div
                className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${product.accent}`}
              />
              <div className="relative flex flex-1 flex-col p-8">
                <div className="mb-6">
                  {product.tagline && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {product.tagline}
                    </p>
                  )}
                  <h3 className="mt-2 font-display text-3xl text-text">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{product.role}</p>
                </div>

                <p className="flex-1 leading-relaxed text-text-muted">
                  {product.description}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-text-muted"
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

                {product.link && (
                  <a
                    href={product.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                  >
                    {product.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
