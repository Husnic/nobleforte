"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function GalleryGrid({
  images,
  alt,
  delayBase = 0,
}: {
  images: string[];
  alt: string;
  delayBase?: number;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {images.map((src, i) => (
          <Reveal key={src} delay={delayBase + i * 0.03}>
            <button
              type="button"
              onClick={() => setActive(src)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-navy/5"
            >
              <Image
                src={src}
                alt={`${alt} photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10"
          >
            &times;
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image src={active} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}
