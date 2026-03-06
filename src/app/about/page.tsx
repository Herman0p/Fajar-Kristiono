import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About — Fajar Kristiono",
    description: "Fashion and editorial photography by Fajar Kristiono.",
};

export default function AboutPage() {
    return (
        <article className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
            {/* ── Main Container ── */}
            <div className="max-w-[1600px] mx-auto pt-[clamp(6rem,12vh,10rem)] pb-[clamp(4rem,8vh,6rem)] px-[clamp(1.5rem,4vw,4rem)] flex flex-col lg:flex-row gap-[clamp(3rem,6vw,8rem)]">

                {/* ── Left Side: Portrait ── */}
                <div className="w-full lg:w-[45%] lg:sticky lg:top-[clamp(6rem,12vh,10rem)] lg:h-[calc(100vh-14rem)] relative overflow-hidden flex-shrink-0">
                    <div className="relative w-full aspect-[3/4] lg:h-full lg:aspect-auto">
                        <Image
                            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1200&auto=format&fit=crop&q=80"
                            alt="Fajar Kristiono - Portrait"
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 45vw"
                            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>

                {/* ── Right Side: Editorial Text ── */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center">

                    <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light tracking-[0.05em] leading-[1.1] mb-[clamp(2rem,4vw,3.5rem)] text-white">
                        Capturing the <br className="hidden md:block" />
                        <span className="italic text-white/80">quiet between moments.</span>
                    </h1>

                    <div className="font-sans text-[clamp(0.9rem,1.2vw,1.05rem)] font-light tracking-[0.05em] leading-[1.8] text-[#cccccc] space-y-6 max-w-[42rem]">
                        <p>
                            I am Fajar Kristiono, a fashion and editorial photographer driven by a deep fascination with human connection, raw emotion, and the subtle interplay of light and shadow.
                        </p>
                        <p>
                            With over a decade behind the lens, I have had the privilege to document intimate celebrations, striking fashion editorials, and grand campaigns. My approach is highly observant and unobtrusive—I strive to create imagery that feels timeless, cinematic, and profoundly honest.
                        </p>
                        <p>
                            To me, a photograph is not just a recorded moment; it is a fragment of a story, a captured feeling that endures long after the day has passed. My goal remains the same: to create art that resonates deeply and authentically.
                        </p>
                    </div>

                    {/* ── Contact / Call to Action ── */}
                    <div className="mt-[clamp(3rem,6vw,5rem)] pt-[clamp(2rem,4vw,3rem)] border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                        <div className="flex flex-col">
                            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">Inquiries</span>
                            <a
                                href="mailto:hello@fajarkristiono.com"
                                className="font-serif text-[clamp(1.2rem,2vw,1.6rem)] italic tracking-[0.05em] text-white border-b border-transparent hover:border-white transition-colors duration-300 pb-1"
                            >
                                hello@fajarkristiono.com
                            </a>
                        </div>

                        <div className="flex flex-col md:items-end">
                            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">Social</span>
                            <div className="flex gap-6">
                                <a href="#" className="font-sans text-[0.75rem] tracking-[0.15em] uppercase text-white hover:text-[var(--color-accent)] transition-colors duration-300">
                                    Instagram
                                </a>
                                <a href="#" className="font-sans text-[0.75rem] tracking-[0.15em] uppercase text-white hover:text-[var(--color-accent)] transition-colors duration-300">
                                    Behance
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </article>
    );
}
