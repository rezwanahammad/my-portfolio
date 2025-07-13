"use client";

import React from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiAndroidstudio,
} from "react-icons/si";
import { PinContainer } from "./ui/3d-pin"; // update path if needed

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl ml-37 p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PinContainer
          title="BanglaOdyssey"
          href="https://github.com/rezwanahammad/banglaodyssey"
        >
          <ProjectContent
            title="BanglaOdyssey"
            description="A modern and visually appealing Next.js web app that showcases the beauty, culture, and administrative structure of Bangladesh. It features all 8 divisions and their respective 64 districts, along with an interactive map and engaging UI."
            image="/bangla.png"
            techs={[
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <SiMongodb />, name: "MongoDB" },
            ]}
          />
        </PinContainer>

        <PinContainer
          title="Edusity"
          href="https://github.com/rezwanahammad/edusity_clone"
        >
          <ProjectContent
            title="Edusity"
            description="An educational platform that allows users to create, share, and discover courses."
            image="/edusity.png"
            techs={[
              { icon: <SiFirebase />, name: "Firebase" },
              { icon: <SiReact />, name: "React" },
            ]}
          />
        </PinContainer>

        <PinContainer
          title="NewsBit"
          href="https://github.com/rezwanahammad/NewsBit"
        >
          <ProjectContent
            title="NewsBit"
            description="A news aggregation android app that provides the latest news from various sources."
            image="/newsbit.png"
            techs={[
              { icon: <SiAndroidstudio />, name: "Android Studio" },
              { icon: <SiFirebase />, name: "Firebase" },
            ]}
          />
        </PinContainer>
      </div>
    </section>
  );
}

type ProjectContentProps = {
  title: string;
  description: string;
  image: string;
  techs: { icon: React.ReactNode; name: string }[];
};

function ProjectContent({
  title,
  description,
  image,
  techs,
}: ProjectContentProps) {
  return (
    <div className="w-80">
      <Image
        src={image}
        alt={title}
        width={320}
        height={200}
        className="rounded-xl mb-4 object-cover w-full h-40"
      />
      <h3 className="text-lg font-bold bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800 px-2 py-1 rounded-lg flex items-center space-x-1 text-xs"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] text-black py-2 rounded-lg font-semibold hover:scale-105 transition duration-300">
        View Project
      </button>
    </div>
  );
}
