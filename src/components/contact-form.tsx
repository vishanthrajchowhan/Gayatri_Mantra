"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const onFieldChange = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const phonePattern = /^[0-9+\-\s]{10,15}$/;

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!phonePattern.test(formData.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (formData.message.trim().length < 12) {
      setError("Please share a little more detail in your message.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Unable to submit your request.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setFormData(initialState);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={submit} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="font-display text-3xl text-ink-900">Book Your Free Consultation</h3>
      <p className="mt-2 text-sm text-ink-600">Tell us about your space. Our design team in Hyderabad will connect with you shortly.</p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink-700">Name</span>
          <input
            type="text"
            value={formData.name}
            onChange={(event) => onFieldChange("name", event.target.value)}
            className="w-full rounded-xl border border-sand-300 px-4 py-3 text-sm outline-none transition focus:border-gold-500"
            placeholder="Your full name"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink-700">Phone</span>
          <input
            type="tel"
            value={formData.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
            className="w-full rounded-xl border border-sand-300 px-4 py-3 text-sm outline-none transition focus:border-gold-500"
            placeholder="Your phone number"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink-700">Message</span>
          <textarea
            value={formData.message}
            onChange={(event) => onFieldChange("message", event.target.value)}
            className="h-36 w-full rounded-xl border border-sand-300 px-4 py-3 text-sm outline-none transition focus:border-gold-500"
            placeholder="Tell us about your project, location, and expected timeline"
            required
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
      {status === "success" && <p className="mt-4 text-sm font-medium text-green-700">Thank you! We will contact you soon.</p>}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold-700 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Send Request"}
      </button>
    </form>
  );
}
