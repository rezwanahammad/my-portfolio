"use client";

import React from "react";
import Image from "next/image";
import { CardSpotlight } from "./ui/card-spotlight";

export default function Education() {
  return (
    <section
      id="Education"
      className="max-w-5xl mx-auto px-4 md:px-6 py-12 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Education
      </h2>

      <div className="flex flex-col md:relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] rounded-full shadow-md"></div>

        {/* University */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#20B2AA] border-4 border-black rounded-full w-8 h-8 z-10"></div>

          <div className="md:w-1/2 md:pr-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <CardSpotlight>
                <div className="flex items-center mb-4">
                  <Image
                    src="/kuet.png"
                    alt="KUET Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h3 className="text-lg md:text-xl font-bold ml-4">
                    B.Sc. in Computer Science & Engineering
                  </h3>
                </div>
                <p className="text-gray-300">
                  Khulna University of Engineering and Technology
                </p>
                <p className="text-gray-400">2023 - Present</p>
                <p className="mt-2">
                  Currently pursuing my 3rd year of undergraduate degree.
                </p>
              </CardSpotlight>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>

        {/* College */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#20B2AA] border-4 border-black rounded-full w-8 h-8 z-10"></div>

          <div className="md:w-1/2"></div>
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <CardSpotlight>
                <div className="flex items-center mb-4">
                  <Image
                    src="/ananda_mohan.png"
                    alt="Ananda Mohan College Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h3 className="text-lg md:text-xl font-bold ml-4">
                    Higher Secondary Certificate (HSC)
                  </h3>
                </div>
                <p className="text-gray-300">
                  Ananda Mohan College, Mymensingh
                </p>
                <p className="text-gray-400">2019 - 2022</p>
                <p className="mt-2">
                  Completed HSC in Science with major subjects Physics,
                  Chemistry, Mathematics, and Biology. GPA: 5.00 (Scholarship)
                </p>
              </CardSpotlight>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#20B2AA] border-4 border-black rounded-full w-8 h-8 z-10"></div>

          <div className="md:w-1/2 md:pr-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <CardSpotlight>
                <div className="flex items-center mb-4">
                  <Image
                    src="/zilla_school.png"
                    alt="Mymensingh Zilla School Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h3 className="text-lg md:text-xl font-bold ml-4">
                    Secondary School Certificate (SSC)
                  </h3>
                </div>
                <p className="text-gray-300">Mymensingh Zilla School</p>
                <p className="text-gray-400">2011 - 2019</p>
                <p className="mt-2">
                  Completed SSC in Science. <br />
                  <strong>GPA</strong>: 5.00 (Scholarship)
                </p>
              </CardSpotlight>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
