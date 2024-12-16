"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left Section with Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/hobbycue.png" alt="hobbycue logo" width={150} height={30} />
        </div>

        {/* Search Bar for All Devices */}
        <div className="flex-grow mx-4 lg:hidden">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-gray-300 rounded-md pl-4 pr-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-0 bg-purple-600 text-white w-[40px] h-[40px] rounded-r-md flex items-center justify-center hover:bg-purple-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.65 10.35A6.3 6.3 0 1110.35 4a6.3 6.3 0 016.3 6.3z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-purple-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Right Section for Larger Screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-purple-600 font-bold text-xl">Explore ▾</button>
          <button className="text-gray-600 hover:text-purple-600 font-bold text-xl">Hobbies ▾</button>
          <button className="text-gray-600 hover:text-purple-600">
            <Image src="/bookmark_black_24dp 1 (1).png" alt="Icon 1" width={24} height={24} />
          </button>
          <button className="text-gray-600 hover:text-purple-600">
            <Image src="/notifications_black_24dp 1 (1).png" alt="Icon 2" width={24} height={24} />
          </button>
          <button className="text-gray-600 hover:text-purple-600">
            <Image src="/Product 3.png" alt="Icon 3" width={24} height={24} />
          </button>
          <button className="px-5 py-2 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium text-lg w-[120px] h-[40px] flex items-center justify-center">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col space-y-4">
            {/* Explore and Hobbies Aligned Properly */}
            <div className="space-y-2">
              <button className="text-gray-800 font-bold text-left pl-2">Explore ▾</button>
              <button className="text-gray-800 font-bold text-left pl-2">Hobbies ▾</button>
            </div>

            {/* Bookmark, Notifications, Product */}
            <div className="space-y-2">
              <button className="text-gray-600 flex items-center pl-2">
                <Image src="/bookmark_black_24dp 1 (1).png" alt="Icon 1" width={20} height={20} className="mr-2" />
                Bookmark
              </button>
              <button className="text-gray-600 flex items-center pl-2">
                <Image src="/notifications_black_24dp 1 (1).png" alt="Icon 2" width={20} height={20} className="mr-2" />
                Notifications
              </button>
              <button className="text-gray-600 flex items-center pl-2">
                <Image src="/Product 3.png" alt="Icon 3" width={20} height={20} className="mr-2" />
                Products
              </button>
            </div>

            {/* Sign-In Button */}
            <button className="w-full px-5 py-2 border-2 border-purple-600 text-purple-600 font-bold rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
