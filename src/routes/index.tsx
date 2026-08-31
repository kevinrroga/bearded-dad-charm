import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Bike,
  Bus,
  Car,
  Coffee,
  Flame,
  Sofa,
  Lock,
  Luggage,
  Map as MapIcon,
  Mic2,
  Sun,
  Trees,
  Wine,
  Wifi,
  ParkingCircle,
  Home,
  Star,
  Utensils,
  Beer,
  Martini,
  Mountain,
  Ship,
  Phone,
  Mail,
  MapPin,
  Minus,
  Plus,
  ArrowRight,
  Moon,
  Trophy,
  MessageCircle,
  Landmark,
  ShoppingBasket,
  Waves,
} from "lucide-react";
import { BeardedDadSketch } from "@/components/BeardedDadSketch";
import { BeardStrokeAnimation } from "@/components/BeardStrokeAnimation";
import { GardenScene } from "@/components/GardenScene";
import storyImg from "@/assets/story-real.jpg";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { BlurText } from "@/components/BlurText";
import { CountUp } from "@/components/CountUp";
import { TiltCard } from "@/components/TiltCard";
import { ClickSpark } from "@/components/ClickSpark";
import { ShinyText } from "@/components/ShinyText";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Gallery } from "@/components/Gallery";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
import gallery11 from "@/assets/gallery-11.jpg";
import illusWaving from "@/assets/illus-waving.png";
import illusCoffee from "@/assets/illus-coffee.png";
import illusLaughing from "@/assets/illus-laughing.png";
import illusHappy from "@/assets/illus-happy.png";

const BOOK_URL = "https://www.hostelworld.com/hostels/p/313345/the-bearded-dad-hostel/";
const WHATSAPP_URL = "https://wa.me/355695539156";
// Update SITE_URL to your live domain before deploying
const SITE_URL = "https://beardeddadhostel.com";

const galleryImages = [
  { src: gallery3, alt: "Interior lounge with chandelier", caption: "A chandelier, cosy corners, and doors that lead to somewhere good." },
  { src: gallery4, alt: "Common lounge with bean bags and chandelier", caption: "Drop your bags, sink into a bean bag, and make yourself at home." },
  { src: gallery5, alt: "Shared kitchen with wooden countertop", caption: "A fully equipped kitchen where you can cook up a feast or just brew a coffee." },
  { src: gallery6, alt: "Bunk beds with privacy curtains and lockers", caption: "Numbered bunks, privacy curtains, and your own lock. Sleep easy." },
  { src: gallery7, alt: "Outdoor garden at night with wooden spool tables", caption: "String lights, spool tables, and cold Elbar beer under the stars." },
  { src: gallery8, alt: "Garden entrance at night with coloured lights and red fence", caption: "Step through the gate. The night is just getting started." },
  { src: gallery9, alt: "Outdoor seating area with spool tables and Elbar umbrella", caption: "Pallet seats, candles on the table, and nowhere else to be." },
  { src: gallery10, alt: "Terrace with TV, yellow tyre stools and pallet benches", caption: "TV on the wall, tyres for seats. Comfort on our own terms." },
  { src: gallery11, alt: "Dorm room with wooden bunk beds and teal accent wall", caption: "Wooden bunks, warm rugs, and a room that actually feels lived in." },
];
const MAP_EMBED =
  "https://www.google.com/maps?q=41.3343197,19.8154374&z=16&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=41.3343197,19.8154374";

const TITLE = "The Bearded Dad Hostel | Family-Run Hostel in Tirana, Albania";
const DESCRIPTION =
  "A family home turned social hostel in central Tirana. Rated 9.4 Superb on Hostelworld. Free breakfast, free bikes, nightly family dinners, and a dog named Nesha. Steps from Skanderbeg Square.";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "The Bearded Dad Hostel",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+355695539156",
  email: "beardeddadhostel@gmail.com",
  image: `${SITE_URL}/og-image.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rruga Hamid Shijaku, Vila 13",
    addressLocality: "Tirana",
    addressCountry: "AL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.3343197,
    longitude: 19.8154374,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.4",
    bestRating: "10",
    worstRating: "1",
    reviewCount: "674",
  },
  priceRange: "ALL 1,710–2,081 per bed per night",
  checkinTime: "13:00",
  checkoutTime: "11:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Breakfast", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Bicycles", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Security Lockers", value: true },
    { "@type": "LocationFeatureSpecification", name: "Airport Transfer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Luggage Storage", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden & Fire Pit", value: true },
  ],
  sameAs: [
    BOOK_URL,
    "https://www.booking.com/searchresults.html?ss=The+Bearded+Dad+Hostel+Tirana",
  ],
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lexi" },
      reviewBody:
        "The best hostel I've ever stayed in. It's so social and feels like home! I would recommend it to anyone and would definitely be back when I'm in Tirana.",
      reviewRating: { "@type": "Rating", ratingValue: "10", bestRating: "10" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mariam" },
      reviewBody:
        "This one felt like a hotel omg. The staff were friendly and kind. It was lively with events happening every day. Thank you guys, definitely returning!",
      reviewRating: { "@type": "Rating", ratingValue: "10", bestRating: "10" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "hostel Tirana, Albania hostel, budget accommodation Tirana, Skanderbeg Square hostel, best hostel Albania, backpacker Tirana, family-run hostel" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "The Bearded Dad Hostel" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "The Bearded Dad Hostel – Tirana, Albania" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og-image.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "The Bearded Dad Hostel garden entrance at night, Tirana Albania" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Bearded Dad Hostel – Tirana, Albania" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.webp` },
      { name: "twitter:image:alt", content: "The Bearded Dad Hostel garden entrance at night, Tirana Albania" },
      // Geo / local SEO
      { name: "geo.region", content: "AL-11" },
      { name: "geo.placename", content: "Tirana, Albania" },
      { name: "geo.position", content: "41.3343197;19.8154374" },
      { name: "ICBM", content: "41.3343197, 19.8154374" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      // Preload the hero image — it's the LCP element on every visit
      { rel: "preload", as: "image", href: gallery8 },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaOrg),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

const amenities = [
  { icon: Coffee, title: "Free breakfast daily", text: "Continental, included every morning." },
  { icon: Bike, title: "Free bicycles", text: "Explore Tirana like a local." },
  { icon: Lock, title: "Free security lockers", text: "In every dorm room." },
  { icon: MapIcon, title: "Free city tour", text: "Walk the city with the team." },
  { icon: Luggage, title: "Free luggage storage", text: "Before check-in, after check-out." },
  { icon: Bus, title: "Airport transfers", text: "Available on request." },
  { icon: Flame, title: "Garden & fire pit", text: "Where the evenings happen." },
  { icon: Sun, title: "Big patio + balcony", text: "Huge balcony for slow mornings." },
  { icon: Wine, title: "Bar and terrace", text: "Cheap drinks, good company." },
  { icon: Wifi, title: "Free Wi-Fi throughout", text: "Works in every room." },
  { icon: ParkingCircle, title: "Bicycle parking", text: "Bring your own wheels." },
  { icon: Car, title: "Car hire available", text: "For trips beyond the city." },
  { icon: Sofa, title: "Indoor lounge areas", text: "Sofas, books, board games." },
  { icon: Mic2, title: "Karaoke", text: "It gets loud. Sorry, neighbours." },
  { icon: Trees, title: "3rd floor lounge", text: "Lounge and veranda up top." },
];

const events = [
  { icon: Utensils, title: "Family Dinner", text: "Nightly · €7. Everyone at one long table." },
  { icon: Beer, title: "BBQ and Beers", text: "Grill fired up in the garden." },
  { icon: Martini, title: "Bar / Pub Crawl", text: "Tirana's nightlife, with locals leading." },
  { icon: Mountain, title: "Bovilla Lake Hiking Tour", text: "Day trip to the turquoise lake." },
  { icon: Ship, title: "Self-Guided Boat & Hiking", text: "Into the Albanian Alps." },
  { icon: Mic2, title: "Karaoke nights", text: "No talent required." },
  { icon: MapIcon, title: "Free City Tour", text: "Get your bearings on day one." },
];

const reviews = [
  {
    quote:
      "Modern, clean rooms and great location. Breakfast each morning was a 12/10!",
    name: "Anonymous",
    meta: "Female 31-40 · Australia",
  },
  {
    quote:
      "The best hostel I've ever stayed in. It's so social and feels like home! I would recommend it to anyone and would definitely be back when I'm in Tirana.",
    name: "Lexi",
    meta: "Female 18-24 · Australia",
  },
  {
    quote:
      "This one felt like a hotel omg. The staff were friendly and kind. It was lively with events happening every day. Thank you guys, definitely returning!",
    name: "Mariam",
    meta: "Female 25-30 · Egypt",
  },
];

const rooms = [
  {
    name: "Standard 8-Bed Mixed Dorm",
    location: "Main building",
    capacity: "Sleeps 8",
    type: "Mixed dorm",
    price: "ALL 1,710",
    badge: null as string | null,
    features: ["Air conditioning", "Security lockers", "Charging points", "Shared bathroom", "Kitchen access"],
  },
  {
    name: "Standard 8-Bed Mixed Dorm",
    location: "Annex · 20 m away",
    capacity: "Sleeps 8",
    type: "Mixed dorm",
    price: "ALL 1,710",
    badge: null as string | null,
    features: ["Air conditioning", "Security lockers", "Charging points", "Shared bathroom", "Kitchen access"],
  },
  {
    name: "Standard 6-Bed Mixed Dorm",
    location: "Main building",
    capacity: "Sleeps 6",
    type: "Mixed dorm",
    price: "ALL 1,895",
    badge: null as string | null,
    features: ["Air conditioning", "Security lockers", "Shared bathroom", "Kitchen access"],
  },
  {
    name: "Deluxe 5-Bed Mixed Dorm",
    location: "Private villa · 100 m away",
    capacity: "Sleeps 5",
    type: "3 singles + 2 bunks",
    price: "ALL 1,988",
    badge: "Ensuite" as string | null,
    features: ["Private en-suite bathroom", "Fitted kitchen", "Security lockers", "Air conditioning"],
  },
  {
    name: "Deluxe 6-Bed Female Dorm",
    location: "Private villa · 100 m away",
    capacity: "Sleeps 6",
    type: "6 bunk beds",
    price: "ALL 2,081",
    badge: "Female Only" as string | null,
    features: ["Private en-suite bathroom", "Fitted kitchen", "Security lockers", "Air conditioning"],
  },
];

const faqs = [
  {
    q: "What are the check-in hours?",
    a: "Check-in is from 12:00 to 00:00. Late arrivals after 01:30 with prior notice carry a €5 (500 lek) charge. Arriving after 01:00 without notifying us in advance may incur additional fees.",
  },
  { q: "When is check-out?", a: "Check-out is before 11:00. Reception is open 08:00 to 01:00 if you need assistance." },
  {
    q: "What is the cancellation policy?",
    a: "Free cancellation up to 1 day before arrival. A late cancellation or no-show will be charged the full price of your stay.",
  },
  {
    q: "How can I pay?",
    a: "Payment is made upon arrival, by cash or card. Taxes are not included in the listed room rates.",
  },
  { q: "Is breakfast included?", a: "Yes, a free breakfast is included with every stay, every day." },
  { q: "Is there a minimum age?", a: "Yes, guests must be at least 18 years old." },
  {
    q: "Is smoking allowed?",
    a: "The hostel is a non-smoking facility. Please smoke only in designated outdoor areas.",
  },
  {
    q: "Are pets allowed?",
    a: "No outside pets are allowed. Nesha, our resident hostel dog, already has the place covered.",
  },
];

const thingsToDo = [
  {
    icon: MapPin,
    title: "Skanderbeg Square",
    distance: "5 min walk",
    text: "The city's grand central plaza. Start every day here. National History Museum, Et'hem Bey Mosque, and the best people-watching in Albania.",
  },
  {
    icon: Coffee,
    title: "Blloku District",
    distance: "15 min walk",
    text: "Once reserved for communist elites, now Tirana's trendiest neighbourhood. Packed with cafes, boutiques, and bars that go until sunrise.",
  },
  {
    icon: Landmark,
    title: "The Pyramid",
    distance: "10 min walk",
    text: "Built to honour Enver Hoxha, now a graffiti-covered ruin and one of the most striking landmarks in the Balkans. Locals climb it at sunset.",
  },
  {
    icon: Mountain,
    title: "Dajti Mountain",
    distance: "30 min by cable car",
    text: "Take the Dajti Ekspres gondola up for sweeping views over Tirana. Pine forests, a restaurant at the top, and cool air in summer.",
  },
  {
    icon: Waves,
    title: "Bovilla Lake",
    distance: "Day trip",
    text: "Turquoise reservoir ringed by mountains an hour from the city. We run a guided hike, so sign up at reception.",
  },
  {
    icon: ShoppingBasket,
    title: "Pazari i Ri (New Bazaar)",
    distance: "10 min walk",
    text: "Tirana's best food market. Fresh produce, local cheeses, byrek, and tavë kosi. The ideal breakfast detour before the city tour.",
  },
];

const scores = [
  ["Staff", "9.7"],
  ["Value", "9.6"],
  ["Atmosphere", "9.5"],
  ["Security", "9.5"],
  ["Location", "9.4"],
  ["Cleanliness", "9.3"],
  ["Facilities", "9.1"],
];

function Wordmark({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2 font-display text-lg font-semibold tracking-tight ${
        tone === "light" ? "text-primary-foreground" : "text-primary"
      }`}
    >
      <span
        className={`grid size-9 place-items-center rounded-full ${
          tone === "light" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <Home className="size-4" />
      </span>
      The Bearded Dad Hostel
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'dark' || (!saved && prefersDark);
    setIsDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ClickSpark sparkColor="#D48B2E" sparkSize={10} sparkRadius={22} sparkCount={8} duration={500}>
    <div id="top" className="bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Wordmark />
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/90"
            >
              <ShinyText text="Book Now" color="rgba(245, 238, 220, 0.9)" shineColor="#ffffff" speed={3} />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-9 place-items-center rounded-full border border-border md:hidden"
            >
              {menuOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={gallery8}
          alt="The Bearded Dad Hostel garden entrance at night with colourful lights and red fence"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2">
          {/* Left — text */}
          <Reveal className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              <Star className="size-3.5" /> Tirana, Albania
            </p>
            <BlurText
              text="A family home. Now yours for a few nights."
              className="font-display text-4xl leading-[1.05] text-primary-foreground sm:text-6xl"
              delay={120}
              direction="bottom"
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              A 2-story villa tucked into a quiet alley off Bulevardi Zogu I, steps from
              Skanderbeg Square but far enough to actually sleep. Breakfast on the patio,
              family dinner at the long table, Nesha the dog somewhere underfoot.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Check availability
              </a>
              <a
                href="#about"
                className="rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Meet the team
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-primary-foreground/85 sm:text-sm">
              {[
                "Rated 9.4",
                "Staff rated 9.7",
                "Free breakfast",
                "Free bikes",
                "Near Skanderbeg Square",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — animated sketch */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              {/* glow ring behind the sketch */}
              <div className="absolute inset-0 scale-110 rounded-full bg-accent/10 blur-3xl" />
              <GardenScene className="relative h-[400px] w-[400px] drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Recognition</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              <ShinyText
                text="Award-Winning Hospitality"
                color="rgba(245, 238, 220, 0.92)"
                shineColor="#D48B2E"
                speed={4}
              />
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/65">
              The Hoscars are Hostelworld's annual celebration of the world's finest hostels,
              voted entirely by travellers. Two years in a row, guests chose The Bearded Dad
              as one of the best in Albania.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* 2025 — Gold */}
            <div className="card-spotlight w-full max-w-xs rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/20">
                <Trophy className="size-8 text-accent" />
              </div>
              <p className="mt-5 font-display text-6xl font-semibold text-accent">#2</p>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">in Albania</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                2025 Hoscar Country Winner
              </p>
              <p className="mt-2 text-xs text-primary-foreground/40">Voted by travellers · Hostelworld</p>
            </div>

            {/* Divider on desktop */}
            <div className="hidden h-36 w-px bg-white/10 sm:block" />

            {/* 2026 — Bronze */}
            <div className="card-spotlight w-full max-w-xs rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/10">
                <Trophy className="size-8 text-accent/70" />
              </div>
              <p className="mt-5 font-display text-6xl font-semibold text-accent/80">#3</p>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">in Albania</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                2026 Hoscar Country Winner
              </p>
              <p className="mt-2 text-xs text-primary-foreground/40">Voted by travellers · Hostelworld</p>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-primary-foreground/35">
            <a
              href="https://global.hostelworld.com/hoscars"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-primary-foreground/60 transition-colors"
            >
              Learn more about the Hoscar Awards
            </a>
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* STORY */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
            <img
              src={storyImg}
              alt="The Bearded Dad Hostel building exterior in Tirana, Albania"
              width={1200}
              height={1408}
              loading="lazy"
              className="mb-6 h-64 w-full rounded-2xl object-cover sm:h-80"
            />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <CountUp to={9.4} from={0} duration={2} className="font-display text-3xl text-accent" />
                <p className="text-xs uppercase tracking-wide opacity-80">Superb</p>
              </div>
              <div>
                <CountUp to={674} from={0} duration={2} className="font-display text-3xl text-accent" />
                <p className="text-xs uppercase tracking-wide opacity-80">Reviews</p>
              </div>
              <div>
                <CountUp to={9.7} from={0} duration={2} className="font-display text-3xl text-accent" />
                <p className="text-xs uppercase tracking-wide opacity-80">Staff</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative flex flex-col justify-center">
            <BeardedDadSketch
              className="pointer-events-none absolute -top-10 right-2 h-28 w-28 -rotate-6 text-primary/70 sm:h-36 sm:w-36"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our story
            </p>
            <h2 className="mt-3 max-w-sm font-display text-3xl sm:text-4xl">
              It was somebody's childhood home first.
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Dolsin and his family took his wife's childhood home, a two-story villa on
                Rruga Hamid Shijaku, and slowly turned it into a hostel. Nothing was gutted.
                The kitchen is still a kitchen, the garden is still the garden, and the family
                is still here.
              </p>
              <p>
                Day to day the house is run with an international volunteer crew led by Jacob,
                travellers who stayed and never quite left. They cook the family dinner, lead
                the city tour and know which bar is worth the walk.
              </p>
              <p>
                And then there's Nesha, the hostel dog, who has strong opinions about the
                garden fire pit and will supervise your breakfast.
              </p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {scores.slice(0, 4).map(([label, val]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-3">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="font-display text-2xl text-primary">{val}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <Reveal className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Amenities
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Everything you need, nothing you don't
              </h2>
            </Reveal>
            <img
              src={illusWaving}
              alt="Illustrated bearded dad waving hello"
              className="hidden h-36 w-36 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-md lg:block"
            />
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={(i % 3) * 60}
                className="rounded-2xl border border-border bg-card transition-colors hover:border-accent"
              >
                <SpotlightCard className="h-full rounded-2xl p-4">
                  <a.icon className="size-5 text-accent" />
                  <h3 className="mt-3 text-base font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              What's on
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              You will not eat dinner alone here.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Something happens every day, which is the whole point. Solo travellers arrive at
              4pm and have a table full of people by 8pm. Come down for the family dinner, stay
              for the karaoke, sign up for the lake hike in the morning.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Book your bed <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <ul className="divide-y divide-primary-foreground/15">
            {events.map((e, i) => (
              <Reveal
                as="li"
                key={e.title}
                delay={i * 40}
                className="flex items-start gap-4 py-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                  <e.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm text-primary-foreground/75">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Guest reviews
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Rated 9.4 Superb by 674 guests
            </h2>
          </div>
          <img
            src={illusLaughing}
            alt="Illustrated bearded dad laughing with sparkles"
            className="hidden h-36 w-36 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-md lg:block"
          />
          <div className="flex gap-2 text-sm font-semibold">
            <span className="rounded-full bg-primary px-4 py-2 text-primary-foreground">
              9.4 Hostelworld
            </span>
            <span className="rounded-full bg-accent px-4 py-2 text-accent-foreground">
              9.7 Staff rating
            </span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <TiltCard key={r.name + i}>
            <Reveal
              as="article"
              delay={i * 80}
              className="flex flex-col rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 font-display text-lg leading-snug">"{r.quote}"</p>
              <footer className="mt-5 border-t border-border pt-4 text-sm">
                <p className="font-semibold">{r.name}</p>
                <p className="text-muted-foreground">{r.meta}</p>
              </footer>
            </Reveal>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <Reveal className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Rooms</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Where you'll sleep</h2>
              <p className="mt-3 text-muted-foreground">
                All rooms include free breakfast, air conditioning, and security lockers.
                Prices are per bed per night, taxes not included.
              </p>
            </Reveal>
            <img
              src={illusCoffee}
              alt="Illustrated bearded dad holding a coffee cup"
              className="hidden h-36 w-36 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-md lg:block"
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r, i) => (
              <Reveal
                key={r.name + i}
                delay={i * 70}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl leading-tight text-primary">{r.name}</h3>
                  {r.badge && (
                    <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                      {r.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{r.location}</p>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-semibold">{r.price}</span>
                  <span className="text-xs text-muted-foreground">/ bed / night</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{r.capacity} · {r.type}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted-foreground">
                  {["Free breakfast", ...r.features].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book this room
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Gallery</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">See the space</h2>
        </Reveal>
        <Gallery images={galleryImages} />
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Location
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              A quiet alley, right in the middle of it all
            </h2>
            <p className="mt-4 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              Rruga Hamid Shijaku, Vila 13, Tirana, Albania
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["Skanderbeg Square", "Within 500 m"],
                ["Bulevardi Zogu I", "Steps away"],
                ["Toptani Shopping Center", "1 km"],
                ["Ring Center", "1.4 km"],
                ["Tirana International Airport", "13 km"],
              ].map(([place, dist]) => (
                <li
                  key={place}
                  className="flex items-center justify-between border-b border-border pb-2 text-sm"
                >
                  <span className="font-medium">{place}</span>
                  <span className="text-muted-foreground">{dist}</span>
                </li>
              ))}
            </ul>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get directions <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={80} className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Map showing The Bearded Dad Hostel in Tirana"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="strict-origin"
              className="h-80 w-full lg:h-full lg:min-h-[26rem]"
            />
          </Reveal>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Explore Tirana</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Things to do near the hostel</h2>
            <p className="mt-3 text-muted-foreground">
              We're in the middle of everything. Here's what's worth your time.
            </p>
          </Reveal>
          <img
            src={illusHappy}
            alt="Illustrated bearded dad laughing with head back"
            className="hidden h-36 w-36 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-md lg:block"
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thingsToDo.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-border bg-card transition-colors hover:border-accent"
            >
              <SpotlightCard className="h-full rounded-2xl p-5">
                <div className="flex items-center justify-between gap-2">
                  <item.icon className="size-5 text-accent" />
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {item.distance}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Good to know</h2>
            <BeardStrokeAnimation className="pointer-events-none absolute -top-6 right-0 h-32 w-32 text-primary/60 sm:h-40 sm:w-40" />
          </Reveal>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  {openFaq === i ? (
                    <Minus className="size-4 shrink-0 text-accent" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-accent" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <Wordmark tone="light" />
            <p className="mt-4 max-w-xs font-display text-xl text-accent">
              A family home in Tirana. Open to the world.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="font-display text-lg">Find us</h3>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-start gap-2 text-primary-foreground/80 hover:text-accent"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>Rruga Hamid Shijaku, Vila 13<br />Tirana, Albania</span>
            </a>
            <a
              href="mailto:beardeddadhostel@gmail.com"
              className="mt-3 flex items-center gap-2 text-primary-foreground/80 hover:text-accent"
            >
              <Mail className="size-4" /> beardeddadhostel@gmail.com
            </a>
            <a
              href="tel:+355695539156"
              className="mt-2 flex items-center gap-2 text-primary-foreground/80 hover:text-accent"
            >
              <Phone className="size-4" /> +355 69 553 9156
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-primary-foreground/80 hover:text-accent"
            >
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </div>
          <div className="text-sm">
            <h3 className="font-display text-lg">Book with us</h3>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-primary-foreground/80 hover:text-accent"
            >
              Hostelworld
            </a>
            <a
              href="https://www.booking.com/searchresults.html?ss=The+Bearded+Dad+Hostel+Tirana"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-primary-foreground/80 hover:text-accent"
            >
              Booking.com
            </a>
            <p className="mt-4 text-primary-foreground/60">
              Reception 08:00 to 01:00 · Check-in from 13:00
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} The Bearded Dad Hostel · Tirana, Albania
        </div>
      </footer>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">WhatsApp us</span>
      </a>
    </div>
    </ClickSpark>
  );
}
