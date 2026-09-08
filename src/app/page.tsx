import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import FeatureCard from "@/components/FeatureCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import EnrollCta from "@/components/EnrollCta";
import {
  IconBook,
  IconMoonStar,
  IconGlobe,
  IconShield,
  IconSpark,
  IconChip,
  IconArrowRight,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/posts";

const heroImages = [
  "/images/exterior-building-aerial.webp",
  "/images/exterior-building-day.webp",
  "/images/classroom-board.webp",
  "/images/playground.webp",
];

const whyChoose = [
  { icon: <IconMoonStar />, title: "Qur'anic & Academic Excellence", description: "Both worlds, under one roof — rigorous scholarship and rigorous scripture." },
  { icon: <IconShield />, title: "Modern & Secure Campus", description: "A gated, serene environment purpose-built for learning." },
  { icon: <IconGlobe />, title: "Trilingual Model", description: "Fluency in English, Arabic and French from an early age." },
  { icon: <IconBook />, title: "Values-Driven Teaching Staff", description: "Experienced educators raising well-rounded, principled children." },
  { icon: <IconSpark />, title: "Entrepreneurship Education", description: "Practical, income-generating skills woven into the curriculum." },
  { icon: <IconChip />, title: "Security & ICT Facilities", description: "Adequate security paired with modern computer labs." },
];

const highlights = [
  "Now Admitting: Creche – JSS 1–2 – SSS 1–2",
  "Trilingual Model: English, Arabic & French",
  "Qur'anic and Academic Excellence Under One Roof",
];

const stats = [
  { value: "3", label: "Languages taught: English, Arabic & French" },
  { value: "4", label: "Class stages, Creche through Senior Secondary" },
  { value: "19", label: "Sports, clubs & societies to choose from" },
  { value: "4", label: "Qur'an memorisation stages, Juz Amma to Complete Hifz" },
];

const campusLife = [
  { image: "/images/exterior-building-day.webp", label: "Campus" },
  { image: "/images/library.webp", label: "Library" },
  { image: "/images/playground.webp", label: "Playground" },
  { image: "/images/creche-days-mural.webp", label: "Early Years" },
  { image: "/images/classroom-desks.webp", label: "Classrooms" },
];

const blogPreview = posts.slice(0, 3);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <HeroSlideshow images={heroImages} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-transparent" />
        <div className="container-xw relative flex min-h-[85vh] flex-col justify-end pt-48 pb-24 md:min-h-[90vh] md:pb-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Creche &middot; Basic &middot; Junior &middot; Senior Secondary
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-medium text-white md:text-6xl">
              NobleForte Academy
            </h1>
            <p className="mt-3 max-w-2xl font-serif text-xl italic text-sky md:text-2xl">
              Distinction &amp; Dignity
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              A forward-thinking, co-educational, faith-based school built on the belief that
              dignity of character and strength of ability grow best together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/admissions" variant="primary">
                Apply Now
              </Button>
              <Button href="/gallery" variant="outlineLight">
                Take a Virtual Tour
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights strip */}
      <div className="bg-navy">
        <div className="container-xw flex flex-col flex-wrap items-start gap-x-10 gap-y-3 py-4 text-sm text-white/85 sm:flex-row sm:items-center">
          {highlights.map((h, i) => (
            <span key={h} className="flex items-center gap-3">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />}
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose NobleForte */}
      <section className="py-24 md:py-32">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>Why Choose NobleForte</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl text-navy md:text-4xl">
              Character and capability, built side by side.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-sky"
            >
              More about our story
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Campus Life mosaic */}
      <section className="py-6 md:py-10">
        <div className="container-xw">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Campus Life</SectionLabel>
              <h2 className="mt-4 text-3xl text-navy md:text-4xl">A place built for growing up.</h2>
            </div>
            <Link href="/gallery" className="text-sm font-semibold text-navy hover:text-sky">
              View full gallery
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            <Reveal className="relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto">
              <Image
                src={campusLife[0].image}
                alt={campusLife[0].label}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-navy-deep/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {campusLife[0].label}
              </span>
            </Reveal>
            {campusLife.slice(1).map((c, i) => (
              <Reveal key={c.image} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-navy-deep/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {c.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24 md:py-32">
        <div className="container-xw grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/exterior-mural-quotes.webp"
                alt="NobleForte Academy campus"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel>NobleForte at a Glance</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Built for the whole child.</h2>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-4xl text-navy md:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm leading-snug text-navy/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Admissions callout */}
      <section className="py-6">
        <div className="container-xw">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center md:px-16 md:py-20">
              <div className="bg-grain pointer-events-none absolute inset-0 text-white/[0.04]" />
              <div className="relative">
                <SectionLabel tone="light">Admissions Open</SectionLabel>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-white md:text-4xl">
                  Now admitting Creche through SSS 2 for the new session.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-base">
                  Take a virtual tour, complete the registration form, and secure your ward&apos;s
                  place at NobleForte Academy.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="/admissions" variant="primary">
                    Apply Now
                  </Button>
                  <Button href="/contact" variant="outlineLight">
                    Talk to Admissions
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="py-24 md:py-32">
        <div className="container-xw">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>School News</SectionLabel>
              <h2 className="mt-4 text-3xl text-navy md:text-4xl">Latest from the Blog</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-navy hover:text-sky">
              View all posts
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPreview.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {post.category} &middot; {formatDate(post.publishedAt)}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-navy group-hover:text-sky">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollCta
        image="/images/exterior-building-aerial.webp"
        title="Your child's next chapter starts here."
        subtitle="From Creche to Senior Secondary, NobleForte builds dignity of character and strength of ability side by side. Book a visit and see the campus for yourself."
      />

      {/* Contact strip */}
      <section className="border-t border-navy/10 bg-sky-light/60 py-14">
        <div className="container-xw flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-navy">Visit the Campus</p>
            <p className="mt-1 max-w-md text-sm text-navy/60">{siteConfig.address}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
              variant="dark"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
