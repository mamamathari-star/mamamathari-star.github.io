"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "XOT STUDIO TRANSFORMED OUR ENTIRE BRAND. THE RESULTS WERE BEYOND WHAT WE IMAGINED.",
    name: "Alex Carter",
    role: "CEO, Nexus Co",
    avatar: "AC",
  },
  {
    quote: "WORKING WITH XOT WAS A SEAMLESS EXPERIENCE. THEY DELIVERED PERFECTION ON TIME.",
    name: "Jamie Liu",
    role: "Founder, Velox",
    avatar: "JL",
  },
  {
    quote: "OUR SOCIAL METRICS EXPLODED AFTER THE REBRAND. HIGHLY RECOMMEND THEIR STUDIO.",
    name: "Sara Osei",
    role: "CMO, Aura Labs",
    avatar: "SO",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".test-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    };
    init();
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-grey-mid text-xs tracking-[0.3em] uppercase mb-3">What they say</p>
          <h2 className="text-5xl md:text-7xl font-display uppercase text-white">Our results.</h2>
        </div>
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="test-card opacity-0 rounded-2xl border border-white/10 p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: "rgba(10,0,8,0.8)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 60px rgba(255,0,85,0.08)",
              }}
            >
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,0,85,0.15) 0%, transparent 70%)" }}
              />
              <div className="flex gap-1">
                {Array(5).fill(null).map((_, j) => (
                  <span key={j} className="text-pink text-lg">★</span>
                ))}
              </div>
              <p className="text-white text-sm font-display uppercase leading-relaxed tracking-wide flex-1">{t.quote}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-pink/20 border border-pink/40 flex items-center justify-center text-pink text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-grey-mid text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
