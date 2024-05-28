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
    <div className="flex flex-col gap-8 md:fixed md:justify-between md:h-screen">
      <div className="flex flex-col gap-2 pt-20 md:pt-52">
        <h1>
          <a href="/" className="hover:no-underline">
            Remi Vaughan
          </a>
        </h1>
        <p className="text-lg indent-4 pb-24 md:pb-0">
          Your next full-stack developer
        </p>
      </div>
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
      <Contacts className="hidden md:flex pb-24 flex-row gap-8" />
    </div>
  );
}
