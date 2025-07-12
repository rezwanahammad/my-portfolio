"use client";

import React from "react";

export default function Education() {
  return (
    <section
      id="Education"
      className="max-w-5xl mx-auto p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-12 text-center text-red-500">
        Education
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute w-1 bg-gradient-to-b from-red-600 via-red-700 to-red-900 rounded-full h-full shadow-md"></div>

        {/* Dot for University */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bg-red-500 border-4 border-black rounded-full w-8 h-8 z-10 flex items-center justify-center">
          <div className="bg-white rounded-full w-3 h-3"></div>
        </div>

        {/* Timeline item: University (left) */}
        <div className="flex md:contents mt-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md md:mr-auto md:w-5/12 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
            <h3 className="text-xl font-bold">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-gray-300">
              Khulna University of Engineering and Technology
            </p>
            <p className="text-gray-400">2023 - Present</p>
            <p className="mt-2">
              Currently pursuing my 3rd year of undergraduate degree.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>

        {/* Dot for College */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-60 bg-red-500 border-4 border-black rounded-full w-8 h-8 z-10 flex items-center justify-center">
          <div className="bg-white rounded-full w-3 h-3"></div>
        </div>

        {/* Timeline item: College (right) */}
        <div className="flex md:contents mt-20">
          <div className="flex-1"></div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md md:ml-auto md:w-5/12 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
            <h3 className="text-xl font-bold">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-300">Ananda Mohan College, Mymensingh</p>
            <p className="text-gray-400">2019 - 2022</p>
            <p className="mt-2">
              Completed HSC in Science with major subjects Physics, Chemistry,
              Mathematics, and Biology. GPA: 5.00 (Scholarship)
            </p>
          </div>
        </div>

        {/* Dot for School */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[30rem] bg-red-500 border-4 border-black rounded-full w-8 h-8 z-10 flex items-center justify-center">
          <div className="bg-white rounded-full w-3 h-3"></div>
        </div>

        {/* Timeline item: School (left) */}
        <div className="flex md:contents mt-20 mb-20">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md md:mr-auto md:w-5/12 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
            <h3 className="text-xl font-bold">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-300">Mymensingh Zilla School</p>
            <p className="text-gray-400">2011 - 2019</p>
            <p className="mt-2">
              Completed SSC in Science. <br />
              <strong>GPA</strong>: 5.00 (Scholarship)
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
}
