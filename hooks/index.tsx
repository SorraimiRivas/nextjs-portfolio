"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { SectionName } from "@/types";

const useSelectedSection = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked, sectionName]);

  return { ref };
};

export default useSelectedSection;
