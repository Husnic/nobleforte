import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { IconFile, IconUsers, IconBell, IconLock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Staff Portal",
  description:
    "A secure space for NobleForte staff to manage academic records and stay updated with school administration.",
};

const features = [
  { icon: <IconFile />, title: "Grade & Report Card Entry", description: "Input scores and comments for your assigned classes and subjects." },
  { icon: <IconUsers />, title: "Class Lists", description: "View the bio-data of pupils in your assigned class." },
  { icon: <IconUsers />, title: "Own HR Details", description: "View and update your personal information and qualifications." },
  { icon: <IconBell />, title: "Internal Announcements", description: "Receive memos and notices from school administration." },
];

export default function StaffPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff Portal"
        title="Manage records, stay informed."
        subtitle="A secure space for NobleForte staff — role-based access, launching soon."
        image="/images/hall-projector.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm shadow-navy/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-light text-navy">
                <IconLock />
              </div>
              <h2 className="mt-5 text-xl font-medium text-navy">Staff Login</h2>
              <p className="mt-2 text-sm text-navy/55">
                Role-based accounts for Class Teachers, Subject Teachers, Registrar/Admin, and
                Head Teacher are being finalised ahead of launch.
              </p>

              <div className="mt-6 space-y-4 opacity-60">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Staff ID / Email
                  </label>
                  <div className="mt-1.5 h-11 rounded-lg border border-navy/15 bg-sky-light/40" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Password
                  </label>
                  <div className="mt-1.5 h-11 rounded-lg border border-navy/15 bg-sky-light/40" />
                </div>
                <div className="rounded-lg bg-navy/90 px-4 py-3 text-center text-sm font-semibold text-white">
                  Portal Launching Soon
                </div>
              </div>

              <Button href="/contact" variant="outline" className="mt-6 w-full">
                Contact School Administration
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>What the Portal Offers</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Built for NobleForte staff</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-navy/60">
              Report cards route through an approval step before being published to parents —
              every role sees only what it needs to.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-light text-navy">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-navy">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
