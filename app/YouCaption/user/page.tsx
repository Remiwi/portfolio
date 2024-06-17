"use client";

import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

import Subtable, {
  SubtableData,
} from "@/components/YouCaptionDemo/Subtable/Subtable";
import DATA from "@/components/YouCaptionDemo/Subtable/DummyData";

export default function User() {
  // route parameters
  const params = useSearchParams();
  const router = useRouter();
  const u = params.get("u");
  if (u === null || u === undefined || u === "") {
    router.push("/YouCaption/");
    return null;
  }

  // get follower count
  const followersQuery = useQuery({
    queryKey: ["followers", u],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("following-" + u) === undefined) {
        return 0;
      }
      return 1;
    },
  });
  const followers = followersQuery.isSuccess ? followersQuery.data : "?";

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
  const userLang = langaugeQuery.isSuccess
    ? langaugeQuery.data
    : "your language";

  // get subtitles
  const subtitlesQuery = useQuery({
    queryKey: ["subtitles", "author", u],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return DATA.filter((s) => s.author === u);
    },
  });
  const subtitles: SubtableData = subtitlesQuery.isSuccess
    ? subtitlesQuery.data
    : [];

  // get follow info
  const qc = useQueryClient();

  const followQuery = useQuery({
    queryKey: ["follow", u],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("User not signed in");
      }
      return {
        isSelf: Cookies.get("user-username") === u,
        following: Cookies.get("following-" + u) === "true",
      };
    },
  });
  const isFollowing = followQuery.isSuccess
    ? followQuery.data.following
    : false;

  const followMutation = useMutation({
    mutationKey: ["follow", u],
    mutationFn: async (follow: boolean) => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("User not signed in");
      }
      Cookies.set("following-" + u, follow.toString());
      const followList = JSON.parse(
        Cookies.get("follow-list") ?? "[]"
      ) as string[];
      if (follow) {
        followList.push(u);
      } else {
        const i = followList.indexOf(u);
        if (i !== -1) {
          followList.splice(i, 1);
        }
      }
      Cookies.set("follow-list", JSON.stringify(followList));
    },
    onMutate: () => {
      qc.setQueryData(["follow", u], {
        isSelf: false,
        following: !isFollowing,
      });
      qc.setQueryData(
        ["followers", u],
        (Number(followers) + (isFollowing ? -1 : 1)).toString()
      );
    },
  });

  // stats from data
  const totalSubs = subtitles.length;
  const subsInYourLang = subtitles.filter(
    (s) => s.language.toLowerCase() === userLang.toLowerCase()
  ).length;
  const avgRating =
    subtitles.reduce((acc, s) => acc + s.rating.averageRating, 0) / totalSubs;
  const avgRatingInYourLang =
    subtitles
      .filter((s) => s.language.toLowerCase() === userLang.toLowerCase())
      .reduce((acc, s) => acc + s.rating.averageRating, 0) / subsInYourLang;

  return (
    <div className={styles.column}>
      <div className={styles.userHeader}>
        <div className={styles.fakePFP}>
          <p>{u[0]}</p>
        </div>
        <div className={styles.headerRows}>
          <div className={styles.usernameRow}>
            <p>{u}</p>
            {langaugeQuery.isSuccess &&
              followQuery.isSuccess &&
              !followQuery.data.isSelf && (
                <button onClick={() => followMutation.mutate(!isFollowing)}>
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
          </div>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <p>{totalSubs} subtitles</p>
              {langaugeQuery.isSuccess && (
                <p>
                  {subsInYourLang} in {userLang}
                </p>
              )}
            </div>
            <div className={styles.stat}>
              <p>{avgRating.toFixed(1)} avg rating</p>
              {langaugeQuery.isSuccess && (
                <p>
                  {avgRatingInYourLang.toFixed(1)} in {userLang}
                </p>
              )}
            </div>
            <p>{followers} followers</p>
          </div>
        </div>
      </div>
      <Subtable subtitles={subtitles} page="author" />
    </div>
  );
}
