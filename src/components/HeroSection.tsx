"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const letters = (word: string) =>
  word.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 14, delay: i * 0.05 }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));

export default function HeroSection() {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
            },
          }
        );
      }
    };
    initGSAP();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
        }}
      />

      {/* Hero text */}
      <div className="relative z-10 text-center select-none">
        <div className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-display leading-none uppercase tracking-tight text-white overflow-hidden">
          {letters("XOT")}
        </div>
        <div className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-display leading-none uppercase tracking-tight overflow-hidden" style={{ color: "#FF0055" }}>
          {letters("STUDIO")}
        </div>
      </div>

      {/* Bottom info row */}
      <div
        ref={infoRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-8 md:px-16 w-full max-w-5xl"
      >
        <div className="flex items-center gap-3 opacity-0">
          <span className="text-green text-xl">📍</span>
          <div>
            <p className="text-white text-sm font-semibold">Based in United Kingdom, London</p>
            <p className="text-grey-mid text-xs">HQ Location</p>
          </div>
        </div>
        <div className="flex items-center gap-3 opacity-0">
          <span className="text-blue text-xl">🌐</span>
          <div>
            <p className="text-white text-sm font-semibold">Available all around worldwide</p>
            <p className="text-grey-mid text-xs">Global reach</p>
          </div>
        </div>
        <div className="flex items-center gap-3 opacity-0">
          <span className="text-yellow text-xl">⭐</span>
          <div>
            <p className="text-white text-sm font-semibold">Creative agency + design studio</p>
            <p className="text-grey-mid text-xs">What we do</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-grey-mid text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-grey-mid/40" />
      </motion.div>
    </section>
  );
}
