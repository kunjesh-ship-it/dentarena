import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Thin arc echoing the arch mask. Decorative only. */
export function ArenaArc({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 22"
      fill="none"
      className={cn("h-3 w-16 text-accent", className)}
    >
      <path
        d="M1 21C1 9.954 14.88 1 32 1s31 8.954 31 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Three dots of decreasing size — list bullet and section end-mark. */
export function SmileDots({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 34 10"
      fill="none"
      className={cn("h-2.5 w-9", className)}
    >
      <circle cx="5" cy="5" r="5" className="fill-accent" />
      <circle cx="18" cy="5" r="3.5" className="fill-gold" />
      <circle cx="29" cy="5" r="2.5" className="fill-blush" />
    </svg>
  );
}

/** Abstract single-stroke tooth silhouette with continuous smooth floating loop animation. */
export function EnamelOutline({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className={cn("pointer-events-none text-accent", className)}>
      <motion.svg
        viewBox="0 0 200 240"
        fill="none"
        animate={
          shouldReduceMotion || !animate
            ? false
            : {
                y: [-16, 16, -16],
                rotate: [-1, 1, -1],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="size-full text-current"
      >
        <path
          d="M100 18c26 0 34-12 58-12 26 0 36 22 36 52 0 34-14 48-20 84-6 34-8 92-30 92-18 0-16-52-28-76-6-12-26-12-32 0-12 24-10 76-28 76-22 0-24-58-30-92C20 106 6 92 6 58 6 28 16 6 42 6c24 0 32 12 58 12Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </motion.svg>
    </div>
  );
}

/** Slightly irregular hand-drawn ring — used once per page. */
export function HandCircle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 90"
      fill="none"
      preserveAspectRatio="none"
      className={cn("text-gold", className)}
    >
      <path
        d="M139 6C96 1 44 6 20 24 -3 41 6 68 40 79c36 12 112 12 152-6 24-11 27-33 4-46C179 16 152 9 128 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
