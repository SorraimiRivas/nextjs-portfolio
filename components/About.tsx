"use client";
import { motion } from "framer-motion";
import SectionHeading from "./common/SectionHeading";
import { dreamCompanies } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-5 leading-8 max-w-[720px] text-xl md:2xl sm:mb-2 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        Hey there! My name is <span className="font-bold ">Sorraimi Rivas</span>{" "}
        and I hail from the beautiful{" "}
        <span className="font-semibold">Dominican Republic</span>. My journey
        into the tech world has been quite the adventure. I started my career in
        the customer service field and even dabbled in workforce management.
        However, I decided to chase my true passion and become a software
        developer.
      </p>
      <p>
        I&apos;m entirely <span className="font-semibold">self-taught</span> and
        have honed my skills through platforms like{" "}
        <span className="font-semibold">FreeCodeCamp</span> ,{" "}
        <span className="font-semibold">Udemy</span>, and the vast sea of
        knowledge on <span className="font-semibold">YouTube</span>. What keeps
        me hooked on programming is my love for{" "}
        <span className="font-semibold">problem-solving</span> and puzzles.
        There&apos;s something incredibly satisfying about cracking those code
        conundrums.
      </p>
      <p>
        Speaking of code, I&apos;m well-versed in some cool technologies.{" "}
        <span className="font-semibold">React Native</span>,{" "}
        <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">Expo</span>,{" "}
        <span className="font-semibold">TypeScript</span>, and{" "}
        <span className="font-semibold">Tailwind</span> are my go-to tools for
        crafting awesome apps. But I don&apos;t stop there. I&apos;m also
        familiar with <span className="font-semibold">GraphQL</span>,{" "}
        <span className="font-semibold">MongoDB</span>,{" "}
        <span className="font-semibold">Node.js</span>,{" "}
        <span className="font-semibold">Express</span>, and I&apos;ve dipped my
        toes into <span className="font-semibold">SwiftUI</span> for iOS
        development.
      </p>
      <p>
        When I&apos;m not deep into coding, you&apos;ll find me in a different
        kind of digital realm—<span className="font-semibold">video games</span>
        . I enjoy getting lost in virtual adventures.{" "}
        <span className="font-semibold">Reading</span> is another passion of
        mine, and I can&apos;t resist tuning in to{" "}
        <span className="font-semibold">Esports</span> for some thrilling
        matches. Oh, and I&apos;m working on my{" "}
        <span className="font-semibold">guitar</span> skills, hoping to strum
        out some tunes soon.
      </p>

      <div className="pt-4 px-4">
        <p>In the future, I want work for at least one of these comapanies:</p>
        <div className="flex items-center justify-center flex-row gap-10 py-8 font-semibold">
          {dreamCompanies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} log`}
                width={100}
                height={100}
                className="h-20 w-20 object-fit"
              />
              {company.name}
            </div>
          ))}
        </div>
        <p>
          That&apos;s a bit about me, a developer with a zest for
          problem-solving, a love for technology, and a taste for adventure both
          in code and in real life.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
