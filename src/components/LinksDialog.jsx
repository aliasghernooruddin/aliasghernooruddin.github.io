import { useEffect, useRef } from "react";

export default function LinksDialog({ open, onClose, links }) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusable = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="links-dialog-title"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="rise relative w-full max-w-md rounded-3xl border border-border bg-surface-raised p-7 shadow-[0_40px_100px_-30px_rgba(27,26,23,0.55)]"
        style={{ animationDuration: "0.4s" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-sm italic text-accent">Find me online</p>
            <h2
              id="links-dialog-title"
              className="mt-1 font-display text-2xl font-semibold tracking-[-0.01em] text-ink"
            >
              Let&apos;s connect
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-ink hover:text-ink"
          >
            ✕
          </button>
        </div>

        <ul className="mt-6 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-transparent px-4 py-3.5 transition-colors duration-300 hover:border-border hover:bg-surface-muted/60"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">
                    {link.name}
                  </span>
                  <span className="text-sm text-ink-muted">
                    {link.description}
                  </span>
                </span>
                <span className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                  {link.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
