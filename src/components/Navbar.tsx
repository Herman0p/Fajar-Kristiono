"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const NAV_ITEMS = [
  {
    label: "WORK", href: "/work",
    subItems: [
      { label: "PORTRAITS", href: "/work/portraits" },
      { label: "COMMISSIONS", href: "/work/commissions" },
      { label: "LALA", href: "/work/lala" },
      { label: "PEOPLE", href: "/work/people" },
      { label: "NEWS", href: "/work/news" },
      { label: "HURACÁN MARÍA", href: "/work/huracan-maria" },
    ]
  },
  {
    label: "CAMPAIGNS", href: "/campaigns",
    subItems: [
      { label: 'ADIDAS "CABO ROJO"', href: "/campaigns/adidas-cabo-rojo" },
      { label: "ADIDAS X MERCEDES-AMG PETRONAS F1", href: "/campaigns/adidas-mercedes-f1" },
      { label: "CROCS X YOUNG MIKO", href: "/campaigns/crocs-young-miko" },
      { label: 'MEDALLA "TU MEDALLA VIENE"', href: "/campaigns/medalla-tu-medalla-viene" },
      { label: 'MEDALLA "VERANO A LO PERRRE"', href: "/campaigns/medalla-verano-a-lo-perrre" },
      { label: "FRESH SUMMER 2022", href: "/campaigns/fresh-summer-2022" },
    ]
  },
  {
    label: "TOURS", href: "/tours",
    subItems: [
      { label: "EUROPE 2024", href: "/tours/europe-2024" },
      { label: "LATIN AMERICA", href: "/tours/latin-america" },
      { label: "US EXCLUSIVES", href: "/tours/us-exclusives" },
    ]
  },
  { label: "SERIES", href: "/series" },
  { label: "TEARSHEETS", href: "/tearsheets" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track which dropdown is currently open (by label). null means none.
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  // ── Scroll detection ──
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ──
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Handle outside click for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeEntireMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setActiveDropdown(prev => prev === label ? null : label);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        id="main-navbar"
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 4vw, 4rem)",
          background: isScrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* ── Brand ── */}
        <Link
          href="/"
          onClick={closeEntireMenu}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "var(--color-text)",
            textDecoration: "none",
            textTransform: "uppercase",
            zIndex: 51,
            transition: "opacity 0.3s ease",
          }}
        >
          FAJAR KRISTIONO
        </Link>

        {/* ── Desktop nav links ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
          className="desktop-nav relative"
        >
          {NAV_ITEMS.map((item) => {
            const isRouteActive = pathname.startsWith(item.href);
            const isDropdownOpen = activeDropdown === item.label;

            if (item.subItems) {
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={(e) => toggleDropdown(e, item.label)}
                    className={`nav-link flex items-center gap-1 uppercase tracking-[0.1em] text-[0.7rem] hover:text-[var(--color-accent)] transition-colors duration-300 ${isRouteActive || isDropdownOpen ? "text-white" : "text-white/70"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.6rem] mb-[1px]">
                      {isDropdownOpen || isRouteActive ? "x" : "+"}
                    </span>
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-4 bg-black/95 backdrop-blur-md border border-white/10 p-4 min-w-[240px] flex flex-col gap-3 transition-all duration-300 origin-top-left ${isDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                      }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`text-[0.65rem] tracking-[0.15em] uppercase hover:text-[var(--color-accent)] transition-colors duration-200 ${pathname === subItem.href ? "text-[var(--color-accent)]" : "text-white/80"
                          }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link uppercase tracking-[0.1em] text-[0.7rem] hover:text-[var(--color-accent)] transition-colors duration-300 ${pathname === item.href ? "text-white" : "text-white/70"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hamburger-btn relative"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: isMenuOpen ? "0px" : "6px",
            width: "36px",
            height: "36px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 51,
            padding: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1.5px",
              background: "var(--color-text)",
              borderRadius: "1px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isMenuOpen ? "rotate(45deg) translateY(0)" : "rotate(0) translateY(0)",
              transformOrigin: "center",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1.5px",
              background: "var(--color-text)",
              borderRadius: "1px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1.5px",
              background: "var(--color-text)",
              borderRadius: "1px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isMenuOpen ? "rotate(-45deg) translateY(0)" : "rotate(0) translateY(0)",
              transformOrigin: "center",
            }}
          />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`} style={{ overflowY: "auto", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="flex flex-col items-center justify-start w-full min-h-full gap-6">
          {NAV_ITEMS.map((item) => {
            const isRouteActive = pathname.startsWith(item.href);
            const isDropdownOpen = activeDropdown === item.label;

            if (item.subItems) {
              return (
                <div key={item.label} className="w-full flex flex-col items-center">
                  <button
                    onClick={(e) => toggleDropdown(e, item.label)}
                    className="flex justify-center items-center gap-2 font-sans text-[clamp(1.2rem,4vw,2rem)] tracking-[0.2em] uppercase font-light text-white transition-all duration-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-[1rem] font-medium">{isDropdownOpen || isRouteActive ? "x" : "+"}</span>
                  </button>

                  {/* Mobile Accordion */}
                  <div
                    className={`flex flex-col items-center gap-5 overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? "max-h-[600px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
                      }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={closeEntireMenu}
                        className={`text-[0.7rem] text-center tracking-[0.15em] uppercase transition-colors duration-200 ${pathname === subItem.href ? "text-[var(--color-accent)]" : "text-white/60 hover:text-white"
                          }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeEntireMenu}
                className={`font-sans text-[clamp(1.2rem,4vw,2rem)] tracking-[0.2em] uppercase font-light transition-all duration-300 ${pathname === item.href ? "text-[var(--color-accent)]" : "text-white hover:text-white/80"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Spacer for fixed navbar ── */}
      <div style={{ height: "var(--nav-height)" }} />

      {/* ── Responsive media queries via style tag ── */}
      <style jsx global>{`
        .desktop-nav {
          display: flex !important;
        }
        .hamburger-btn {
          display: none !important;
        }

        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
