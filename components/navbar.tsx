"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBook,
  FaFileAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCameraRetro,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/#landing", icon: <FaHome className="text-3xl" />, label: "Home" },
    { href: "/#about", icon: <FaUser className="text-2xl" />, label: "About" },
    {
      href: "/#Education",
      icon: <FaGraduationCap className="text-3xl" />,
      label: "Education",
    },
    {
      href: "/#skills",
      icon: <FaCode className="text-2xl" />,
      label: "Skills",
    },
    {
      href: "/#projects",
      icon: <FaBook className="text-2xl" />,
      label: "Projects",
    },
    {
      href: "/#achievements",
      icon: <FaFileAlt className="text-2xl" />,
      label: "Achievements",
    },
    {
      href: "/#photography",
      icon: <FaCameraRetro className="text-2xl" />,
      label: "Photography",
    },
    {
      href: "/#contact",
      icon: <FaEnvelope className="text-2xl" />,
      label: "Contact",
    },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex-col pl-2 text-xl space-y-5 hidden md:flex">
        {navItems.map((item, index) => (
          <Link href={item.href} key={index} legacyBehavior>
            <a className="group flex items-center space-x-2">
              {React.cloneElement(item.icon, {
                className: `${item.icon.props.className} cursor-pointer hover:text-[#20B2AA]`,
              })}
              <span className="opacity-0 group-hover:opacity-100 transition text-md">
                {item.label}
              </span>
            </a>
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-3xl text-white" />
          ) : (
            <FaBars className="text-3xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-8 text-2xl">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} legacyBehavior>
              <a
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 hover:text-[#20B2AA] transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
