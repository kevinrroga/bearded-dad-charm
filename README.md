# Bearded Dad's Home

Build a modern, responsive marketing website for The Bearded Dad Hostel — a warm, family-run social hostel in Tirana, Albania.

BRAND & IDENTITY
- Name: The Bearded Dad Hostel
- Address: Rruga Hamid Shijaku, Vila 13, Tirana, Albania
- Origin story: Owner Dolsin and his family converted his wife's childhood home into a hostel. A genuine family home turned into a place for travelers. That warmth is the entire brand.
- Hostel dog: Nesha — mention her, she's part of the charm
- Vibe: warm, home-like, family atmosphere. Guests say it feels more like a hotel than a hostel, in a good way. Very social, great for solo travelers.
- Rating: 9.4 Superb on Hostelworld (674 reviews), couples rated location 9.7
- Sub-scores: Staff 9.7 / Value 9.6 / Atmosphere 9.5 / Security 9.5 / Location 9.4 / Cleanliness 9.3 / Facilities 9.1

COLOR PALETTE
- The hostel has a warm, homey identity — lean into earthy, inviting tones
- Primary: deep forest green (#2D5016) or warm navy — pick whichever fits better with a "family home" feel
- Background: warm cream/off-white (#F7F3EC)
- Accent: warm amber/mustard (#D48B2E) — feels like a kitchen light at dusk
- Text: dark charcoal (#1E1E1C)
- Keep it warm, lived-in, not corporate

TYPOGRAPHY
- Headings: Playfair Display (serif) — warm, residential, not cold
- Body: Inter — clean, readable

SECTIONS TO BUILD (in order):

1. NAVBAR — sticky, logo left ("The Bearded Dad Hostel" with a small house/beard icon or simple wordmark), nav links (About, Rooms, Events, Location, FAQ), "Book Now" CTA right

2. HERO — full viewport. Warm, inviting headline like "Tirana's most home-like hostel" or "A family home. Now yours for a few nights." Subtext about the 2-story villa in a quiet alley near Bulevardi Zogu I. Two CTAs: "Check availability" (primary) + "Meet the team" (outline). Badge row: Rated 9.4 / Staff rated 9.7 / Free breakfast / Free bikes / Near Skanderbeg Square

3. STORY SECTION — two columns. Left: decorative warm panel with house illustration, year started, rating. Right: Dolsin's story — turned his wife's childhood home into a hostel, family-run, international volunteer staff led by Jacob. Mention Nesha the hostel dog.

4. AMENITIES GRID — "Everything you need, nothing you don't". Cards:
   - Free breakfast daily (continental, included)
   - Free bicycles (explore Tirana like a local)
   - Free security lockers
   - Free city tour
   - Free luggage storage
   - Airport transfers (on request)
   - Garden & outdoor fire pit
   - Big patio + huge balcony
   - Bar and terrace
   - Free Wi-Fi throughout
   - Bicycle parking
   - Car hire available
   - Indoor lounge areas
   - Karaoke
   - 3rd floor lounge & veranda

5. EVENTS SECTION — warm amber/dark background. Two columns. Left: heading about the social atmosphere and events making it easy to meet people. Right: event list with icons:
   - Family Dinner (nightly, €7)
   - BBQ and Beers
   - Bar/Pub Crawl
   - Bovilla Lake Hiking Tour
   - Self-Guided Boat & Hiking (Albanian Alps)
   - Karaoke nights
   - Free City Tour

6. REVIEWS SECTION — three review cards using real guest quotes:
   - "Modern, clean rooms and great location. Breakfast each morning was a 12/10!" — Anonymous, Female 31-40, Australia
   - "The best hostel I've ever stayed in — it's so social and feels like home! I would recommend to anyone and would definitely be back when I'm in Tirana." — Lexi, Female 18-24, Australia
   - "This one felt like a hotel omg. The staff were friendly and kind. It was lively with events happening every day. Thank you guys, definitely returning!" — Mariam, Female 25-30, Egypt
   Show score badges: 9.4 Hostelworld · 9.7 Staff rating

7. ROOMS SECTION — four room cards:
   - Yellow Dorm: up to 8 persons, mixed dorm
   - Purple Dorm: up to 6 persons, mixed dorm
   - Green Dorm: up to 6 persons, mixed dorm
   - Private Room: up to 3 persons (double + single bed)
   All rooms: shared bathrooms (one on each floor), A/C, balcony or terrace access, free breakfast included
   Each card has a "Book this room" button linking to Hostelworld

8. LOCATION SECTION — two columns. Left: address, nearby highlights (Skanderbeg Square within 500m, Bulevardi Zogu I steps away, Ring Center 1.4km, Toptani Shopping 1km, Airport 13km). Right: embedded Google Map centered on 41.3343197, 19.8154374. Include "Get directions" button.

9. FAQ SECTION — accordion style:
   - Check-in: 13:00–00:00. Late check-in after 2AM with prior notice: €5 charge. After 1AM without notice: also charged.
   - Check-out: before 11:00
   - Cancellation: 2 days before arrival. Late cancellation or no-show = first night charged.
   - Payment: cash or card upon arrival. Taxes not included.
   - Breakfast: included daily (continental)
   - Age: minimum 18 years old
   - Pets: not allowed (except Nesha, who lives there)
   - Reception hours: 08:00–01:00

10. FOOTER — dark background. Logo, address, links to Hostelworld and Booking.com, contact: beardeddadhostel@gmail.com, phone: +355 69 553 9156. Tagline: "A family home in Tirana. Open to the world."

TECHNICAL REQUIREMENTS
- React + Tailwind CSS
- Fully responsive, mobile-first
- Smooth scroll between sections
- Subtle scroll-triggered fade-in animations
- All booking buttons link to: https://www.hostelworld.com/hostels/p/313345/the-bearded-dad-hostel/
- Google Maps embed centered on: 41.3343197, 19.8154374
- Reduce vertical spacing between sections — keep sections feeling connected, not floating. Section padding should be moderate, not excessive.
- No lorem ipsum — use all real content above

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a1d6f683-2b48-41f7-a62d-c16fb23fd460).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
