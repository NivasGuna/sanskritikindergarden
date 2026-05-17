import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Heart,
  Handshake,
  TreePine,
  Star,
  Smile,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Heart,
  Handshake,
  TreePine,
  Star,
  Smile,
  Users,
};

const accentMap: Record<string, string> = {
  coral: "bg-rose-200",
  gold: "bg-amber-200",
  mint: "bg-emerald-200",
  sky: "bg-sky-200",
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: string;
  index?: number;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  accent,
  index = 0,
  className,
}: FeatureCardProps) {
  const IconComponent = iconMap[icon] ?? Sparkles;
  const accentClassName = accentMap[accent ?? "mint"] ?? accentMap.mint;

  return (
    <div
      className={cn(
        "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 group h-full duration-700",
        className
      )}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <Card
        className={cn(
          "relative h-full min-h-[300px] overflow-hidden border-[var(--premium-line)] bg-[var(--premium-paper)] py-0 transition-all duration-500",
          "rounded-[var(--premium-radius)] shadow-[var(--premium-shadow-sm)] hover:-translate-y-1 hover:shadow-[var(--premium-shadow-md)]"
        )}
      >
        <CardContent className="flex h-full flex-col p-0">
          <div className={cn("h-1.5 w-full", accentClassName)} />
          <div className="flex flex-1 flex-col p-8 md:p-10">
            <div className="mb-8 flex items-center justify-between gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--premium-forest-soft)] shadow-sm transition-all duration-500 group-hover:bg-[var(--premium-forest)] group-hover:text-white">
                <IconComponent
                  size={24}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-px flex-1 bg-[var(--premium-line)]" />
            </div>

            <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--premium-ink)]">
              {title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[var(--premium-muted)]">
              {description}
            </p>

            <div className="mt-auto pt-8">
              <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[var(--premium-forest)] uppercase">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--premium-forest)] animate-pulse" />
                Premium Care
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
