import React, { Fragment } from "react";
import SectionHeading from "./common/SectionHeading";
import { projects } from "@/data";
import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  return (
    <section>
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
