import Contacts from "@/components/Contacts";
import MenuClient from "./MenuClient";

export default function MenuServer(props: {
  items?: { id: string; name: string }[];
  section_vertical_offset?: number;
}) {
  let items: { id: string; name: string }[] = [];
  if (props.items === undefined) {
    items = [
      { id: "aboutme", name: "About Me" },
      { id: "projects", name: "Projects" },
      { id: "games", name: "Games" },
    ];
  } else {
    items = props.items;
  }

  return (
    <div className="relative hidden md:flex flex-col gap-4 text-2xl">
      {items.length !== 0 ? (
        <MenuClient
          items={items}
          section_vertical_offset={props.section_vertical_offset}
        />
      ) : (
        <></>
      )}
      {items.map((item, i) => (
        <a
          className="w-fit"
          href={"#" + item.id}
          id={"a-" + item.id}
          key={item.id}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
