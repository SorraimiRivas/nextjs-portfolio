"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useSelectedSection from "@/hooks";
import { sendEmail } from "@/lib/serverActions";
import SectionHeading from "./common/SectionHeading";
import SubmitButton from "./common/SubmitButton";
import toast from "react-hot-toast";

const ContactMe = () => {
  const { ref } = useSelectedSection("Contact", 0.4);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-center">
        Please contact me directly to my email at{" "}
        <a
          href="mailto:sorraimi.rivas@hotmail.com"
          className="underline text-blue-500"
        >
          sorraimi.rivas@hotmail.com
        </a>{" "}
        or fill out the form below.
      </p>
      <form
        className="mt-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          }
          toast.success("Success! Will get back to you as soon as possible", {
            duration: 4000,
          });
          setMessage("");
          setEmail("");
        }}
      >
        <input
          className="border border-gray-200 w-full px-4 py-2 rounded-lg text-black"
          placeholder="Your email..."
          name="senderEmail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message..."
          className="p-4 h-56 rounded-lg border border-gray-200 w-full mt-4 text-black"
          required
          name="message"
          maxLength={6000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default ContactMe;
