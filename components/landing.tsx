"use client";

import Image from "next/image";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDev,
} from "react-icons/fa";
import Navbar from "./navbar";
import { Typewriter } from "react-simple-typewriter";

export default function Landing() {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-24">
        {/* Profile image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-red-500">
          <Image
            src="/raadnorm3.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Hi, I’m <span className="text-red-500">Raad</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          <Typewriter
            words={[
              "Computer Science Undergraduate",
              "Full-Stack Developer",
              "ML Enthusiast",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* <p className="italic text-red-500 mb-6">
          "Crafting Digital. Solving Problems. Delivering Value."
        </p> */}

        <p className="max-w-xl mx-auto mb-8">
          Computer Science & Engineering student at KUET with expertise in C,
          C++, Java, JavaScript, and modern frameworks like React, Next.js, and
          React Native. Dedicated to building impactful solutions through code.
          Always learning, always building.
        </p>

        {/* Buttons and icons */}
        <div className="flex items-center space-x-4">
          <a
            href="/CV_Raad.pdf"
            className="bg-red-500 px-4 py-2 rounded flex items-center space-x-2"
            download
          >
            <FaDownload /> <span>CV</span>
          </a>
          <a
            href="https://github.com/rezwanahammad"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="text-2xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/rezwan-ahammad-a684b024b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/rezwan.ahammad.raad.2024"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook className="text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
