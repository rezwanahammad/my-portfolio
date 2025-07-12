"use client";

import React from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAndroidstudio,
} from "react-icons/si";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-12 text-center text-red-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="BanglaOdyssey"
          description="A modern and visually appealing Next.js web app that showcases the beauty, culture, and administrative structure of Bangladesh. It features all 8 divisions and their respective 64 districts, along with an interactive map and engaging UI."
          image="/bangla.png" // replace with your project image path
          link="https://github.com/rezwanahammad/banglaodyssey"
          techs={[
            { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
            { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
          ]}
        />

        <ProjectCard
          title="Edusity"
          description="An educational platform that allows users to create, share, and discover courses."
          image="/edusity.png"
          link="https://github.com/rezwanahammad/edusity_clone"
          techs={[
            {
              icon: <SiFirebase className="text-yellow-500" />,
              name: "Firebase",
            },
            { icon: <SiReact className="text-blue-400" />, name: "React" },
          ]}
        />

        <ProjectCard
          title="NewsBit"
          description="A news aggregation android app that provides the latest news from various sources."
          image="/newsbit.png"
          link="https://github.com/rezwanahammad/NewsBit"
          techs={[
            {
              icon: <SiAndroidstudio className="text-yellow-500" />,
              name: "Android Studio",
            },
            {
              icon: <SiFirebase className="text-yellow-500" />,
              name: "Firebase",
            },
          ]}
        />
      </div>
    </section>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: { icon: React.ReactNode; name: string }[];
};

function ProjectCard({
  title,
  description,
  image,
  link,
  techs,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-red-500/50 relative">
      <div className="relative group">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold">
            View Project
          </button>
        </a>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800 px-2 py-1 rounded-lg flex items-center space-x-1"
            >
              {tech.icon}
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
