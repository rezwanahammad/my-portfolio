import "./globals.css";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Raad's Portfolio",
  description: "Computer Science Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
