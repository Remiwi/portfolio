import Image from "next/image";
import Contacts from "@/components/Contacts";
import Scroll from "@/components/Scroll";
import Skills from "@/components/Skills";

export default function Main() {
  return (
    <>
      <div className="relative">
        <div className="w-full flex flex-row items-end justify-center absolute top-screen">
          <Scroll />
        </div>
        <h2>About me</h2>
        <p>
          Hey, I&apos;m Remi! I like to make things with code. Right now
          I&apos;m really into mobile development. Thanks for checking out my
          website!
        </p>
        <p className="pt-4">
          I started programming in highschool to make scripts for games I
          played, which ultimately got me interested in software development in
          general. I recently graduated from NYU with a CS bachelor&apos;s
          degree, and you can find me now working on apps or websites that I
          want to exist. I really enjoy the challenge of creating a visually
          interesting and functionally clear user interface that fits for
          whatever project I&apos;m making.
        </p>
        <p className="pt-4">Check out my projects below!</p>
        <h2 id="projects" className="pt-32 pb-8">
          Projects
        </h2>
        <div className="flex flex-col gap-12">
          <Project
            title="YouCaption"
            href="/YouCaption"
            description={`
              An accessibility tool for the deaf and hard of hearing designed to replace the
              now deprecated Youtube Community Captions. It allows users to create and share
              subtitles for Youtube videos.
            `}
            image="/thumbnails/youcaption.png"
            skills={[
              {
                name: "React",
                icon: "/icons/react.png",
                hoverWidthClass: "group-hover:w-24",
              },
              {
                name: "Typescript",
                icon: "/icons/typescript.png",
                hoverWidthClass: "group-hover:w-33",
              },
              {
                name: "Python",
                icon: "/icons/python.png",
                hoverWidthClass: "group-hover:w-26",
              },
              {
                name: "PostgreSQL",
                icon: "/icons/postgresql.png",
                hoverWidthClass: "group-hover:w-35",
              },
            ]}
          />
          <Project
            title="Routines App"
            href="/RoutinesApp"
            description={`
              A mobile app designed to help people organize different parts of their day and
              track their progress on desirable habits. Users can create group these tasks into
              different routines to sort them or avoid stress.
            `}
            image="/thumbnails/routines.png"
            skills={[
              {
                name: "Expo",
                icon: "/icons/expo.png",
                hoverWidthClass: "group-hover:w-22",
              },
              {
                name: "Sqlite",
                icon: "/icons/sqlite.png",
                hoverWidthClass: "group-hover:w-24",
              },
              {
                name: "React Native",
                icon: "/icons/react.png",
                hoverWidthClass: "group-hover:w-37",
              },
              {
                name: "Typescript",
                icon: "/icons/typescript.png",
                hoverWidthClass: "group-hover:w-33",
              },
            ]}
          />
          <Project
            title="remivaughan.com"
            href="/Portfolio"
            description={`
              This website! I made it to show off my favorite projects to whoever is
              interested, and also because I really wanted to try out Tailwind. Any
              feedback? Send me an email!
            `}
            image="/thumbnails/portfolio.png"
            skills={[
              {
                name: "React",
                icon: "/icons/react.png",
                hoverWidthClass: "group-hover:w-24",
              },
              {
                name: "Tailwind",
                icon: "/icons/tailwind.png",
                hoverWidthClass: "group-hover:w-29",
              },
              {
                name: "Typescript",
                icon: "/icons/typescript.png",
                hoverWidthClass: "group-hover:w-33",
              },
            ]}
          />
        </div>
        <h2 id="games" className="pt-32 pb-6">
          Games
        </h2>
        <div className="flex flex-col gap-6">
          <Game
            title="Blitz"
            image="/thumbnails/blitz.png"
            href="/RapidGameDev"
            description={`
              The shoot-em-up style sequel to chess. Play as the blue king,
              survive all five waves, and beat the final boss to win! Made in
              one week as part of a series of games for uni.
            `}
          />
          <Game
            title="Marble Maize Game"
            image="/thumbnails/maize.png"
            href="/RapidGameDev"
            description={`
              A Monkeyball-inspired game about a hamster collecting corn. My
              friends really enjoyed beating each other's times back and forth.
              Made in one week as part of a series of games for uni.
            `}
          />
          <Game
            title="Spirit Solver"
            image="/thumbnails/spiritsolver.png"
            href="/RapidGameDev"
            description={`
              Point-and-click adventure about a ghost detective investigating a
              haunted mansion. Was my first real experience working on a collaborative
              codebase. Made in one week as part of a series of games for uni.
            `}
          />
        </div>
      </div>
      <h3 className="pt-20 w-full text-center text-lg font-semibold md:hidden">
        Contact me
      </h3>
      <Contacts className="pt-4 px-8 justify-between grid grid-cols-3 text-center md:hidden" />
    </>
  );
}

function Project({
  title,
  description,
  image,
  href,
  skills,
}: {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
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
      className="flex flex-col lg:gap-4 items-center md:items-start lg:flex-row border-2 p-2 rounded-lg border-transparent transition-background
    hover:border-blue-200 hover:bg-blue-50 dark:hover:border-transparent dark:hover:bg-zinc-950"
    >
      <h3 className="text-xl font-semibold lg:hidden">
        {href === undefined ? title : <a href={href}>{title}</a>}
      </h3>
      <Image
        className="object-contain h-full w-96 md:w-60 rounded-md"
        src={image}
        alt="Project Image"
        width={480}
        height={312}
      />
      <div className="flex flex-col gap-2 pt-2 items-center md:items-start">
        <h3 className="hidden text-xl font-semibold lg:block">
          {href === undefined ? title : <a href={href}>{title}</a>}
        </h3>
        <p className="text-center project-padding md:p-0 md:text-left md:px-0">
          {description}
        </p>
        <Skills skills={skills} />
      </div>
    </div>
  );
}

function Game({
  title,
  href,
  image,
  description,
}: {
  title?: string;
  href?: string;
  image?: string;
  description?: string;
}) {
  title = title ?? "Game Title";
  description =
    description ??
    "Dolor anim fugiat velit reprehenderit elit culpa ad elit qui. Qui anim id laboris mollit exercitation fugiat voluptate duis reprehenderit laborum eiusmod.";
  image = image ?? "https://dummyimage.com/144x94.png?text=Game%20Image";

  return (
    <div
      className="flex flex-row gap-4 align-top border-2 p-2 rounded-lg border-transparent transition-background
    hover:border-blue-200 hover:bg-blue-50 dark:hover:border-transparent dark:hover:bg-zinc-950"
    >
      <Image
        className="object-contain h-full w-36 rounded-md"
        src={image}
        alt="Project Image"
        width={144}
        height={94}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">
          {href === undefined ? title : <a href={href}>{title}</a>}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
