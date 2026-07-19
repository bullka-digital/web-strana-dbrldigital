"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type RotatingWordProps = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export default function RotatingWord({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1600,
}: RotatingWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={clsx("inline-block text-accent", className)} aria-hidden>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
