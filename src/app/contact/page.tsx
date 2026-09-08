import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Address, phone lines, email, and a contact form for NobleForte Academy.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        subtitle="Reach the school office directly, or send a message below."
        image="/images/exterior-parking-dusk.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Reach the school office</h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                  Address
                </p>
                <p className="mt-1.5 text-navy/75">{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                  Phone
                </p>
                {siteConfig.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="mt-1.5 block text-navy/75 hover:text-sky"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                  Email
                </p>
                {siteConfig.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="mt-1.5 block text-navy/75 hover:text-sky">
                    {e}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10">
              <iframe
                title="Map to NobleForte Academy"
                className="h-full w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy/10 bg-white p-8 md:p-10">
              <h2 className="text-xl font-medium text-navy">Send a Message</h2>
              <p className="mt-1.5 text-sm text-navy/55">Name, email, phone, and your message.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
