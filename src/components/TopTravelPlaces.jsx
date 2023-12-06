import React from "react";

const TopTravelPlaces = () => {
  // Sample data for travel places
  const places = [
    {
      title: "Paris, France",
      description:
        "The City of Love, famous for the Eiffel Tower and Louvre Museum.",
      image:
        "https://images.unsplash.com/photo-1526893381913-e311045b8064?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image URL
    },
    {
      title: "Kyoto, Japan",
      description:
        "Historical city known for its temples, gardens, and traditional tea houses.",
      image:
        "https://images.unsplash.com/photo-1449509054340-b0c11c014a2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image URL
    },
    {
      title: "Santorini, Greece",
      description:
        "Stunning island with white-washed buildings and crystal-clear blue waters.",
      image:
        "https://images.unsplash.com/photo-1618500031461-a5fc01e96763?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image URL
    },
    {
      title: "Banff National Park, Canada",
      description:
        "Breathtaking landscapes, turquoise lakes, and the majestic Rocky Mountains.",
      image:
        "https://images.unsplash.com/photo-1616534017908-fbddc337e44b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image URL
    },
    {
      title: "Guarda, Scuol, Switzerland",
      description:
        "Historic charm of the village harmoniously blends with the breathtaking beauty of the Swiss Alps.",
      image:
        "https://images.unsplash.com/photo-1607867283465-d6792016b481?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Koh Phi Phi Don, Krabi, Thailand",
      description:
        "Breathtaking landscapes, turquoise lakes, and the majestic Rocky Mountains.",
      image:
        "https://plus.unsplash.com/premium_photo-1673288453946-e7856ec4048a?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more places as needed
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold  text-center mb-10 uppercase">
        Top Travel Places
      </h2>
      <div className="flex flex-wrap">
        {places.map((place, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <div className="bg-white overflow-hidden ml-8 mr-8">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover object-center" // Adjusted height to h-64
              />
            </div>
            <div className="mt-4 mx-10">
              <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
              <p className="text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTravelPlaces;
