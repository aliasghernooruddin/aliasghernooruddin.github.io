import { site } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
