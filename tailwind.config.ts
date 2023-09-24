import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
