"use client";

import { useState } from "react";
import Image from "next/image";
import { MyModal } from "./MyModal";

export default function ProjectLink(props: {
  href?: string;
  logo: string;
  name: string;
  highlighted?: boolean;
  alert?: string;
  hideWhenSmall?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const background = props.highlighted
    ? "bg-blue-200 shadow-md shadow-zinc-400 dark:shadow-none dark:bg-gradient-to-tr from-mygrad-0 to-mygrad-100"
    : "bg-transparent border border-slate-400 dark:border-white";

  return (
    <div className={props.hideWhenSmall ? "invisible xs:visible" : ""}>
      {props.alert !== undefined && (
        <MyModal
          title={props.alert}
          text=""
          visible={modalOpen}
          close={() => setModalOpen(false)}
        />
      )}
      <a
        href={props.href}
        onClick={
          props.alert !== undefined ? () => setModalOpen(true) : undefined
        }
        className={
          "flex flex-row items-center h-8 gap-1.5 p-1.5 rounded-lg cursor-pointer hover:scale-105 transition-all-but-color " +
          background
        }
        target="_blank"
      >
        <Image
          className="object-contain h-full w-full dark:invert dark:brightness-200"
          src={props.logo}
          alt={props.name + " Logo"}
          width={48}
          height={48}
        />
        <p className="pb-0">{props.name}</p>
      </a>
    </div>
  );
}
