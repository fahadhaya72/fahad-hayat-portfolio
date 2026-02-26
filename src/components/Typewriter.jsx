import React, { useEffect, useState } from "react";

// simple typewriter looping through words array
export default function Typewriter({ words = [], typingSpeed = 60, deletingSpeed = 30, pause = 800 }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      // finished typing or deleting
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return <>{text}<span className="animate-pulse">|</span></>;
}
