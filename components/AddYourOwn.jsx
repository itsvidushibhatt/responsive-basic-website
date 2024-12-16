"use client"; // Ensures this is a Client Component

import { useRouter } from "next/navigation";

export default function AddYourOwn() {
  const router = useRouter();

  return (
    <section className="bg-blue-50 px-4 py-6 md:px-6 md:py-10">
      {/* Container */}
      <div className="w-full md:w-[1200px] mx-auto bg-white border rounded-lg shadow-md p-6 md:p-8">
        {/* Responsive Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Icon and Title */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-0 md:ml-4 mt-2 md:mt-0">
              Add your own
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Are you a teacher or an expert? Do you sell or rent out equipment, venues, or event
            tickets? Or, do you know someone who should be on hobbycue? Go ahead and add your own
            page to showcase your services and expertise.
          </p>

          {/* Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <button
              onClick={() => router.push("/ListingPage")}
              className="w-full md:w-auto px-6 py-2 text-purple-600 border-2 border-purple-500 rounded-lg hover:bg-purple-100 font-semibold transition duration-300"
            >
              Add new
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
