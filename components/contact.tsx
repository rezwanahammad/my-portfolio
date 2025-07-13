"use client";

import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  interface EmailJSResult {
    text: string;
  }

  interface EmailJSError {
    text: string;
  }

  const sendEmail = (e: SendEmailEvent): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx6ense", // replace with your EmailJS service ID
        "template_zoxuuqo", // replace with your EmailJS template ID
        e.target,
        "_OKOT9pzv6N3ZjQzX" // replace with your EmailJS public key
      )
      .then(
        (result: EmailJSResult) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error: EmailJSError) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 md:px-6 py-12 mt-20 rounded-xl shadow-lg text-white"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left side: heading + text */}
        <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-12 text-left bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-300 text-base md:text-xl">
            Feel free to reach out for collaborations, project discussions, or
            opportunities.
          </p>
        </div>

        {/* Right side: form */}
        <div className="md:w-2/3">
          <form
            onSubmit={sendEmail}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-2xl space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-sm md:text-base"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-sm md:text-base"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-sm md:text-base"
            ></textarea>

            <div className="text-center md:text-right">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 text-sm md:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
