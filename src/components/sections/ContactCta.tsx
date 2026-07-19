"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="px-8 py-24 text-center md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl"
      >
        Spremni da pokrenete
        <br />
        svoj digitalni projekat?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-black/60"
      >
        Bilo da vam treba nov sajt, web aplikacija ili online prodavnica, tu
        smo da vam pomognemo od ideje do lansiranja — i dalje. Zakažite
        besplatnu konsultaciju i razgovarajmo o vašem projektu.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10"
      >
        <Button href="mailto:dbrl.digital@gmail.com">Kontaktirajte Nas</Button>
      </motion.div>
    </section>
  );
}
