import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: React.ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-card border border-border",
        "transform-gpu transition-all duration-300 hover:border-primary/50",
        className
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {Icon && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
        )}
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="max-w-lg text-muted-foreground">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {href && cta && (
          <a
            href={href}
            className="pointer-events-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {cta}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.03]" />
    </div>
  );
}
