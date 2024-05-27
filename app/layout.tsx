import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getCookies } from "next-client-cookies/server";
import { CookiesProvider } from "next-client-cookies/server";
import Menu from "@/components/Menu/MenuServer";
import DarkmodeButton from "@/components/DarkmodeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remi Vaughan",
  description: "Remi Vaughan's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = getCookies();

  return (
    <CookiesProvider>
      <html
        lang="en"
        className={
          "scroll-smooth " + (cookies.get("theme") === "dark" ? "dark" : "")
        }
      >
        <body className={inter.className + " dark:bg-zinc-900"}>
          <div>
            <div className="static md:fixed p-4 pb-1">
              <DarkmodeButton />
            </div>
            <div className="page-container dark:bg-zinc-900 dark:text-zinc-300">
              {children}
            </div>
          </div>
        </body>
      </html>
    </CookiesProvider>
  );
}
