"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  { title: "Nexus Brand Identity", category: "Branding", gradient: "from-pink/30 to-maroon" },
  { title: "Velox Motion Reel", category: "Motion", gradient: "from-blue/30 to-background" },
  { title: "Aura Packaging Suite", category: "Packaging", gradient: "from-yellow/30 to-maroon" },
  { title: "Drift Social Campaign", category: "Social", gradient: "from-green/20 to-background" },
  { title: "Matrix Web Redesign", category: "Web", gradient: "from-blue/20 to-pink/10" },
];

const partners = ["NEXUS", "VELOX", "AURA", "DRIFT", "MATRIX", "ORBIS", "ZENITH", "NOVA"];

export default function LatestPortfolio() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + portfolioItems.length) % portfolioItems.length);
  const next = () => setActive((a) => (a + 1) % portfolioItems.length);

  return (
    <section className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <h2 className="text-5xl md:text-7xl font-display uppercase">
            <span className="text-white">Latest </span>
            <span className="text-pink">Portfolio</span>
          </h2>
          <p className="text-grey-mid text-sm max-w-xs leading-relaxed">
            A selection of our most impactful recent projects across branding, motion, and digital.
          </p>
        </div>

        {/* Partner logos */}
        <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/2">
          <p className="text-grey-mid text-xs tracking-widest uppercase mb-4">Partner brands</p>
          <div className="flex flex-wrap gap-4">
            {partners.map((p) => (
              <span key={p} className="text-white/40 text-sm font-display tracking-widest border border-white/10 px-4 py-2 rounded-lg">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`h-80 rounded-2xl bg-gradient-to-br ${portfolioItems[active].gradient} relative overflow-hidden flex items-end p-8`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10">
                  <p className="text-grey-mid text-xs uppercase tracking-widest mb-2">{portfolioItems[active].category}</p>
                  <h3 className="text-white text-3xl font-display uppercase">{portfolioItems[active].title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-3">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-colors">
                ←
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-colors">
                →
              </button>
            </div>
            <div className="flex gap-2">
              {portfolioItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-pink w-6" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
