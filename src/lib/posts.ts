// Mock content store — structured to drop in a real source (Notion, a headless
// CMS, etc.) later without changing how pages consume `posts`.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
  readTime: string;
  content: string[];
};

export const categories = [
  "School News",
  "Admissions Updates",
  "Academic Calendar",
  "Islamic Reflections",
  "Student Achievements",
  "Parenting & Community",
];

export const posts: Post[] = [
  {
    slug: "2026-2027-admission-everything-you-need-to-know",
    title: "2026/2027 Admission: Everything You Need to Know",
    excerpt:
      "Session dates, class levels and how to secure your ward's place at NobleForte for the coming session.",
    category: "Admissions Updates",
    image: "/images/exterior-building-day.webp",
    publishedAt: "2026-08-18",
    author: "Admissions Office",
    readTime: "4 min read",
    content: [
      "Admissions for the 2026/2027 session are now open across every class level at NobleForte Academy — from Creche through to SSS 2. As always, places are offered on a first-assessed, first-served basis, so families are encouraged to begin the process early.",
      "## Who can apply",
      "We welcome applications for Creche, KG & Nursery, Basic 1–5, JSS 1–2, and SSS 1–2. Pupils transferring from another school will sit a short entrance assessment appropriate to their class level, and pupils who have previously attended a Madrasah will also be assessed for Arabic language placement.",
      "## The process, in short",
      "Families start with a virtual tour or an in-person visit, then complete the registration form, submit the required documents, and attend an entrance assessment. Admission decisions follow shortly after, and a place is secured once the acceptance fee is paid.",
      "## What to prepare",
      "Have two passport photographs, a birth certificate or declaration of age, the previous school's report (where applicable), a transfer letter (where applicable), and medical or immunisation records ready ahead of your visit — it keeps the process moving quickly.",
      "If you have questions about class placement, fees, or the assessment itself, the school office is happy to talk you through it before you apply.",
    ],
  },
  {
    slug: "why-we-teach-english-arabic-french-from-day-one",
    title: "Why We Teach English, Arabic and French From Day One",
    excerpt:
      "A look inside the trilingual model that prepares pupils for a globally competitive future.",
    category: "Academic Calendar",
    image: "/images/classroom-board.webp",
    publishedAt: "2026-07-30",
    author: "Academic Office",
    readTime: "5 min read",
    content: [
      "One of the questions we hear most from prospective parents is why NobleForte teaches three languages from such an early age. The short answer: fluency compounds, and the earlier a child builds it, the more naturally it sits alongside everything else they learn.",
      "## English as the academic backbone",
      "English carries the Nigerian curriculum and remains the primary language of instruction across every subject, ensuring pupils are fully prepared for national examinations and beyond.",
      "## Arabic as scholarship and identity",
      "Arabic sits at the centre of our Islamic studies programme — it's the language of the Qur'an, and building real fluency in it (not just recitation) opens up a pupil's own relationship with the text as they grow.",
      "## French as a global bridge",
      "French rounds out the model, giving pupils a second internationally-spoken language and widening the doors open to them academically and professionally later in life.",
      "Rather than teaching these in isolation, our teachers weave all three through daily school life — assemblies, signage, and classroom routines all reinforce the model outside of dedicated language periods.",
    ],
  },
  {
    slug: "meet-our-hifz-track",
    title: "Meet Our Hifz Track: How Qur'an Memorisation Works at Noble Forte",
    excerpt:
      "From Juz Amma to Complete Hifz — the pathway every pupil follows, assessed alongside academic progress.",
    category: "Islamic Reflections",
    image: "/images/wall-i-can-learn.webp",
    publishedAt: "2026-07-12",
    author: "Islamic Studies Department",
    readTime: "4 min read",
    content: [
      "Every pupil at NobleForte follows a structured Qur'an memorisation pathway, tracked with the same rigour as their academic subjects. It's one of the things that sets a genuinely Islamic school apart from one that simply offers Islamic studies as a subject.",
      "## The four stages",
      "Pupils progress through four broad stages: Juz Amma, 2–5 Juz, more than 5 Juz, and Complete Hifz. Progress is individual — a pupil moves to the next stage when they're ready, not on a fixed class timetable.",
      "## Placement for transferring pupils",
      "Pupils who have previously attended a Madrasah are assessed on enrolment and placed at the appropriate stage, so prior memorisation is never lost. New pupils begin at the Beginner track and build from there.",
      "## Why we track it like academics",
      "Hifz progress is reviewed each term alongside report cards, so parents see it as a normal part of their child's development, not a side activity. It's built into the rhythm of the school, not bolted onto it.",
    ],
  },
  {
    slug: "term-highlights-sports-day-recitation-debate",
    title: "Term Highlights: Sports Day, Qur'an Recitation & Inter-House Debate",
    excerpt:
      "A recap of the competitions and activities that filled the term with energy and achievement.",
    category: "Student Achievements",
    image: "/images/playground.webp",
    publishedAt: "2026-06-20",
    author: "School News Desk",
    readTime: "3 min read",
    content: [
      "It's been a full term at NobleForte, with pupils competing, reciting, and debating their way through some of the calendar's biggest fixtures.",
      "## Sports Day",
      "Football, athletics and table tennis events ran across the week, with every pupil taking part in at least one event as part of our co-curricular commitment.",
      "## Qur'an Recitation Competition",
      "Pupils across all Hifz stages took part, with judges assessing tajweed, fluency and confidence. The standard this term was the highest we've seen yet.",
      "## Inter-House Debate",
      "The Debate & Public Speaking Club hosted an inter-house final that had the whole hall on its feet — a fitting close to a busy, achievement-filled term.",
    ],
  },
  {
    slug: "raising-entrepreneurial-children",
    title: "Raising Entrepreneurial Children Without Losing the Academics",
    excerpt:
      "How entrepreneurship education sits alongside — not instead of — a rigorous academic programme.",
    category: "Parenting & Community",
    image: "/images/wall-think-big.webp",
    publishedAt: "2026-06-02",
    author: "Principal's Office",
    readTime: "4 min read",
    content: [
      "Parents sometimes ask whether entrepreneurship education comes at the cost of academic rigour. In practice, it's the opposite — the skills reinforce each other.",
      "## Practical, not theoretical",
      "Our entrepreneurship strand isn't a textbook subject. Pupils work through small, age-appropriate projects that build problem-solving and income-generating thinking alongside their core subjects.",
      "## Built in from an early stage",
      "Rather than introducing it only at senior secondary level, we weave entrepreneurial thinking into the curriculum from the early years, so it becomes a natural way of approaching problems, not an add-on.",
      "The goal is graduates who can sit an exam and also spot an opportunity — both forms of preparation matter for the world they're entering.",
    ],
  },
  {
    slug: "welcoming-our-newest-creche-families",
    title: "Welcoming Our Newest Creche Families",
    excerpt:
      "A short guide to settling in for families joining the NobleForte Creche and Nursery this session.",
    category: "School News",
    image: "/images/wall-formula-success.webp",
    publishedAt: "2026-05-14",
    author: "Early Years Team",
    readTime: "3 min read",
    content: [
      "Starting Creche or Nursery is a big step for both child and parent, and our early years team works hard to make the first weeks feel calm and familiar.",
      "## What the first week looks like",
      "Settling-in sessions are kept short and predictable, with the same caregivers and routines each day, so children build confidence quickly.",
      "## What we ask of parents",
      "A consistent morning routine at home, a labelled bag, and open communication with your child's caregiver go a long way in the first few weeks.",
      "Our early years spaces are designed to be bright, safe and playful — built for children who are just beginning to explore the world of letters, numbers and colours.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, limit);
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
