import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { Button } from "./Button";

export default function EnrollCta({
  image = "/images/exterior-building-day.webp",
  eyebrow = "Admissions Open",
  title = "Give your child a place to belong.",
  subtitle = "Now admitting Creche through SSS 2. Take a virtual tour, complete the registration form, and secure your ward's place at NobleForte Academy.",
}: {
  image?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-xw">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1360px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/35" />
            <div className="relative flex min-h-[420px] flex-col justify-center px-8 py-16 md:min-h-[460px] md:px-16 md:py-20">
              <SectionLabel tone="light">{eyebrow}</SectionLabel>
              <h2 className="mt-4 max-w-lg text-3xl text-white md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
  );
}
