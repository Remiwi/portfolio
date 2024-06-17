"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import Subtable, {
  SubtableData,
} from "@/components/YouCaptionDemo/Subtable/Subtable";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import DATA from "@/components/YouCaptionDemo/Subtable/DummyData";

export default function Video() {
  const params = useSearchParams();
  const router = useRouter();
  const v = params.get("v");
  if (v === null || v === undefined || v === "") {
    router.push("/YouCaption/");
    return null;
  }

  // get language
  const langaugeQuery = useQuery({
    queryKey: ["language"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("User not signed in");
      }
      return Cookies.get("user-language") || "no language defined (IMPL ERROR)";
    },
  });

  console.log(langaugeQuery.data);
  const userLang = langaugeQuery.isSuccess
    ? langaugeQuery.data
    : "your language";

  // get subtitles
  const subtitlesQuery = useQuery({
    queryKey: ["subtitles", "video", v],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return DATA;
    },
  });
  const subtitles: SubtableData = subtitlesQuery.isSuccess
    ? subtitlesQuery.data
    : [];

  // creating a new timeline entry for the user
  const [showModal, setShowModal] = useState(false);
  const [isOverwrite, setIsOverwrite] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const handleOverwrite = () => {
    setShowModal(false);
    setIsOverwrite(true);
    createTimeline();
    router.push(`/YouCaption/editor?v=${v}`);
  };

  const handleBack = () => {
    setShowModal(false);
  };

  const createTimeline = () => {
    alert(
      "Our subtitle creator heavily involved the backend, which I don't have as this is just a demo on my portfolio website." +
        " Since the subtitle creator isn't something I directly contributed to, I likely won't be porting it. Sorry!"
    );
  };

  const handleSubmit = () => {
    createTimeline();
  };

  // saved video info
  const qc = useQueryClient();

  const savedVideoQuery = useQuery({
    queryKey: ["savedVideo", v],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("User not signed in");
      }
      return Cookies.get("saved-" + v) === "true";
    },
  });
  const isSaved: boolean | undefined = savedVideoQuery.isSuccess
    ? savedVideoQuery.data
    : undefined;

  const savedVideoMutation = useMutation({
    mutationKey: ["savedVideo", v],
    mutationFn: async (save: boolean) => {
      await new Promise((r) => setTimeout(r, 500));
      Cookies.set("saved-" + v, save.toString());
      const savedList = JSON.parse(
        Cookies.get("saved-list") ?? "[]"
      ) as string[];
      if (save) {
        savedList.push(v);
      } else {
        const i = savedList.indexOf(v);
        if (i !== -1) {
          savedList.splice(i, 1);
        }
      }
      Cookies.set("saved-list", JSON.stringify(savedList));
    },
    onSuccess: (_, save) => {
      qc.setQueryData(["savedVideo", v], save);
    },
  });

  return (
    <>
      <div className={styles.columns}>
        <div className={styles.videoColumn}>
          <YoutubeEmbed embedId={v} />
          <p>Total Subtitles: {subtitles.length}</p>
          {langaugeQuery.isSuccess && (
            <p>
              Subs in {userLang}:{" "}
              {
                subtitles.filter(
                  (s) => s.language.toLowerCase() === userLang.toLowerCase()
                ).length
              }
            </p>
          )}
          {langaugeQuery.isSuccess && (
            <p>
              Highest rating for your langauge:{" "}
              {Math.max(
                ...subtitles
                  .filter(
                    (s) => s.language.toLowerCase() === userLang.toLowerCase()
                  )
                  .map((s) => parseFloat(s.rating.averageRating.toFixed(1)))
              )}
            </p>
          )}
          {langaugeQuery.isSuccess && (
            <button onClick={handleSubmit}>Make subs!</button>
          )}
          {langaugeQuery.isSuccess &&
            (isSaved === undefined ? (
              <button onClick={() => {}}>...</button>
            ) : (
              <button onClick={() => savedVideoMutation.mutate(!isSaved)}>
                {isSaved ? "Unsave" : "Save"} video
              </button>
            ))}
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.modalcontent}>
                <p> will style later i think, sorry </p>
                <h1>{warningMessage}</h1>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleOverwrite}>
                  Overwrite Existing Timeline
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.subsColumn}>
          <Subtable subtitles={subtitles} page="video" />
        </div>
      </div>
    </>
  );
}

type YoutubeEmbedProps = {
  embedId: string;
};

const YoutubeEmbed = (props: YoutubeEmbedProps) => (
  <iframe
    className={styles.embed}
    src={`https://www.youtube.com/embed/${props.embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
