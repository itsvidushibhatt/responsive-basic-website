export default function CommunitySection() {
  return (
    <section className="bg-blue-50 py-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
          Your{" "}
          <span className="text-purple-500 italic">Hobby</span>, Your{" "}
          <span className="text-blue-500">Community...</span>
        </h2>

        {/* Button */}
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition duration-300">
          Get started
        </button>

        {/* Image Placeholder */}
        <div className="mt-8 md:mt-12">
          <div className="flex items-start justify-start">
            <img
              src="/Group 99.png" // Ensure this image exists in the public folder
              alt="Community Activities"
              className="w-full max-w-[500px] md:max-w-[800px] lg:max-w-[1100px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
