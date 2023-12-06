import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Explore Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Explore</h3>
            <ul>
              <li>Destinations</li>
              <li>Travel Guides</li>
              <li>Experiences</li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <ul>
              <li>Contact Us</li>
              <li>Join Our Community</li>
              <li>Newsletter</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Legal Section with Image on the right */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <div className="flex items-center">
              <ul className="mr-8">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
              <img
                src="1.png"
                alt="Footer Image"
                className="w-60 h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="">
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
              className="py-2 px-3  focus:outline-none focus:shadow-outline border border-gray-600"
            />
            <button
              type="submit"
              className="bg-[#3b9b8e] hover:bg-opacity-80 py-2 px-4 font-semibold transition duration-300 focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center mt-4">
          <a
            href="https://www.facebook.com/"
            className="text-white mr-4 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-white mr-4 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://twitter.com/"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
