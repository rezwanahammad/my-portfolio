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
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="BanglaOdyssey"
          description="A modern and visually appealing Next.js web app that showcases the beauty of Bangladesh. It features all 8 divisions and their respective 64 districts, along with an interactive map and engaging UI."
          image="/bangla.png"
          link="https://github.com/rezwanahammad/banglaodyssey"
          techs={[
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
          ]}
        />

        <ProjectCard
          title="Edusity"
          description="An educational platform that allows users to create, share, and discover courses."
          image="/edusity.png"
          link="https://github.com/rezwanahammad/edusity_clone"
          techs={[
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiReact />, name: "React" },
          ]}
        />

        <ProjectCard
          title="NewsBit"
          description="A news aggregation android app that provides the latest news from various sources."
          image="/newsbit.png"
          link="https://github.com/rezwanahammad/NewsBit"
          techs={[
            { icon: <SiAndroidstudio />, name: "Android Studio" },
            { icon: <SiFirebase />, name: "Firebase" },
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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-white/[0.2] w-full rounded-xl p-6">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>

        <CardItem translateZ="60" as="p" className="text-gray-300 text-sm mt-2">
          {description}
        </CardItem>

        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        <div className="flex flex-wrap gap-2 mt-4">
          {techs.map((tech, index) => (
            <CardItem
              key={index}
              translateZ={20}
              as="div"
              className="bg-gray-800 px-2 py-1 rounded-lg flex items-center space-x-1 text-sm"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </CardItem>
          ))}
        </div>

        <div className="flex justify-end items-center mt-6 mb-4">
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-700 to-pink-700 text-white text-xs font-bold"
          >
            View Project →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
