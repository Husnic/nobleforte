import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
      <div className="container-xw relative flex min-h-[60vh] flex-col justify-end pt-40 pb-14 md:min-h-[65vh] md:pb-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-medium text-white md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
