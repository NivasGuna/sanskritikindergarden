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
            "inline-flex items-center gap-3 rounded-full border border-premium-line bg-premium-paper px-4 py-1.5 shadow-premium-sm",
            align === "center" && "mx-auto"
          )}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-premium-forest animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-premium-forest uppercase">
            {label}
          </span>
        </div>
      )}

      <div className="space-y-4">
        <h2
          className={cn(
            "font-serif text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.1] font-medium tracking-tight text-premium-ink",
            titleClassName
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-premium-muted md:text-xl">
            {subtitle}
          </p>
        )}
      </div>

      <div
        className={cn(
          "h-px w-16 bg-premium-forest/20",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
