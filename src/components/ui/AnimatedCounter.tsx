"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth cubic ease-out
    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = easedProgress * target;

      if (decimals > 0) {
        setDisplayValue(currentValue.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(currentValue).toLocaleString());
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        if (decimals > 0) {
          setDisplayValue(target.toFixed(decimals));
        } else {
          setDisplayValue(target.toLocaleString());
        }
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
