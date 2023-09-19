import { navigation } from "@/data";

export type SectionName = (typeof navigation)[number]["name"];

export type ProjectCardProps = {
  name: string;
  description: string;
  images?: {};
  github?: string;
  url?: string;
  tags?: string[];
};
