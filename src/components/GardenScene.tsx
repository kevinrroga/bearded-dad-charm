import { motion } from 'motion/react';

// String light wire path (two sagging segments)
const WIRE = "M 0,72 C 40,72 70,95 100,93 C 130,91 155,72 185,72 C 215,72 240,95 270,93 C 300,91 325,72 355,72";

// Light bulbs along the wire with their colors
const LIGHTS = [
  { cx: 18,  cy: 74, color: '#4dd4ac', glow: '#4dd4ac' },  // teal
  { cx: 50,  cy: 83, color: '#fbbf24', glow: '#f59e0b' },  // amber
  { cx: 80,  cy: 92, color: '#60a5fa', glow: '#3b82f6' },  // blue
  { cx: 101, cy: 93, color: '#f472b6', glow: '#ec4899' },  // pink
  { cx: 130, cy: 91, color: '#4dd4ac', glow: '#14b8a6' },  // teal
  { cx: 158, cy: 84, color: '#fbbf24', glow: '#f59e0b' },  // amber
  { cx: 184, cy: 72, color: '#a78bfa', glow: '#8b5cf6' },  // purple
  { cx: 210, cy: 74, color: '#f87171', glow: '#ef4444' },  // red
  { cx: 240, cy: 84, color: '#4dd4ac', glow: '#14b8a6' },  // teal
  { cx: 268, cy: 93, color: '#fbbf24', glow: '#f59e0b' },  // amber
  { cx: 285, cy: 91, color: '#60a5fa', glow: '#3b82f6' },  // blue
  { cx: 313, cy: 82, color: '#f472b6', glow: '#ec4899' },  // pink
  { cx: 340, cy: 73, color: '#4dd4ac', glow: '#14b8a6' },  // teal
];

const STARS = [
  { cx: 22,  cy: 14, r: 1.3, delay: 0.0,  dur: 2.1 },
  { cx: 60,  cy: 5,  r: 1.6, delay: 0.5,  dur: 2.8 },
  { cx: 98,  cy: 20, r: 1.1, delay: 0.8,  dur: 2.3 },
  { cx: 135, cy: 8,  r: 1.4, delay: 0.2,  dur: 3.0 },
  { cx: 170, cy: 18, r: 1.0, delay: 1.1,  dur: 2.5 },
  { cx: 210, cy: 6,  r: 1.5, delay: 0.4,  dur: 2.2 },
  { cx: 248, cy: 22, r: 1.2, delay: 0.9,  dur: 2.7 },
  { cx: 290, cy: 10, r: 1.4, delay: 0.3,  dur: 2.0 },
  { cx: 328, cy: 20, r: 1.1, delay: 0.7,  dur: 3.1 },
  { cx: 48,  cy: 42, r: 0.9, delay: 1.3,  dur: 2.4 },
  { cx: 155, cy: 46, r: 1.0, delay: 0.6,  dur: 2.9 },
  { cx: 298, cy: 48, r: 0.8, delay: 1.0,  dur: 2.6 },
];

const FIREFLIES = [
  { startX: 120, startY: 180, color: '#fbbf24' },
  { startX: 210, startY: 210, color: '#4dd4ac' },
  { startX: 75,  startY: 220, color: '#a78bfa' },
];

export function GardenScene({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 355 300"
      role="img"
      aria-label="Animated garden scene at night"
      className={className}
    >
      {/* ── Stars ── */}
      {STARS.map((s, i) => (
        <motion.circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="white"
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Moon (crescent) ── */}
      <motion.g
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <circle cx="318" cy="30" r="20" fill="white" opacity="0.12" />
        <circle cx="307" cy="25" r="17" fill="transparent"
          style={{ mixBlendMode: 'multiply' }} opacity="0" />
        {/* crescent path */}
        <path d="M 318,12 A 18,18 0 1 1 318,48 A 12,14 0 1 0 318,12 Z"
          fill="white" opacity="0.22" />
      </motion.g>

      {/* ── Left tree ── */}
      {/* trunk */}
      <motion.rect x="52" y="140" width="10" height="120" rx="3" fill="white" opacity="0.25"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        style={{ transformOrigin: '57px 260px' }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      {/* foliage — sways gently */}
      <motion.g
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '57px 140px' }}
      >
        <motion.ellipse cx="57" cy="108" rx="38" ry="46" fill="white" opacity="0.12"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          style={{ transformOrigin: '57px 108px' }}
          transition={{ duration: 0.7, delay: 0.8, type: 'spring', stiffness: 80 }}
        />
        <motion.ellipse cx="42" cy="120" rx="24" ry="32" fill="white" opacity="0.1"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          style={{ transformOrigin: '42px 120px' }}
          transition={{ duration: 0.6, delay: 1.0, type: 'spring', stiffness: 80 }}
        />
        <motion.ellipse cx="72" cy="125" rx="22" ry="28" fill="white" opacity="0.1"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          style={{ transformOrigin: '72px 125px' }}
          transition={{ duration: 0.6, delay: 1.1, type: 'spring', stiffness: 80 }}
        />
      </motion.g>

      {/* ── Red picket fence (left side) ── */}
      <motion.g
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {/* rails */}
        <rect x="0" y="210" width="95" height="5" rx="2" fill="#c0392b" opacity="0.7" />
        <rect x="0" y="235" width="95" height="5" rx="2" fill="#c0392b" opacity="0.7" />
        {/* pickets */}
        {[4, 20, 36, 52, 68, 84].map((x, i) => (
          <motion.path key={i}
            d={`M ${x},195 L ${x + 7},195 L ${x + 7},255 L ${x},255 Z M ${x + 3.5},191 L ${x},195 L ${x + 7},195 Z`}
            fill="#c0392b" opacity="0.75"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            style={{ transformOrigin: `${x + 3.5}px 255px` }}
            transition={{ duration: 0.3, delay: 1.2 + i * 0.06 }}
          />
        ))}
      </motion.g>

      {/* ── Right tropical plant ── */}
      <motion.g
        initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }}
        style={{ transformOrigin: '300px 270px' }}
        transition={{ duration: 0.7, delay: 1.5, type: 'spring', stiffness: 70 }}
      >
        {/* pot */}
        <path d="M 285,270 L 275,290 L 325,290 L 315,270 Z" fill="white" opacity="0.2" />
        {/* stem */}
        <line x1="300" y1="270" x2="300" y2="210" stroke="white" strokeWidth="3" opacity="0.25" />
        {/* leaves */}
        <path d="M 300,230 C 280,210 255,205 245,215 C 268,218 282,228 300,235" fill="white" opacity="0.2" />
        <path d="M 300,220 C 320,200 345,195 355,205 C 332,210 318,222 300,228" fill="white" opacity="0.2" />
        <path d="M 300,240 C 285,225 270,230 265,240 C 278,238 290,240 300,245" fill="white" opacity="0.18" />
      </motion.g>

      {/* ── Ground line ── */}
      <motion.line x1="0" y1="270" x2="355" y2="270" stroke="white" strokeWidth="1" opacity="0.1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      />

      {/* ── String wire ── */}
      <motion.path d={WIRE} fill="none" stroke="white" strokeWidth="1" opacity="0.35"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 1.8, ease: 'easeInOut' }}
      />

      {/* ── Light bulbs ── */}
      {LIGHTS.map((l, i) => (
        <motion.g key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: `${l.cx}px ${l.cy}px` }}
          transition={{ duration: 0.25, delay: 2.2 + i * 0.1, type: 'spring', stiffness: 200 }}
        >
          {/* glow */}
          <circle cx={l.cx} cy={l.cy + 4} r={9} fill={l.glow} opacity={0.18} />
          {/* bulb cap */}
          <rect x={l.cx - 2.5} y={l.cy - 2} width={5} height={3} rx={1} fill="white" opacity={0.5} />
          {/* bulb body */}
          <circle cx={l.cx} cy={l.cy + 5} r={5} fill={l.color} opacity={0.9} />
          {/* highlight */}
          <circle cx={l.cx - 1.5} cy={l.cy + 3} r={1.5} fill="white" opacity={0.5} />
        </motion.g>
      ))}

      {/* ── Fireflies ── */}
      {FIREFLIES.map((f, i) => (
        <motion.circle key={i} cx={f.startX} cy={f.startY} r={2.5} fill={f.color}
          animate={{
            x: [0, 18, -12, 22, -8, 0],
            y: [0, -25, -10, -40, -20, -55],
            opacity: [0, 0.9, 0.4, 0.8, 0.3, 0],
          }}
          transition={{
            duration: 5 + i * 1.2,
            repeat: Infinity,
            delay: 3.0 + i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.svg>
  );
}
