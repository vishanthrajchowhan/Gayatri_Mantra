import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gayatri Mantra Interiors, a premium interior design company serving homeowners in Hyderabad.",
};

const differentiators = [
  "Premium materials and finish standards",
  "Custom design process tailored to your lifestyle",
  "Dedicated project timelines and proactive communication",
  "In-house execution supervision for quality consistency",
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <AnimatedSection className="mx-auto w-full max-w-5xl">
          <SectionHeading
            eyebrow="About Gayatri Mantra Interiors"
            title="Designing Refined Homes with Purpose, Precision, and Personality"
            description="Based in Hyderabad, we create premium residential interiors that blend aesthetics with daily usability. Our team specializes in wardrobes, modular kitchens, full-home interiors, TV units, false ceilings, and custom furniture."
            centered
          />
        </AnimatedSection>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-2">
          <AnimatedSection className="rounded-3xl border border-sand-200 bg-white p-8 shadow-soft">
            <h2 className="font-display text-4xl text-ink-900">Experience & Expertise</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">
              With a strong focus on premium homes in Hyderabad, Gayatri Mantra Interiors brings deep technical know-how and design sensitivity to every project. We blend practical planning with timeless aesthetics to deliver spaces that feel luxurious and livable.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">
              From concept visualization and material curation to final execution, we follow a detail-first approach to maintain quality and consistency at each stage.
            </p>
          </AnimatedSection>

          <AnimatedSection className="rounded-3xl border border-sand-200 bg-sand-100 p-8 shadow-soft" delay={0.1}>
            <h2 className="font-display text-4xl text-ink-900">Why Choose Us</h2>
            <ul className="mt-5 space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 sm:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection
        title="Build a home interior that reflects your lifestyle"
        description="Speak with our design team and receive a personalized interior roadmap for your apartment or villa in Hyderabad."
      />
    </>
  );
}
