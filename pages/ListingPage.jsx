import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FeatureCard({ title, description, color, bgColor, textColor }) {
  return (
    <div
      className={`border-2 ${bgColor} rounded-md p-6 shadow-md bg-white transition-all duration-300 cursor-pointer hover:${bgColor} hover:shadow-lg group`}
    >
      {/* Title */}
      <h3
        className={`font-semibold text-xl ${textColor} transition duration-300 group-hover:text-white`}
      >
        {title}
      </h3>
      {/* Description */}
      <p
        className={`text-gray-600 text-sm mt-2 leading-relaxed transition duration-300 group-hover:text-white`}
      >
        {description}
      </p>
    </div>
  );
}

export default function ListingPage() {
  return (
    <div>
      <Navbar />
      <section className="px-4 md:px-6 py-10 bg-gray-50">
        <div className="max-w-[840px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Add Your Listing
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Feature Cards */}
            <FeatureCard
              title="People"
              description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator."
              color="purple"
              bgColor="hover:bg-purple-600 border-purple-600"
              textColor="text-purple-600"
            />
            <FeatureCard
              title="Place"
              description="Find a class, school, playground, auditorium, studio, shop, or event venue. Book a slot at venues that allow booking through hobbycue."
              color="green"
              bgColor="hover:bg-green-600 border-green-600"
              textColor="text-green-600"
            />
            <FeatureCard
              title="Product"
              description="Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members."
              color="red"
              bgColor="hover:bg-red-600 border-red-600"
              textColor="text-red-600"
            />
            <FeatureCard
              title="Program"
              description="Find events, meetups, and workshops related to your hobby. Register or buy tickets online."
              color="blue"
              bgColor="hover:bg-blue-600 border-blue-600"
              textColor="text-blue-600"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
