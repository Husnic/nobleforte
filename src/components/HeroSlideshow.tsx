"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSlideshow({
  images,
  interval = 5500,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
          {images.map((img, i) => (
            <button
              key={img}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
