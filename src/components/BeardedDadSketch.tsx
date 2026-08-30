// Hand-drawn style line sketch of "the bearded dad" — loose pencil strokes.
export function BeardedDadSketch({ className }: { className?: string }) {
  const s = "fill-none stroke-current";
  return (
    <svg
      viewBox="0 0 220 240"
      role="img"
      aria-label="Hand-drawn sketch of Dolsin, the bearded dad"
      className={className}
    >
      {/* head */}
      <path className={s} strokeWidth="3" strokeLinecap="round" d="M62 62c6-26 32-40 52-38 22 2 40 20 42 44" />
      <path className={s} strokeWidth="2" strokeLinecap="round" opacity=".45" d="M64 64c8-24 30-37 50-35" />
      {/* hair tufts */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M78 34c4-8 10-12 16-13M104 25c6-3 14-3 19 0M132 33c6 3 11 8 14 15" opacity=".7" />
      {/* ears */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M60 96c-7-2-11 4-8 11 2 5 7 7 11 5M160 96c7-2 11 4 8 11-2 5-7 7-11 5" />
      {/* face sides */}
      <path className={s} strokeWidth="3" strokeLinecap="round" d="M62 64c-3 18-2 34 2 46M158 64c3 18 2 34-2 46" />
      {/* brows */}
      <path className={s} strokeWidth="3" strokeLinecap="round" d="M76 88c6-4 14-4 19-1M125 87c6-3 14-3 19 1" />
      {/* eyes */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M80 100c4-3 9-3 12 0M128 100c4-3 9-3 12 0" />
      <circle cx="86" cy="102" r="1.6" className="fill-current" />
      <circle cx="134" cy="102" r="1.6" className="fill-current" />
      {/* nose */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M109 100c-1 10-3 17-6 21 3 3 8 3 11 1" />
      {/* mustache */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M110 128c-6 2-14 1-21-4-2 6 2 10 9 11M110 128c6 2 14 1 21-4 2 6-2 10-9 11" />
      {/* smile peeking through */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M99 138c6 5 16 5 22 0" />
      {/* beard mass */}
      <path className={s} strokeWidth="3" strokeLinecap="round" d="M64 112c-2 20 2 42 12 58 8 13 20 22 34 23 15 1 28-8 36-21 10-17 14-39 12-60" />
      {/* beard sketchy strokes */}
      <g strokeWidth="1.6" strokeLinecap="round" opacity=".55" className={s}>
        <path d="M74 130c1 14 4 26 10 36" />
        <path d="M88 140c1 14 4 26 9 38" />
        <path d="M104 146c0 14 1 28 3 40" />
        <path d="M122 145c0 15-1 29-4 40" />
        <path d="M138 138c-1 14-4 27-10 37" />
        <path d="M70 150c6 4 12 5 18 4M142 148c-6 5-13 6-20 4" />
        <path d="M84 176c8 6 18 9 27 8M96 188c8 3 17 3 25-1" />
      </g>
      {/* stray pencil lines for texture */}
      <g strokeWidth="1.2" strokeLinecap="round" opacity=".3" className={s}>
        <path d="M58 180c4 6 10 11 16 14" />
        <path d="M162 178c-4 7-10 12-17 15" />
        <path d="M110 210c2 0 4 0 6-1" />
      </g>
    </svg>
  );
}
