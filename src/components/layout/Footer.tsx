import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white px-8 py-3">
      <div className="flex items-center justify-between">
        <Link
          href="#welcome"
          className="font-heading text-xl font-extrabold tracking-tight"
        >
          Brooklyn
        </Link>

        <Button href="#welcome" variant="cta">
          Na Početak
        </Button>
      </div>
    </footer>
  );
}
