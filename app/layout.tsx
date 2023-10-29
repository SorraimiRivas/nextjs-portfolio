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
        className={`${inter.className} dark:bg-gradient-to-tr from-[#191970] to-slate-950  bg-gray-50 bg-fixed bg-no-repeat text-black 
        dark:text-white  pt-28 sm:pt-36`}
      >
        <div className="h-[15rem] w-[20rem] absolute -z-10  bg-[#dc2626]/40 blur-[10rem] rounded-full left-0 top-0 xl:left-[400px]"></div>
        <div
          className="h-[15rem] w-[20rem] absolute -z-10 bg-[#00FFFF]/40
          blur-[10rem] rounded-full bottom-0 right-0 xl:right-[400px]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitchButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
