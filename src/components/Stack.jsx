import SectionHeading from "./SectionHeading";
import { stack } from "../data/content";

const groups = [
  { key: "backend", title: "Backend & APIs", items: stack.backend },
  { key: "cloud", title: "Cloud & infrastructure", items: stack.cloud },
  { key: "meta", title: "Meta & messaging", items: stack.meta },
];

export default function Stack() {
  return (
    <section className="border-t border-border bg-surface-muted/50 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Toolkit"
          title="Technologies & platforms"
          description="The stack behind the products — chosen for reliability and speed to market."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.key}
              className="rounded-2xl border border-border bg-surface-raised p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink-muted before:mr-2 before:font-bold before:text-accent before:content-['·']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
