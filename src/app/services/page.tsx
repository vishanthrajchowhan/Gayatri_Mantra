import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium interior design services in Hyderabad including wardrobes, modular kitchens, full home interiors, and custom furniture.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <AnimatedSection className="mx-auto w-full max-w-5xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Premium Interior Design Services for Modern Hyderabad Homes"
            description="Every service is tailored to your layout, lifestyle, and material preferences for a seamless blend of elegance and functionality."
            centered
          />
        </AnimatedSection>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      <CtaSection
        title="Need a tailored interior plan for your home?"
        description="Get expert guidance on style direction, budget approach, and project timeline for your Hyderabad property."
      />
    </>
  );
}
