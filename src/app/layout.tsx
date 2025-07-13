import "./globals.css";
import Navbar from "../../components/navbar";
import { BackgroundLines } from "../../components/ui/background-lines";

export const metadata = {
  title: "Raad's Portfolio",
  description: "Computer Science Student",
};

import { ReactNode } from "react";
import Footer from "../../components/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BackgroundLines className="fixed inset-0 z-[-1]">
          {/* background lines have no children */}
          <></>
        </BackgroundLines>
        {children}
      </body>
      <Footer />
    </html>
  );
}
