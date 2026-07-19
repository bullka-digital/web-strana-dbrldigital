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
  return (
    <motion.span
      className={clsx("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={character}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
