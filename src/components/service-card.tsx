"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
    >
      <h3 className="font-display text-3xl text-ink-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-ink-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-gold-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
