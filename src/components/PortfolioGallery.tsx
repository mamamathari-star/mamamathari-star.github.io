"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Brand Identity", tag: "Branding", gradient: "from-pink/40 to-maroon", height: "h-72", outline: "border-pink" },
  { title: "Motion Reel", tag: "Motion", gradient: "from-blue/30 to-background", height: "h-52", outline: "border-blue" },
  { title: "Packaging Design", tag: "Packaging", gradient: "from-yellow/30 to-background", height: "h-64", outline: "border-yellow" },
  { title: "Social Campaign", tag: "Social", gradient: "from-green/20 to-background", height: "h-56", outline: "border-green" },
  { title: "Web Design", tag: "Web", gradient: "from-pink/30 to-blue/20", height: "h-80", outline: "border-pink" },
  { title: "Logo Suite", tag: "Identity", gradient: "from-yellow/20 to-maroon", height: "h-48", outline: "border-yellow" },
  { title: "Poster Series", tag: "Print", gradient: "from-blue/20 to-pink/20", height: "h-64", outline: "border-blue" },
  { title: "App UI", tag: "Digital", gradient: "from-green/30 to-blue/10", height: "h-52", outline: "border-green" },
];

export default function PortfolioGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".portfolio-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    };
    init();
  }, []);

  return (
    <section id="work" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-grey-mid text-xs tracking-[0.3em] uppercase mb-4">Our work</p>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight">
            <span className="text-white">Designs That You Were </span>
            <span className="text-pink">Dreaming </span>
            <span className="text-white">About</span>
          </h2>
        </div>

        <div ref={sectionRef} className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              className={`portfolio-card break-inside-avoid rounded-2xl border-2 ${p.outline} bg-gradient-to-br ${p.gradient} ${p.height} relative overflow-hidden group cursor-pointer opacity-0`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-grey-mid uppercase tracking-widest">{p.tag}</span>
                <p className="text-white font-display text-lg uppercase">{p.title}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ boxShadow: "inset 0 0 30px rgba(255,0,85,0.2)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
