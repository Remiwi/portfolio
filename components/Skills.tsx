import Image from "next/image";

const skillsMap = new Map<
  string,
  {
    name: string;
    icon: string;
    hoverWidthClass: string;
  }
>();
(() => {
  skillsMap.set("React", {
    name: "React",
    icon: "/icons/react.png",
    hoverWidthClass: "hover:w-24",
  });
  skillsMap.set("Typescript", {
    name: "Typescript",
    icon: "/icons/typescript.png",
    hoverWidthClass: "hover:w-33",
  });
  skillsMap.set("Python", {
    name: "Python",
    icon: "/icons/python.png",
    hoverWidthClass: "hover:w-26",
  });
  skillsMap.set("PostgreSQL", {
    name: "PostgreSQL",
    icon: "/icons/postgresql.png",
    hoverWidthClass: "hover:w-35",
  });
  skillsMap.set("Expo", {
    name: "Expo",
    icon: "/icons/expo.png",
    hoverWidthClass: "hover:w-22",
  });
  skillsMap.set("Sqlite", {
    name: "Sqlite",
    icon: "/icons/sqlite.png",
    hoverWidthClass: "hover:w-24",
  });
  skillsMap.set("React Native", {
    name: "React Native",
    icon: "/icons/react.png",
    hoverWidthClass: "hover:w-37",
  });
  skillsMap.set("Tailwind", {
    name: "Tailwind",
    icon: "/icons/tailwind.png",
    hoverWidthClass: "hover:w-20",
  });
})();

export default function Skills(props: {
  skills: ({ name: string; icon: string; hoverWidthClass: string } | string)[];
}) {
  return (
    <div className="flex flex-row justify-center md:justify-start">
      {props.skills.map((skill, _) => {
        if (typeof skill === "string") {
          skill = skillsMap.get(skill)!;
        }
        return (
          <div key={skill.name} className="group px-2 first:pl-0 last:pr-0">
            <div
              className={
                `flex flex-row p-2 bg-pink-200 dark:bg-indigo-700 rounded-full transition-width duration-500 h-10 w-10
                   bg-fixed dark:bg-gradient-to-r from-indigo-600 to-pink-600
                   2xl:from-65% 2xl:to-75%
                   xl:from-70% xl:to-80%
                   lg:from-75% lg:to-90%
                   md:from-55% md:to-70%
                   from-40% to-60% ` + skill.hoverWidthClass
              }
            >
              <Image
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
        );
      })}
    </div>
  );
}
