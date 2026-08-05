"use client";

import { ReactNode } from "react";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, className = "", delay = 0, duration = 0.6 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ 
  children, 
  className = "", 
  direction = "left", 
  delay = 0, 
  duration = 0.7 
}: RevealProps & { direction?: "left" | "right" | "up" | "down" }) {
  const getOffset = () => {
    switch (direction) {
      case "left": return { x: -40, y: 0 };
      case "right": return { x: 40, y: 0 };
      case "up": return { x: 0, y: 40 };
      case "down": return { x: 0, y: -40 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = "", delay = 0, duration = 0.6 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}: { 
  children: ReactNode; 
  className?: string; 
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = "",
  direction = "up"
}: { 
  children: ReactNode; 
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const getVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -35 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 35 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}
