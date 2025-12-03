"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiAndroidstudio,
} from "react-icons/si";
import { PinContainer } from "./ui/3d-pin"; // update path if needed

type Project = {
  _id?: string;
  title: string;
  description?: string;
  image?: string;
  techs?: string[];
  href?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.projects) setProjects(data.projects);
        else setError("No projects returned from API");
      })
      .catch((err) => {
        if (!mounted) return;
        console.error(err);
        setError("Failed to load projects");
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto p-6 mt-20 mb-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Projects
      </h2>
      <p className="text-center text-lg mb-16">
        Here are some of the projects I have worked on recently:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32 py-10">
        {error && <div className="text-red-400">{error}</div>}

        {!projects && !error && <div className="text-center">Loading...</div>}

        {projects &&
          projects.map((p) => (
            <PinContainer key={p.title} title={p.title} href={p.href ?? "#"}>
              <ProjectContent
                title={p.title}
                description={p.description ?? ""}
                image={p.image ?? "/placeholder.png"}
                techs={(p.techs ?? []).map((t) => ({
                  icon: getIcon(t),
                  name: t,
                }))}
              />
            </PinContainer>
          ))}
      </div>
    </section>
  );
}

type ProjectContentProps = {
  title: string;
  description: string;
  image: string;
  techs: { icon: React.ReactNode | null; name: string }[];
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

function getIcon(name: string) {
  const key = name.toLowerCase();
  if (key.includes("next")) return <SiNextdotjs />;
  if (key.includes("react")) return <SiReact />;
  if (key.includes("mongo")) return <SiMongodb />;
  if (key.includes("firebase")) return <SiFirebase />;
  if (key.includes("android")) return <SiAndroidstudio />;
  return null;
}
