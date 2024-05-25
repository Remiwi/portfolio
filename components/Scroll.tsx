"use client";

import { useEffect, useState } from "react";

export default function Scroll() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };

    if (!hasScrolled) {
      if (window.scrollY !== 0) {
        setHasScrolled(true);
        return;
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={
        // "px-4 py-1 rounded-full bg-blue-200 dark:dark:bg-gradient-to-r from-indigo-600 to-pink-600 dark:border border-zinc-900 flex-shrink w-max animate-bounce z-10 " +
        "px-4 py-1 rounded-full bg-blue-200 dark:bg-gray-300 dark:border border-zinc-900 flex-shrink w-max animate-bounce z-10 " +
        (hasScrolled ? "animate-fade-out" : "")
      }
    >
      <p className="text-center text-lg font-bold flex-shrink w-max dark:dark:bg-gradient-to-r dark:bg-clip-text from-indigo-600 to-pink-600 dark:text-transparent">
        See more below!
      </p>
    </div>
  );
}
