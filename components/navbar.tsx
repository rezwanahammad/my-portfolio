"use client";

import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBook,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaCameraRetro,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col pl-2 text-xl space-y-8">
      <Link href="/#landing" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaHome className="text-3xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Home
          </span>
        </a>
      </Link>

      <Link href="/#about" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaUser className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            About
          </span>
        </a>
      </Link>

      <Link href="/#Education" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaGraduationCap className="text-3xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Education
          </span>
        </a>
      </Link>

      <Link href="/#skills" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaCode className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Skills
          </span>
        </a>
      </Link>

      <Link href="/#projects" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaBook className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Projects
          </span>
        </a>
      </Link>

      <Link href="/#achievements" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaFileAlt className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Achievements
          </span>
        </a>
      </Link>

      <Link href="/#photography" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaCameraRetro className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Photography
          </span>
        </a>
      </Link>

      {/* <Link href="/experience" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaBriefcase className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Experience
          </span>
        </a>
      </Link> */}

      <Link href="/contact" legacyBehavior>
        <a className="group flex items-center space-x-2">
          <FaEnvelope className="text-2xl cursor-pointer hover:text-red-500" />
          <span className="opacity-0 group-hover:opacity-100 transition text-md">
            Contact
          </span>
        </a>
      </Link>
    </div>
  );
}
