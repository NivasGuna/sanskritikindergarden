import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 flex flex-col gap-5 duration-700",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "border-premium-line bg-premium-paper shadow-premium-sm inline-flex items-center gap-3 rounded-full border px-4 py-1.5",
            align === "center" && "mx-auto"
          )}
        >
          <div className="bg-premium-forest h-1.5 w-1.5 animate-pulse rounded-full" />
          <span className="text-premium-forest text-[10px] font-bold tracking-widest uppercase">
            {label}
          </span>
        </div>
      )}

      <div className="space-y-4">
        <h2
          className={cn(
            "text-premium-ink font-serif text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.1] font-medium tracking-tight",
            titleClassName
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-premium-muted mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            {subtitle}
          </p>
        )}
      </div>

      <div
        className={cn(
          "bg-premium-forest/20 h-px w-16",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
