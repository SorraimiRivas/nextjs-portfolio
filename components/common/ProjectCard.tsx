"use client";
import { ProjectCardProps } from "@/lib/types";
import Image from "next/image";
import React, { useRef } from "react";
import imageUrl from "@/public/images/agricultic.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  images,
  github,
  url,
  tags,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold ">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags?.map((tag) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wide text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project Image"
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition hidden sm:block"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
