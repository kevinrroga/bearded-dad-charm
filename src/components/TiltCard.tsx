import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const spring = { damping: 30, stiffness: 100, mass: 2 };

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
}

export function TiltCard({ children, className = '', amplitude = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(1, spring);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -amplitude);
    rotateY.set((offsetX / (rect.width / 2)) * amplitude);
  }

  function handleMouseEnter() {
    scale.set(1.03);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '800px' }}
      className={className}
    >
      <motion.div style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </motion.div>
    </div>
  );
}
