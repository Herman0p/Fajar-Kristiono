"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
    { label: "Work", href: "/work" },
    { label: "Campaigns", href: "/campaigns" },
    { label: "Tours", href: "/tours" },
    { label: "Series", href: "/series" },
    { label: "Tearsheets", href: "/tearsheets" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ── Lock body scroll when mobile menu is open ──
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const closeEntireMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <>
            {/* ── NAVBAR (Strictly floating text) ── */}
            <nav
                id="main-navbar"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    height: "100px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 4rem)",
                    background: "transparent",
                    pointerEvents: "none", // Let clicks pass through empty areas
                }}
            >
                {/* ── Brand (Left) ── */}
                <Link
                    href="/"
                    onClick={closeEntireMenu}
                    className="font-sans text-[0.7rem] md:text-[0.75rem] font-light tracking-[0.05em] text-white lowercase z-[51] pointer-events-auto mix-blend-difference hover:opacity-70 transition-opacity duration-300"
                >
                    fajar kristiono
                </Link>

                {/* ── Menu Action (Right) ── */}
                <div className="flex items-center gap-[clamp(1.5rem,3vw,2.5rem)] z-[51] pointer-events-auto mix-blend-difference">
                    {/* Always-visible thin text toggle, acts as mobile/desktop menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="font-sans text-[0.7rem] md:text-[0.75rem] font-light tracking-[0.05em] text-white lowercase hover:opacity-70 transition-opacity duration-300 bg-transparent border-none cursor-pointer"
                    >
                        {isMenuOpen ? "close" : "menu"}
                    </button>
                </div>
            </nav>

            {/* ── FULL SCREEN OVERLAY MENU ── */}
            <div
                className={`fixed inset-0 z-[49] bg-black bg-opacity-95 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className="flex flex-col items-center justify-center w-full gap-[clamp(1.5rem,3vh,3rem)]">
                    {NAV_ITEMS.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeEntireMenu}
                            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white font-light tracking-wide uppercase transition-all duration-500 hover:text-white/60"
                            style={{
                                opacity: isMenuOpen ? 1 : 0,
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: isMenuOpen ? `${i * 100}ms` : '0ms'
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .mix-blend-difference {
          mix-blend-mode: difference;
        }
      `}</style>
        </>
    );
}
