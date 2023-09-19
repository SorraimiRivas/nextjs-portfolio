"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "./common/Button";

import { RiDownloadLine } from "react-icons/ri";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";

const Hero = () => {
  return (
    <section>
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
          <div
            className="h-24 w-24 rounded-full shadow-2xl shadow-slate-900
           dark:shadow-violet-600"
          >
            <Image
              src={"/svgs/react-2.svg"}
              alt="react logo"
              width={100}
              height={100}
              className="h-24 w-24 rounded-full object-cover bg-gradient-to-br from-sky-800
               to-violet-900 p-1 animate-spin-slow"
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
          use and <span className="font-bold ">intuitive</span>. Let&apos;s{" "}
          <span className="font-semibold">collaborate</span> and turn your
          vision into reality.
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
          className="group hover:scale-125 transition duration-300 ease-in-out"
        >
          <Button
            label="Contact Me"
            icon={
              <BsArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            }
            color="bg-gray-900 text-white"
          />
        </Link>
        <a
          href="/sorraimi_rivas.pdf"
          className="group hover:scale-125 transition duration-300 ease-in-out border rounded-full border-gray-200"
          download
        >
          <Button
            label="Download My CV"
            icon={
              <RiDownloadLine
                size={20}
                className="group-hover:translate-y-1 transition"
              />
            }
            color="bg-white text-black dark:text-white"
          />
        </a>
        <Link
          href={"https://github.com/SorraimiRivas"}
          target="_blank"
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <BsGithub size={42} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sorraimi-rivas/"
          target="_blank"
          className="h-11 w-11 bg-white rounded-full flex items-center justify-center hover:scale-125 transition duration-300 ease-in-out"
        >
          <TfiLinkedin size={20} color="black" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
