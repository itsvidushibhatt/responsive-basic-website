import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FeatureCard({ title, description, color }) {
  return (
    <div
      className={`border-2 border-${color}-600 rounded-md p-6 shadow-md bg-white transition-all duration-300 cursor-pointer hover:bg-${color}-600 hover:shadow-lg group`}
    >
      {/* Title */}
      <h3
        className={`font-semibold text-xl text-${color}-600 transition duration-300 group-hover:text-white`}
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
        <div className="w-full md:w-[840px] mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Add Your Listing
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              title="People"
              description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator."
              color="purple"
            />
            <FeatureCard
              title="Place"
              description="Find a class, school, playground, auditorium, studio, shop, or event venue. Book a slot at venues that allow booking through hobbycue."
              color="green"
            />
            <FeatureCard
              title="Product"
              description="Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members."
              color="red"
            />
            <FeatureCard
              title="Program"
              description="Find events, meetups, and workshops related to your hobby. Register or buy tickets online."
              color="blue"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
