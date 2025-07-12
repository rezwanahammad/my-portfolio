"use client";

import React from "react";
import Image from "next/image";

export default function Photography() {
  return (
    <section
      id="photography"
      className="max-w-6xl mx-auto p-6 mt-20 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">
        Photography
      </h2>

      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Photography has always been my creative escape. In my free time, I love
        capturing the world around me through my lens, finding beauty in simple
        moments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <PhotoCard image="/pic1.jpg" />
        <PhotoCard image="/photography/photo2.jpg" />
        <PhotoCard image="/photography/photo3.jpg" />
        <PhotoCard image="/photography/photo4.jpg" />
        <PhotoCard image="/photography/photo5.jpg" />
        <PhotoCard image="/photography/photo6.jpg" />
        <PhotoCard image="/photography/photo7.jpg" />
        <PhotoCard image="/photography/photo8.jpg" />
        {/* Add more photos as needed */}
      </div>
    </section>
  );
}

type PhotoCardProps = {
  image: string;
};

function PhotoCard({ image }: PhotoCardProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-red-500/50">
      <Image
        src={image}
        alt="Photography"
        width={600}
        height={800} // moderate portrait height
        className="object-cover w-full h-[350px] md:h-[400px] lg:h-[450px]"
      />
    </div>
  );
}
