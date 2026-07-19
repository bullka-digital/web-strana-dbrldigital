"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035 },
  },
};

const character = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedHeadline({
  text,
  className,
}: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={clsx("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          {wordIndex > 0 && " "}
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                variants={character}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </motion.span>
  );
}
