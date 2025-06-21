"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-green-900 px-6 py-4">
      <div className="flex items-center justify-between">
        
        <h1 className="font-bold text-2xl text-gray-950 cursor-pointer">
          Guide-<span className="text-white">U</span>
        </h1>

      
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

       
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition">
            About Us
          </Link>
          <Link href="/pricing" className="text-white hover:text-gray-300 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="/login">
            <button className="bg-green-500 hover:bg-white hover:text-green-700 text-white px-4 py-2 rounded-2xl transition">
              Login
            </button>
          </Link>
        </div>
      </div>

      
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition">
            About Us
          </Link>
          <Link href="/pricing" className="text-white hover:text-gray-300 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="/login">
            <button className="bg-green-500 hover:bg-white hover:text-green-700 text-white px-4 py-2 rounded-2xl transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
