"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Gayatri Mantra Interiors Home">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gold-300 to-gold-600" />
          <div>
            <p className="font-display text-2xl leading-none text-ink-900">Gayatri Mantra</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink-500">Interiors</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition ${
                  active ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700 lg:inline-block"
          >
            Get Free Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle Menu"
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-sand-200 bg-sand-100/95 px-4 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-sand-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-ink-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
