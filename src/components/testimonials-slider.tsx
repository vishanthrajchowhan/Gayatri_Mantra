"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-soft sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">Client Stories</p>
      <div className="mt-6 min-h-[170px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-display text-3xl leading-snug text-ink-900">“{item.quote}”</p>
            <footer className="mt-5 text-sm text-ink-600">
              <span className="font-semibold text-ink-900">{item.name}</span>
              <span> · {item.area}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex gap-2">
        {testimonials.map((testimonial, dotIndex) => (
          <button
            key={testimonial.name}
            type="button"
            className={`h-2.5 rounded-full transition ${
              dotIndex === index ? "w-8 bg-gold-600" : "w-2.5 bg-sand-300"
            }`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
