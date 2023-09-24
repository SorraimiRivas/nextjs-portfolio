import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";
import ThemeSwitchButton from "@/components/common/ThemeSwitchButton";
import ThemeContextProvider from "@/context/ThemeContext";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} dark:bg-gradient-to-r from-slate-900 to-slate-950 bg-gray-50 bg-fixed bg-no-repeat text-black 
        dark:text-white  pt-28 sm:36`}
      >
        <div
          className="h-[800px] w-[800px] bg-emerald-400/40 absolute -z-10 
        blur-[10rem] rounded-full right-0 top-0"
        ></div>
        <div
          className="h-[600px] w-[600px] bg-violet-600/40 absolute -z-10 
        blur-[10rem] rounded-full bottom-0 left-0 top-0"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
          <ThemeSwitchButton />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
