import Image from "next/image";
import Contacts from "@/components/Contacts";
import Scroll from "@/components/Scroll";
import Skills from "@/components/Skills";
import MenuServer from "@/components/Menu/MenuServer";

export default function Main() {
  return (
    <>
      <div className="lg:col-span-2 flex flex-col gap-8 lg:fixed top-0 pt-20 lg:pt-48 lg:justify-between lg:h-screen">
        <div className="flex flex-col gap-2">
          <h1>
            <a href="/" className="hover:no-underline">
              Remi Vaughan
            </a>
          </h1>
          <p className="text-lg indent-4 pb-24 lg:pb-0">
            Your next full-stack developer
          </p>
        </div>
        <MenuServer />
        <Contacts className="hidden lg:flex pb-24 flex-row gap-8" />
      </div>
      <main
        id="aboutme"
        className="gap-x-2 min-h-screen grid grid-cols-1 lg:grid-cols-5 pb-8 lg:pb-24"
      >
        <div className="lg:col-span-2" />
        <div className="lg:col-span-3 lg:pt-24 sm:px-16">
          <h2 className="w-full pb-8">About me</h2>
          <div>
            <p className="pb-4">
              Hey, I&apos;m Remi! I like to make things with code. Right now
              I&apos;m really into mobile development. Thanks for checking out
              my website!
            </p>
            <p className="pb-4">
              I started programming in highschool to make scripts for games I
              played, which ultimately got me interested in software development
              in general. I recently graduated from NYU with a CS
              bachelor&apos;s degree, and you can find me now working on apps or
              websites that I want to exist. I really enjoy the challenge of
              creating a visually interesting and functionally clear user
              interface that fits for whatever project I&apos;m making.
            </p>
            <p>Check out my projects below!</p>
          </div>
          <h2 id="projects" className="pt-32 pb-8">
            Projects
          </h2>
          <div className="flex flex-col gap-16">
            <Project
              title="Routines App"
              image="/thumbnails/routines.png"
              skills={["React Native", "Typescript", "Expo", "Sqlite"]}
            >
              <ProjectLink href="" logo="/icons/github.png" name="Repo" />
              <ProjectLink
                href=""
                logo="/icons/newtab.png"
                name="Live"
                highlighted={true}
              />
            </Project>
            <Project
              title="YouCaption"
              image="/thumbnails/youcaption.png"
              skills={["React", "Typescript", "Python", "PostgreSQL"]}
            >
              {" "}
              <ProjectLink href="" logo="/icons/github.png" name="Repo" />
              <ProjectLink
                href=""
                logo="/icons/newtab.png"
                name="Live"
                highlighted={true}
              />
            </Project>
            <Project
              title="This Portfolio!"
              image="/thumbnails/portfolio.png"
              skills={["React", "Tailwind", "Typescript"]}
            >
              {" "}
              <ProjectLink href="" logo="/icons/github.png" name="Repo" />
              <ProjectLink
                href=""
                logo="/icons/newtab.png"
                name="Live"
                highlighted={true}
              />
            </Project>
          </div>
          <h2 id="games" className="pt-32 pb-8">
            Games
          </h2>
          <div className="flex flex-col items-center gap-12 pb-24">
            <Game
              title="Blitz"
              href="https://remivaughan.itch.io/cs3113-exercise-3"
              image="/thumbnails/blitz.png"
              description="Fast-paced chess-themed shoot-em-up game, inspired by the style of old SNES games"
            />
            <Game
              title="Marble Maize Game"
              href="https://remivaughan.itch.io/cs3113-exercise-2"
              image="/thumbnails/maize.png"
              description="3D obstacle course where you play as a hamster in a ball, inspired by Monkey Ball"
            />
            <Game
              title="Spirit Solver"
              href="https://remivaughan.itch.io/cs3113-exercise-6"
              image="/thumbnails/spiritsolver.png"
              description="Point-and-click detective adventure game, inspired by the style of Paper Mario"
            />
          </div>
        </div>
        <h3 className="pt-20 w-full text-center text-lg font-semibold lg:hidden">
          Contact me
        </h3>
        <Contacts className="pt-4 px-8 justify-between grid grid-cols-3 text-center lg:hidden" />
      </main>
    </>
  );
}

function Project(props: {
  title?: string;
  image?: string;
  skills?: string[];
  children?: React.ReactNode;
}) {
  const title = props.title ?? "Project Title";
  const image =
    props.image ?? "https://dummyimage.com/480x312.png?text=Project%20Image";
  const skills = props.skills ?? ["React", "Typescript", "Tailwind"];

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl  shadow-zinc-950 transition-transform hover:-translate-y-1">
      <div className="w-full h-full flex flex-col justify-between bg-zinc-950">
        <div className="relative">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-50% to-zinc-950" />
          <Image
            className="object-contain w-full"
            src={image}
            alt="Project Image"
            width={480}
            height={312}
          />
        </div>
        <div className="relative"></div>
        <div className="w-full flex justify-between items-end p-2">
          <h3 className="text-3xl font-semibold pb-1">{title}</h3>
          <div className="flex-grow flex flex-row justify-end items-center gap-2">
            {props.children}
          </div>
        </div>
        <div className="flex flex-row justify-left px-2 pb-2 w-full">
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
}

function ProjectLink(props: {
  href: string;
  logo: string;
  name: string;
  highlighted?: boolean;
}) {
  const background = props.highlighted
    ? "bg-gradient-to-tr from-mygrad-0 to-mygrad-100"
    : "bg-transparent border border-white";

  return (
    <a
      href={props.href}
      className={
        "flex flex-row items-center h-8 gap-1.5 p-1.5 rounded-lg " + background
      }
    >
      <Image
        className="object-contain h-full w-full dark:invert dark:brightness-200"
        src={props.logo}
        alt={props.name + " Logo"}
        width={48}
        height={48}
      />
      <p className="pb-0">{props.name}</p>
    </a>
  );
}

function Game(props: {
  title?: string;
  image?: string;
  description?: string;
  href?: string;
}) {
  const image =
    props.image ?? "https://dummyimage.com/144x94.png?text=Game%20Image";

  return (
    <div className="flex w-fit md:w-full flex-col md:flex-row items-center md:items-start relative rounded-xl transition-all md:hover:bg-zinc-950 md:hover:shadow-lg shadow-zinc-950 md:hover:-translate-y-0.5">
      <Image
        className="object-contain h-full w-60 rounded-md md:rounded-none md:rounded-l-md"
        src={image}
        alt="Project Image"
        width={144}
        height={94}
      />
      <div className="pl-5 pr-2 py-2 w-full flex flex-col items-center md:items-start">
        <a className="flex flex-row items-center" href={props.href}>
          <h3 className="text-xl font-semibold inline">{props.title}</h3>
          <Image
            className="object-contain w-6 h-6 inline pl-2 invert"
            src="/icons/newtab.png"
            alt="New Tab Icon"
            width={24}
            height={24}
          />
        </a>
        <p className="w-72 text-center md:w-full md:text-start">
          {props.description}
        </p>
      </div>
    </div>
  );
}
