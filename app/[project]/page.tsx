import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
import ProjectMarkdown from "@/components/ProjectMarkdown";

export default async function Page({
  params,
}: {
  params: { project: string };
}) {
  try {
    const file_contents = await fs.readFile(
      path.join(
        serverRuntimeConfig.PROJECT_ROOT,
        `/public/markdown/${params.project}.md`
      ),
      "utf8"
    );
    return <ProjectMarkdown>{file_contents}</ProjectMarkdown>;
  } catch (e: any) {
    return <h1>404 - Page not found: {e.toString()}</h1>;
  }
}
