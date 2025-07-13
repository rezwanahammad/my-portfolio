"use client";

import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx6ense", // replace with your EmailJS service ID
        "template_zoxuuqo", // replace with your EmailJS template ID
        e.target,
        "_OKOT9pzv6N3ZjQzX" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-12 mt-20 rounded-xl shadow-lg text-white"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side: heading + text */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-6 text-red-500">
            Contact Me
          </h2>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, project discussions, or
            opportunities.
          </p>
        </div>

        {/* Right side: form */}
        <div className="md:w-2/3">
          <form
            onSubmit={sendEmail}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            ></textarea>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-300"
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
