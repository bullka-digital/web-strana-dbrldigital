import Link from "next/link";
import clsx from "clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#welcome"
      className={clsx(
        "flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 rounded-lg bg-black p-1.5"
        aria-hidden
      >
        <rect x="3" y="12" width="4" height="9" rx="1" fill="white" />
        <rect x="10" y="2" width="4" height="19" rx="1" fill="white" />
        <rect x="17" y="7" width="4" height="14" rx="1" fill="white" />
      </svg>
      dbrl digital
    </Link>
  );
}
