"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D0D]/75 backdrop-blur-xl">
      <div className="px-5 sm:px-12 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 font-[700] text-white hover:text-white/60 transition-colors tracking-[-0.02em] text-[0.9375rem]"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
          Albin Johansson
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              className="nav-link text-sm font-[650] text-white tracking-[-0.01em]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1], delay: 0.05 + i * 0.07 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sm font-[600] text-white/50 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#0D0D0D]/90 backdrop-blur-xl">
          <nav className="px-5 sm:px-12 py-5 flex flex-col gap-5">
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="nav-link text-base font-[650] text-white w-fit"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1], delay: i * 0.06 }}
              >
                {label}
              </motion.a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
