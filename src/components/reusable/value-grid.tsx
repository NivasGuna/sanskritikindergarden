import { cn } from "@/lib/utils";
import {
  Heart,
  Handshake,
  TreePine,
  Star,
  Smile,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Handshake,
  TreePine,
  Star,
  Smile,
  Users,
};

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface ValueGridProps {
  items: ValueItem[];
  className?: string;
}

export function ValueGrid({ items, className }: ValueGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => {
        const IconComponent = iconMap[item.icon] ?? Star;

        return (
          <article
            key={item.title}
            className={cn(
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 group flex min-h-[250px] flex-col rounded-[var(--premium-radius)] border border-[var(--premium-line)] bg-[var(--premium-paper)] p-10 shadow-[var(--premium-shadow-sm)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--premium-shadow-md)]"
            )}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--premium-forest-soft)] text-[var(--premium-forest)] transition-colors duration-500 group-hover:bg-[var(--premium-forest)] group-hover:text-white">
                <IconComponent size={22} />
              </div>
              <div className="h-px flex-1 bg-[var(--premium-line)]" />
            </div>

            <h4 className="font-serif text-2xl leading-tight font-medium text-[var(--premium-ink)]">
              {item.title}
            </h4>
            <p className="mt-5 text-base leading-relaxed text-[var(--premium-muted)]">
              {item.description}
            </p>

            <div className="mt-auto pt-10">
              <div className="h-1 w-full rounded-full bg-[var(--premium-line)]">
                <div className="h-full w-1/4 rounded-full bg-[var(--premium-forest)]/40 transition-all duration-1000 group-hover:w-full" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
