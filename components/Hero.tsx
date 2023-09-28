"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "./common/Button";
import useSelectedSection from "@/hooks";

import { RiDownloadLine } from "react-icons/ri";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Hero = () => {
  const { ref } = useSelectedSection("Home", 0.75);
  const { setActiveSection, setLastClicked } = useActiveSectionContext();

  return (
    <section
      id="home"
      className="scroll-mt-28 max-w-[60rem] text-center"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            delay: 0.3,
            duration: 1.5,
          }}
        >
          <div className="h-24 w-24 rounded-full my-14 sm:my-36">
            <Image
              src={"/svgs/react-2.svg"}
              alt="react logo"
              width={100}
              height={100}
              className="h-24 w-24 rounded-full object-cover animate-spin-slow"
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-6xl font-extrabold text-center pt-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Turning Ideas Into Stunning <br /> Mobile and Web Apps
        </motion.h1>
        <motion.p
          className="px-5 pt-8 text-xl md:text-2xl lg:text-4xl font-medium text-center 
          md:w-[75%]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I&apos;m <span className="font-bold">Sorraimi</span>. I&apos;m
          a <span className="font-bold ">Front-End developer</span> with{" "}
          <span className="font-bold ">2 years</span> of experience. I enjoy
          building apps that are <span className="font-semibold">easy</span> to
          use and <span className="font-bold ">intuitive</span> to navigate.
          Let&apos;s <span className="font-semibold">collaborate</span> and turn
          your vision into reality.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row gap-10 items-center justify-center py-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href={"/#contact"}
          className="group hover:scale-125 transition duration-300 ease-in-out dark:shadow-white dark:shadow-sm rounded-full"
          onClick={() => {
            setActiveSection("Contact");
            setLastClicked(Date.now());
          }}
        >
          <Button
            label="Contact Me"
            icon={
              <BsArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            }
            color="bg-gray-950 text-white"
          />
        </Link>
        <a
          href="/sorraimi_rivas.pdf"
          className="group hover:scale-125 transition duration-300 ease-in-out border rounded-full border-gray-200 dark:text-black"
          download
        >
          <Button
            label="Download My CV"
            icon={
              <RiDownloadLine
                size={20}
                className="group-hover:translate-y-1 transition dark:text-black"
              />
            }
            color="bg-white text-black dark:text-black"
          />
        </a>
        <Link
          href={"https://github.com/SorraimiRivas"}
          target="_blank"
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <BsGithub size={44} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sorraimi-rivas/"
          target="_blank"
          className="h-12 w-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:scale-125 transition duration-300 ease-in-out dark:text-black"
        >
          <TfiLinkedin size={20} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
