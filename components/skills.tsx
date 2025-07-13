"use client";

import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiDocker,
  SiGithub,
  SiAndroid,
  SiPostman,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiAndroidstudio,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Development */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-red-400">
            Frontend Development
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiHtml5 className="text-orange-500 text-5xl" />}
              name="HTML"
            />
            <SkillIcon
              icon={<SiCss3 className="text-blue-500 text-5xl" />}
              name="CSS"
            />
            <SkillIcon
              icon={<SiJavascript className="text-yellow-400 text-5xl" />}
              name="JavaScript"
            />
            <SkillIcon
              icon={<SiTypescript className="text-blue-600 text-5xl" />}
              name="TypeScript"
            />
            <SkillIcon
              icon={<SiReact className="text-blue-400 text-5xl" />}
              name="React.js"
            />
            <SkillIcon
              icon={<SiNextdotjs className="text-white text-5xl" />}
              name="Next.js"
            />
            <SkillIcon
              icon={<SiTailwindcss className="text-cyan-400 text-5xl" />}
              name="Tailwind"
            />
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-green-400">
            Backend Development
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiNodedotjs className="text-green-500 text-5xl" />}
              name="Node.js"
            />
            <SkillIcon
              icon={<SiExpress className="text-gray-200 text-5xl" />}
              name="Express.js"
            />
            <SkillIcon
              icon={<SiPostman className="text-orange-500 text-5xl" />}
              name="Postman"
            />
            <SkillIcon
              icon={<SiFastapi className="text-green-500 text-5xl" />}
              name="FastAPI"
            />
          </div>
        </div>

        {/* Databases */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">
            Databases
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiMongodb className="text-green-500 text-5xl" />}
              name="MongoDB"
            />
            <SkillIcon
              icon={<SiFirebase className="text-yellow-500 text-5xl" />}
              name="Firebase"
            />
            <SkillIcon
              icon={<SiMysql className="text-blue-500 text-5xl" />}
              name="MySQL"
            />
            <SkillIcon
              icon={<SiPrisma className="text-purple-500 text-5xl" />}
              name="Prisma"
            />
          </div>
        </div>

        {/* AI & ML */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-purple-400">
            AI & ML
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiPython className="text-yellow-400 text-5xl" />}
              name="Python"
            />
            <SkillIcon
              icon={<SiScikitlearn className="text-orange-400 text-5xl" />}
              name="Scikit-learn"
            />
            <SkillIcon
              icon={<SiTensorflow className="text-orange-500 text-5xl" />}
              name="TensorFlow"
            />
            <SkillIcon
              icon={<SiNumpy className="text-blue-500 text-5xl" />}
              name="NumPy"
            />
            <SkillIcon
              icon={<SiPandas className="text-green-500 text-5xl" />}
              name="Pandas"
            />
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-400">
            DevOps
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiDocker className="text-blue-500 text-5xl" />}
              name="Docker"
            />
            <SkillIcon
              icon={<SiGithub className="text-white text-5xl" />}
              name="GitHub"
            />
          </div>
        </div>

        {/* Mobile Development */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
          <h3 className="text-xl font-bold mb-4 text-center text-pink-400">
            Mobile Development
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <SkillIcon
              icon={<SiAndroid className="text-green-500 text-5xl" />}
              name="Android Studio"
            />
            <SkillIcon
              icon={<TbBrandReactNative className="text-blue-400 text-5xl" />}
              name="React Native"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillIconProps = {
  icon: React.ReactNode;
  name: string;
};

function SkillIcon({ icon, name }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full group">
      <div className="group-hover:scale-110 transform transition duration-300 group-hover:animate-spin flex justify-center w-full">
        {icon}
      </div>
      <span className="mt-2 block text-center w-full">{name}</span>
    </div>
  );
}
