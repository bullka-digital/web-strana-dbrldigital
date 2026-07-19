"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web aplikacije",
    description:
      "Razvijamo custom web aplikacije prilagođene specifičnim potrebama vašeg poslovanja — od internih alata do platformi za korisnike.",
  },
  {
    title: "Web sajtovi",
    description:
      "Izrađujemo profesionalne prezentacione i korporativne web sajtove koji predstavljaju vaš brend na način koji zaslužuje — brzi, moderni i prilagođeni svim uređajima.",
  },
  {
    title: "Web shopovi",
    description:
      "Pravimo online prodavnice koje su spremne da prodaju od prvog dana. Znamo šta funkcioniše, jer i sami vodimo sopstveni web shop.",
  },
  {
    title: "UI/UX dizajn",
    description:
      "Dizajniramo intuitivna i vizuelno privlačna korisnička iskustva tako da posetioci lako pronađu ono što traže i imaju razlog da ostanu.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-8 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
          >
            Pomažemo brendovima i kompanijama da se istaknu u digitalnom
            dobu.
          </motion.h2>

          <ul className="mt-10 divide-y divide-black/10 border-t border-black/10">
            {services.map((service, index) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex gap-4 py-5"
              >
                <span className="text-sm text-accent">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-lg font-medium">{service.title}</p>
                  <p className="mt-1 text-sm text-black/60">
                    {service.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center"
        >
          {/* dotted background pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:18px_18px]"
          />

          {/* gradient blob */}
          <motion.div
            aria-hidden
            className="absolute h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-accent via-purple-500 to-indigo-500 opacity-70 blur-3xl"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* phone frame */}
          <motion.div
            className="relative z-10 h-[28rem] w-60 overflow-hidden rounded-[2.75rem] border-[10px] border-black bg-black shadow-2xl"
            animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
            <div className="flex h-full w-full flex-col justify-between rounded-[2rem] bg-white p-6 pt-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-black/40">
                E-Commerce Aplikacija
              </span>
              <div>
                <p className="font-heading text-2xl font-bold leading-snug text-black">
                  Napravi sjajne e-commerce prodavnice
                </p>
                <div className="mt-6 h-2 w-1/2 rounded-full bg-accent" />
                <div className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-indigo-500 px-6 py-3 text-sm font-semibold text-white">
                  Započni Odmah
                </div>
              </div>
            </div>

            {/* shine sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ left: ["-40%", "140%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
