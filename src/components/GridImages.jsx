import React from "react";

const LatestPosts = () => {
  return (
    <div className="container mx-auto p-8 lg:flex lg:items-center lg:justify-between">
      {/* Left side (text) */}
      <div className="lg:w-1/2 lg:pr-8">
        <h2 className="text-3xl font-bold mb-4 text-center uppercase">
          Latest Posts
        </h2>
        <p className="text-gray-600">
          Stay updated with our latest adventures and discoveries. Explore
          breathtaking destinations, and join us on our journey to uncover the
          beauty of the world. Discover hidden gems, create memories, and
          experience the extraordinary in every corner of this awe-inspiring
          planet.
        </p>
      </div>

      {/* Right side (image grid) */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Latest Post 1"
            className="w-full h-full object-cover mb-4 lg:mb-0 lg:h-48"
          />
          <img
            src="https://img.freepik.com/premium-photo/girl-travels-by-train-beautiful-places-beautiful-girl-traveling-by-train-among-mountains-travel-by-train-travelling-asia-trains-sri-lanka-railway-transport-railway-transport-asia_135372-796.jpg?w=900"
            alt="Latest Post 2"
            className="w-full h-full object-cover mb-4 lg:mb-0 lg:h-48"
          />
          <img
            src="https://media.timeout.com/images/105657780/750/562/image.jpg"
            alt="Latest Post 3"
            className="w-full h-full object-cover"
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
