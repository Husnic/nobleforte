import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import FeatureCard from "@/components/FeatureCard";
import EnrollCta from "@/components/EnrollCta";
import {
  IconMoonStar,
  IconShield,
  IconGlobe,
  IconBook,
  IconSpark,
  IconChip,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The NobleForte story, vision, mission and the belief that dignity of character and strength of ability grow best together.",
};

const whyChoose = [
  { icon: <IconMoonStar />, title: "Qur'anic & academic excellence under one roof" },
  { icon: <IconShield />, title: "Modern facilities in a serene, secure environment" },
  { icon: <IconGlobe />, title: "Trilingual model: English, Arabic and French" },
  { icon: <IconBook />, title: "Experienced, values-driven teaching staff" },
  { icon: <IconSpark />, title: "Entrepreneurship education" },
  { icon: <IconChip />, title: "Adequate security and ICT facilities" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Dignity of character, strength of ability."
        subtitle="The NobleForte story, our vision, our mission, and what sets the school apart."
        image="/images/exterior-building-day.webp"
      />

      <section className="py-24 md:py-32">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">How NobleForte began</h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              We scanned our environment to find a citadel of learning where young Muslims could
              build spiritual awareness, balanced civilization, and academic excellence
              side-by-side — but it proved very difficult to find one, so we decided to jump into
              the arena, and NobleForte Academy is the product.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              NobleForte was founded on a simple belief: that a child&apos;s dignity of character
              and strength of ability grow best when they are built side by side. The school
              brings together a rigorous academic programme, authentic Islamic values, and modern
              facilities to raise well-rounded graduates who are prepared for both this world and
              the next.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/exterior-mural-quotes.webp"
                alt="NobleForte Academy campus wall"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-28">
        <div className="container-xw grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
              <SectionLabel tone="light">Our Vision</SectionLabel>
              <p className="mt-5 font-serif text-2xl leading-snug text-white md:text-3xl">
                To nurture pious changemakers prepared to rule their world.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
              <SectionLabel tone="light">Our Mission</SectionLabel>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                To be a leading trilingual Islamic School distinguished by academic excellence and
                exemplary character, globally recognised for shaping capable, complete, and
                conscientious children who will lead with integrity in every field they enter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/brand/crest-navy.png"
                alt="NobleForte Academy crest"
                fill
                className="object-contain bg-sky-light p-16"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel>The NobleForte Name</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">What&apos;s in the name?</h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              NobleForte fuses two words. &ldquo;Noble&rdquo; signals character, integrity, and
              elevated conduct — a quality attributed to the Prophet Muhammad (SAW), the standard
              the school seeks to emulate. &ldquo;Forte&rdquo; means strength, or a defining area
              of excellence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Together, the name positions the school as a place where dignity of character and
              strength of ability are built side by side.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/10 py-24 md:py-32">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Why Choose Noble Forte</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl text-navy md:text-4xl">
              What sets us apart.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <FeatureCard icon={f.icon} title={f.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollCta
        image="/images/exterior-building2.webp"
        title="Come see the story for yourself."
        subtitle="The best way to understand NobleForte is to walk the campus. Book a visit or start your ward's application today."
      />
    </>
  );
}
