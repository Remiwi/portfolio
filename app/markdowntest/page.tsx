import { promises as fs } from "fs";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Skills from "@/components/Skills";

function MDImage(props: {
  alt: string;
  src: string;
  width: number;
  height: number;
}) {
  const image_path = "/markdown" + props.src.slice(1);
  return (
    <div className="w-full flex flex-row justify-center py-4">
      <Image {...props} src={image_path} />
    </div>
  );
}

function MDSkills(props: { children: React.ReactNode }) {
  const tag_data = JSON.parse(props.children!.toString());
  return (
    <div className="pb-6 flex flex-row justify-center">
      <Skills skills={tag_data} />
    </div>
  );
}

function MDHeader(props: { children: React.ReactNode }) {
  return (
    <h1 className="text-6xl font-bold text-center w-full pb-6">
      {props.children}
    </h1>
  );
}

export default async function Page() {
  const file_contents = await fs.readFile(
    process.cwd() + "/public/markdown/test.md",
    "utf8"
  );

  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: MDImage,
            props: {
              width: 200,
              height: 200,
            },
          },
          h6: {
            component: MDSkills,
          },
          h1: {
            component: MDHeader,
          },
          p: {
            component: "p",
            props: {
              className: "text-lg",
            },
          },
        },
      }}
    >
      {file_contents}
    </Markdown>
  );
}
