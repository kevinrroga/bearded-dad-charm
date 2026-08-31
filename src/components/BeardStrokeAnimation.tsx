import { motion } from 'motion/react';

// Unique animation: the bearded dad slowly strokes his beard,
// and little 4-point sparkles appear from it as his hand passes through.
// Hand rises from rest → glides chin to beard tip → sparkles pop → hand returns → idle pause → repeat.

const CYCLE = 9; // total loop duration in seconds

const SPARKLES = [
  { x: 88,  y: 143, t: 0.32, sz: 4.5 },
  { x: 117, y: 155, t: 0.38, sz: 3.5 },
  { x: 82,  y: 163, t: 0.44, sz: 4.0 },
  { x: 121, y: 170, t: 0.50, sz: 3.0 },
  { x: 98,  y: 176, t: 0.56, sz: 5.0 },
];

export function BeardStrokeAnimation({ className }: { className?: string }) {
  const s = 'fill-none stroke-current';

  return (
    <motion.svg
      viewBox="0 0 200 270"
      role="img"
      aria-label="Animated sketch of the bearded dad stroking his beard with sparkles"
      className={className}
    >
      {/* ── HEAD ── */}
      {/* skull */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M65 70c5-26 30-40 50-38 21 2 37 18 39 42" />
      {/* shadow line */}
      <path className={s} strokeWidth="1.2" strokeLinecap="round" opacity=".3"
        d="M67 71c6-23 28-36 48-34" />
      {/* hair tufts */}
      <path className={s} strokeWidth="2" strokeLinecap="round" opacity=".6"
        d="M79 44c3-7 8-11 13-12M102 32c5-2 12-2 16 1M128 42c5 3 9 8 11 13" />
      {/* face sides */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M65 70c-3 16-2 32 2 44M154 70c3 16 2 32-2 44" />
      {/* ears */}
      <path className={s} strokeWidth="2" strokeLinecap="round"
        d="M63 92c-6-2-9 4-6 10 2 5 6 7 9 4M154 92c6-2 9 4 6 10-2 5-6 7-9 4" />
      {/* eyebrows — slightly raised (thoughtful) */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M79 84c4-5 11-5 15-2M111 82c5-4 12-4 16-1" />
      {/* eyes with occasional blink */}
      <motion.g
        animate={{ scaleY: [1, 1, 1, 0.08, 1, 1, 1, 1] }}
        transition={{
          duration: CYCLE, repeat: Infinity,
          times: [0, 0.28, 0.30, 0.32, 0.34, 0.7, 0.85, 1],
        }}
        style={{ transformOrigin: '109px 97px' }}
      >
        <path className={s} strokeWidth="2" strokeLinecap="round"
          d="M81 95c3-2 8-2 11 1M114 95c3-2 7-2 10 1" />
        <circle cx="86"  cy="98" r="1.6" className="fill-current" />
        <circle cx="119" cy="98" r="1.6" className="fill-current" />
      </motion.g>
      {/* nose */}
      <path className={s} strokeWidth="2" strokeLinecap="round"
        d="M109 95c-1 8-3 14-5 17 3 3 7 3 9 1" />
      {/* mustache */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round"
        d="M109 120c-5 2-12 1-18-3-1 5 2 9 8 10M109 120c5 2 12 1 17-3 2 5-1 9-8 10" />
      {/* contented smile */}
      <path className={s} strokeWidth="2" strokeLinecap="round"
        d="M99 131c5 4 14 4 18 0" />

      {/* ── BEARD — gentle perpetual sway ── */}
      <motion.g
        animate={{ rotate: [-1.2, 1.2, -1.2] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '109px 118px' }}
      >
        {/* outer shape */}
        <path className={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          d="M65 106c-2 16 0 34 6 50l-5 2 7 5-3 5 8 3-2 6 9 2 1 6 9 1 3 6 8-1 3 5 8-4 5 4 6-5 7 1 4-7 7-3 2-8 7-5-1-9 5-7c2-12 3-25 1-38" />
        {/* beard texture strokes */}
        <g className={s} strokeWidth="1.5" strokeLinecap="round" opacity=".5">
          <path d="M75 128c0 14 3 26 8 37" />
          <path d="M89 137c0 14 2 27 5 39" />
          <path d="M109 142c0 14 0 28 1 41" />
          <path d="M123 138c0 14-2 27-5 39" />
          <path d="M136 130c-1 13-4 25-9 36" />
        </g>
        {/* stray texture */}
        <g className={s} strokeWidth="1" strokeLinecap="round" opacity=".25">
          <path d="M70 158c5 3 11 4 16 3M140 156c6 3 12 3 17 0" />
          <path d="M83 178c7 5 15 7 23 7" />
        </g>
        {/* beard tip — bounces satisfyingly after stroke passes */}
        <motion.path className={s} strokeWidth="2" strokeLinecap="round" opacity=".75"
          d="M106 180c2 7 5 15 3 21-2 4-5 4-4 0 0-4 3-5 6-3"
          animate={{ rotate: [0, 0, 0, -9, 9, -5, 2, 0, 0] }}
          transition={{
            duration: CYCLE, repeat: Infinity,
            times: [0, 0.48, 0.52, 0.57, 0.63, 0.67, 0.72, 0.78, 1],
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '107px 183px' }}
        />
      </motion.g>

      {/* ── SHOULDERS ── */}
      <path className={s} strokeWidth="2" strokeLinecap="round" opacity=".4"
        d="M65 114c-14 8-26 22-32 42M154 114c14 8 26 22 32 42" />

      {/* ── STROKING HAND ── */}
      {/* rises from rest at right side, arcs to chin, glides down through beard, returns */}
      <motion.g
        animate={{
          x:       [  0,   0,  -8,  -8, -10, -6,   0,   0],
          y:       [  0,   0, -65, -65,  10,  55,  55,   0],
          opacity: [  0,   1,   1,   1,   1,   1,   0,   0],
        }}
        transition={{
          duration: CYCLE, repeat: Infinity,
          times:   [  0, 0.08, 0.22, 0.38, 0.52, 0.65, 0.80, 1.0],
          ease: 'easeInOut',
        }}
      >
        {/* upper arm */}
        <path className={s} strokeWidth="2.5" strokeLinecap="round" opacity=".65"
          d="M152 200 C 150 192 147 184 143 176" />
        {/* forearm */}
        <path className={s} strokeWidth="2.5" strokeLinecap="round" opacity=".65"
          d="M143 176 C 140 169 136 163 132 160" />
        {/* palm + curled fingers wrapping around beard */}
        <path className={s} strokeWidth="2" strokeLinecap="round"
          d="M132 160 C 128 157 123 157 121 161 C 119 164 120 169 124 169" />
        <path className={s} strokeWidth="2" strokeLinecap="round"
          d="M124 169 C 122 173 124 178 128 177 C 133 175 135 170 132 160" />
        {/* thumb suggestion */}
        <path className={s} strokeWidth="1.8" strokeLinecap="round" opacity=".7"
          d="M132 160 C 136 157 138 152 135 150" />
        {/* knuckle texture */}
        <path className={s} strokeWidth="1.1" strokeLinecap="round" opacity=".35"
          d="M123 163 C 124 161 126 161 127 163M127 165 C 128 163 130 163 131 165" />
      </motion.g>

      {/* ── SPARKLES — pop in sequence as the hand descends ── */}
      {SPARKLES.map((sp, i) => (
        <motion.g key={i}
          style={{ transformOrigin: `${sp.x}px ${sp.y}px` }}
          animate={{
            opacity: [0, 0, 1,             0, 0],
            scale:   [0, 0, 1.3,           0, 0],
          }}
          transition={{
            duration: CYCLE, repeat: Infinity,
            times: [0, sp.t - 0.01, sp.t + 0.04, sp.t + 0.11, 1],
            ease: 'easeOut',
          }}
        >
          {/* cross */}
          <path
            d={`M${sp.x} ${sp.y - sp.sz} L${sp.x} ${sp.y + sp.sz} M${sp.x - sp.sz} ${sp.y} L${sp.x + sp.sz} ${sp.y}`}
            className={s} strokeWidth="1.6" strokeLinecap="round"
          />
          {/* diagonal arms (slightly shorter) */}
          <path
            d={`M${sp.x - sp.sz * 0.65} ${sp.y - sp.sz * 0.65} L${sp.x + sp.sz * 0.65} ${sp.y + sp.sz * 0.65} M${sp.x + sp.sz * 0.65} ${sp.y - sp.sz * 0.65} L${sp.x - sp.sz * 0.65} ${sp.y + sp.sz * 0.65}`}
            className={s} strokeWidth="1.2" strokeLinecap="round" opacity=".5"
          />
        </motion.g>
      ))}
    </motion.svg>
  );
}
