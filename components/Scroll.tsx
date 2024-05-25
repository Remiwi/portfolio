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
        "px-4 py-1 rounded-full bg-blue-500 flex-shrink w-max animate-bounce z-10 " +
        (hasScrolled ? "animate-fade-out" : "")
      }
    >
      <p className="text-center text-lg flex-shrink w-max">See more below!</p>
    </div>
  );
}
