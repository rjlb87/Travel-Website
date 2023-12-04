import React from "react";

const SplashText = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://www.example.com/your-travel-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to your travel website
        </h1>
        <p className="text-lg">
          Explore our amazing features and start your journey with us.
        </p>
        <button className="mt-8 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashText;
