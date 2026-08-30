import { useState, useCallback } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
}

export function ShinyText({
  text,
  speed = 3,
  className = '',
  color = 'rgba(245, 238, 220, 0.9)',
  shineColor = '#ffffff',
  spread = 120,
}: ShinyTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const lastTimeRef = { current: null as number | null };
  const elapsedRef = { current: 0 };

  const animationDuration = speed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) { lastTimeRef.current = null; return; }
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += delta;
    const cycleTime = elapsedRef.current % (animationDuration * 2);
    const p = cycleTime < animationDuration ? (cycleTime / animationDuration) * 100 : 100 - ((cycleTime - animationDuration) / animationDuration) * 100;
    progress.set(p);
  });

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
}
