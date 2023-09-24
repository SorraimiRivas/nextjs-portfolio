"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import { createElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (
    !senderEmail ||
    !message ||
    typeof senderEmail !== "string" ||
    typeof message !== "string"
  ) {
    return {
      error: "Missing required fields",
    };
  }

  let data;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sorraimi.rivas@hotmail.com",
      subject: "Portfolio Contact Form",
      reply_to: senderEmail,
      react: createElement(ContactFormEmail, {
        senderEmail,
        message,
      }),
    });
  } catch (err) {
    return {
      error: (err as Error).message,
    };
  }
  return {
    data,
  };
};
