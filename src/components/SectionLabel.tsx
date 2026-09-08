export default function SectionLabel({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        tone === "light" ? "text-sky" : "text-gold"
      }`}
    >
      <span className={`h-px w-4 ${tone === "light" ? "bg-sky" : "bg-gold"}`} />
      {children}
    </div>
  );
}
