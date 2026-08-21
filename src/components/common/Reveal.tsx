import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "image-reveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType | string;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  staggerChildren?: number;
  isStaggerParent?: boolean;
}

const variantsConfig = {
  "fade-up": {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 35 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  },
  "image-reveal": {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 1.08 },
    visible: { 
      opacity: 1, 
      clipPath: "inset(0% 0 0 0)", 
      scale: 1,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } 
    },
  },
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  variant = "fade-up",
  staggerChildren,
  isStaggerParent,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion.create(as as any);

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  const selectedVariant = variantsConfig[variant];

  // If this is a parent container orchestrating its children
  if (isStaggerParent) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerChildren || 0.1,
              delayChildren: delay / 1000,
            }
          }
        }}
      >
        {children}
      </MotionTag>
    );
  }

  // If this is a child of a stagger parent, it doesn't need its own whileInView
  // But since we can't easily detect that contextlessly without a React Context, 
  // we just apply whileInView to everything that has a delay or isn't explicitly a child.
  // Actually, framer-motion variants automatically flow down.
  // We'll just define the variants and if it's rendered inside a stagger parent, it'll work.
  
  // Custom delay in seconds (from ms)
  const delaySec = delay / 1000;
  
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay: delaySec,
          }
        }
      }}
    >
      {children}
    </MotionTag>
  );
}
