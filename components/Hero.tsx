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
          <div className="h-24 w-24 rounded-full shadow-2xl shadow-slate-900 dark:shadow-violet-600 ">
            <Image
              src={"/react-2.svg"}
              alt="react logo"
              width={100}
              height={100}
              className="h-24 w-24 rounded-full object-cover bg-gradient-to-br from-slate-950 to-violet-900 p-1 hover:animate-spin-slow"
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
          className="px-5 pt-8 text-xl md:text-2xl lg:text-4xl font-medium font-serif text-center md:w-[75%]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I&apos;m a React Native developer based in the Dominican Republic,
          passionate about crafting seamless digital experiences. With a knack
          for user-centric design, I specialize in bringing mobile app designs
          to life. Let&apos;s collaborate and turn your vision into reality.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-row gap-10 items-center justify-center py-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href={"/#contact"}
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <Button
            label="Contact Me"
            icon={<BsArrowRight size={20} />}
            color="bg-gray-900 text-white"
          />
        </Link>
        <Link
          href={"/"}
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <Button
            label="Download My CV"
            icon={<RiDownloadLine size={20} />}
            color="bg-white text-black dark:text-white"
          />
        </Link>
        <Link
          href={"https://github.com/SorraimiRivas"}
          className="hover:scale-125 transition duration-300 ease-in-out"
        >
          <BsGithub size={40} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/sorraimi-rivas/"}
          className="bg-white rounded-full hover:scale-125 transition duration-300 ease-in-out"
        >
          <Button icon={<TfiLinkedin size={20} />} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
