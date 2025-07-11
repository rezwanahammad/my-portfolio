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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-24">
        {/* Profile image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-red-500">
          <Image
            src="/raadprof2.jpg"
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
            words={["Tech-Driven CSE Student", "Full-Stack Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="italic text-red-500 mb-6">
          "Crafting Digital. Solving Problems. Delivering Value."
        </p>

        <p className="max-w-xl mx-auto mb-8">
          Passionate about building scalable web applications and exploring
          innovative solutions. Welcome to my digital space — let’s create
          something meaningful.
        </p>

        {/* Buttons and icons */}
        <div className="flex items-center space-x-4">
          <a
            href="/cv.pdf" // replace with your CV
            className="bg-red-500 px-4 py-2 rounded flex items-center space-x-2"
            download
          >
            <FaDownload /> <span>CV</span>
          </a>
          <FaGithub className="text-2xl cursor-pointer" />
          <FaLinkedin className="text-2xl cursor-pointer" />
          <FaFacebook className="text-2xl cursor-pointer" />
          <FaDev className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
