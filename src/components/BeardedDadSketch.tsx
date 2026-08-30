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
      {/* side hair behind ears */}
      <path className={s} strokeWidth="2.5" strokeLinecap="round" d="M64 70c-4 10-5 20-3 30M156 70c4 10 5 20 3 30" opacity=".7" />
      {/* beard mass — bushy outline with zigzag edge */}
      <path className={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M62 108c-3 18 0 38 7 54l-6 2 8 6-4 5 9 3-2 6 10 2 1 6 10 1 3 6 9-1 4 5 8-3 5 4 7-4 6 3 6-6 8 1 5-7 8-2 3-8 8-4 1-9 7-6-2-9 5-8c3-14 4-28 2-42" />
      {/* beard sketchy strokes */}
      <g strokeWidth="1.8" strokeLinecap="round" opacity=".6" className={s}>
        <path d="M74 132c0 16 3 30 9 42" />
        <path d="M88 142c0 16 3 30 8 44" />
        <path d="M104 148c0 16 1 32 3 46" />
        <path d="M120 147c0 16-1 32-4 45" />
        <path d="M136 140c-1 16-4 30-10 42" />
        <path d="M150 128c0 14-3 28-8 40" />
        <path d="M70 158c5 3 11 4 17 3M140 156c6 3 12 3 17 0" />
        <path d="M84 182c7 5 15 8 24 8M100 194c8 3 17 2 24-2" />
      </g>
      {/* stray pencil lines for texture */}
      <g strokeWidth="1.2" strokeLinecap="round" opacity=".3" className={s}>
        <path d="M56 184c4 7 10 13 17 17" />
        <path d="M164 182c-4 8-11 14-18 17" />
        <path d="M104 214c3 1 7 1 10 0" />
        <path d="M76 204c4 3 9 6 14 7" />
      </g>
    </svg>
  );
}
