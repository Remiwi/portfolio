"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DarkmodeButton() {
  const [darkmode, setDarkmode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const setDarkmodeTo = (nowDark: boolean) => {
    localStorage.theme = nowDark ? "dark" : "light";
    if (nowDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkmode(nowDark);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkmodeTo(true);
    } else {
      setDarkmodeTo(false);
    }
  }, []);

  return (
    <button onClick={() => setDarkmodeTo(!darkmode)}>
      <div
        className="w-9 h-9 flex justify-center items-center rounded-full
          bg-slate-200 border border-slate-300 dark:bg-zinc-800 dark:border-transparent"
      >
        <img
          className="dark:invert dark:brightness-200 w-8 h-8"
          src={darkmode ? "icons/sun.png" : "/icons/moon.png"}
          width={100}
          height={100}
          alt="Darkmode Toggle"
        />
      </div>
    </button>
  );
}
