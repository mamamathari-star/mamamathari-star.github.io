"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Work", "Services", "About", "FAQ", "Contact"];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/30 border-b border-white/5">
        {/* Left label */}
        <span className="text-grey-mid text-xs tracking-[0.3em] uppercase font-body">LOCAL/</span>

        {/* Center hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
        </button>

        {/* Right CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center px-5 py-2 rounded-full border border-white text-white text-xs tracking-widest uppercase font-body bg-black hover:border-pink hover:text-pink hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition-all duration-300"
        >
          Contact Now
        </motion.a>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-black/95 border-l border-white/10 z-40 flex flex-col justify-center px-10 gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display text-white hover:text-pink transition-colors uppercase tracking-widest"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 px-5 py-2 rounded-full border border-white text-white text-xs tracking-widest uppercase text-center hover:border-pink hover:text-pink transition-all"
            >
              Contact Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50"
          />
        )}
      </AnimatePresence>
    </>
  );
}
