"use client";
import { useEffect, useRef } from "react";
import type { gsap as GsapType } from "gsap";

const clients = [
  "NEXUS CO", "VELOX", "AURA LABS", "DRIFT CO", "MATRIX", "ORBIS",
  "ZENITH", "NOVA INC", "APEX", "SOLARIS",
];

export default function ClientsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Store the specific tween so only the slider pauses/resumes
  const tweenRef = useRef<ReturnType<typeof GsapType.to> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const track = trackRef.current;
      if (!track) return;
      const totalWidth = track.scrollWidth / 2;
      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
      const pause = () => tweenRef.current?.pause();
      const resume = () => tweenRef.current?.resume();
      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);
      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
        tweenRef.current?.kill();
      };
    };
    initGSAP();
  }, []);

  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden bg-background border-t border-white/5">
      <div className="text-center mb-12 px-6">
        <p className="text-grey-mid text-xs tracking-[0.3em] uppercase mb-3">Client roster</p>
        <h2 className="text-white text-3xl md:text-4xl font-display uppercase tracking-widest">
          Trusted by 350+ global companies
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-20 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-pink/50 transition-colors"
            >
              <span className="text-white/70 text-sm font-display tracking-widest uppercase">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
