"use client";

import React, { Fragment } from "react";

import SectionHeading from "./common/SectionHeading";
import { projects } from "@/lib/data";
import ProjectCard from "./common/ProjectCard";
import useSelectedSection from "@/hooks";

const Projects = () => {
  const { ref } = useSelectedSection("Projects", 0.2);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <Fragment key={project.name}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
