"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: 298, suffix: "+", label: "Global clients" },
  { value: 5, suffix: "×", label: "Growth of brand" },
  { value: 16, suffix: "+", label: "Awards won" },
  { value: 97, suffix: "%", label: "Success rate" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;
      numbersRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const obj = { val: 0 };
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              if (el) el.textContent = Math.round(obj.val).toString();
            },
            scrollTrigger: { trigger: sectionRef.current!, start: "top 75%", once: true },
          }
        );
      });
    };
    init();
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <p className="text-grey-mid text-xs tracking-[0.4em] uppercase mb-14 text-center">
          {"// STATS – Fun facts"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="flex items-end justify-center gap-1 mb-3">
                <span
                  ref={(el) => { numbersRef.current[i] = el; }}
                  className="text-6xl md:text-7xl font-display"
                  style={{ color: "#FF0055", textShadow: "0 0 30px rgba(255,0,85,0.5)" }}
                >
                  0
                </span>
                <span className="text-6xl md:text-7xl font-display" style={{ color: "#FF0055" }}>
                  {s.suffix}
                </span>
              </div>
              <p className="text-grey-light text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
