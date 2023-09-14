"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "./common/Button";

import { RiDownloadLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

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
          <Image
            src={"/react-2.svg"}
            alt="react logo"
            width={100}
            height={100}
            className="h-24 w-24 rounded-full object-cover shadow-2xl shadow-slate-900 dark:shadow-violet-600 bg-gradient-to-br from-slate-950 to-violet-900 p-1"
          />
        </motion.div>
        <motion.h1
          className="text-3xl md:text-6xl font-extrabold text-center pt-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Turning Ideas into Stunning <br /> Mobile and Web Apps
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
      <div className="flex flex-row gap-10 items-center justify-center py-10">
        <Link href={"/#contact"}>
          <Button
            label="Contact Me"
            icon={<BsArrowRight size={20} />}
            color="bg-gray-900 text-white"
          />
        </Link>
        <Link href={"/"}>
          <Button
            label="Download My CV"
            icon={<RiDownloadLine size={20} />}
            color="bg-white text-black"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
