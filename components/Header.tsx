"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

import { navigation } from "@/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setLastClicked } =
    useActiveSectionContext();

  return (
    <header className="z-[9999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[72px] w-full rounded-none border border-gray-300 border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[8px] sm:top-6 sm:h-[52px] sm:w-[576px] sm:rounded-full dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navigation.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClicked(Date.now());
                }}
                href={link.path}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
