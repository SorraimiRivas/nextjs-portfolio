"use client";
import React, { Fragment } from "react";
import SectionHeading from "./common/SectionHeading";
import useSelectedSection from "@/hooks";
import SkillIcon from "./common/SkillIcon";
import { learning, skills } from "@/data";

const Skills = () => {
  const { ref } = useSelectedSection("Skills", 0.75);
  return (
    <section id="skills" className="scroll-mt-28 max-w-[720px]" ref={ref}>
      <SectionHeading>Skills</SectionHeading>
      <h3 className="font-semibold pb-4 ml-10">Known Skills:</h3>
      <ul className="grid grid-cols-6 flex-wrap gap-2 items-center justify-center">
        {skills.map((skill) => (
          <li key={skill.name}>
            <SkillIcon svg={skill.logo} name={skill.name} />
          </li>
        ))}
      </ul>
      <h3 className="font-semibold pb-4 ml-10">Learning and Interests:</h3>
      <ul className="grid grid-cols-6 flex-wrap gap-2 items-center justify-center">
        {learning.map((skill) => (
          <li key={skill.name}>
            <SkillIcon svg={skill.logo} name={skill.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
