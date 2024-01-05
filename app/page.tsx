import Image from "next/image";
import { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="page-container">
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
          <Project />
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

function Project() {
  return (
    <div className="flex flex-col lg:gap-4 items-center md:items-start lg:flex-row border-2 p-2 rounded-lg border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100">
      <h3 className="text-xl font-semibold lg:hidden">Project Title</h3>
      <img
        className="object-contain h-full w-96 md:w-60"
        src="https://dummyimage.com/480x312.png?text=Project%20Image"
        alt="Project Image"
        width={480}
        height={312}
      />
      <div className="flex flex-col gap-2 pt-2 items-center md:items-start">
        <h3 className="hidden text-xl font-semibold lg:block">Project Title</h3>
        <p className="text-center project-padding md:p-0 md:text-left md:px-0">
          Dolor anim fugiat velit reprehenderit elit culpa ad elit qui. Qui anim
          id laboris mollit exercitation fugiat voluptate duis reprehenderit
          laborum eiusmod.
        </p>
        <div className="flex flex-row w-full justify-start">
          {[1, 2, 3].map((_, i) => (
            <div className="group px-2 first:pl-0 last:pr-0">
              <div
                key={i}
                className="flex flex-row p-2 bg-gray-300 rounded-full transition-all duration-500 h-10 w-10 group-hover:w-28"
              >
                <img
                  className="rounded-full"
                  src="https://dummyimage.com/24x24.png?text=Skill%20Icon"
                  alt="Skill Icon"
                  width={24}
                  height={24}
                />
                <p className="overflow-hidden pl-2">Skill&nbsp;Name</p>{" "}
                {/* &nbsp; for spacing to avoid line breaks */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="flex flex-row gap-4 align-top border-2 p-2 rounded-lg border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100">
      <img
        className="object-contain h-full w-36"
        src="https://dummyimage.com/144x94.png?text=Project%20Image"
        alt="Project Image"
        width={144}
        height={94}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Project Title</h3>
        <p>
          Dolor anim fugiat velit reprehenderit elit culpa ad elit qui. Qui anim
          id laboris mollit exercitation fugiat voluptate duis reprehenderit
          laborum eiusmod.
        </p>
      </div>
    </div>
  );
}
