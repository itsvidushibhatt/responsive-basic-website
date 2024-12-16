function FeatureCard({ title, description, button }) {
  return (
    <div className="border rounded-md p-6 shadow-md bg-white flex flex-col justify-between text-center sm:text-left hover:shadow-lg transition duration-300">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div>
        <button className="mt-4 px-6 py-3 text-purple-600 font-medium border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 w-full sm:w-auto text-lg">
          {button}
        </button>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="px-4 md:px-6 py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="People"
            description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator."
            button="Connect"
          />
          <FeatureCard
            title="Place"
            description="Find a class, school, playground, auditorium, studio, shop, or event venue. Book a slot at venues that allow booking through hobbycue."
            button="Meet Up"
          />
          <FeatureCard
            title="Product"
            description="Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members."
            button="Get It"
          />
          <FeatureCard
            title="Program"
            description="Find events, meetups, and workshops related to your hobby. Register or buy tickets online."
            button="Attend"
          />
        </div>
      </div>
    </section>
  );
}
