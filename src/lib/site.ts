export const siteConfig = {
  name: "NobleForte Academy",
  shortName: "NobleForte",
  tagline: "Distinction & Dignity",
  description:
    "A forward-thinking, co-educational, faith-based school in Oyo, Nigeria — trilingual education, Qur'anic scholarship and academic excellence under one roof.",
  url: "https://www.nobleforte.sch.ng",
  address: "No. 1, Lane 6b, Irepodun Community, Akinmonrin, Oyo, Oyo State, Nigeria",
  phones: ["+234 704 904 7546", "+234 814 087 3177"],
  emails: ["nobleforte.academy@gmail.com", "info@nobleforte.sch.ng"],
  mapsQuery: "Irepodun Community, Akinmonrin, Oyo, Oyo State, Nigeria",
};

export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const primaryNav: NavItem[] = [
  {
    href: "/about",
    label: "The School",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/academics", label: "Academics" },
      { href: "/islamic-and-arabic-studies", label: "Islamic & Arabic Studies" },
      { href: "/sports-and-co-curricular", label: "Sports & Co-Curricular" },
      { href: "/facilities", label: "Facilities" },
    ],
  },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Flat list used by the footer and sitemap-style listings.
export const mainNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/islamic-and-arabic-studies", label: "Islamic & Arabic" },
  { href: "/sports-and-co-curricular", label: "Sports & Clubs" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const portalNav = [
  { href: "/parent-portal", label: "Parent Portal" },
  { href: "/staff-portal", label: "Staff Portal" },
];

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
