"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";

import SectionHeading from "./common/SectionHeading";
import { projects } from "@/lib/data";
import ProjectCard from "./common/ProjectCard";
import useSelectedSection from "@/hooks";

const Projects = () => {
  const { ref } = useSelectedSection("Projects", 0.2);

  return (
    <motion.section
      id="projects"
      className="scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <Fragment key={project.name}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
