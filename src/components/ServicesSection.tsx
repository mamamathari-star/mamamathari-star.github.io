"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    name: "Brand strategy and identity",
    desc: "Full visual identity systems — logos, typography, colour, brand guidelines.",
  },
  {
    name: "Motion design",
    desc: "Animated content for social, web, broadcast, and presentations.",
  },
  {
    name: "Social media advertisement & poster design",
    desc: "Thumb-stopping creatives built for maximum engagement.",
  },
  {
    name: "Thumbnail design",
    desc: "YouTube and podcast thumbnails designed to convert at high CTR.",
  },
  {
    name: "Packaging design",
    desc: "Premium product packaging from dieline to print-ready artwork.",
  },
];

export default function ServicesSection() {
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!rowsRef.current) return;
      const rows = rowsRef.current.querySelectorAll(".service-row");
      gsap.fromTo(
        rows,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: rowsRef.current, start: "top 75%" },
        }
      );
    };
    init();
  }, []);

  return (
    <section id="services-list" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2
            className="text-[8rem] md:text-[12rem] font-display uppercase leading-none tracking-tight"
            style={{
              color: "#FF0055",
              WebkitTextStroke: "2px #FF0055",
              textShadow: "0 0 40px rgba(255,0,85,0.5)",
            }}
          >
            SERVICES
          </h2>
          <p className="text-grey-mid text-sm max-w-xs leading-relaxed">
            End-to-end creative solutions crafted with precision and strategic intent.
          </p>
        </div>

        {/* Service rows */}
        <div ref={rowsRef} className="divide-y divide-white/10">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-row opacity-0 grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-8 group hover:bg-white/2 transition-colors -mx-6 px-6 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <span className="text-pink/40 text-sm font-display">0{i + 1}</span>
                <h3 className="text-white text-xl md:text-2xl font-display uppercase tracking-wide group-hover:text-pink transition-colors">
                  {s.name}
                </h3>
              </div>
              <p className="text-grey-mid text-sm leading-relaxed md:text-right">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
