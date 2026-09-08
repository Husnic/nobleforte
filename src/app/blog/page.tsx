import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { categories, posts } from "@/lib/posts";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Blog / News & Events",
  description:
    "School news, admissions updates, and community content from NobleForte Academy.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog / News & Events"
        title="School life, as it happens."
        subtitle="Ongoing school news, admissions updates, and community content."
        image="/images/wall-think-big.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw">
          <Reveal className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-navy/15 px-4 py-1.5 text-xs font-medium text-navy/60"
              >
                {c}
              </span>
            ))}
          </Reveal>

          {/* Featured post */}
          <Reveal delay={0.06} className="mt-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-navy/10 bg-white lg:grid-cols-2"
            >
              <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {featured.category} &middot; {formatDate(featured.publishedAt)}
                </p>
                <h2 className="mt-3 text-2xl font-medium text-navy md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/60 md:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-sky">
                  Read the story
                  <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {post.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-navy group-hover:text-sky">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
                    <p className="mt-4 text-xs font-medium text-navy/40">
                      {formatDate(post.publishedAt)} &middot; {post.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrollCta />
    </>
  );
}
