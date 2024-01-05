"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Contacts from "@/components/Contacts";

export default function Menu() {
  const [selected, setSelected] = useState("aboutme");
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
    const scrollListener = (_: any) => {
      setSelected("aboutme");
      if (
        (window.innerWidth < 1000 && window.scrollY >= 350) ||
        window.scrollY >= 200
      ) {
        setSelected("experience");
      }
      if (
        (window.innerWidth >= 1400 && window.scrollY >= 1200) ||
        (window.innerWidth >= 1300 && window.scrollY >= 1350) ||
        (window.innerWidth >= 1200 && window.scrollY >= 1500) ||
        (window.innerWidth >= 1000 && window.scrollY >= 1650) ||
        (window.innerWidth >= 800 && window.scrollY >= 1780) ||
        (window.innerWidth >= 600 && window.scrollY >= 1800)
      ) {
        setSelected("games");
      }
    };

    window.addEventListener("scroll", scrollListener, false);
    return () => {
      window.removeEventListener("scroll", scrollListener, false);
    };
  }, [setSelected]);

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
    <div className="flex flex-col gap-8 md:fixed md:justify-between md:h-screen">
      <div className="flex flex-col gap-2 pt-20 md:pt-52">
        <div className="flex flex-row gap-8 items-end">
          <h1>Remi Vaughan</h1>
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
        </div>
        <p className="text-lg indent-4 pb-24 md:pb-0">
          Ut est irure nostrud sit aliqua sint non.
        </p>
      </div>
      <div className="relative hidden md:flex flex-col gap-4 text-2xl">
        <div
          className={`absolute w-10 h-10 bg-blue-100 dark:bg-gradient-to-r from-indigo-600 to-pink-600 -z-10 -left-1 transition-all duration-300
          ${selected === "aboutme" ? "-top-1 w-30" : ""}
          ${selected === "experience" ? "top-11 w-34" : ""}
          ${selected === "games" ? "top-23 w-22" : ""}`}
        />
        <a href="#AboutMe">About me</a>
        <a href="#Experience">Experience</a>
        <a href="#Games">Games</a>
      </div>
      <Contacts className="hidden md:flex pb-24 flex-row gap-8" />
    </div>
  );
}
