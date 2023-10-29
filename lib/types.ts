import { navigation } from "@/lib/data";

export type SectionName = (typeof navigation)[number]["name"];

export type ProjectCardProps = {
  name: string;
  description: string;
  images?: string;
  github?: string;
  href?: string;
  tags?: string[];
};

export type ThemeType = "light" | "dark" | null;
