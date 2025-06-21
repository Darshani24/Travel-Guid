import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../app/components/Navbar'
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel",
  description: "Travel Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}

        </main>
      
      </body>
    </html>
  );
}
