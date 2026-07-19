"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Konsultacije",
    description: "Upoznajemo vaše poslovanje i ciljeve",
  },
  {
    title: "Predlog rešenja",
    description: "Dobijate jasnu ponudu i plan rada",
  },
  {
    title: "Dizajn i razvoj",
    description: "Gradimo rešenje korak po korak, uz vaše uvide",
  },
  {
    title: "Testiranje i lansiranje",
    description: "Sve proveravamo pre nego što krenete uživo",
  },
  {
    title: "Podrška",
    description: "Ostajemo tu i nakon lansiranja",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-zinc-50 px-8 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Kako izgleda proces rada?
        </motion.h2>

        <ol className="mt-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex gap-6 pb-6 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent font-heading text-lg font-bold text-accent">
                  0{index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-black/10" />
                )}
              </div>
              <div className="pt-2">
                <p className="font-heading text-xl font-bold">
                  {step.title}
                </p>
                <p className="mt-1 text-black/60">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
