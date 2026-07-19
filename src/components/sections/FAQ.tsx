"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "Koliko traje izrada sajta/prodavnice?",
    answer:
      "Zavisi od obima projekta — jednostavan prezentacioni sajt obično traje 2-3 nedelje, dok web shop ili aplikacija mogu trajati 4-8 nedelja, u zavisnosti od funkcionalnosti.",
  },
  {
    question: "Da li nudite podršku nakon lansiranja?",
    answer:
      "Da, nudimo redovno održavanje i podršku kako bi vaš sajt ili prodavnica uvek radili besprekorno.",
  },
  {
    question: "Da li imate iskustva sa vođenjem web shopa?",
    answer: (
      <>
        Da — mi lično vodimo sopstveni web shop,{" "}
        <a
          href="https://rs-dobrila.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:text-white"
        >
          rs-dobrila.com
        </a>
        , tako da tačno znamo kroz šta prolazite kao vlasnik online
        prodavnice.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black px-8 py-14 text-white md:py-20"
    >
      {/* gradient blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent via-purple-500 to-indigo-500 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Česta pitanja
        </motion.h2>

        <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="py-4"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-bold md:text-xl">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-xl text-accent"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 leading-relaxed text-white/60">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
