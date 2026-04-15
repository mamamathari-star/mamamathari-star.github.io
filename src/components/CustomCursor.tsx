"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 120, damping: 18 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 18 });
  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const onEnter = () => {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.borderColor = "#FF0055";
        ringRef.current.style.marginLeft = "-24px";
        ringRef.current.style.marginTop = "-24px";
      }
    };
    const onLeave = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = "28px";
        ringRef.current.style.height = "28px";
        ringRef.current.style.borderColor = "rgba(255,255,255,0.6)";
        ringRef.current.style.marginLeft = "-14px";
        ringRef.current.style.marginTop = "-14px";
      }
    };
    const targets = document.querySelectorAll("a, button, [data-magnetic]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [dotX, dotY]);

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] -ml-1 -mt-1"
      />
      <motion.div
        ref={ringRef}
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-white/60 pointer-events-none z-[9998] transition-all duration-200"
        initial={{ marginLeft: "-14px", marginTop: "-14px" }}
      />
    </>
  );
}
