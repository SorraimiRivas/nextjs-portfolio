"use client";
import { ProjectCardProps } from "@/types";
import Image from "next/image";
import React, { FC, useRef } from "react";
import imageUrl from "@/public/images/testProject.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  images,
  github,
  url,
  tags,
}) => {
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
      <section className="group bg-gray-100 max-w-[672px] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold ">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
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
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2 
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 
        
        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
