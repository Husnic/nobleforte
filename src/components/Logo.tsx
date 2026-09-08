import Image from "next/image";

export default function Logo({
  variant = "navy",
  className = "h-9 w-auto",
}: {
  variant?: "navy" | "white";
  className?: string;
}) {
  const src = variant === "white" ? "/brand/logo-white.png" : "/brand/logo-navy.png";
  return (
    <Image
      src={src}
      alt="NobleForte Academy"
      width={1200}
      height={475}
      priority
      className={className}
    />
  );
}
