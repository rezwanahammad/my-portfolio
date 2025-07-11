"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-6 pl-2">
      <button className="bg-red-500 px-4 py-2 rounded-full">Ifti</button>
      <div className="flex flex-col space-y-4 text-xl">
        <span>👤</span>
        <span>✨</span>
        <span>📖</span>
        <span>📄</span>
        <span>💼</span>
        <span>✉️</span>
      </div>
    </div>
  );
}
