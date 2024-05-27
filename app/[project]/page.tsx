import Menu from "@/components/Menu/MenuServer";
import { promises as fs } from "fs";
import ProjectMarkdown from "@/components/ProjectMarkdown";
import path from "path";
import StringToID from "@/util/StringToID";

export default async function Page({
  params,
}: {
  params: { project: string };
}) {
  try {
    const file_contents = await fs.readFile(
      path.join(process.cwd(), "public/markdown", `${params.project}.md`),
      "utf8"
    );
    const level2headers = file_contents
      .split("\n")
      .filter((line) => line.startsWith("## "));
    const items = level2headers.map((line) => {
      const header = line.slice(3);
      return { name: header, id: StringToID(header) };
    });

    return (
      <>
        <Menu items={items} />
        <main
          id="aboutme"
          className="min-h-screen grid grid-cols-1 md:grid-cols-2 pb-8 md:pb-24 pt-0 md:pt-48"
        >
          <div
            className="hidden md:block"
            id="Dummy div to make space in grid"
          ></div>
          <ProjectMarkdown>{file_contents}</ProjectMarkdown>
        </main>
      </>
    );
  } catch (e: any) {
    return <h1>404 - Page not found: {e.toString()}</h1>;
  }
}
