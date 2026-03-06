import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fajar Kristiono — Portfolio",
  description:
    "Fashion and editorial photography by Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
};

// ─────────────────────────────────────────────
// Custom Editorial Gallery (High Fashion Focus)
// ─────────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Mariam & Karen",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "133%", // portrait
  },
  {
    id: 2,
    title: "Xhenisha & Erald",
    subtitle: "Villa Balbiano",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "75%", // landscape
  },
  {
    id: 3,
    title: "Nazeli & Raffi",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "133%",
  },
  {
    id: 4,
    title: "Taguhi & Michael",
    subtitle: "Venice, Italy",
    src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "100%", // square
  },
  {
    id: 5,
    title: "Sona & Alistair",
    subtitle: "Lake Como",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c5?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "150%", // tall
  },
  {
    id: 6,
    title: "Sonya & Arman",
    subtitle: "Emilia-Romagna, Italy",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "66%", // wide landscape
  },
];

export default function HomePage() {
  return (
    <article className="min-h-screen bg-black w-full overflow-hidden">

      {/* ── MASSIVE MINIMALIST HERO COVER ── */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center animate-fade-in">

        {/* Very subtle background image edge-to-edge */}
        <Image
          src="https://images.unsplash.com/photo-1563122870-6b0b48a0af09?w=2400&q=85" // Sophisticated dark fashion dummy image
          alt="Campaign Hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-[0.85] object-[center_30%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none" />

        {/* Floating Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
          <span className="font-sans text-[0.6rem] md:text-[0.7rem] tracking-[0.4em] uppercase text-white/60 mb-8 animate-fade-up delay-300">
            Portfolio
          </span>
          <h1 className="font-serif text-[clamp(4.5rem,10vw,10rem)] leading-[0.9] text-white font-light tracking-[-0.03em] animate-fade-up delay-500 drop-shadow-2xl">
            Fajar <br className="md:hidden" /> Kristiono
          </h1>
          <p className="mt-8 font-serif text-[clamp(1.1rem,1.8vw,1.4rem)] italic text-white/80 tracking-wide max-w-lg animate-fade-up delay-700">
            Capturing the quiet between moments.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in delay-1000">
          <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-white/40 mb-3">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── MINIMALIST EDITORIAL GALLERY ── */}
      <section className="w-full bg-black py-[clamp(6rem,12vh,10rem)] px-[clamp(1rem,4vw,6rem)]">
        <div className="columns-1 md:columns-2 gap-[clamp(2rem,4vw,4rem)]">
          {GALLERY_ITEMS.map((item, index) => (
            <Link
              key={item.id}
              href="/work"
              className={`block relative w-full mb-[clamp(2rem,4vw,4rem)] break-inside-avoid overflow-hidden group animate-fade-up ${index % 2 === 0 ? "delay-100" : "delay-300"}`}
              style={{ paddingBottom: item.aspectRatio }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
                className="hover-scale-image"
              />

              {/* Elegant Text Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-[clamp(1.5rem,3vw,3rem)] opacity-0 group-hover:opacity-100 transition-all duration-700">
                <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/70 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">{item.subtitle}</span>
                <span className="font-serif text-[clamp(1.5rem,2vw,2rem)] text-white font-light tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-out">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Subtle Next Section CTA */}
        <div className="w-full text-center mt-[clamp(4rem,8vh,8rem)] animate-fade-up delay-300">
          <Link href="/work" className="font-sans text-[0.7rem] tracking-[0.3em] uppercase text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all duration-500 pb-2">
            View Complete Archives
          </Link>
        </div>
      </section>

    </article>
  );
}
