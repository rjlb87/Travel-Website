import React, { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0   transition-opacity duration-300 ease-in-out`}
      style={{ opacity: isScrolled ? 0 : 1 }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 opacity-15">
        <a
          href="https://flowbite.com/"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img src="1.png" className="h-20" alt="Nomad Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-20">
          <button
            type="button"
            className="text-white  font-medium  text-sm px-4 py-2 text-center bg-[#3b9b8e]  hover:bg-opacity-90"
          >
            Contact Us
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white md:hover:text-gray-900 pr-10"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white md:hover:text-gray-900"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white md:hover:text-gray-900"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white md:hover:text-gray-900"
              >
                BLOG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
