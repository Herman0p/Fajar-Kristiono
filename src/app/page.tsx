import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fajar Kristiono — Portfolio",
  description:
    "Fashion and editorial photography by Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
};

// ─────────────────────────────────────────────
// Gallery data — using curated Unsplash images
// (fashion / editorial / fine-art photography)
// ─────────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Mariam & Karen",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait", // tall
  },
  {
    id: 2,
    title: "Xhenisha & Erald",
    subtitle: "Villa Balbiano, Como, Italy",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Nazeli & Raffi",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    title: "Taguhi & Michael",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "square",
  },
  {
    id: 5,
    title: "Sona & Alistair",
    subtitle: "Venice, Italy",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c5?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    title: "Sonya & Arman",
    subtitle: "Villa Regina, Venice, Italy",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 7,
    title: "Caterina & Ivan",
    subtitle: "Emilia-Romagna, Italy",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    title: "Diana & Arthur",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "square",
  },
  {
    id: 9,
    title: "Natalia & Giorgio",
    subtitle: "Villa Vendri, Verona, Italy",
    src: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 10,
    title: "Lala & Artak",
    subtitle: "Villa Melzi, Bellagio, Italy",
    src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 11,
    title: "Marianna & Robert",
    subtitle: "Yerevan, Armenia",
    src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    title: "Diana & Tigran",
    subtitle: "Lake Como, Italy",
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&auto=format&fit=crop&q=80",
    aspectRatio: "square",
  },
];

// Map aspect ratio names to numeric values for CSS padding trick
const ASPECT_MAP: Record<string, string> = {
  portrait: "133%",   // 3:4
  square: "100%",     // 1:1
  landscape: "72%",   // 4:3 ish
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero intro ── */}
      <section className="home-hero">
        <span className="home-hero-eyebrow">Portfolio</span>
        <h1 className="home-hero-title">Fajar Kristiono</h1>
        <p className="home-hero-subtext">
          Fashion &amp; editorial photography &mdash; capturing light,
          stories, and the quiet between moments.
        </p>
      </section>

      {/* ── Gallery ── */}
      <section className="gallery-section" aria-label="Photography gallery">
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <Link
              key={item.id}
              href="/work"
              className="gallery-item"
              aria-label={`${item.title} — ${item.subtitle}`}
            >
              {/* Aspect-ratio wrapper */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: ASPECT_MAP[item.aspectRatio],
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} — ${item.subtitle}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="gallery-overlay">
                  <p className="gallery-overlay-title">{item.title}</p>
                  <p className="gallery-overlay-subtitle">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Subtle footer divider ── */}
      <div
        style={{
          textAlign: "center",
          padding: "4rem 1rem 3rem",
          borderTop: "1px solid var(--color-border)",
          marginTop: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
          }}
        >
          &copy; {new Date().getFullYear()} Fajar Kristiono &mdash; All Rights Reserved
        </p>
      </div>
    </>
  );
}
