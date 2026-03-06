"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const NAV_ITEMS = [
  {
    label: "Work", href: "/work",
    subItems: [
      { label: "Portraits", href: "/work/portraits" },
      { label: "Commissions", href: "/work/commissions" },
      { label: "Lala", href: "/work/lala" },
      { label: "People", href: "/work/people" },
      { label: "News", href: "/work/news" },
      { label: "Huracán María", href: "/work/huracan-maria" },
    ]
  },
  {
    label: "Campaigns", href: "/campaigns",
    subItems: [
      { label: 'Adidas "Cabo Rojo"', href: "/campaigns/adidas-cabo-rojo" },
      { label: "Adidas x Mercedes-AMG F1", href: "/campaigns/adidas-mercedes-f1" },
      { label: "Crocs x Young Miko", href: "/campaigns/crocs-young-miko" },
      { label: 'Medalla "Tu Medalla Viene"', href: "/campaigns/medalla-tu-medalla-viene" },
      { label: 'Medalla "Verano A Lo Perrre"', href: "/campaigns/medalla-verano-a-lo-perrre" },
      { label: "Fresh Summer 2022", href: "/campaigns/fresh-summer-2022" },
    ]
  },
  {
    label: "Tours", href: "/tours",
    subItems: [
      { label: "Europe 2024", href: "/tours/europe-2024" },
      { label: "Latin America", href: "/tours/latin-america" },
      { label: "US Exclusives", href: "/tours/us-exclusives" },
    ]
  },
  { label: "Series", href: "/series" },
  { label: "Tearsheets", href: "/tearsheets" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

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
          background: "transparent",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* ── Brand ── */}
        <Link
          href="/"
          onClick={closeEntireMenu}
          className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light tracking-[0.12em] text-white uppercase z-[51] hover:opacity-70 transition-opacity duration-300"
        >
          FAJAR KRISTIONO
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="desktop-nav relative flex items-center gap-[clamp(1.5rem,3vw,2.5rem)]">
          {NAV_ITEMS.map((item) => {
            const isRouteActive = pathname.startsWith(item.href);
            const isDropdownOpen = activeDropdown === item.label;

            if (item.subItems) {
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={(e) => toggleDropdown(e, item.label)}
                    className={`nav-link flex items-center gap-1 font-sans text-[0.8rem] font-light tracking-[0.05em] lowercase hover:opacity-100 transition-opacity duration-300 ${isRouteActive || isDropdownOpen ? "text-white opacity-100" : "text-white opacity-50"}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.6rem] mb-[1px] font-light">
                      {isDropdownOpen || isRouteActive ? "x" : "+"}
                    </span>
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-4 bg-transparent p-4 min-w-[200px] flex flex-col gap-3 transition-all duration-300 origin-top-left ${isDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                      }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-sans text-[0.75rem] tracking-[0.05em] font-light lowercase transition-opacity duration-200 hover:opacity-100 drop-shadow-md ${pathname === subItem.href ? "text-white opacity-100" : "text-white opacity-60"
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
                className={`nav-link font-sans text-[0.8rem] font-light tracking-[0.05em] lowercase hover:opacity-100 transition-opacity duration-300 ${pathname === item.href ? "text-white opacity-100" : "text-white opacity-50"}`}
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
            gap: isMenuOpen ? "0px" : "8px",
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
              width: "30px",
              height: "1px",
              background: "white",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isMenuOpen ? "rotate(45deg) translateY(0)" : "rotate(0) translateY(0)",
              transformOrigin: "center",
            }}
          />
          <span
            style={{
              display: "block",
              width: "30px",
              height: "1px",
              background: "white",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            style={{
              display: "block",
              width: "30px",
              height: "1px",
              background: "white",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isMenuOpen ? "rotate(-45deg) translateY(0)" : "rotate(0) translateY(0)",
              transformOrigin: "center",
            }}
          />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div className={`mobile-menu-overlay bg-black ${isMenuOpen ? "open" : ""}`} style={{ overflowY: "auto", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="flex flex-col items-center justify-start w-full min-h-full gap-6">
          {NAV_ITEMS.map((item) => {
            const isRouteActive = pathname.startsWith(item.href);
            const isDropdownOpen = activeDropdown === item.label;

            if (item.subItems) {
              return (
                <div key={item.label} className="w-full flex flex-col items-center">
                  <button
                    onClick={(e) => toggleDropdown(e, item.label)}
                    className={`flex justify-center items-center gap-2 font-sans text-[clamp(1.5rem,5vw,2.5rem)] tracking-[0.05em] lowercase font-light transition-opacity duration-300 ${isRouteActive || isDropdownOpen ? "text-white opacity-100" : "text-white opacity-50"}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[1rem] font-light">{isDropdownOpen || isRouteActive ? "x" : "+"}</span>
                  </button>

                  {/* Mobile Accordion */}
                  <div
                    className={`flex flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? "max-h-[600px] mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
                      }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={closeEntireMenu}
                        className={`font-sans text-[1rem] text-center tracking-[0.05em] lowercase font-light transition-opacity duration-200 ${pathname === subItem.href ? "text-white opacity-100" : "text-white opacity-40 hover:opacity-100"
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
                className={`font-sans text-[clamp(1.5rem,5vw,2.5rem)] tracking-[0.05em] lowercase font-light transition-opacity duration-300 ${pathname === item.href ? "text-white opacity-100" : "text-white opacity-50 hover:opacity-100"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

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
