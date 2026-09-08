"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    return `mailto:${siteConfig.emails[0]}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref();
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
            Name
          </label>
          <input
            required
            value={form.name}
            onChange={set("name")}
            className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-sky"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
            Email
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-sky"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
          Phone
        </label>
        <input
          value={form.phone}
          onChange={set("phone")}
          className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-sky"
          placeholder="+234 ..."
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-sky"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send Message
      </button>
      <p className="text-xs text-navy/45">
        Submitting opens your email app with this message pre-filled to {siteConfig.emails[0]}.
      </p>
    </form>
  );
}
