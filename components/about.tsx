"use client";

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto p-6 mt-10  rounded-xl shadow-lg flex flex-col md:flex-row items-start justify-between gap-"
    >
      {/* About Me on Left */}
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h2 className="text-3xl text-red-500 font-semibold mb-3">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a passionate software developer specializing in Front-End
          development with React and Next.js. I love crafting beautiful,
          user-friendly websites and applications. My interests include
          exploring new technologies, continuous learning, and building projects
          that make an impact. Outside of coding, I enjoy photography and
          listening to music,watching movie,series. I am always eager to
          collaborate and grow as a developer.
        </p>
      </div>

      {/* Personal Info on Right */}
      <div className="md:w-1/2">
        <div className="bg-black border border-red-500 p-6 rounded-lg shadow-md transition duration-300 ">
          <h2 className="text-2xl font-semibold mb-4 text-red-500 hover:text-white transition">
            Personal Information
          </h2>
          <ul className="text-gray-300 space-y-2 hover:text-white transition">
            <li>
              <strong>Name:</strong> Rezwan Ahammad Raad
            </li>
            <li>
              <strong>Email:</strong> rezwanahammad68@gmail.com
            </li>
            <li>
              <strong>Location:</strong> Mymensingh, Bangladesh
            </li>
            <li>
              <strong>Phone:</strong> +880 1714653351
            </li>
            <li>
              <strong>Date of birth:</strong> August 27, 2003
            </li>
            <li>
              <strong>Blood Group:</strong> O+
            </li>
            <li>
              <strong>Marital Status:</strong> Single
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
