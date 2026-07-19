"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import RotatingWord from "@/components/ui/RotatingWord";

const rotatingWords = ["Zvezde", "Legende", "Ikone", "Šampioni"];

export default function Hero() {
  return (
    <section
      id="welcome"
      className="relative overflow-x-hidden px-8 py-16 md:py-24"
    >
      {/* floating icons, bottom-left */}
      <div
        aria-hidden
        className="absolute bottom-2 left-2 h-20 w-20 sm:bottom-[4%] sm:left-[6%] sm:h-48 sm:w-48"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-1 top-0 h-5 w-5 text-black sm:left-6 sm:top-0 sm:h-11 sm:w-11"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-7 top-5 h-6 w-6 text-accent sm:left-16 sm:top-12 sm:h-12 sm:w-12"
          animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-0 top-12 h-4 w-4 text-black sm:left-0 sm:top-28 sm:h-9 sm:w-9"
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M13 17V9" />
          <path d="M18 17V5" />
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M8 17v-3" />
        </motion.svg>
      </div>

      {/* diamond cluster, right side */}
      <div
        aria-hidden
        className="absolute right-2 top-2 h-16 w-12 sm:right-[10%] sm:top-[8%] sm:h-56 sm:w-40"
      >
        <motion.div
          className="absolute right-0 top-0 h-8 w-8 rotate-45 border-4 border-accent sm:h-28 sm:w-28 sm:border-8"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-3 top-5 h-4 w-4 rotate-45 border-2 border-black bg-white sm:right-8 sm:top-16 sm:h-14 sm:w-14 sm:border-[6px]"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute right-1 top-9 h-2 w-2 rotate-45 border border-black/70 sm:right-4 sm:top-32 sm:h-6 sm:w-6 sm:border-[3px]" />
        <div className="absolute right-0 top-11 h-1.5 w-1.5 rotate-45 border border-black/40 sm:right-1 sm:top-40 sm:h-4 sm:w-4 sm:border-2" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
        >
          dbrl digital
        </motion.p>

        <h1
          className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem]"
          aria-label={`${rotatingWords[0]} digitalnih proizvoda.`}
        >
          <RotatingWord words={rotatingWords} className="block" />
          <AnimatedHeadline
            text="Digitalnih proizvoda."
            className="block md:whitespace-nowrap"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-lg text-black/60 sm:whitespace-nowrap"
        >
          Mi ne pratimo trendove, mi ih stvaramo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10"
        >
          <Button
            href="#work"
            variant="cta"
            className="md:bg-black md:text-white md:hover:bg-accent md:hover:text-white"
          >
            Otkrij Zašto Mi
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
