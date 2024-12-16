import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-6 py-10 w-full md:w-[1240px] mx-auto">
      <div className="p-6 rounded-lg bg-purple-100 shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>

        {/* Testimonial Text */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very
          difficult to find or connect with like-minded people. Websites like hobbycue.com provide a
          great service to connect, communicate, and exchange ideas with others. It also helps in
          finding quality products and services recommended by the hobbycue community. To safely
          explore hobbies and activities in one place is an excellent idea, and I highly recommend it.
        </p>

        {/* User Info */}
        <div className="flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Audio Track Image */}
          <div className="relative w-full md:w-[700px] h-[60px]">
            <Image
              src="/Audio Track.png"
              alt="Audio Track"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* User Details */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
            {/* User Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 md:mb-0">
              <Image
                src="/Ellipse 12.png"
                alt="Shubha Nagarajan"
                width={64}
                height={64}
                objectFit="cover"
              />
            </div>

            {/* User Text */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-800">Shubha Nagarajan</p>
              <p className="text-sm text-gray-500">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
