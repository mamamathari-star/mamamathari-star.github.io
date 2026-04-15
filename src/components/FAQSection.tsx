"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does XOT Studio offer?",
    a: "We offer brand identity, motion design, social media creatives, thumbnail design, and packaging design — everything you need to build a powerful brand.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most branding projects take 2–3 weeks. Smaller projects like thumbnails or social content can be turned around in 24–72 hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients across North America, Europe, the Middle East, and Asia. Communication is fully remote via email and video call.",
  },
  {
    q: "What is your revision policy?",
    a: "All packages include at least 3 rounds of revisions. We iterate until you're fully satisfied with the result.",
  },
  {
    q: "How do I start working with XOT Studio?",
    a: "Simply fill out our contact form or reach out on Fiverr. We'll schedule a discovery call to understand your needs.",
  },
  {
    q: "Do you offer ongoing retainer packages?",
    a: "Yes, we offer monthly retainers for content creation, social media design, and brand maintenance. Get in touch to discuss options.",
  },
  {
    q: "Can I see more examples of your work?",
    a: "Absolutely. Visit our Behance profile or Fiverr page for a full portfolio with case studies and client reviews.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-grey-mid text-xs tracking-[0.3em] uppercase mb-4">Got questions?</p>
          <h2 className="text-5xl md:text-6xl font-display uppercase text-white">FAQ</h2>
        </div>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 text-left group"
              >
                <span className="text-pink/50 text-sm font-display w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-white uppercase text-sm md:text-base font-display tracking-wide group-hover:text-pink transition-colors">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-white/50 text-xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-grey-mid text-sm leading-relaxed pt-4 pl-12 pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
