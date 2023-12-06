import React from "react";
import beachBackground from "../assets/beach.jpg"; // Replace with the actual path to your beach background image

function AboutUs() {
  7;
  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-100 "
      style={{
        background: `url(${beachBackground}) center/cover`,
      }}
    >
      <div className="container mx-auto p-8  max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-white text-center">
          Welcome to Our Journey!
        </h1>
        <p className="text-white font-semibold">
          Embark on an extraordinary adventure with us. We craft unique
          experiences that seamlessly blend cultural immersion, breathtaking
          landscapes, and serendipitous moments. Whether you&apos;re a seasoned
          globetrotter or a first-time explorer, we tailor each itinerary to
          suit your individual tastes. Join us for an unforgettable journey,
          where every destination unfolds a story, and every moment becomes a
          cherished memory.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
