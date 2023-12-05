import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#034752] text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Explore</h3>
            <ul>
              <li>Destinations</li>
              <li>Travel Guides</li>
              <li>Experiences</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <ul>
              <li>Contact Us</li>
              <li>Join Our Community</li>
              <li>Newsletter</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest travel insights.
          </p>

          <form className="flex items-center">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="py-2 px-3 rounded-l-md focus:outline-none focus:shadow-outline border border-gray-600"
            />
            <button
              type="submit"
              className="bg-[#D47863] hover:bg-opacity-80 py-2 px-4 rounded-r-md transition duration-300 focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
