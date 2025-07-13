"use client";

import React from "react";
import Image from "next/image";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto p-4 md:p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Achievements & Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        <CertificateCard
          title="ReactJS for Beginners"
          image="/reactcer.png"
          link="https://www.simplilearn.com/skillup-certificate-landing?token=..."
        />
        <CertificateCard
          title="AI+ Prompt Engineer Level 1™"
          image="/ailevel1.png"
          link="/AI+ Prompt Engineer Level 1™ certificate.pdf"
        />
        <CertificateCard
          title="Aspire Leadership Program"
          image="/aspire.png"
          link="/rezwan_ahammad_raad_module_1_badge_2025.pdf"
        />
        <CertificateCard
          title="Postman API Fundamentals Student Expert"
          image="/postman.png"
          link="https://badgr.com/public/assertions/XKFM6HKdTwywt0oohfa_Ag"
        />
        {/* Add more certificates here */}
      </div>
    </section>
  );
}

type CertificateCardProps = {
  title: string;
  image: string;
  link: string;
};

function CertificateCard({ title, image, link }: CertificateCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-red-500/50 relative">
      <div className="relative group">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-40 md:h-48 opacity-90 group-hover:opacity-100 transition duration-300"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-md font-semibold shadow-md hover:scale-105 hover:shadow-pink-500/50 transition duration-300 text-sm md:text-base">
            View Certificate
          </button>
        </a>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-md font-bold text-center text-pink-400">
          {title}
        </h3>
      </div>
    </div>
  );
}
