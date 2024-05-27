export default function StringToID(string: string):string {
  return string.toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll(/[^a-z0-9-]/g, "");
}