import React from "react";

const travelServices = [
  {
    icon: "✈️",
    title: "Travel Planning",
    description:
      "Customized travel itineraries tailored to your preferences and interests.",
  },
  {
    icon: "🏨",
    title: "Accommodation Booking",
    description:
      "Secure and comfortable lodgings that suit your travel style and budget.",
  },
  {
    icon: "🌍",
    title: "Destination Exploration",
    description:
      "Guided tours and activities to discover the beauty and culture of each destination.",
  },
];

function TravelServiceSection() {
  return (
    <div className="container mx-auto my-12 p-8 bg-white  max-w-3xl">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-700 text-center">
        Travel Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {travelServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#1f7b89] rounded-lg"
          >
            <span className="text-3xl mb-4">{service.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
              {service.title}
            </h3>
            <p className="text-white text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelServiceSection;
