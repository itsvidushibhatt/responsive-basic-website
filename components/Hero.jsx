import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 md:px-6 py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 text-center lg:text-left">
            Explore your <span className="text-blue-500">hobby</span> or{" "}
            <span className="text-purple-500">passion</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed text-center lg:text-left">
            Sign-in to interact with a community of fellow hobbyists and an ecosystem of
            experts, teachers, suppliers, classes, workshops, and places to practice,
            participate, or perform. Your hobby may be about visual or performing arts,
            sports, games, gardening, model making, cooking, indoor, or outdoor activities.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-center lg:text-left">
            If you are an expert or a seller, you can add your listing and promote yourself,
            your students, products, services, or events. Hop on your hobby horse and enjoy
            the ride.
          </p>

          {/* Image Placeholder */}
          <div className="mt-6 lg:mt-10 w-full h-48 md:h-64 flex items-center justify-center relative">
            <Image
              src="/Group 27.png" // Ensure this file exists in the public folder
              alt="Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right Section: Sign-In Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md">
          <h2 className="text-gray-800 font-semibold text-lg mb-4 text-center">Sign In</h2>

          {/* Google Sign-In */}
          <button className="w-full flex items-center justify-center px-4 py-2 mb-2 border rounded-md hover:bg-gray-100 font-semibold transition">
            <Image
              src="/_x31__stroke.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </button>

          {/* Facebook Sign-In */}
          <button className="w-full flex items-center justify-center px-4 py-2 mb-4 border rounded-md hover:bg-gray-100 font-semibold transition">
            <Image
              src="/Facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Facebook
          </button>

          {/* Divider */}
          <p className="text-center text-gray-500 mb-4">Or connect with</p>

          {/* Email and Password */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
