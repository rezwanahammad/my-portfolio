"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setIsSending(true);

    emailjs
      .sendForm(
        "service_jx6ense",
        "template_zoxuuqo",
        e.target,
        "_OKOT9pzv6N3ZjQzX"
      )
      .then(
        (result: EmailJSResult) => {
          console.log(result.text);
          setShowSuccess(true);
          setIsSending(false);
          e.target.reset();
          setTimeout(() => setShowSuccess(false), 5000);
        },
        (error: EmailJSError) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 mt-20 mb-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative">
        {/* Success Message Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl">
            <div className="bg-gradient-to-br from-green-900/90 to-emerald-900/90 p-8 rounded-2xl border border-green-500/50 shadow-2xl text-center transform animate-bounce">
              <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {/* Form without background card */}
        <div className="relative">
          <form onSubmit={sendEmail} className="relative z-10 space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Rezwan Ahammad"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/30 border border-gray-700/50 focus:border-[#40E0D0] focus:outline-none focus:ring-2 focus:ring-[#40E0D0]/50 transition duration-300 text-white placeholder-gray-500 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="rezwanahammad68@gmail.com"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/30 border border-gray-700/50 focus:border-[#40E0D0] focus:outline-none focus:ring-2 focus:ring-[#40E0D0]/50 transition duration-300 text-white placeholder-gray-500 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Let's discuss a project"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-700/50 focus:border-[#40E0D0] focus:outline-none focus:ring-2 focus:ring-[#40E0D0]/50 transition duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 backdrop-blur-sm"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-700/50 focus:border-[#40E0D0] focus:outline-none focus:ring-2 focus:ring-[#40E0D0]/50 transition duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none backdrop-blur-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] text-black font-bold rounded-full shadow-lg hover:shadow-[#40E0D0]/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center gap-3">
                  {isSending ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
