"use client";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
declare global {
  interface Window {
    handleCredentialResponse?: any;
  }
}
import Cookies from "js-cookie";

const login = async () => {
  Cookies.set("user-signedIn", "true");
  Cookies.set("user-username", "Default");
  if (Cookies.get("user-language") === undefined) {
    Cookies.set("user-language", "English");
  }
};

export default function Gsignin() {
  const queryClient = useQueryClient();

  if (typeof window !== "undefined") {
    window.handleCredentialResponse = handleCredentialResponse;
  }

  // Must insert google button script on every component render
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  //callback for google sign in
  async function handleCredentialResponse(response: any) {
    await login();

    queryClient.setQueryData(["username"], { signedIn: true, username: "..." });
    queryClient.invalidateQueries({ queryKey: ["username"] });
    queryClient.invalidateQueries({ queryKey: ["language"] });
  }

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="258135953958-mgpvgvkajfc6gv30k6ldbih4v08deq45.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_blue"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}
