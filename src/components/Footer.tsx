import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white mt-10 pt-[clamp(4rem,8vw,8rem)] pb-[clamp(3rem,6vw,5rem)] px-[clamp(1.5rem,4vw,4rem)]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <h2 className="font-sans text-[clamp(0.75rem,1.2vw,0.9rem)] font-light tracking-[0.3em] uppercase text-white/80 mb-[clamp(2rem,5vw,4rem)] border-b border-white/10 pb-4">
                    PORTFOLIO
                </h2>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 font-sans text-[clamp(0.85rem,1.4vw,1.1rem)] font-light tracking-[0.08em] leading-[2.2]">

                    {/* Column 1 */}
                    <div className="flex flex-col items-start">
                        <span className="text-gray-500 uppercase cursor-default">Elena & Andrea</span>
                        <Link href="/work/lia-armen" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Lia & Armen</Link>
                        <Link href="/work/nazeli-tigran" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Nazeli & Tigran</Link>
                        <Link href="/work/nazeli-raffi" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Nazeli & Raffi</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-start">
                        <Link href="/work/elena-andrea" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Elena & Andrea</Link>
                        <Link href="/work/diana-narek" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Diana & Narek</Link>
                        <Link href="/work/anzhelika-narek" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Anzhelika & Narek</Link>
                        <Link href="/work/nazeli-raffi-2" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Nazeli & Raffi</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-start">
                        <Link href="/work/christina-mattia" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Christina & Mattia</Link>
                        <Link href="/work/diana-tigran" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Diana & Tigran</Link>
                        <Link href="/work/sona-alistair" className="uppercase hover:text-[var(--color-accent)] transition-colors duration-300">Sona & Alistair</Link>

                        <div className="mt-8">
                            <Link
                                href="/work"
                                className="inline-block uppercase tracking-[0.2em] text-[0.75rem] text-white/90 border-b border-white hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300 pb-1"
                            >
                                Explore More
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="mt-[clamp(4rem,8vw,8rem)] text-center">
                    <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-600">
                        &copy; {new Date().getFullYear()} Fajar Kristiono — All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
