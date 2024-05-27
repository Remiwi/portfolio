// import { promises as fs } from "fs";
// import ProjectMarkdown from "@/components/ProjectMarkdown";

// export default async function Page({
//   params,
// }: {
//   params: { project: string };
// }) {
//   try {
//     const file_contents = await fs.readFile(
//       process.cwd() + `/markdown/${params.project}.md`,
//       "utf8"
//     );
//     return <ProjectMarkdown>{file_contents}</ProjectMarkdown>;
//   } catch (e: any) {
//     return <h1>404 - Page not found: {e}</h1>;
//   }
// }

export default async function Page({
  params,
}: {
  params: { project: string };
}) {
  return <h1>404 - Page not found</h1>;
}
