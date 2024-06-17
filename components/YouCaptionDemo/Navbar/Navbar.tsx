"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Gsignin from "../Auth/Gsignin";
import Cookies from "js-cookie";

const getLoggedInUserData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    signedIn: Cookies.get("user-signedIn") === "true",
    username: Cookies.get("user-username"),
  };
};

const logoutUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  Cookies.set("user-signedIn", "false");
};

export default function Navbar() {
  const queryClient = useQueryClient();

  const usernameQuery = useQuery({
    queryKey: ["username"],
    queryFn: () => getLoggedInUserData(),
  });
  const logoutMutation = useMutation({
    mutationKey: ["username"],
    mutationFn: logoutUser,
    onSuccess: () => {
      usernameQuery.refetch();
      ``;
      queryClient.resetQueries({ queryKey: ["language"] });
      queryClient.resetQueries({ queryKey: ["username"] });
      queryClient.invalidateQueries();
    },
  });

  const signedIn = usernameQuery.isSuccess && usernameQuery.data.signedIn;
  const username = signedIn ? usernameQuery.data.username : "...";

  return (
    <div className={styles.navbar}>
      <Link href="/YouCaption" style={{ textDecoration: "none" }}>
        <h1>
          <mark>You</mark>Caption
        </h1>
      </Link>
      {usernameQuery.isSuccess && (
        <div>
          <p>{signedIn ? "Hello, " + username + "!" : "Hello, stranger!"}</p>
          {signedIn && (
            <Link
              href="/YouCaption/settings"
              style={{ textDecoration: "none" }}
            >
              <button className={styles.settings}>
                <Image
                  src="/YouCaptionIcons/settings.png"
                  alt="settings image"
                  width={500}
                  height={500}
                />
              </button>
            </Link>
          )}
          {signedIn && (
            <button
              onClick={() => {
                logoutMutation.mutate();
              }}
            >
              Sign out
            </button>
          )}
          {!signedIn && <Gsignin />}
        </div>
      )}
    </div>
  );
}
