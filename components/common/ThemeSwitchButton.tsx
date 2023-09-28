"use client";
import React, { useState, useEffect, useContext } from "react";
import { SunIcon, MoonIcon } from "@/public/icons";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-4 right-2 dark:bg-gray-950 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md shadow-black dark:shadow-white dark:shadow-sm rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:border-0 "
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <MoonIcon className={"fill-dark"} />
      ) : (
        <SunIcon className={"fill-dark"} />
      )}
    </button>
  );
};

export default ThemeSwitchButton;
