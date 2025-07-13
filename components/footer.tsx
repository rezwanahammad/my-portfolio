"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] text-black py-3">
      <div className="max-w-md mx-auto text-center px-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Raad | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
