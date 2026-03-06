import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define some editorial storytelling data for campaigns based on the updated dropdown options.
// We use 'slug' to dynamically serve the correct page.
const CAMPAIGNS_DATA = {
    "adidas-cabo-rojo": {
        title: "ADIDAS \"CABO ROJO\"",
        client: "ADIDAS ORIGINALS",
        year: "2023",
        role: "PHOTOGRAPHY & CREATIVE DIRECTION",
        heroImage: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=2400&q=85",
        description: "An editorial deep-dive into the bold visual identity of Adidas 'Cabo Rojo'. Capturing the essence of coastal Puerto Rican life intertwined with modern streetwear aesthetics. This campaign focuses on raw environments, aggressive saturation, and stark architectural contrasts.",
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1600&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80",
        ]
    },
    "adidas-mercedes-f1": {
        title: "ADIDAS X MERCEDES-AMG PETRONAS F1",
        client: "ADIDAS & MERCEDES",
        year: "2024",
        role: "MAIN UNIT PHOTOGRAPHER",
        heroImage: "https://images.unsplash.com/photo-1541443131876-44b0360a0f44?w=2400&q=85",
        description: "High velocity meets high fashion. A documentary-style look into the collaborative drop between Adidas and Mercedes-AMG Petronas F1. We shot directly in the paddocks, focusing on the engineering precision reflecting the garment construction.",
        images: [
            "https://images.unsplash.com/photo-1611821064430-0d40221e4f03?w=1600&q=80",
            "https://images.unsplash.com/photo-1599394022918-6c2776530abb?w=1600&q=80",
            "https://images.unsplash.com/photo-1522079092477-8c3af037803a?w=1600&q=80",
        ]
    },
    "crocs-young-miko": {
        title: "CROCS X YOUNG MIKO",
        client: "CROCS",
        year: "2023",
        role: "LEAD PHOTOGRAPHER",
        heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2400&q=85",
        description: "Vibrant, chaotic, and unapologetic. The campaign for Crocs featuring Young Miko was shot in neon-drenched analogue film, highlighting individual expression and cultural disruption.",
        images: [
            "https://images.unsplash.com/photo-1509631179647-0c5000642f53?w=1600&q=80",
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80",
        ]
    },
};

type CampaignSlug = keyof typeof CAMPAIGNS_DATA;

// Fallback data if a specific slug is not found or for Medalla campaigns
const FALLBACK_CAMPAIGN = {
    title: "CAMPAIGN ARCHIVE",
    client: "FAJAR KRISTIONO STUDIO",
    year: "2022-2024",
    role: "PHOTOGRAPHY",
    heroImage: "https://images.unsplash.com/photo-1554046920-90dcac824c06?w=2400&q=85",
    description: "A comprehensive look across the commercial portfolio, focusing on the spaces between the curated shots. Editorial and emotional story-boarding from high-profile commercial clients.",
    images: [
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1600&q=80",
        "https://images.unsplash.com/photo-1620052562594-555e76a6cf76?w=1600&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80",
    ]
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const campaign = CAMPAIGNS_DATA[slug as CampaignSlug] || FALLBACK_CAMPAIGN;
    return {
        title: `${campaign.title} — Campaigns`,
    };
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const campaign = CAMPAIGNS_DATA[slug as CampaignSlug] || FALLBACK_CAMPAIGN;

    return (
        <article className="min-h-screen bg-[var(--color-bg)] pb-20">

            {/* ── MASSIVE HERO SECTION (Editorial Style) ── */}
            <section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
                <Image
                    src={campaign.heroImage}
                    alt={campaign.title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    className="scale-105" // slight scale-in
                />
                {/* Soft dark gradient fade-up for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-black/20 to-transparent" />

                {/* Editorial Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full px-[clamp(1.5rem,4vw,6rem)] pb-[clamp(3rem,6vh,5rem)] flex flex-col items-start z-10">
                    <h1 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] text-white font-light tracking-[-0.02em] max-w-[80vw] mb-4">
                        {campaign.title}
                    </h1>
                </div>
            </section>

            {/* ── PROJECT DETAILS METADATA (Large, sparse typography) ── */}
            <section className="w-full px-[clamp(1.5rem,4vw,6rem)] py-[clamp(4rem,10vh,8rem)]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">

                    {/* Metadata Block */}
                    <div className="md:col-span-4 flex flex-col gap-8 font-sans uppercase tracking-[0.1em] text-[0.75rem] text-white/50">
                        <div>
                            <span className="block mb-2 text-white/30">Client</span>
                            <span className="text-white text-[0.85rem]">{campaign.client}</span>
                        </div>
                        <div>
                            <span className="block mb-2 text-white/30">Role</span>
                            <span className="text-white text-[0.85rem]">{campaign.role}</span>
                        </div>
                        <div>
                            <span className="block mb-2 text-white/30">Year</span>
                            <span className="text-white text-[0.85rem]">{campaign.year}</span>
                        </div>
                    </div>

                    {/* Large Editorial Description */}
                    <div className="md:col-span-8 md:pl-[10%]">
                        <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-light text-white/90 text-left">
                            {campaign.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── STORYTELLING IMAGES (Huge, Edge-to-Edge) ── */}
            <section className="w-full flex flex-col gap-[clamp(4rem,10vh,8rem)] mt-10">
                {campaign.images.map((imgSrc, index) => {
                    // Create a dynamic rhythm: full-bleed, then inset, then full-bleed etc.
                    const isFullBleed = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`relative w-full overflow-hidden ${isFullBleed ? 'px-0 h-[80vh] md:h-[110vh]' : 'px-[clamp(1rem,5vw,10rem)] h-[60vh] md:h-[90vh]'}`}
                        >
                            <Image
                                src={imgSrc}
                                alt={`${campaign.title} image ${index + 1}`}
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                                className={!isFullBleed ? 'px-[clamp(1rem,5vw,10rem)] object-center' : ''}
                            />
                        </div>
                    );
                })}
            </section>

            {/* ── NEXT CAMPAIGN NAVIGATION ── */}
            <section className="w-full px-[clamp(1.5rem,4vw,6rem)] mt-[clamp(8rem,15vh,12rem)] mb-10 text-center">
                <span className="block font-sans text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-6">Explore More</span>
                <Link
                    href="/campaigns"
                    className="inline-block font-sans text-[clamp(1.5rem,4vw,3rem)] tracking-[0.1em] uppercase font-light border-b-2 border-transparent hover:border-white transition-all duration-300 pb-2 text-white"
                >
                    BACK TO CAMPAIGNS
                </Link>
            </section>

        </article>
    );
}
