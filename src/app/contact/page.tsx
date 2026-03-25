import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Maa Interio in Hyderabad for premium wardrobes, modular kitchens, full home interiors, and custom furniture.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr]">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact Us"
            title="Start Your Interior Design Journey in Hyderabad"
            description="Share your requirements, and our team will schedule a consultation tailored to your space and goals."
          />

          <div className="mt-8 space-y-5 rounded-3xl border border-sand-200 bg-sand-100 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Phone</p>
              <p className="mt-1 text-sm text-ink-700">+91 90000 00000</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Email</p>
              <p className="mt-1 text-sm text-ink-700">hello@maainterio.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Location</p>
              <p className="mt-1 text-sm text-ink-700">Hyderabad, Telangana, India</p>
            </div>

            <Link
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#25D366] px-5 py-2 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              Chat on WhatsApp
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-sand-200">
            <iframe
              title="Gayatri Mantra Interiors Hyderabad"
              src="https://www.google.com/maps?q=Hyderabad%2C%20India&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
