const defaultItems = [
  'Rated 9.4 Superb on Hostelworld',
  '"The best hostel I\'ve ever stayed in" · Lexi, Australia',
  'Free breakfast · Free bicycles · Free city tour',
  'Staff rated 9.7 out of 10',
  '"Breakfast each morning was a 12/10!" · Anonymous',
  'Family dinner nightly for €7',
  '674 guests reviewed us',
  '"It felt like a hotel, honestly" · Mariam, Egypt',
  'Steps from Skanderbeg Square · Tirana, Albania',
  'Nesha the hostel dog says hi',
];

export function MarqueeStrip({ items }: { items?: string[] }) {
  const doubled = [...(items ?? defaultItems), ...(items ?? defaultItems)];

  return (
    <div className="overflow-hidden border-y border-border bg-secondary/40 py-3">
      <div className="marquee-inner flex w-max items-center">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-6 text-sm text-foreground/70">{item}</span>
            <span className="text-accent/70 select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
