"use client";

import { useEffect, useState } from "react";
import Contacts from "@/components/Contacts";

export default function Menu() {
  const [selected, setSelected] = useState("aboutme");

  useEffect(() => {
    const scrollListener = (_: any) => {
      const projects = document.getElementById("Projects");
      const games = document.getElementById("Games");
      setSelected("aboutme");
      if (games && window.scrollY > games.offsetTop - 300) {
        setSelected("games");
      } else if (projects && window.scrollY > projects.offsetTop - 100) {
        setSelected("projects");
      }
    };

    window.addEventListener("scroll", scrollListener, false);
    return () => {
      window.removeEventListener("scroll", scrollListener, false);
    };
  }, [setSelected]);

  return (
    <div className="flex flex-col gap-8 md:fixed md:justify-between md:h-screen">
      <div className="flex flex-col gap-2 pt-20 md:pt-52">
        <h1>Remi Vaughan</h1>
        <p className="text-lg indent-4 pb-24 md:pb-0">
          Your next full-stack developer
        </p>
      </div>
      <div className="relative hidden md:flex flex-col gap-4 text-2xl">
        <div
          className={`absolute w-10 h-10 bg-blue-100 dark:bg-gradient-to-r from-indigo-600 to-pink-600 -z-10 -left-1 transition-all duration-300
          ${selected === "aboutme" ? "-top-1 w-38" : ""}
          ${selected === "projects" ? "top-11 w-34" : ""}
          ${selected === "games" ? "top-23 w-30" : ""}`}
        />
        <a href="#AboutMe">About me</a>
        <a href="#Projects">Projects</a>
        <a href="#Games">Games</a>
      </div>
      <Contacts className="hidden md:flex pb-24 flex-row gap-8" />
    </div>
  );
}
