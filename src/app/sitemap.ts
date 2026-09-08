import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/posts";

const staticRoutes = [
  { path: "/", priority: 1, freq: "weekly" as const },
  { path: "/about", priority: 0.8, freq: "monthly" as const },
  { path: "/admissions", priority: 0.9, freq: "monthly" as const },
  { path: "/academics", priority: 0.8, freq: "monthly" as const },
  { path: "/islamic-and-arabic-studies", priority: 0.8, freq: "monthly" as const },
  { path: "/sports-and-co-curricular", priority: 0.6, freq: "monthly" as const },
  { path: "/facilities", priority: 0.7, freq: "monthly" as const },
  { path: "/gallery", priority: 0.6, freq: "monthly" as const },
  { path: "/blog", priority: 0.7, freq: "weekly" as const },
  { path: "/fees", priority: 0.7, freq: "monthly" as const },
  { path: "/contact", priority: 0.8, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
