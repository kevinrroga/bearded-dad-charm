import { motion } from 'motion/react';

interface Props {
  className?: string;
}

// Animates each SVG path drawing itself in sequence from top to bottom
function p(delay: number, duration = 1.0) {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration, delay, ease: 'easeInOut' }, opacity: { duration: 0.01, delay } },
  };
}

export function AnimatedBeardedDad({ className }: Props) {
  const s = 'fill-none stroke-current';
  return (
    <motion.svg
      viewBox="0 0 220 240"
      role="img"
      aria-label="Animated sketch of the Bearded Dad"
      className={className}
      initial="initial"
      animate="animate"
    >
      {/* hair tufts — appear first */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M78 34c4-8 10-12 16-13M104 25c6-3 14-3 19 0M132 33c6 3 11 8 14 15"
        opacity={0.7} {...p(0.0, 0.6)} />

      {/* head top arc */}
      <motion.path className={s} strokeWidth="3" strokeLinecap="round"
        d="M62 62c6-26 32-40 52-38 22 2 40 20 42 44"
        {...p(0.3, 0.8)} />
      <motion.path className={s} strokeWidth="2" strokeLinecap="round"
        d="M64 64c8-24 30-37 50-35"
        opacity={0.45} {...p(0.5, 0.6)} />

      {/* ears */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M60 96c-7-2-11 4-8 11 2 5 7 7 11 5"
        {...p(0.8, 0.4)} />
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M160 96c7-2 11 4 8 11-2 5-7 7-11 5"
        {...p(0.8, 0.4)} />

      {/* face sides */}
      <motion.path className={s} strokeWidth="3" strokeLinecap="round"
        d="M62 64c-3 18-2 34 2 46"
        {...p(0.7, 0.7)} />
      <motion.path className={s} strokeWidth="3" strokeLinecap="round"
        d="M158 64c3 18 2 34-2 46"
        {...p(0.7, 0.7)} />

      {/* side hair */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M64 70c-4 10-5 20-3 30M156 70c4 10 5 20 3 30"
        opacity={0.7} {...p(0.9, 0.5)} />

      {/* brows */}
      <motion.path className={s} strokeWidth="3" strokeLinecap="round"
        d="M76 88c6-4 14-4 19-1M125 87c6-3 14-3 19 1"
        {...p(1.1, 0.45)} />

      {/* eyes */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M80 100c4-3 9-3 12 0M128 100c4-3 9-3 12 0"
        {...p(1.3, 0.4)} />
      <motion.circle cx="86" cy="102" r="1.6" className="fill-current"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.15 }} />
      <motion.circle cx="134" cy="102" r="1.6" className="fill-current"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.15 }} />

      {/* nose */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M109 100c-1 10-3 17-6 21 3 3 8 3 11 1"
        {...p(1.55, 0.5)} />

      {/* mustache */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M110 128c-6 2-14 1-21-4-2 6 2 10 9 11M110 128c6 2 14 1 21-4 2 6-2 10-9 11"
        {...p(1.7, 0.55)} />

      {/* smile */}
      <motion.path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M99 138c6 5 16 5 22 0"
        {...p(1.9, 0.35)} />

      {/* beard mass outline */}
      <motion.path className={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        d="M62 108c-3 18 0 38 7 54l-6 2 8 6-4 5 9 3-2 6 10 2 1 6 10 1 3 6 9-1 4 5 8-3 5 4 7-4 6 3 6-6 8 1 5-7 8-2 3-8 8-4 1-9 7-6-2-9 5-8c3-14 4-28 2-42"
        {...p(2.0, 1.4)} />

      {/* beard strokes */}
      <motion.g strokeWidth="1.8" strokeLinecap="round" className={s}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
        transition={{ delay: 2.8, duration: 0.6 }}>
        <path d="M74 132c0 16 3 30 9 42" />
        <path d="M88 142c0 16 3 30 8 44" />
        <path d="M104 148c0 16 1 32 3 46" />
        <path d="M120 147c0 16-1 32-4 45" />
        <path d="M136 140c-1 16-4 30-10 42" />
        <path d="M150 128c0 14-3 28-8 40" />
        <path d="M70 158c5 3 11 4 17 3M140 156c6 3 12 3 17 0" />
        <path d="M84 182c7 5 15 8 24 8M100 194c8 3 17 2 24-2" />
      </motion.g>

      {/* texture strokes — fade in last */}
      <motion.g strokeWidth="1.2" strokeLinecap="round" className={s}
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
        transition={{ delay: 3.2, duration: 0.5 }}>
        <path d="M56 184c4 7 10 13 17 17" />
        <path d="M164 182c-4 8-11 14-18 17" />
        <path d="M104 214c3 1 7 1 10 0" />
        <path d="M76 204c4 3 9 6 14 7" />
      </motion.g>
    </motion.svg>
  );
}
