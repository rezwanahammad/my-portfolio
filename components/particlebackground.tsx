"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f172a" }, // dark slate background
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
