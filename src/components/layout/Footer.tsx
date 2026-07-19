import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-8 h-px bg-black/15" />

      <div className="flex items-center justify-between px-8 py-3">
        <Logo />

        <a
          href="mailto:dbrl.digital@gmail.com"
          className="text-sm font-medium text-black/70 hover:text-accent"
        >
          dbrl.digital@gmail.com
        </a>
      </div>
    </footer>
  );
}
