"use client";

import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./common/SectionHeading";
import { experience } from "@/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import useSelectedSection from "@/hooks";

const Experience = () => {
  const { ref } = useSelectedSection("Experience");
  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experience.map((exp, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "f3f4f6",
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                textAlign: "left",
                padding: "1.3rem 1.5rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={exp.period}
              icon={exp.icon}
              iconStyle={{
                background: "white",
              }}
            >
              <h3 className="font-semibold">{exp.name}</h3>
              <p className="font-normal !mt-0">{exp.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
