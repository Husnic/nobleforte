import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Sports & Co-Curricular",
  description:
    "The full list of sports, clubs and societies on offer at NobleForte Academy — building well-rounded character alongside academic ability.",
};

const sports = ["Football", "Athletics", "Basketball", "Volleyball", "Table Tennis", "Chess"];

const clubs = [
  "Qur'an Memorisation Club",
  "Arabic Language Club",
  "Debate & Public Speaking",
  "Press Club",
  "Science Club",
  "Mathematics Club",
  "ICT & Coding Club",
  "Young Entrepreneurs Club",
  "Arts & Crafts",
  "Creative Writing",
  "Environmental Club",
  "Home Management Skills",
  "Gardening / Agriculture Club",
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports & Co-Curricular"
        title="A sport, a club, a well-rounded child."
        subtitle="Every pupil is encouraged to take up at least one sport and one club each session — part of building well-rounded character alongside academic ability."
        image="/images/playground.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Sports</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">On the field</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {sports.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <span className="inline-flex items-center rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-medium text-navy">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-light/60 py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Clubs & Societies</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Beyond the classroom</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-medium text-navy shadow-sm shadow-navy/5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollCta
        image="/images/playground.webp"
        title="A sport. A club. A well-rounded child."
        subtitle="Every pupil takes up at least one sport and one club each session. Come see the energy on campus for yourself."
      />
    </>
  );
}
