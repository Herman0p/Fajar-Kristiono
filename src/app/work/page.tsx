import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work — Fajar Kristiono",
    description: "Portfolio of fashion, portrait, and editorial photography by Fajar Kristiono.",
};

const WORK_GALLERY = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "133%", // portrait
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1620052562594-555e76a6cf76?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "66%", // wide landscape
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "150%", // tall portrait
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "100%", // square
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1509631179647-0c5000642f53?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "133%", // portrait
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "75%", // landscape
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "150%", // tall portrait
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "133%", // portrait
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "66%", // full landscape
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "133%", // portrait
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "100%", // square
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c5?w=1200&auto=format&fit=crop&q=80",
        aspectRatio: "150%", // tall portrait
    },
];

export default function WorkPage() {
    return (
        <article className="min-h-screen bg-[var(--color-bg)]">

            {/* ── Page Header (Optional, visually padding the top) ── */}
            <header className="w-full pt-[clamp(4rem,8vh,6rem)] pb-8 px-4 flex justify-center text-center">
                <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white tracking-[0.05em] uppercase">
                    Selected Portfolio
                </h1>
            </header>

            {/* ── EDGE-TO-EDGE GALLERY ── */}
            <section className="w-full">
                {/* No structural padding to allow edge-to-edge feel. */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-[2rem] md:gap-[4rem] px-[clamp(1rem,4vw,4rem)]">
                    {WORK_GALLERY.map((image) => (
                        <Link
                            key={image.id}
                            href={`/work/project-${image.id}`}
                            className="block relative w-full mb-[2rem] md:mb-[4rem] break-inside-avoid overflow-hidden group cursor-none"
                            style={{ paddingBottom: image.aspectRatio }}
                        >
                            <Image
                                src={image.src}
                                alt={`Portfolio selection ${image.id}`}
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                                className="transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                            />
                            {/* Subtle hover overlay */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </section>

        </article>
    );
}
