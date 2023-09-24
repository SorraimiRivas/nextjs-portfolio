"use client";

import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./common/SectionHeading";
import { experience } from "@/lib/data";
import useSelectedSection from "@/hooks";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { ref } = useSelectedSection("Experience");
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const bgColor = theme === "dark" ? "#000000" : "#ffffff";

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 dark:text-white text-black"
    >
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
                color: textColor,
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={exp.period}
              icon={exp.icon}
              iconStyle={{
                background: bgColor,
              }}
            >
              <h3 className="font-semibold dark:text-black">{exp.name}</h3>
              <p className="font-normal !mt-0 dark:text-black">
                {exp.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
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
