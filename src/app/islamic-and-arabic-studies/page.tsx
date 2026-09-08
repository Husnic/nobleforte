import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Islamic & Arabic Studies",
  description:
    "The Qur'an memorisation pathway and Arabic language levels taught alongside academic progress at NobleForte Academy.",
};

const hifzPathway = ["Juz Amma", "2–5 Juz", "More than 5 Juz", "Complete Hifz"];
const arabicLevels = ["Beginner", "Fair", "Good", "Excellent"];

export default function IslamicStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Islamic & Arabic Studies"
        title="Qur'anic and academic excellence, under one roof."
        subtitle="Every pupil follows a structured pathway in Qur'an recitation, memorisation, and Arabic language, assessed and tracked alongside academic progress."
        image="/images/exterior-mural-quotes.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Qur&apos;an Memorisation Pathway</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl text-navy md:text-4xl">The Hifz track</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hifzPathway.map((stage, i) => (
              <Reveal key={stage} delay={i * 0.06}>
                <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6">
                  <span className="font-serif text-4xl text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-serif text-lg text-navy">{stage}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container-xw grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/creche-islamic-mural.webp"
                alt="Islamic values mural at NobleForte Academy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel>Islamic Values, Every Day</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">
              Faith woven into daily school life.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
              From morning routines to classroom walls, Islamic values sit alongside academics as
              a lived part of the school day — not a subject confined to a single period.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel tone="light">Arabic Language Levels</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Placement and progress</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Pupils who have previously attended a Madrasah are assessed on enrolment and placed
              at the appropriate level; new pupils begin at the Beginner track.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {arabicLevels.map((level, i) => (
              <Reveal key={level} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                  <p className="font-serif text-xl">{level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollCta
        image="/images/wall-i-can-learn.webp"
        title="A structured path in Hifz and Arabic, from day one."
        subtitle="Every pupil is placed, assessed and tracked on their own pace — visit the campus to see the programme in action."
      />
    </>
  );
}
