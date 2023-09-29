"use client";

import React from "react";
import SectionHeading from "./common/SectionHeading";
import useSelectedSection from "@/hooks";
import SkillIcon from "./common/SkillIcon";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSelectedSection("Skills");
  return (
    <section id="skills" className="scroll-mt-28 max-w-[720px]" ref={ref}>
      <SectionHeading>Skills</SectionHeading>
      <ul className="grid grid-cols-6 flex-wrap gap-6 items-center  justify-center mt-10  p-4 rounded-xl">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="hover:scale-110 transition duration-300 ease-in-out"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <SkillIcon svg={skill.logo} name={skill.name} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
