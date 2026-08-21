import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useCursorStore } from '@/hooks/useCursorStore';

export function Cursor() {
  const { variant, text, setVariant } = useCursorStore();
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on desktop devices with fine pointers
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    if (!mediaQuery.matches || shouldReduceMotion) {
      return;
    }

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't override if explicitly set by a component (like our cards)
      // We check if it's already set to image or if the target is inside something we don't want to override
      
      const isLink = target.closest('a');
      const isButton = target.closest('button') || target.closest('[role="button"]') || target.closest('input[type="submit"]') || target.closest('.button-cursor');
      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, span, li');
      
      // If the target is an image with our manual trigger, let it be.
      // But if it's just a general link/button, apply global states.
      
      if (isLink && !isButton) {
        setVariant('link');
      } else if (isButton) {
        setVariant('button');
      } else if (isText && !isLink && !isButton) {
        // Only if it's purely text and not inside a link/button
        // Actually, text cursor can be annoying if everywhere, let's keep it subtle or default
        setVariant('default');
      } else {
        // Reset to default unless we're on a specifically marked element
        // Wait, if a card set it to 'image', moving inside the card might trigger this and reset it.
        // We need a way to know if we are inside a custom variant container.
        const customVariant = target.closest('[data-cursor]');
        if (customVariant) {
          setVariant(customVariant.getAttribute('data-cursor') as any);
        } else {
          setVariant('default');
        }
      }
    };

    const handleMouseDown = () => {
      // Store previous variant to restore on mouseup
      // But for simplicity, just trigger click effect
      setVariant('click');
    };

    const handleMouseUp = (e: MouseEvent) => {
      handleMouseOver(e); // re-evaluate based on what we are hovering
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, shouldReduceMotion, setVariant]);

  if (!isVisible) return null;

  // Variants for the outer ring
  const variants = {
    default: {
      height: 32,
      width: 32,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'transparent',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      mixBlendMode: 'normal' as const,
    },
    link: {
      height: 48,
      width: 48,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      mixBlendMode: 'normal' as const,
    },
    button: {
      height: 56,
      width: 56,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0, 0, 0, 0.15)',
      mixBlendMode: 'normal' as const,
    },
    image: {
      height: 80,
      width: 80,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      mixBlendMode: 'normal' as const,
    },
    text: {
      height: 32,
      width: 32,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'transparent',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      mixBlendMode: 'normal' as const,
    },
    click: {
      height: 24,
      width: 24,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      mixBlendMode: 'normal' as const,
    },
  };

  // Variants for the inner dot
  const dotVariants = {
    default: { opacity: 1, scale: 1 },
    link: { opacity: 1, scale: 0.5 },
    button: { opacity: 0, scale: 0 },
    image: { opacity: 0, scale: 0 },
    text: { opacity: 0, scale: 0 },
    click: { opacity: 1, scale: 0.8 },
  };

  return (
    <>
      {/* Outer animated ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full text-xs font-medium tracking-wider text-black backdrop-blur-sm"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        variants={variants}
        animate={variant}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {variant === 'image' && text && <span>{text}</span>}
      </motion.div>

      {/* Inner instant dot */}
      <motion.div
        className="pointer-events-none fixed left-4 top-4  z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        variants={dotVariants}
        animate={variant}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
