"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/site-data";

type PortfolioGridProps = {
  items: Project[];
  showLightbox?: boolean;
};

const categories = ["All", "Wardrobes", "Kitchens", "Living Rooms"] as const;

export function PortfolioGrid({ items, showLightbox = false }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              activeCategory === category
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-sand-300 bg-white text-ink-700 hover:border-ink-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-sand-100 text-left"
            onClick={() => showLightbox && setSelected(project)}
          >
            <Image
              src={project.image}
              alt={`${project.title} in ${project.location}`}
              width={1200}
              height={900}
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
            <div className="absolute bottom-0 w-full p-5 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-200">{project.category}</p>
              <h3 className="mt-2 font-display text-2xl leading-none">{project.title}</h3>
              <p className="mt-2 text-xs text-sand-100">{project.location}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showLightbox && selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1400}
                height={900}
                className="h-[72vh] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">{selected.category}</p>
                <h4 className="mt-2 font-display text-3xl text-ink-900">{selected.title}</h4>
                <p className="mt-2 text-sm text-ink-600">{selected.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
