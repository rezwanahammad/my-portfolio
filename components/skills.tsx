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
  SiMongoose,
  SiShadcnui,
  SiReactbootstrap,
  SiKaggle,
  SiNotion,
  SiVercel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 md:px-6 py-12 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Skills
      </h2>

      <p className="text-center text-base md:text-lg mb-12">
        Here are some of the technologies and tools I work with:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Development */}
        <SkillCategory title="Frontend Development" color="text-red-400" hoverShadow="hover:shadow-red-500/50" skills={[
          { icon: <SiHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
          { icon: <SiCss3 className="text-blue-500 text-5xl" />, name: "CSS" },
          { icon: <SiJavascript className="text-yellow-400 text-5xl" />, name: "JavaScript" },
          { icon: <SiTypescript className="text-blue-600 text-5xl" />, name: "TypeScript" },
          { icon: <SiReact className="text-blue-400 text-5xl" />, name: "React.js" },
          { icon: <SiNextdotjs className="text-white text-5xl" />, name: "Next.js" },
          { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "Tailwind" },
          { icon: <SiReactbootstrap className="text-purple-500 text-5xl" />, name: "React Bootstrap" },
          { icon: <SiShadcnui className="text-purple-500 text-5xl" />, name: "Shadcn UI" },
        ]} />

        {/* Backend Development */}
        <SkillCategory title="Backend Development" color="text-green-400" hoverShadow="hover:shadow-green-500/50" skills={[
          { icon: <SiNodedotjs className="text-green-500 text-5xl" />, name: "Node.js" },
          { icon: <SiExpress className="text-gray-200 text-5xl" />, name: "Express.js" },
          { icon: <SiPostman className="text-orange-500 text-5xl" />, name: "Postman" },
          { icon: <SiFastapi className="text-green-500 text-5xl" />, name: "FastAPI" },
        ]} />

        {/* Databases */}
        <SkillCategory title="Databases" color="text-yellow-400" hoverShadow="hover:shadow-yellow-500/50" skills={[
          { icon: <SiMongodb className="text-green-500 text-5xl" />, name: "MongoDB" },
          { icon: <SiFirebase className="text-yellow-500 text-5xl" />, name: "Firebase" },
          { icon: <SiMysql className="text-blue-500 text-5xl" />, name: "MySQL" },
          { icon: <SiPrisma className="text-purple-500 text-5xl" />, name: "Prisma" },
          { icon: <SiMongoose className="text-green-500 text-5xl" />, name: "Mongoose" },
        ]} />

        {/* AI & ML */}
        <SkillCategory title="AI & ML" color="text-purple-400" hoverShadow="hover:shadow-purple-500/50" skills={[
          { icon: <SiPython className="text-yellow-400 text-5xl" />, name: "Python" },
          { icon: <SiScikitlearn className="text-orange-400 text-5xl" />, name: "Scikit-learn" },
          { icon: <SiTensorflow className="text-orange-500 text-5xl" />, name: "TensorFlow" },
          { icon: <SiNumpy className="text-blue-500 text-5xl" />, name: "NumPy" },
          { icon: <SiPandas className="text-green-500 text-5xl" />, name: "Pandas" },
          { icon: <SiKaggle className="text-blue-500 text-5xl" />, name: "Kaggle" },
        ]} />

        {/* DevOps */}
        <SkillCategory title="DevOps" color="text-blue-400" hoverShadow="hover:shadow-blue-500/50" skills={[
          { icon: <SiDocker className="text-blue-500 text-5xl" />, name: "Docker" },
          { icon: <SiGithub className="text-white text-5xl" />, name: "GitHub" },
          { icon: <SiNotion className="text-gray-500 text-5xl" />, name: "Notion" },
          { icon: <SiVercel className="text-black text-5xl" />, name: "Vercel" },
        ]} />

        {/* Mobile Development */}
        <SkillCategory title="App Development" color="text-pink-400" hoverShadow="hover:shadow-pink-500/50" skills={[
          { icon: <SiAndroid className="text-green-500 text-5xl" />, name: "Android Studio" },
          { icon: <TbBrandReactNative className="text-blue-400 text-5xl" />, name: "React Native" },
        ]} />
      </div>
    </section>
  );
}

type SkillIconProps = {
  icon: React.ReactNode;
  name: string;
};

function SkillCategory({ title, color, hoverShadow, skills }: { title: string; color: string; hoverShadow: string; skills: SkillIconProps[] }) {
  return (
    <div className={`bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg ${hoverShadow}`}>
      <h3 className={`text-xl font-bold mb-4 text-center ${color}`}>
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <SkillIcon key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ icon, name }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full group">
      <div className="group-hover:scale-110 transform transition duration-300 group-hover:animate-spin flex justify-center w-full">
        {icon}
      </div>
      <span className="mt-2 block text-center w-full text-xs md:text-sm">{name}</span>
    </div>
  );
}
