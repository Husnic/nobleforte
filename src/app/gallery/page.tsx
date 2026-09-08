import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GalleryGrid from "./gallery-grid";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of the NobleForte Academy campus, facilities, and classroom life — organised by category.",
};

const categories = [
  {
    name: "Campus & Facilities",
    images: [
      "/images/exterior-building-aerial.webp",
      "/images/exterior-building-day.webp",
      "/images/exterior-building2.webp",
      "/images/exterior-parking-dusk.webp",
      "/images/boundary-wall.webp",
      "/images/lockers-hall.webp",
      "/images/meeting-room.webp",
      "/images/computer-lab.webp",
    ],
  },
  {
    name: "Classroom Life",
    images: [
      "/images/classroom-desks.webp",
      "/images/classroom-board.webp",
      "/images/classroom-shelves.webp",
      "/images/library.webp",
      "/images/hall-projector.webp",
      "/images/corridor.webp",
    ],
  },
  {
    name: "Creche & Early Years",
    images: [
      "/images/creche-islamic-mural.webp",
      "/images/creche-numbers-mural.webp",
      "/images/creche-days-mural.webp",
      "/images/creche-alphabet-mural.webp",
      "/images/creche-affirmations-stairs.webp",
      "/images/playground.webp",
    ],
  },
  {
    name: "Character & Culture",
    images: [
      "/images/wall-i-can-learn.webp",
      "/images/wall-think-big.webp",
      "/images/wall-vision-poster.webp",
      "/images/wall-formula-success.webp",
      "/images/exterior-mural-quotes.webp",
      "/images/reception-desk.webp",
      "/images/kitchen.webp",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside NobleForte."
        subtitle="Campus, classrooms, and the spaces our pupils learn and grow in every day."
        image="/images/wall-formula-success.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw space-y-20">
          {categories.map((cat, ci) => (
            <div key={cat.name}>
              <Reveal>
                <h2 className="text-2xl text-navy md:text-3xl">{cat.name}</h2>
              </Reveal>
              <GalleryGrid images={cat.images} alt={cat.name} delayBase={ci * 0.02} />
            </div>
          ))}
        </div>
      </section>

      <EnrollCta
        image="/images/library.webp"
        title="Pictures only tell half the story."
        subtitle="Come see NobleForte in person — book a campus tour or start your ward's application today."
      />
    </>
  );
}
