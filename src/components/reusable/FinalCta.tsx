import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import CtaBackground from "@/components/reusable/CtaBackground";

type CtaAction = {
  text: string;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

type FinalCtaProps = {
  image: {
    src: string;
    alt: string;
  };
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  accent?: "mint" | "sky" | "gold";
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

const accentClassNames = {
  mint: {
    badge: "border-mint-line bg-mint-mist text-mint-ink",
    primary:
      "bg-mint text-white shadow-[0_18px_45px_rgb(22_97_63_/_18%)] hover:bg-mint-ink",
  },
  sky: {
    badge: "border-sky-line bg-sky-mist text-sky-ink",
    primary:
      "bg-sky text-white shadow-[0_18px_45px_rgb(21_91_139_/_18%)] hover:bg-sky-ink",
  },
  gold: {
    badge: "border-gold-line bg-gold-mist text-gold-ink",
    primary:
      "bg-gold text-forest-dark shadow-[0_18px_45px_rgb(245_173_47_/_18%)] hover:bg-gold-ink hover:text-white",
  },
};

function CtaActionLink({
  action,
  className,
  showDefaultIcon,
}: {
  action: CtaAction;
  className: string;
  showDefaultIcon?: boolean;
}) {
  const content = (
    <>
      {action.text}
      {action.icon ??
        (showDefaultIcon ? <ArrowRight className="ml-2 size-4" /> : null)}
    </>
  );

  const isRoutable = action.href.startsWith("/");

  if (isRoutable) {
    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={action.href} className={className}>
      {content}
    </a>
  );
}

export default function FinalCta({
  image,
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  accent = "mint",
  className,
  contentClassName,
  imageClassName,
  overlayClassName,
}: FinalCtaProps) {
  const accentClasses = accentClassNames[accent];
  const baseButtonClassName =
    "inline-flex h-[3.25rem] items-center justify-center rounded-full px-8 text-sm font-black transition-all hover:-translate-y-0.5";

  return (
    <CtaBackground
      image={image}
      className={className}
      contentClassName={contentClassName}
      imageClassName={imageClassName}
      overlayClassName={overlayClassName}
    >
      <div className="max-w-3xl">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase backdrop-blur-md",
            accentClasses.badge
          )}
        >
          {badge}
        </span>
        <h2 className="font-playful-display mt-5 text-3xl leading-tight font-extrabold md:text-5xl">
          {title}
        </h2>
        <p className="font-hero-subtitle mt-5 max-w-2xl text-base leading-7 font-semibold text-white/90 md:text-[17px] md:leading-8">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
        <CtaActionLink
          action={primaryAction}
          className={cn(baseButtonClassName, accentClasses.primary)}
          showDefaultIcon
        />
        {secondaryAction ? (
          <CtaActionLink
            action={secondaryAction}
            className={cn(
              baseButtonClassName,
              "text-forest-dark border-forest-dark/18 border bg-white/78 backdrop-blur-sm hover:bg-white"
            )}
          />
        ) : null}
      </div>
    </CtaBackground>
  );
}
