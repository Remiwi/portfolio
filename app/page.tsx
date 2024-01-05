import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/Menu";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="page-container dark:bg-zinc-900 dark:text-zinc-300">
      <Menu />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main
      id="AboutMe"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 pb-8 md:pb-24 pt-0 md:pt-48"
    >
      <div
        className="hidden md:block"
        id="Dummy div to make space in grid"
      ></div>
      <div>
        <h2>About me</h2>
        <p className="indent-4">
          Excepteur sit esse et ut ex Lorem proident officia nisi occaecat.
          Laborum duis enim elit cillum mollit consequat. Officia labore irure
          aliquip pariatur adipisicing. Irure minim quis ut id irure consequat
          exercitation nulla velit id.
        </p>
        <h2 id="Experience" className="pt-32 pb-8">
          Experience
        </h2>
        <div className="flex flex-col gap-12">
          <Project
            skills={[
              {
                name: "small",
                icon: "/icons/github.png",
                hoverWidthClass: "group-hover:w-20",
              },
              {
                name: "very very large name",
                icon: "/icons/github.png",
                hoverWidthClass: "group-hover:w-80",
              },
            ]}
          />
          <Project />
          <Project />
          <Project />
        </div>
        <h2 id="Games" className="pt-32 pb-6">
          Games
        </h2>
        <div className="flex flex-col gap-6">
          <Game />
          <Game />
          <Game />
          <Game />
        </div>
      </div>
      <h3 className="pt-20 w-full text-center text-lg font-semibold md:hidden">
        Contact me
      </h3>
      <Contacts className="pt-4 px-8 justify-between grid grid-cols-3 text-center md:hidden" />
    </main>
  );
}

function Project({
  title,
  description,
  image,
  skills,
}: {
  title?: string;
  description?: string;
  image?: string;
  skills?: {
    name: string;
    icon: string;
    hoverWidthClass: string;
  }[];
}) {
  title = title ?? "Project Title";
  description =
    description ??
    "Dolor anim fugiat velit reprehenderit elit culpa ad elit qui. Qui anim id laboris mollit exercitation fugiat voluptate duis reprehenderit laborum eiusmod.";
  image = image ?? "https://dummyimage.com/480x312.png?text=Project%20Image";
  skills = skills ?? [
    {
      name: "Skill Name 1",
      icon: "/icons/github.png",
      hoverWidthClass: "group-hover:w-28",
    },
    {
      name: "Skill Name 2",
      icon: "/icons/github.png",
      hoverWidthClass: "group-hover:w-32",
    },
    {
      name: "Skill Name 3",
      icon: "/icons/github.png",
      hoverWidthClass: "group-hover:w-36",
    },
  ];

  return (
    <div
      className="flex flex-col lg:gap-4 items-center md:items-start lg:flex-row border-2 p-2 rounded-lg border-transparent transition-colors
    hover:border-blue-200 hover:bg-blue-50 dark:hover:border-transparent dark:hover:bg-zinc-950"
    >
      <h3 className="text-xl font-semibold lg:hidden">{title}</h3>
      <img
        className="object-contain h-full w-96 md:w-60"
        src={image}
        alt="Project Image"
        width={480}
        height={312}
      />
      <div className="flex flex-col gap-2 pt-2 items-center md:items-start">
        <h3 className="hidden text-xl font-semibold lg:block">{title}</h3>
        <p className="text-center project-padding md:p-0 md:text-left md:px-0">
          {description}
        </p>
        <div className="flex flex-row w-full justify-center md:justify-start">
          {skills.map((skill, _) => (
            <div key={skill.name} className="group px-2 first:pl-0 last:pr-0">
              <div
                className={
                  `flex flex-row p-2 bg-pink-200 dark:bg-indigo-700 rounded-full transition-all duration-500 h-10 w-10
                   bg-fixed dark:bg-gradient-to-r from-indigo-600 to-pink-600
                   2xl:from-65% 2xl:to-75%
                   xl:from-70% xl:to-80%
                   lg:from-75% lg:to-90%
                   md:from-55% md:to-70%
                   from-40% to-60% ` + skill.hoverWidthClass
                }
              >
                <img
                  className="rounded-full dark:invert dark:brightness-200"
                  src={skill.icon}
                  alt={skill.name + " Icon"}
                  width={24}
                  height={24}
                />
                <p className="overflow-hidden pl-2 text-black dark:text-zinc-300">
                  {skill.name.replace(" ", "\u00A0")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Game({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  title = title ?? "Game Title";
  description =
    description ??
    "Dolor anim fugiat velit reprehenderit elit culpa ad elit qui. Qui anim id laboris mollit exercitation fugiat voluptate duis reprehenderit laborum eiusmod.";
  image = image ?? "https://dummyimage.com/144x94.png?text=Game%20Image";

  return (
    <div
      className="flex flex-row gap-4 align-top border-2 p-2 rounded-lg border-transparent transition-colors
    hover:border-blue-200 hover:bg-blue-50 dark:hover:border-transparent dark:hover:bg-zinc-950"
    >
      <img
        className="object-contain h-full w-36"
        src={image}
        alt="Project Image"
        width={144}
        height={94}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
