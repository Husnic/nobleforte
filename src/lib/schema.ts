import { siteConfig } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-navy.png`,
    image: `${siteConfig.url}/images/exterior-building-aerial.webp`,
    telephone: siteConfig.phones[0],
    email: siteConfig.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1, Lane 6b, Irepodun Community, Akinmonrin",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    sameAs: [],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/brand/logo-navy.png` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}
