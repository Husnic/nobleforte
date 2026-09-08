export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="group rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-xl hover:shadow-navy/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-light text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-navy/60">{description}</p>}
    </div>
  );
}
