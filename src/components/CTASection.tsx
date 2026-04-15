"use client";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Fiverr", href: "#" },
  { name: "All Links", href: "#" },
];

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-16 bg-background overflow-hidden border-t border-white/5">
      {/* Watermark */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(4rem, 15vw, 12rem)",
          fontFamily: "Impact, Arial Black",
          color: "rgba(255,255,255,0.03)",
          letterSpacing: "0.1em",
          fontWeight: 900,
        }}
      >
        XOTSTUDIO
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display uppercase leading-none mb-0"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            <span className="text-white block">LET&apos;S WORK</span>
            <span className="block" style={{ color: "#FF0055", textShadow: "0 0 60px rgba(255,0,85,0.4)" }}>
              TOGETHER
            </span>
          </motion.h2>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mb-16">
          <motion.a
            href="mailto:hello@xotstudio.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-full border border-white text-white font-display uppercase tracking-widest text-sm hover:border-pink hover:text-pink hover:shadow-[0_0_40px_rgba(255,0,85,0.5)] transition-all duration-300"
          >
            Contact Now
          </motion.a>
        </div>

        {/* Studio info */}
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-7xl font-display uppercase text-white/20 tracking-widest mb-4">
            XOT Studio
          </h3>
          <p className="text-grey-mid text-xs mb-1 tracking-widest uppercase">Creative Agency · Design Studio</p>
          <p className="text-white/30 text-sm">London, UK &amp; Worldwide</p>
        </div>

        <p className="text-center text-grey-mid text-sm mb-12">
          Got a project in mind? We reply within 24 hours. Let&apos;s talk.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex items-center gap-1 text-grey-mid text-sm underline underline-offset-4 hover:text-white transition-colors"
            >
              {s.name}
              <span className="text-xs">↗</span>
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-grey-mid">
          <span>© {new Date().getFullYear()} XOT Studio. All rights reserved.</span>
          <a href="mailto:hello@xotstudio.com" className="hover:text-white transition-colors">
            hello@xotstudio.com
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
