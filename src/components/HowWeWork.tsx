"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stages = [
  {
    stage: "Stage 1",
    label: "Kickoff",
    heading: "Discovery & Strategy",
    desc: "We align on your goals, audience, and creative vision through an in-depth brief process.",
    tags: ["Strategy", "Research", "Briefs"],
  },
  {
    stage: "Stage 2",
    label: "Execution",
    heading: "Design & Craft",
    desc: "Our team crafts every visual with precision — from typography to motion to layout.",
    tags: ["Design", "Motion", "Iteration"],
  },
  {
    stage: "Stage 3",
    label: "Handoff",
    heading: "Delivery & Launch",
    desc: "Files delivered in every format you need. Ready to launch, print, or publish.",
    tags: ["Delivery", "Launch", "Support"],
  },
];

export default function HowWeWork() {
  const imgRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".stage-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }
    };
    init();
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Top two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-pink text-xs tracking-[0.3em] uppercase mb-4">• How we work</p>
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight text-white mb-4">
              We simplify the journey<br />
              <span className="text-grey-mid">from design to launch.</span>
            </h2>
            <p className="text-grey-mid text-base leading-relaxed max-w-md">
              Our process is built for clarity and momentum — no endless revisions, no confusion. Just great work, delivered with purpose.
            </p>
          </div>
          <div className="relative" ref={imgRef}>
            <div
              className="w-full h-[480px] rounded-3xl overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #1a0010 0%, #0a0005 50%, #050505 100%)",
                boxShadow: "0 40px 80px rgba(255,0,85,0.2)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎨</div>
                  <p className="text-white/30 text-sm tracking-widest uppercase">Process visual</p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(255,0,85,0.15), transparent)" }}
              />
            </div>
          </div>
        </div>

        {/* Stage cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="stage-card opacity-0 rounded-2xl p-8 relative overflow-hidden border border-white/5 group"
              style={{ background: "linear-gradient(135deg, #1a0010 0%, #050505 100%)" }}
            >
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle, rgba(255,0,85,0.25) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
              />
              <div className="absolute top-4 right-4">
                <span className="text-xs text-pink border border-pink/40 px-2 py-1 rounded-full bg-pink/10 tracking-widest">
                  {s.stage}
                </span>
              </div>
              <div className="text-3xl mb-4">{["🚀", "⚡", "📦"][i]}</div>
              <p className="text-grey-mid text-xs tracking-widest uppercase mb-2">{s.label}</p>
              <h3 className="text-white font-display text-xl uppercase mb-3">{s.heading}</h3>
              <p className="text-grey-mid text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-white/20 text-grey-light px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
