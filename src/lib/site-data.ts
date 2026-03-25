export type Service = {
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
};

export type Project = {
  id: number;
  title: string;
  category: "Wardrobes" | "Kitchens" | "Living Rooms";
  location: string;
  image: string;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
  {
    title: "Modular Wardrobes (Cupboards)",
    shortDescription:
      "Elegant storage systems tailored for modern apartments, villas, and independent homes.",
    description:
      "From sliding wardrobes to walk-in concepts, we craft premium cupboard solutions that maximize space while preserving visual harmony with your bedroom interiors.",
    benefits: [
      "Optimized storage with soft-close fittings",
      "Moisture-resistant materials for long life",
      "Custom finishes in matte, gloss, veneer, and glass",
    ],
  },
  {
    title: "Modular Kitchens",
    shortDescription:
      "Luxury kitchen layouts engineered for functionality, safety, and effortless movement.",
    description:
      "We design modular kitchens with a balance of ergonomic planning and premium aesthetics, including island kitchens, U-shaped layouts, and compact urban solutions.",
    benefits: [
      "Smart zoning for cooking, cleaning, and storage",
      "Premium hardware and durable countertops",
      "Design options from minimalist to contemporary luxury",
    ],
  },
  {
    title: "Full Home Interiors",
    shortDescription:
      "End-to-end interior execution for complete apartments, villas, and duplex homes.",
    description:
      "Our team handles every interior touchpoint from planning to handover, ensuring your entire home follows one cohesive design story with premium detailing.",
    benefits: [
      "One-point coordination from design to execution",
      "Theme-driven interiors for all rooms",
      "Transparent timelines and stage-wise progress",
    ],
  },
  {
    title: "TV Units & Living Room Design",
    shortDescription:
      "Statement entertainment walls and refined living spaces for premium homes.",
    description:
      "We design TV units that blend storage, display, and lighting into a sophisticated focal point that elevates your living room experience.",
    benefits: [
      "Bespoke media walls with hidden wiring",
      "Integrated display shelving and accent lighting",
      "Balanced aesthetics for compact and large spaces",
    ],
  },
  {
    title: "False Ceiling & Lighting",
    shortDescription:
      "Layered lighting plans and elegant ceiling concepts to set the right mood.",
    description:
      "Our false ceiling designs create depth, hide services cleanly, and introduce ambient, task, and feature lighting for a polished premium ambience.",
    benefits: [
      "Improved visual comfort and lighting control",
      "Cleaner, elevated spatial character",
      "Energy-efficient and future-ready lighting plans",
    ],
  },
  {
    title: "Custom Furniture",
    shortDescription:
      "Made-to-measure furniture crafted for your lifestyle and room dimensions.",
    description:
      "From dining sets to study units and bedroom furniture, we create custom pieces that align with your interior language and functional priorities.",
    benefits: [
      "Precision fit for every room",
      "Premium joinery with high-quality finishes",
      "Unique designs not found in mass-market furniture",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Minimal Oak Wardrobe Suite",
    category: "Wardrobes",
    location: "Kokapet, Hyderabad",
    image: "https://images.unsplash.com/photo-1540932064986-7048dd0d33cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Contemporary Matte Kitchen",
    category: "Kitchens",
    location: "Gachibowli, Hyderabad",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Warm Beige Living Lounge",
    category: "Living Rooms",
    location: "Jubilee Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Signature Sliding Wardrobes",
    category: "Wardrobes",
    location: "Kondapur, Hyderabad",
    image: "https://images.unsplash.com/photo-1594725645191-88ec2eeda0be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Villa Island Kitchen",
    category: "Kitchens",
    location: "Narsingi, Hyderabad",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0ecfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Luxury Family Living Hall",
    category: "Living Rooms",
    location: "Banjara Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1616594039964-3a2d97f3f29b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    name: "Shruthi Reddy",
    area: "Financial District, Hyderabad",
    quote:
      "Maa Interio transformed our 3BHK into a premium, practical home. The wardrobe and kitchen detailing are exceptional.",
  },
  {
    name: "Rahul Mehta",
    area: "Tellapur, Hyderabad",
    quote:
      "Their design team understood our lifestyle perfectly. Timely delivery, clean execution, and a truly luxury finish.",
  },
  {
    name: "Arjun & Kavya",
    area: "Manikonda, Hyderabad",
    quote:
      "From false ceiling to custom furniture, every corner feels curated. We constantly get compliments from family and guests.",
  },
];
