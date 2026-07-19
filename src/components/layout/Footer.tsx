import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white px-8 py-3">
      <div className="flex items-center justify-between">
        <Logo />

        <Button href="#welcome" variant="cta">
          Na Početak
        </Button>
      </div>
    </footer>
  );
}
