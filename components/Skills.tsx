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
  skillsMap.set("C#", {
    name: "C#",
    icon: "/icons/csharp.png",
    hoverWidthClass: "hover:w-20",
  });
  skillsMap.set("Unity", {
    name: "Unity",
    icon: "/icons/unity.png",
    hoverWidthClass: "hover:w-24",
  });
})();

export default function Skills(props: {
  skills: ({ name: string; icon: string; hoverWidthClass: string } | string)[];
}) {
  const gradient_colors = [
    ["dark:bg-mygrad-0 ", "dark:bg-mygrad-50 "],
    ["dark:bg-mygrad-0 ", "dark:bg-mygrad-50 ", "dark:bg-mygrad-100 "],
    [
      "dark:bg-mygrad-0 ",
      "dark:bg-mygrad-30 ",
      "dark:bg-mygrad-70 ",
      "dark:bg-mygrad-100 ",
    ],
    [
      "dark:bg-mygrad-0 ",
      "dark:bg-mygrad-20 ",
      "dark:bg-mygrad-40 ",
      "dark:bg-mygrad-60 ",
      "dark:bg-mygrad-80 ",
      "dark:bg-mygrad-100 ",
    ],
  ];

  return (
    <div className="flex flex-row justify-center md:justify-start">
      {props.skills.map((skill, i) => {
        if (typeof skill === "string") {
          skill = skillsMap.get(skill)!;
        }
        return (
          <div key={skill.name} className="group px-2 first:pl-0 last:pr-0">
            <div
              className={
                `flex flex-row p-2 bg-pink-200 rounded-full transition-width duration-500 h-10 w-10 ` +
                gradient_colors[props.skills.length - 2][i] +
                skill.hoverWidthClass
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
