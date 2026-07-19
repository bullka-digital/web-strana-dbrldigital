import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <FAQ />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
