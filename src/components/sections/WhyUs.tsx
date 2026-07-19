"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Poslovno iskustvo",
    description: "Razumemo prodaju, ne samo tehnologiju.",
  },
  {
    title: "Sopstveni web shop",
    description: "Dokaz da naša rešenja rade u praksi.",
  },
  {
    title: "Rešenja skrojena po meri",
    description: "Ne šablon, već ono što vama treba.",
  },
];

export default function WhyUs() {
  return (
    <section id="work" className="px-8 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Zašto baš mi?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-xl font-semibold leading-snug"
        >
          Većina digitalnih agencija zna da kuca kod. Mi znamo i da
          prodajemo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-black/60"
        >
          Sa 15 godina iskustva u prodaji i 5 godina u digitalnom razvoju, ne
          gradimo aplikacije, sajtove i prodavnice samo da lepo izgledaju —
          gradimo ih da donesu klijente i prodaju, da automatizuju i ubrzaju
          procese. Svaka odluka u dizajnu i funkcionalnosti vodi se pitanjem:
          &bdquo;Da li ovo pomaže poslovanju klijenta?&rdquo;
        </motion.p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {points.map((point, index) => (
            <motion.li
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-black/10 p-6"
            >
              <span className="text-sm font-semibold text-accent">
                0{index + 1}
              </span>
              <p className="mt-3 font-heading text-lg font-bold">
                {point.title}
              </p>
              <p className="mt-2 text-sm text-black/60">
                {point.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
