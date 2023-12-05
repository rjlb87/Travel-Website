import React from "react";

const ImageGrid = () => {
  return (
    <div className="container mx-auto p-8 lg:grid lg:grid-cols-2 lg:gap-8">
      {/* Left side (text) */}
      <div className="lg:col-start-1 lg:col-end-2">
        <h2 className="text-3xl font-bold mb-4">Discover Beautiful Places</h2>
        <p className="text-gray-600">
          Embark on a journey to explore the wonders of our world&apo;s most
          breathtaking destinations. From serene landscapes to vibrant
          cityscapes, each place tells a unique story of nature&apo;s artistry
          and human creativity. Let the beauty of these places captivate your
          senses and inspire your wanderlust. Join us in celebrating the
          magnificence of our planet&apo;s hidden gems. Uncover the beauty,
          create memories, and experience the extraordinary in every corner of
          this awe-inspiring world.
        </p>
      </div>

      {/* Right side (image grid) */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
      >
        <div className="lg:col-start-2 lg:col-end-3 grid grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://img.freepik.com/premium-photo/girl-travels-by-train-beautiful-places-beautiful-girl-traveling-by-train-among-mountains-travel-by-train-travelling-asia-trains-sri-lanka-railway-transport-railway-transport-asia_135372-796.jpg?w=900"
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://media.timeout.com/images/105657780/750/562/image.jpg"
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
