import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import EnrollCta from "@/components/EnrollCta";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/posts";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-navy-deep">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/25" />
        <div className="container-xw relative py-28 md:py-36">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white"
            >
              &larr; Back to Blog
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-white/60 md:text-base">
              {formatDate(post.publishedAt)} &middot; {post.author} &middot; {post.readTime}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
          <Reveal className="prose-nf max-w-2xl">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="mt-10 mb-4 text-2xl text-navy first:mt-0">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="mb-5 text-base leading-relaxed text-navy/70">
                  {block}
                </p>
              )
            )}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-8">
              <Link href="/blog" className="text-sm font-semibold text-navy hover:text-sky">
                &larr; All Posts
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-navy hover:text-sky">
                Have a question? Contact the school &rarr;
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="sticky top-28 rounded-2xl border border-navy/10 bg-sky-light/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                Written by
              </p>
              <p className="mt-2 font-serif text-lg text-navy">{post.author}</p>
              <p className="mt-4 text-sm leading-relaxed text-navy/60">
                Part of the NobleForte communications team, sharing school news, admissions
                updates and community stories.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy/10 bg-sky-light/40 py-20 md:py-24">
          <div className="container-xw">
            <Reveal>
              <h2 className="text-2xl text-navy md:text-3xl">More from the Blog</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-navy group-hover:text-sky">
                      {p.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnrollCta />
    </>
  );
}
