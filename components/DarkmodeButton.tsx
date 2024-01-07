"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCookies } from "next-client-cookies";

export default function DarkmodeButton() {
  const cookies = useCookies();
  const [darkTheme, setDarkTheme] = useState(cookies.get("theme") === "dark");

  const setDark = (nowDark: boolean) => {
    if (nowDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    cookies.set("theme", nowDark ? "dark" : "light");
    setDarkTheme(nowDark);
  };

  useEffect(() => {
    if (
      cookies.get("theme") === "dark" ||
      (cookies.get("theme") === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  return (
    <button onClick={() => setDark(!darkTheme)}>
      <div
        className="w-9 h-9 flex justify-center items-center rounded-full
          bg-slate-200 border border-slate-300 dark:bg-zinc-800 dark:border-transparent"
      >
        <Image
          className="dark:invert dark:brightness-200 w-8 h-8"
          src={darkTheme ? "/icons/sun.png" : "/icons/moon.png"}
          width={100}
          height={100}
          alt="Darkmode Toggle"
        />
      </div>
    </button>
  );
}
