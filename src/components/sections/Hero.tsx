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
      className="relative px-8 py-16 md:py-24"
    >
      {/* triangle outline, bottom-left */}
      <motion.svg
        aria-hidden
        viewBox="0 0 220 190"
        className="absolute bottom-[6%] left-[4%] hidden h-24 w-28 md:block"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M110 20 L200 170 L20 170 Z"
          fill="none"
          stroke="black"
          strokeWidth="18"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* diamond cluster, right side */}
      <div
        aria-hidden
        className="absolute right-[10%] top-[8%] hidden h-56 w-40 xl:block"
      >
        <motion.div
          className="absolute right-0 top-0 h-28 w-28 rotate-45 border-8 border-accent"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-8 top-16 h-14 w-14 rotate-45 border-[6px] border-black bg-white"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute right-4 top-32 h-6 w-6 rotate-45 border-[3px] border-black/70" />
        <div className="absolute right-1 top-40 h-4 w-4 rotate-45 border-2 border-black/40" />
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
          className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
          aria-label={`${rotatingWords[0]} digitalnih proizvoda.`}
        >
          <RotatingWord words={rotatingWords} className="block" />
          <AnimatedHeadline
            text="Digitalnih proizvoda."
            className="block whitespace-nowrap"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl whitespace-nowrap text-lg text-black/60"
        >
          Mi ne pratimo trendove, mi ih stvaramo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10"
        >
          <Button href="#work">Otkrij Zašto Mi</Button>
        </motion.div>
      </div>
    </section>
  );
}
