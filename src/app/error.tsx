"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-navy-deep">
      <div className="container-xw flex min-h-[70vh] flex-col items-start justify-center py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Something went wrong
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-medium text-white md:text-6xl">
          We hit a snag.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          An unexpected error occurred while loading this page. Please try again, or head back
          to the homepage.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={() => retry()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <Button href="/" variant="outlineLight">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
