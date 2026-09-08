import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { IconWallet } from "@/components/icons";
import EnrollCta from "@/components/EnrollCta";

export const metadata: Metadata = {
  title: "Fees & Online Payment",
  description:
    "NobleForte Academy fee schedule and how to pay school fees securely through the Parent Portal.",
};

const feeSchedule = [
  { level: "Creche / KG / Nursery", amount: "Contact the school office" },
  { level: "Basic 1 – 5", amount: "Contact the school office" },
  { level: "JSS 1 – 2", amount: "Contact the school office" },
  { level: "SSS 1 – 2", amount: "Contact the school office" },
];

const methods = ["Card", "Bank Transfer", "USSD"];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees & Online Payment"
        title="Pay your ward's fees securely online."
        subtitle="No queues, instant receipt — payments are processed through the Parent Portal."
        image="/images/reception-desk.webp"
      />

      <section className="py-24 md:py-28">
        <div className="container-xw grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionLabel>Fee Schedule</SectionLabel>
            <h2 className="mt-4 text-3xl text-navy md:text-4xl">Per term</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 font-semibold">Class</th>
                    <th className="px-6 py-4 font-semibold">Per Term</th>
                  </tr>
                </thead>
                <tbody>
                  {feeSchedule.map((f, i) => (
                    <tr key={f.level} className={i % 2 ? "bg-sky-light/50" : "bg-white"}>
                      <td className="px-6 py-4 text-navy">{f.level}</td>
                      <td className="px-6 py-4 text-navy/60">{f.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-navy/45">
              Figures are confirmed each session by the school office — please contact us for the
              current fee structure.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy/10 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-light text-navy">
                <IconWallet />
              </div>
              <h3 className="mt-5 text-xl font-medium text-navy">Accepted Payment Methods</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {methods.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-navy/15 px-4 py-1.5 text-xs font-medium text-navy/70"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-navy/60">
                Paid via the school&apos;s chosen payment gateway provider. Every successful
                payment generates a digital receipt, sent to you immediately, with your full
                payment history available inside the Parent Portal.
              </p>
              <Button href="/parent-portal" variant="primary" className="mt-6 w-full">
                Pay Now via Parent Portal
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <EnrollCta
        image="/images/reception-desk.webp"
        title="Questions about fees or payment plans?"
        subtitle="The school office can walk you through the current fee structure and instalment options for your ward's class."
      />
    </>
  );
}
