import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { IconFile, IconUsers, IconWallet, IconBell, IconLock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Parent Portal",
  description:
    "Secure login for NobleForte parents — report cards, fee status, and school updates.",
};

const features = [
  { icon: <IconFile />, title: "Report Cards", description: "View and download your ward's termly report card as a PDF." },
  { icon: <IconUsers />, title: "Ward's Bio-Data", description: "View your ward's registered details and update your own contact information." },
  { icon: <IconWallet />, title: "Fees & Payment History", description: "Check fee balance, full payment history, and pay securely online." },
  { icon: <IconBell />, title: "Announcements", description: "Receive school-wide and class-specific notices from the administration." },
];

export default function ParentPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Parent Portal"
        title="Stay connected to your child's journey."
        subtitle="Secure, anytime access to report cards, fee status, and school updates — launching soon."
        image="/images/library.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm shadow-navy/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-light text-navy">
                <IconLock />
              </div>
              <h2 className="mt-5 text-xl font-medium text-navy">Parent Login</h2>
              <p className="mt-2 text-sm text-navy/55">
                The portal is being finalised ahead of launch. In the meantime, our office team
                is happy to help with anything you&apos;d normally do here.
              </p>

              <div className="mt-6 space-y-4 opacity-60">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Admission Number
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
                Contact the School Office
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>What the Portal Offers</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Built for busy parents</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-navy/60">
              A parent with more than one child at the school will be able to switch between
              wards from a single login.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-navy/10 bg-white p-6"
                >
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
