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

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experience.map((exp, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                textAlign: "left",
                padding: "1.3rem 1.5rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={exp.period}
              icon={exp.icon}
              iconStyle={{
                background: theme === "dark" ? "#1f2937" : "#f3f4f6",
              }}
            >
              <h3 className="font-semibold ">{exp.name}</h3>
              <h3 className="font-semibold text-xs mb-2">{exp.position}</h3>
              <p className="font-semibold !mt-0 text-sm">{exp.location}</p>
              <p className="!mt-2 !font-normal text-sm">{exp.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
