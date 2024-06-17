"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FollowTable from "@/components/YouCaptionDemo/FollowTable/FollowTable";
import SubscriptionTable from "@/components/YouCaptionDemo/SubscriptionTable/SubscriptionTable";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type NotifSettings = {
  getNotifs: 0 | 1 | 2 | null;
  onlyLangMatch: boolean;
};

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");

  // Get username
  const usernameQuery = useQuery({
    queryKey: ["username"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return { username: "", signedIn: false };
      }
      return { username: Cookies.get("user-username"), signedIn: true };
    },
  });
  const currentUsername = usernameQuery.isSuccess
    ? usernameQuery.data.username
    : "...";

  // Update username
  const { mutate: mutateUsername } = useMutation({
    mutationFn: async (username: string) => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("No Session");
      }
      Cookies.set("user-username", username);
    },
    onSuccess: () => {
      queryClient.setQueryData(["username"], {
        username: username,
        signedIn: true,
      });
    },
  });

  // Get language
  const languageQuery = useQuery({
    queryKey: ["language"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return "";
      }
      return Cookies.get("user-language") || "";
    },
  });
  const currentLanguage = languageQuery.isSuccess ? languageQuery.data : "";

  // Update language
  const { mutate: mutateLanguage } = useMutation({
    mutationFn: async (language: string) => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("No Session");
      }
      Cookies.set("user-language", language);
    },
    onSuccess: () => {
      queryClient.setQueryData(["language"], language);
    },
  });

  // Get follow list
  const followQuery = useQuery({
    queryKey: ["followList"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return { followingList: [] };
      }
      const followList = JSON.parse(
        Cookies.get("follow-list") || "[]"
      ) as string[];
      return {
        followingList: followList.map((v) => {
          return { username: v };
        }),
      };
    },
  });
  const following = followQuery.isSuccess ? followQuery.data.followingList : [];

  // Get subscription list
  const savedQuery = useQuery({
    queryKey: ["saved"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return { savedList: [] };
      }
      const savedList = JSON.parse(
        Cookies.get("saved-list") || "[]"
      ) as string[];
      return {
        savedList: savedList.map((v) => {
          return { videoID: v };
        }),
      };
    },
  });
  const savedVideos = savedQuery.isSuccess ? savedQuery.data.savedList : [];

  // Get notification settings
  const [followingNotifState, setFollowingNotifState] = useState<NotifSettings>(
    {
      getNotifs: null,
      onlyLangMatch: false,
    }
  );
  const followingNotifQuery = useQuery({
    queryKey: ["followingNotifSettings"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return { getNotifs: null, onlyLangMatch: false } as NotifSettings;
      }
      return {
        getNotifs: parseInt(Cookies.get("following-notif") || "0"),
        onlyLangMatch: Cookies.get("following-lang-match") === "true",
      } as NotifSettings;
    },
  });
  if (followingNotifQuery.isSuccess && followingNotifState.getNotifs === null) {
    setFollowingNotifState(followingNotifQuery.data);
  }
  const followingNotifMutation = useMutation({
    mutationKey: ["followingNotifSettings"],
    mutationFn: async (settings: NotifSettings) => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("No Session");
      }
      Cookies.set("following-notif", settings.getNotifs?.toString() || "0");
      Cookies.set("following-lang-match", settings.onlyLangMatch.toString());
    },
  });

  const [videoNotifState, setVideoNotifState] = useState<NotifSettings>({
    getNotifs: null,
    onlyLangMatch: false,
  });
  const videoNotifQuery = useQuery({
    queryKey: ["videoNotifSettings"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        return { getNotifs: null, onlyLangMatch: false } as NotifSettings;
      }
      return {
        getNotifs: parseInt(Cookies.get("video-notif") || "0"),
        onlyLangMatch: Cookies.get("video-lang-match") === "true",
      } as NotifSettings;
    },
  });
  if (videoNotifQuery.isSuccess && videoNotifState.getNotifs === null) {
    setVideoNotifState(videoNotifQuery.data);
  }
  const videoNotifMutation = useMutation({
    mutationKey: ["videoNotifSettings"],
    mutationFn: async (settings: NotifSettings) => {
      await new Promise((r) => setTimeout(r, 500));
      if (Cookies.get("user-signedIn") !== "true") {
        throw new Error("No Session");
      }
      Cookies.set("video-notif", settings.getNotifs?.toString() || "0");
      Cookies.set("video-lang-match", settings.onlyLangMatch.toString());
    },
  });

  if (usernameQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (usernameQuery.data!.signedIn === false) {
    router.push("/YouCaption/");
    return <h1>Redirecting...</h1>;
  }

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <div className={styles.grid}>
        <p className={styles.langText}>Change username:</p>
        <div className={styles.langPrompt}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder={currentUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <p className={styles.langText}>Preferred Language:</p>
        <div className={styles.langPrompt}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder={currentLanguage}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
        </div>
        <FollowTable users={following} />
        <FakeForm
          text="Get notified when an author you follow publishes?"
          thirdOptionText="Only for videos I've saved"
          state={followingNotifState}
          setState={setFollowingNotifState}
        />
        <SubscriptionTable videos={savedVideos} />
        <FakeForm
          text="Get notified when a saved video gets a new post?"
          thirdOptionText="Only from authors I follow"
          state={videoNotifState}
          setState={setVideoNotifState}
        />
        <div />
        <div className={styles.submitButton}>
          <button
            onClick={() => {
              if (username !== "") {
                mutateUsername(username);
              }
              if (language !== "") {
                mutateLanguage(language);
              }
              if (followingNotifState.getNotifs !== null) {
                followingNotifMutation.mutate(followingNotifState);
              }
              if (videoNotifState.getNotifs !== null) {
                videoNotifMutation.mutate(videoNotifState);
              }
              setTimeout(() => window.location.reload(), 500);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

type FakeFormProps = {
  text: string;
  thirdOptionText: string;
  state: NotifSettings;
  setState: (state: NotifSettings) => void;
};

function FakeForm({ text, thirdOptionText, state, setState }: FakeFormProps) {
  return (
    <div className={styles.fakeForm}>
      <p>{text}</p>
      <div className={styles.options}>
        <div
          className={styles.option}
          onClick={() =>
            setState({
              getNotifs: 0,
              onlyLangMatch: state.onlyLangMatch,
            })
          }
        >
          <div className={styles.circleOutside}>
            {state.getNotifs === 0 && <div className={styles.circleInside} />}
          </div>
          <p>No</p>
        </div>
        <div
          className={styles.option}
          onClick={() =>
            setState({
              getNotifs: 1,
              onlyLangMatch: state.onlyLangMatch,
            })
          }
        >
          <div className={styles.circleOutside}>
            {state.getNotifs === 1 && <div className={styles.circleInside} />}
          </div>
          <p>Yes</p>
        </div>
        <div
          className={styles.option}
          onClick={() =>
            setState({
              getNotifs: 2,
              onlyLangMatch: state.onlyLangMatch,
            })
          }
        >
          <div className={styles.circleOutside}>
            {state.getNotifs === 2 && <div className={styles.circleInside} />}
          </div>
          <p>{thirdOptionText}</p>
        </div>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          setState({
            getNotifs: state.getNotifs,
            onlyLangMatch: !state.onlyLangMatch,
          })
        }
      >
        <div className={styles.squareOutside}>
          {state.onlyLangMatch && <div className={styles.squareInside} />}
        </div>
        <p>Only posts in my preferred language</p>
      </div>
    </div>
  );
}
