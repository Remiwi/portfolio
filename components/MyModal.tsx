"use client";
import { useEffect } from "react";
import Image from "next/image";

export function MyModal(props: {
  title: string;
  text: string;
  visible: boolean;
  close: () => void;
}) {
  // Close when esc or enter is pressed
  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") props.close();
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  });

  return (
    <div className={props.visible ? "" : "hidden"}>
      <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50 backdrop-blur-sm">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg dark:shadow-zinc-950 shadow-zinc-500 w-1/3">
          <div className="w-full h-2 bg-blue-200 dark:bg-gradient-to-r from-mygrad-0 to-mygrad-100 rounded-t-lg" />
          <div className="p-4 pt-2">
            <div className="flex flex-row justify-between">
              <h2 className="pt-4 pl-4 pb-2">{props.title}</h2>
              <div
                className="bg-white dark:bg-zinc-900 shadow-sm shadow-zinc-500 dark:shadow-zinc-950 w-8 h-8 rounded-lg p-0.5 select-none hover:cursor-pointer"
                onClick={() => props.close()}
              >
                <Image
                  className="dark:invert dark:brightness-200"
                  src="/icons/close.png"
                  alt="X"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <p className="px-4 pb-4">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
