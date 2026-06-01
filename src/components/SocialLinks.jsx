import { Github, Linkedin } from "lucide-react";
import { site } from "../data/content";

function StackOverflowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 5.17L6.3 14.98l10.557 2.65.59-1.26L6.785 12.053zm-.48 6.09v2.364h12.002v-2.364H6.305z" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: TwitterIcon,
  stackoverflow: StackOverflowIcon,
};

export default function SocialLinks({ size = "md" }) {
  const buttonClass =
    size === "lg"
      ? "flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-ink-muted transition hover:border-accent/50 hover:text-accent"
      : "flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition hover:text-accent";

  const iconSize = size === "lg" ? 20 : 18;

  return (
    <div className="flex flex-wrap gap-3">
      {site.social.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={buttonClass}
            aria-label={item.label}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
