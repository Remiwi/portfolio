"use client";

import { useEffect, useState, useRef } from "react";

const highlighterExtraWidth = 32;

export default function MenuClient(props: {
  items: { id: string; name: string }[];
  section_vertical_offset?: number;
}) {
  const [selected, setSelected] = useState(0);
  const [itemElems, setItemElems] = useState<
    {
      menuItem: HTMLAnchorElement | null;
      content: HTMLElement | null;
    }[]
  >([{ menuItem: null, content: null }]);
  const highlighterTop = -0.25 + 3 * selected;

  useEffect(() => {
    setItemElems(
      props.items.map((item) => ({
        menuItem: document.getElementById("a-" + item.id) as HTMLAnchorElement,
        content: document.getElementById(item.id),
      }))
    );
  }, [props.items]);

  useEffect(() => {
    console.log(props.section_vertical_offset);
    const scrollListener = (_: any) => {
      let new_selected = 0;
      for (let i = 0; i < props.items.length; i++) {
        if (itemElems[i] === undefined) {
          console.log(`itemElems[${i}] is undefined`);
        }
        const elem = itemElems[i].content;
        if (
          elem &&
          window.scrollY >
            elem.offsetTop - (props.section_vertical_offset ?? 100)
        ) {
          new_selected = i;
        }
      }
      setSelected(new_selected);
    };

    window.addEventListener("scroll", scrollListener, false);
    return () => {
      window.removeEventListener("scroll", scrollListener, false);
    };
  }, [setSelected, itemElems]);

  return (
    <div
      className={`absolute w-10 h-10 bg-blue-100 dark:bg-gradient-to-r from-indigo-600 to-pink-600 -z-10 -left-1 transition-all duration-300
          `}
      style={{
        top: `${highlighterTop}rem`,
        width:
          highlighterExtraWidth +
          (itemElems[selected].menuItem?.offsetWidth ?? -highlighterExtraWidth),
      }}
    />
  );
}
