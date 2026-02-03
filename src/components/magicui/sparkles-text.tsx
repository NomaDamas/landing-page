"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

interface SparklesTextProps {
  text: string;
  className?: string;
  sparklesCount?: number;
  colors?: { first: string; second: string };
}

export function SparklesText({
  text,
  className,
  sparklesCount = 10,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: sparklesCount }, (_, i) => ({
        id: `sparkle-${i}`,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 2,
        scale: Math.random() * 1 + 0.3,
      }));
    };
    setSparkles(generateSparkles());
  }, [sparklesCount, colors.first, colors.second]);

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="pointer-events-none absolute z-20"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill={sparkle.color}
            />
          </svg>
        </motion.span>
      ))}
    </span>
  );
}
