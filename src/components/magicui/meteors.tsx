"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: "-5%",
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 1}s`,
      animationDuration: `${Math.random() * 8 + 2}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#9E7AFF] before:to-transparent before:content-['']",
            className
          )}
          style={style}
        />
      ))}
    </>
  );
}
