import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maainterio.vercel.app"),
  title: {
    default: "Maa Interio | Premium Interior Design in Hyderabad",
    template: "%s | Maa Interio",
  },
  description:
    "Premium interior design company in Hyderabad specializing in modular wardrobes, kitchens, full home interiors, TV units, false ceilings, and custom furniture.",
  keywords: [
    "interior design Hyderabad",
    "modular kitchens Hyderabad",
    "wardrobe design Hyderabad",
    "home interiors Hyderabad",
    "luxury interior company Hyderabad",
    "Maa Interio",
  ],
  openGraph: {
    title: "Maa Interio",
    description:
      "Transform your home with premium interior solutions in Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-sand-50 text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
