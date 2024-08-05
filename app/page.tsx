import "./globals.css";

import Image from "next/image";
import Contacts from "@/components/Contacts";
import Skills from "@/components/Skills";
import MenuServer from "@/components/Menu/MenuServer";
import ProjectLink from "@/components/ProjectLink";
import DarkmodeButton from "@/components/DarkmodeButton";
import { MyModal } from "@/components/MyModal";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="static lg:fixed p-4 pb-1">
        <DarkmodeButton />
      </div>
      <div className="page-container dark:bg-zinc-900 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <Layout>
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
              bachelor&apos;s degree, and you can find me now creating apps and
              websites for myself. I really enjoy the challenge of creating a
              visually interesting and functionally clear user interface that
              fits for whatever project I&apos;m making.
            </p>
            <p>Check out my projects below!</p>
          </div>
          <h2 id="projects" className="pt-32 pb-8">
            Projects
          </h2>
          <div className="flex flex-col gap-16">
            <Project
              title="Temporal"
              description={[
                "Everyone wants to be better at using their time, and the best way to do that is to know how you're using it now.",
                "Think of all the things you want to spent more time doing - exercise, reading, learning, etc. - all of these are projects in your life.",
                "In Temporal, you can track how much time you spend on these projects by running timers. Temporal makes this easy by letting you create",
                "many templates for instantly starting timers, as well as quick access to useful controls for editing your timer on the fly.",
                "Temporal also allows you to sync your data to the cloud, specifically using Toggl Track, a popular time tracking backend service.",
              ].join(" ")}
              image="/thumbnails/timetracker.png"
              skills={[
                "React Native",
                "Typescript",
                "Expo",
                "Tailwind",
                "Sqlite",
              ]}
              id="timetracker"
            >
              <ProjectLink
                href="https://github.com/Remiwi/TimeTracker"
                logo="/icons/github.png"
                name="Repo"
                highlighted={true}
              />
            </Project>
            <Project
              title="Routines App"
              image="/thumbnails/routines.png"
              skills={["React Native", "Typescript", "Expo", "Sqlite"]}
              id="routines"
            >
              <ProjectLink
                href="https://github.com/Remiwi/RoutinesApp"
                logo="/icons/github.png"
                name="Repo"
                highlighted={true}
              />
            </Project>
            <Project
              title="YouCaption"
              image="/thumbnails/youcaption.png"
              skills={["React", "Typescript", "Python", "PostgreSQL"]}
              id="youcaption"
            >
              <ProjectLink
                href="https://github.com/Remiwi/YouCaption"
                logo="/icons/github.png"
                name="Repo"
                highlighted={true}
              />
              {/* <ProjectLink
                href="/YouCaption"
                logo="/icons/newtab.png"
                name="Live"
                highlighted={true}
              /> */}
            </Project>
            <Project
              title="This Portfolio!"
              image="/thumbnails/portfolio.png"
              skills={["React", "Tailwind", "Typescript"]}
              id="portfolio"
            >
              <ProjectLink
                logo="/icons/newtab.png"
                name="Live"
                alert="But you're already here..."
              />
              <ProjectLink
                href="https://github.com/Remiwi/portfolio"
                logo="/icons/github.png"
                name="Repo"
                highlighted={true}
              />
            </Project>
          </div>
          <h2 id="games" className="pt-32 pb-8">
            My Best Games
          </h2>
          <div className="flex flex-col items-center gap-12 pb-24">
            <MiniProject
              title="Blitz"
              href="https://remivaughan.itch.io/cs3113-exercise-3"
              image="/thumbnails/blitz.png"
              description="Fast-paced chess-themed shoot-em-up game, inspired by the style of old SNES games"
            />
            <MiniProject
              title="Marble Maize Game"
              href="https://remivaughan.itch.io/cs3113-exercise-2"
              image="/thumbnails/maize.png"
              description="3D obstacle course where you play as a hamster in a ball, inspired by Monkey Ball"
            />
            <MiniProject
              title="Spirit Solver"
              href="https://remivaughan.itch.io/cs3113-exercise-6"
              image="/thumbnails/spiritsolver.png"
              description="Point-and-click detective adventure game, inspired by the style of Paper Mario"
            />
          </div>
          <h2 id="coursework" className="pt-32 pb-8">
            Misc Coursework
          </h2>
          <div className="flex flex-col items-center gap-12 pb-24">
            <MiniProject
              title="ML-based Connect-4 Opponent AI"
              href="https://github.com/Gaurang-1402/Machine-Learning-final-project"
              description="AI that uses an ML algorithm under the hood to determine the best move to make in Connect-4"
              image="/thumbnails/connect-4.png"
            />
            <MiniProject
              title="Commercial Flight Database Prototype"
              description="Web-app for display and management of user-generated commerical flight data built for Databases course"
              image="/thumbnails/frs.png"
            />
            {/* <MiniProject
              title="Lasyre Synthesizer"
              description="Arduino-based synthesizer that uses an array of lasers to detect finger position and make sound!"
              image="/thumbnails/lasyre.png"
            /> */}
          </div>
        </div>
        <h3 className="pt-20 w-full text-center text-lg font-semibold lg:hidden">
          Contact me
        </h3>
        <Contacts className="pt-4 px-8 justify-between grid grid-cols-3 text-center lg:hidden" />
      </main>
    </Layout>
  );
}

function Project(props: {
  title?: string;
  description?: string;
  image?: string;
  skills?: string[];
  children?: React.ReactNode;
  id?: string;
}) {
  const title = props.title ?? "Project Title";
  const image =
    props.image ?? "https://dummyimage.com/480x312.png?text=Project%20Image";
  const skills = props.skills ?? ["React", "Typescript", "Tailwind"];

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg shadow-zinc-400 dark:shadow-2xl dark:shadow-zinc-950 transition-transform"
      id={props.id}
    >
      <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-zinc-950">
        <div className="relative group">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-60% dark:from-50% dark:to-zinc-950 z-10" />
          <div className="absolute w-full h-full group-hover:opacity-100 opacity-0 transition-all p-4 bg-myhoverbg-100 dark:bg-myhoverbg-0">
            <p className="font-semibold text-black dark:text-white">
              {props.description}
            </p>
          </div>
          <Image
            className="object-contain w-full"
            src={image}
            alt="Project Image"
            width={480}
            height={312}
          />
        </div>
        <div className="relative"></div>
        <div className="shadow-inner shadow-gray-300 dark:shadow-none">
          <div className="w-full flex justify-between items-end p-2">
            <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold pb-1">
              {title}
            </h3>
            <div className="flex-grow flex flex-row justify-end items-center gap-2">
              {props.children}
            </div>
          </div>
          <div className="flex flex-row justify-left px-2 pb-2 w-full">
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniProject(props: {
  title?: string;
  image?: string;
  description?: string;
  href?: string;
}) {
  const image = props.image ?? "/thumbnails/dummy.png";

  return (
    <div
      className="flex w-fit md:w-full flex-col md:flex-row items-center md:items-start relative rounded-xl transition-all-but-color box-content
      hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-xl shadow-zinc-400
      dark:hover:bg-zinc-950 dark:hover:shadow-lg dark:shadow-zinc-950 dark:hover:border-transparent"
    >
      <Image
        className="object-contain h-full w-60 rounded-md md:rounded-none md:rounded-l-md"
        src={image}
        alt="Project Image"
        width={144}
        height={94}
      />
      <div className="pl-5 pr-2 py-2 w-full flex flex-col items-center md:items-start">
        {props.href && (
          <a className="flex flex-row items-center" href={props.href}>
            <h3 className="text-xl font-semibold inline">{props.title}</h3>
            <Image
              className="object-contain w-6 h-6 inline pl-2 dark:invert"
              src="/icons/newtab.png"
              alt="New Tab Icon"
              width={24}
              height={24}
            />
          </a>
        )}
        {!props.href && (
          <h3 className="text-xl font-semibold inline">{props.title}</h3>
        )}
        <p className="w-72 text-center md:w-full md:text-start">
          {props.description}
        </p>
      </div>
    </div>
  );
}
