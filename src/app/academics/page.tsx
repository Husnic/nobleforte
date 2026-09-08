import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { IconGlobe, IconSpark } from "@/components/icons";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "The NobleForte class structure, trilingual model, and entrepreneurship education from Creche through Senior Secondary.",
};

const classStructure = [
  { level: "Creche, K.G. & Nursery", note: "Early years foundation" },
  { level: "Basic Class (Basic 1–5)", note: "Primary education" },
  { level: "Junior Class (JSS 1–2)", note: "Junior secondary" },
  { level: "Senior Class (SSS 1–2)", note: "Senior secondary" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A full ladder, from Creche to Senior Secondary."
        subtitle="Combining the Nigerian curriculum with Qur'anic and Arabic instruction and a trilingual language model."
        image="/images/classroom-board.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Class Structure</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">The NobleForte ladder</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classStructure.map((c, i) => (
              <Reveal key={c.level} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    Stage {i + 1}
                  </p>
                  <p className="mt-3 font-serif text-lg text-navy">{c.level}</p>
                  <p className="mt-1 text-sm text-navy/55">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-28">
        <div className="container-xw grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-sky">
              <IconGlobe />
            </div>
            <SectionLabel tone="light">Trilingual Model</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl">English, Arabic &amp; French</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Pupils are instructed in English, Arabic, and French, building fluency for a
              globally competitive future alongside strong grounding in Islamic scholarship.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/creche-alphabet-mural.webp"
                alt="Language learning at NobleForte Academy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/hall-projector.webp"
                alt="Learning facilities at NobleForte Academy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-light text-navy">
              <IconSpark />
            </div>
            <SectionLabel>Entrepreneurship Education</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Skills for the real world</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
              Entrepreneurship is woven into the curriculum from an early stage, reflecting the
              school&apos;s commitment to raising graduates with practical, income-generating, and
              problem-solving skills alongside academic qualifications.
            </p>
          </Reveal>
        </div>
      </section>

      <EnrollCta
        image="/images/classroom-desks.webp"
        title="A full academic ladder, waiting for your ward."
        subtitle="Creche through Senior Secondary, taught in three languages. See how the NobleForte curriculum fits your child."
      />
    </>
  );
}
