import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-100">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-10">
        <div>
          <h3 className="font-display text-3xl text-ink-900">Maa Interio</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
            Premium interior design company in Hyderabad, delivering elegant wardrobes, modular kitchens, full home interiors, and custom furniture.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-700">
            <Link href="/about" className="hover:text-ink-900">About</Link>
            <Link href="/services" className="hover:text-ink-900">Services</Link>
            <Link href="/portfolio" className="hover:text-ink-900">Portfolio</Link>
            <Link href="/contact" className="hover:text-ink-900">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-ink-700">
            <p>Hyderabad, Telangana, India</p>
            <p>Phone: +91 90000 00000</p>
            <p>Email: hello@maainterio.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-200 px-4 py-5 text-center text-xs text-ink-500">
        Copyright {new Date().getFullYear()} Maa Interio. All rights reserved.
      </div>
    </footer>
  );
}
