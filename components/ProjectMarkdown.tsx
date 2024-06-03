import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Skills from "@/components/Skills";
import StringToID from "@/util/StringToID";

function MDImage(props: {
  alt: string;
  src: string;
  width: number;
  height: number;
}) {
  const image_path = "/markdown" + props.src.slice(1);
  return (
    <div className="w-full flex flex-row justify-center py-2 px-8">
      <div className="shrink rounded-2xl border border-blue-200 bg-blue-200 dark:border-white dark:bg-slate-400 p-0.5">
        <div className="shrink rounded-xl overflow-clip text-black">
          <Image
            {...props}
            src={image_path}
            className="flex flex-col justify-center text-center"
          />
        </div>
      </div>
    </div>
  );
}

function MDSkills(props: { children: React.ReactNode }) {
  const tag_data = JSON.parse(props.children!.toString());
  return (
    <div className="pb-6 flex flex-row justify-center">
      <Skills skills={tag_data} gradient_type="proj" />
    </div>
  );
}

function MDHeader(props: { children: React.ReactNode }) {
  return <h1 className="text-6xl font-bold w-full -mt-8">{props.children}</h1>;
}

function MDHeader2(props: { children: React.ReactNode }) {
  if (props.children === undefined || props.children === null) return <></>;
  return (
    <h2 id={StringToID(props.children.toString())} className="pt-6">
      {props.children}
    </h2>
  );
}

function MDPre(props: { children: React.ReactNode }) {
  return (
    <div className="px-1 py-2">
      <pre className="bg-blue-100 border-blue-200 dark:text-pink-400 dark:bg-zinc-950 dark:border-black p-1 rounded-md border">
        {props.children}
      </pre>
    </div>
  );
}

function MDBlockquote(props: { children: React.ReactNode }) {
  return (
    <div className="p-1">
      <blockquote className="border-l-4 border-blue-200 dark:border-pink-600 p-2 bg-blue-50 dark:bg-zinc-950 rounded-md">
        {props.children}
      </blockquote>
    </div>
  );
}

function MDp(props: { children: React.ReactNode }) {
  // TODO: Figure out how to make img not be child of p???
  return <p className="text-lg pb-2">{props.children}</p>;
}

function MDa(props: { children: React.ReactNode; href: string }) {
  if (props.children === undefined || props.children === null) return <></>;
  const title = props.children.toString();

  if (title === "!gh") {
    return (
      <div className="flex flex-row items-center justify-center gap-1 pr-8">
        <Image
          src="/icons/github.png"
          alt="Github Icon"
          width={100}
          height={100}
          className="w-6 h-6 dark:invert dark:brightness-200"
        />
        <a href={props.href} target="_blank">
          GitHub
        </a>
      </div>
    );
  }

  return (
    <a
      className="underline text-blue-500 hover:text-blue-700 visited:text-pink-800 visited:hover:text-pink-500 dark:text-indigo-500 dark:hover:text-indigo-700"
      href={props.href}
    >
      {title}
    </a>
  );
}

export default function ProjectMarkdown(props: { children: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: MDImage,
            props: {
              width: 99999,
              height: 99999,
            },
          },
          h6: {
            component: MDSkills,
          },
          h1: {
            component: MDHeader,
          },
          h2: {
            component: MDHeader2,
          },
          p: {
            component: MDp,
          },
          code: {
            component: "code",
            props: {
              className:
                "bg-blue-100 border-blue-200 dark:text-pink-400 dark:bg-zinc-950 dark:border-black p-1 rounded-md border",
            },
          },
          pre: {
            component: MDPre,
          },
          ul: {
            component: "ul",
            props: {
              className: "list-disc pl-10 py-2 text-lg",
            },
          },
          ol: {
            component: "ol",
            props: {
              className: "list-decimal pl-10 py-2",
            },
          },
          li: {
            component: "li",
            props: {
              className: "pl-2 pt-2",
            },
          },
          blockquote: {
            component: MDBlockquote,
          },
          a: {
            component: MDa,
          },
        },
      }}
    >
      {props.children}
    </Markdown>
  );
}
