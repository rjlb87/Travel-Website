import React from "react";
import beachBackground from "../assets/beach.jpg"; // Replace with the actual path to your beach background image

function AboutUs() {
  return (
    <div
      className="h-screen flex items-start bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${beachBackground})`,
      }}
    >
      {/* Dark overlay to darken the background image */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ mixBlendMode: "multiply" }} // Adjust mixBlendMode as needed
      ></div>

      <div className="container mx-auto p-8 max-w-2xl relative pt-20">
        <h1 className="text-4xl font-extrabold mb-6 text-white text-center">
          OUR JOURNEY
        </h1>
        <p className="text-white font-semibold text-left">
          Embark on an extraordinary adventure with us. We craft unique
          experiences that seamlessly blend cultural immersion, breathtaking
          landscapes, and serendipitous moments. Whether you&apos;re a seasoned
          globetrotter or a first-time explorer, we tailor each itinerary to
          suit your individual tastes. Join us for an unforgettable journey,
          where every destination unfolds a story, and every moment becomes a
          cherished memory.
        </p>
        <div className="mt-8">
          <button
            className="bg-[#3b9b8e] text-white text-lg hover:bg-opacity-80 py-2 px-4 font-semibold transition duration-300 focus:outline-none focus:shadow-outline"
            onClick={() => {
              // Add the action you want when the button is clicked
              console.log("Button clicked");
            }}
          >
            DESTINATION GUIDES
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
