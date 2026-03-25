import Link from "next/link";

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello Maa Interio, I need a free consultation for my home interiors in Hyderabad."
  );

  return (
    <Link
      href={`https://wa.me/919000000000?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105"
    >
      W
    </Link>
  );
}
