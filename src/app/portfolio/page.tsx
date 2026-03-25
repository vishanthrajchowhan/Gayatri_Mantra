import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaSection } from "@/components/cta-section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse premium interior design projects by Maa Interio including wardrobes, modular kitchens, and living room transformations in Hyderabad.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <AnimatedSection className="mx-auto w-full max-w-5xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="A Curated Collection of Signature Interior Projects"
            description="Explore our completed projects in Hyderabad. Filter by category and tap any project to open the full-screen lightbox preview."
            centered
          />
        </AnimatedSection>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <PortfolioGrid items={projects} showLightbox />
        </div>
      </section>

      <CtaSection
        title="Let your home be the next signature project"
        description="Start your journey with a free consultation and personalized concept direction from our design team."
      />
    </>
  );
}
