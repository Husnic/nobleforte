import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Modern facilities in a serene and secure environment — classrooms, library, mosque, science laboratory and more at NobleForte Academy.",
};

const facilities = [
  { title: "Adequately Secured, Gated Campus", image: "/images/boundary-wall.webp" },
  { title: "ICT Facilities / Computer Laboratory", image: "/images/computer-lab.webp" },
  { title: "Classrooms", image: "/images/classroom-desks.webp" },
  { title: "Library", image: "/images/library.webp" },
  { title: "Science Laboratory", image: "/images/classroom-shelves.webp" },
  { title: "Playground / Sports Field", image: "/images/playground.webp" },
  { title: "Reception & Front Office", image: "/images/reception-desk.webp" },
  { title: "Staff Room & Boardroom", image: "/images/meeting-room.webp" },
  { title: "Pupil Lockers & Storage", image: "/images/lockers-hall.webp" },
  { title: "Corridors & Common Areas", image: "/images/corridor.webp" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Modern facilities, serene and secure."
        subtitle="A campus designed to support both rigorous academics and Islamic formation."
        image="/images/exterior-building2.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal>
            <SectionLabel>On Campus</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl text-navy md:text-4xl">
              Everything a pupil needs to thrive.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="group overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy/5">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-navy">{f.title}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 rounded-2xl border border-navy/10 bg-sky-light/60 p-8">
              <p className="text-sm font-semibold text-navy">Also on campus</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Mosque, sick bay / first-aid room, and dedicated Qur&apos;an memorisation spaces —
                all within the gated campus.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <EnrollCta
        image="/images/exterior-building-day.webp"
        title="A campus built for rigorous, secure learning."
        subtitle="Book a visit to walk the classrooms, library, and grounds before you apply."
      />
    </>
  );
}
