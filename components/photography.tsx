"use client";

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Photography() {
  const photos = [
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
    "/pic7.jpg",
    "/pic8.jpg",
  ];

  return (
    <section
      id="photography"
      className="max-w-6xl mx-auto px-4 md:px-6 py-12 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
        Photography
      </h2>

      <p className="text-center mb-12 text-gray-300 text-base md:text-xl max-w-3xl mx-auto">
        Besides studying, I love capturing the beauty around me. Whenever
        something attracts my eye, I take out my phone and capture it as a
        memory. Here are a few of my captures:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <PhotoCard key={index} image={photo} index={index} />
        ))}
      </div>
    </section>
  );
}

type PhotoCardProps = {
  image: string;
  index: number;
};

function PhotoCard({ image, index }: PhotoCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={400}
      glareEnable={false}
      className="rounded-xl"
    >
      <div className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
        <Image
          src={image}
          alt={`Photography ${index + 1}`}
          width={600}
          height={800}
          className="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
        />
      </div>
    </Tilt>
  );
}
