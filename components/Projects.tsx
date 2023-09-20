"use client";
import React, { Fragment, useEffect } from "react";
import SectionHeading from "./common/SectionHeading";
import { projects } from "@/data";
import ProjectCard from "./common/ProjectCard";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
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
