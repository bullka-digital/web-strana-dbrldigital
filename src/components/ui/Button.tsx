import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "cta";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300",
        variant === "primary" &&
          "bg-black text-white hover:bg-accent hover:text-white",
        variant === "outline" &&
          "border border-black text-black hover:border-accent hover:text-accent",
        variant === "outline-light" &&
          "border border-white text-white hover:border-accent hover:text-accent",
        variant === "cta" &&
          "bg-[#7DE2F5] text-black hover:bg-[#5FD1E8]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
