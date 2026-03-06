import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder data for the project
const PROJECT_DATA = {
    title: "ELENA & ANDREA",
    subtitle: "Villa Balbiano, Como, Italy",
    heroImage:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&auto=format&fit=crop&q=80",
    gallery: [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "133%", // portrait
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "100%", // square
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "133%", // portrait
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "66%", // landscape, extra wide
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "133%", // portrait
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "100%", // square
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "133%", // portrait
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "75%", // landscape
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "133%", // portrait
        },
        {
            id: 10,
            src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "100%", // square
        },
        {
            id: 11,
            src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c5?w=900&auto=format&fit=crop&q=80",
            aspectRatio: "150%", // tall portrait
        },
    ],
};

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // In a real app we would fetch data based on the slug.
    // For now, if someone visits /work/some-project, we show this template.
    if (!slug) {
        notFound();
    }

    return (
        <article className="project-page bg-[var(--color-bg)]">
            {/* ── HERO SECTION ── */}
            <section className="relative w-full h-[85vh] md:h-[100vh]">
                <Image
                    src={PROJECT_DATA.heroImage}
                    alt={PROJECT_DATA.title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-[clamp(3rem,8vh,6rem)] px-4">
                    <h1 className="font-serif text-[clamp(2.5rem,7vw,7rem)] font-light text-white tracking-[0.05em] uppercase leading-none drop-shadow-lg text-center">
                        {PROJECT_DATA.title}
                    </h1>
                    <p className="mt-4 font-sans text-[clamp(0.7rem,1.2vw,0.9rem)] text-white/90 tracking-[0.25em] uppercase text-center drop-shadow-md">
                        {PROJECT_DATA.subtitle}
                    </p>
                </div>
            </section>

            {/* ── PROJECT GALLERY ── */}
            <section className="project-gallery mt-2">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-2 p-2">
                    {PROJECT_DATA.gallery.map((image) => (
                        <div
                            key={image.id}
                            className="relative w-full mb-2 break-inside-avoid overflow-hidden"
                            style={{ paddingBottom: image.aspectRatio }}
                        >
                            <Image
                                src={image.src}
                                alt={`${PROJECT_DATA.title} - Image ${image.id}`}
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                                className="transition-transform duration-1000 hover:scale-[1.03]"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
