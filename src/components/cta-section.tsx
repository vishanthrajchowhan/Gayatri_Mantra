import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description: string;
};

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-gold-200 bg-gradient-to-r from-ink-900 to-ink-700 px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">Let us design your dream home</p>
          <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-sand-100 sm:text-base">{description}</p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
