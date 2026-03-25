import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { CtaSection } from "@/components/cta-section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { projects, services } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero-overlay relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Luxury Interior Design in Hyderabad
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Transform Your Space with Premium Interiors in Hyderabad
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand-100 sm:text-lg">
              We design and execute bespoke wardrobes, modular kitchens, and complete home interiors crafted around your lifestyle, space, and vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-200"
              >
                View Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Tailored Interior Solutions for Premium Hyderabad Homes"
          description="From compact apartment interiors to expansive villa projects, every detail is designed for beauty, comfort, and durability."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured Portfolio"
            title="Crafted Spaces That Reflect Modern Luxury"
            description="Explore selected wardrobe, kitchen, and living room interiors completed across Hyderabad."
          />
          <Link href="/portfolio" className="hidden text-sm font-semibold text-ink-800 hover:text-gold-700 sm:block">
            See Full Portfolio
          </Link>
        </div>
        <PortfolioGrid items={projects.slice(0, 3)} />
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Homeowners Across Hyderabad"
          description="Our clients value refined design, transparent process, and execution excellence."
        />
        <div className="mt-8">
          <TestimonialsSlider />
        </div>
      </AnimatedSection>

      <CtaSection
        title="Ready to elevate your home with premium interiors?"
        description="Book a free consultation with Gayatri Mantra Interiors and get expert recommendations for your wardrobes, modular kitchen, and complete home interiors."
      />
    </>
  );
}
