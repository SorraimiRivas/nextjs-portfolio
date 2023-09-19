import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorraimi | Front-End Developer",
  description:
    "I'm a Front-End Developer based in the Dominican Republic, passionate about crafting seamless digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-slate-950 bg-gray-50 bg-fixed bg-no-repeat text-black dark:text-white h-[1500px] pt-28 sm:36`}
      >
        <div
          className="h-[400px] w-[400px] bg-emerald-400/30 absolute -z-10 
        blur-[10rem] rounded-full right-0"
        ></div>
        <div
          className="h-[200px] w-[200px] bg-violet-600 absolute -z-10 
        blur-[10rem] rounded-full bottom-0 left-0"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
