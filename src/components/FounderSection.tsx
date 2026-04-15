"use client";
import { motion } from "framer-motion";

const milestones = [
  { achievement: "350+ clients worldwide", year: "2024" },
  { achievement: "Fiverr featured designer", year: "2023" },
  { achievement: "Fiverr Level 2 seller", year: "2022" },
  { achievement: "1M+ reach through organic exposure", year: "2023" },
];

export default function FounderSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="w-full max-w-md mx-auto h-[540px] rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #1a0010, #0a0008, #050505)",
              boxShadow: "0 0 60px rgba(255,0,85,0.2), 0 0 120px rgba(255,0,85,0.05)",
              border: "1px solid rgba(255,0,85,0.2)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-pink/20 border-2 border-pink/40 mx-auto mb-6 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <p className="text-white/40 text-sm tracking-widest uppercase">Portrait</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-pink text-xs tracking-[0.3em] uppercase mb-4">• Founder</p>
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white leading-tight mb-2">
            Ash Senpai aka Irfan Sadik
          </h2>
          <p className="text-pink text-lg font-display uppercase tracking-widest mb-6">
            CEO & Founder of XOT Studio
          </p>
          <p className="text-grey-mid text-sm leading-relaxed mb-10 max-w-lg">
            XOT Studio was built on the belief that great design is both art and strategy. We don&apos;t just make things look beautiful — we make them work.
          </p>

          {/* Milestones table */}
          <div className="mb-8">
            <p className="text-white text-xs tracking-[0.3em] uppercase mb-4">Proud moments & milestones</p>
            <div className="divide-y divide-white/10">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center justify-between py-4 group">
                  <div className="flex items-center gap-3">
                    <span className="text-pink text-xs">→</span>
                    <span className="text-white text-sm group-hover:text-pink transition-colors">{m.achievement}</span>
                  </div>
                  <span className="text-grey-mid text-xs font-display">{m.year}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-grey-mid text-sm leading-relaxed italic">
            &ldquo;My mission is simple: help brands grow through design that people actually feel.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
