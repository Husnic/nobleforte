import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Classes available, how to apply, and required documents for admission into NobleForte Academy.",
};

const classes = [
  "Creche, K.G. & Nursery",
  "Basic Class (Basic 1–5)",
  "Junior Class (JSS 1–2)",
  "Senior Class (SSS 1–2)",
];

const steps = [
  "Take a virtual tour or schedule a visit to the school",
  "Complete the Registration Form (online or in person)",
  "Submit the required documents",
  "Attend an entrance assessment / interview",
  "Receive an admission decision and pay the acceptance fee",
];

const documents = [
  "Completed Registration Form",
  "Two (2) passport photographs",
  "Birth certificate or declaration of age",
  "Previous school report (if applicable)",
  "Transfer letter (if applicable)",
  "Medical / immunisation record (where available)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the NobleForte family."
        subtitle="A forward-thinking, co-educational, faith-based school built on the belief that dignity of character, intellectual strength, and entrepreneurial capacity grow best together."
        image="/images/reception-desk.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Classes Available</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Now admitting</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classes.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="rounded-2xl border border-navy/10 bg-white p-6 text-center">
                  <p className="font-serif text-lg text-navy">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-light/60 py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>How to Apply</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Five simple steps</h2>
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-navy/75">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>Required Documents</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">What to bring</h2>
            <ul className="mt-8 space-y-4">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-navy/75">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <div className="rounded-3xl bg-navy px-8 py-14 text-center md:px-16 md:py-16">
              <h2 className="mx-auto max-w-xl text-3xl text-white md:text-4xl">
                Ready to begin your ward&apos;s journey?
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Apply Online
                </Button>
                <Button href="/contact" variant="outlineLight">
                  Download Registration Form
                </Button>
                <Button href="/gallery" variant="outlineLight">
                  Take a Virtual Tour
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
