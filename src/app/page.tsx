import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fajar Kristiono — Portfolio",
  description:
    "Fashion and editorial photography by Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
};

// ─────────────────────────────────────────────
// Custom Editorial Gallery (Infinite Loop Format)
// ─────────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Elena & Andrea",
    subtitle: "Villa Balbiano, Como, Italy",
    // Providing highly cinematic large format imagery
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=2400&q=85",
  },
  {
    id: 2,
    title: "Nazeli & Raffi",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=2400&q=85",
  },
  {
    id: 3,
    title: "Sona & Alistair",
    subtitle: "Venice, Italy",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c5?w=2400&q=85",
  },
  {
    id: 4,
    title: "Sonya & Arman",
    subtitle: "Emilia-Romagna, Italy",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=2400&q=85",
  },
];

export default function HomePage() {
  return (
    <article className="bg-black w-full overflow-hidden">

      {/* ── VERTICAL INFINITE SCROLL SECTIONS ── */}
      <div className="w-full h-full flex flex-col snap-y snap-mandatory">
        {GALLERY_ITEMS.map((item, index) => (
          <section
            key={item.id}
            className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden snap-start"
          >
            {/* Background Image (Edge-to-Edge) */}
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ${index === 0 ? "animate-fade-in" : ""}`}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index === 0} // Only prioritize the first image
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="opacity-90 object-center"
              />
              {/* Soft overlay for text legibility */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* Centered Typography */}
            <div className={`relative z-10 flex flex-col items-center text-center px-4 mix-blend-difference ${index === 0 ? "animate-fade-up delay-500" : ""}`}>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] text-white font-light tracking-[0.02em] drop-shadow-lg">
                {item.title}
              </h2>
              <p className="mt-4 font-sans text-[clamp(0.6rem,1vw,0.75rem)] uppercase text-white/80 tracking-[0.3em] drop-shadow-md">
                {item.subtitle}
              </p>
            </div>

            {/* Clickable Overlay to Work Page */}
            <Link
              href={`/work/project-${item.id}`}
              className="absolute inset-0 z-20 cursor-pointer"
              aria-label={`View ${item.title} project`}
            />

          </section>
        ))}
      </div>

    </article>
  );
}
