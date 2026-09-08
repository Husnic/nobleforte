import Image from "next/image";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <Image
        src="/images/exterior-building-aerial.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
      <div className="container-xw relative flex min-h-[70vh] flex-col justify-end pt-40 pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          404 — Page Not Found
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-medium text-white md:text-5xl">
          This page wandered off campus.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outlineLight">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
