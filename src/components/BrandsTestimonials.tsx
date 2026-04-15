"use client";
import { useEffect, useRef } from "react";

const brandTestimonials = [
  {
    brand: "NEXUS CO",
    author: "Alex Carter",
    role: "CEO",
    quote: "XOT delivered beyond expectations. The brand identity is flawless and our conversion rate doubled.",
  },
  {
    brand: "VELOX",
    author: "Jamie Liu",
    role: "Founder",
    quote: "From first call to final delivery, the process was smooth and the output world-class.",
  },
  {
    brand: "AURA LABS",
    author: "Sara Osei",
    role: "CMO",
    quote: "The packaging design they created for us is getting compliments from distributors worldwide.",
  },
  {
    brand: "DRIFT CO",
    author: "Tariq Malik",
    role: "Director",
    quote: "Our social presence transformed completely. Every piece of content they make goes viral.",
  },
];

export default function BrandsTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current || !trackRef.current) return;
      const cards = trackRef.current.querySelectorAll(".brand-card");
      gsap.fromTo(
        cards,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-grey-mid text-xs tracking-[0.3em] uppercase mb-4">Brand voices</p>
          <h2 className="text-5xl md:text-7xl font-display uppercase">
            <span className="text-white">Trusted by </span>
            <span className="text-pink">International brands</span>
          </h2>
        </div>

        <div ref={trackRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandTestimonials.map((t, i) => (
            <div
              key={i}
              className="brand-card opacity-0 p-6 rounded-2xl border border-white/10 bg-black flex flex-col gap-4 hover:border-pink/30 transition-all hover:shadow-[0_0_30px_rgba(255,0,85,0.1)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-white text-sm tracking-widest">{t.brand}</span>
                <span className="text-pink">★★★★★</span>
              </div>
              <p className="text-white font-semibold text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white text-sm">{t.author}</p>
                <p className="text-grey-mid text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
