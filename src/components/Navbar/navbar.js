import {React,useEffect }from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  useEffect(() => {
    // Select all links with the smooth-scroll class
    const links = document.querySelectorAll('a[href^="#"]');

    // Add a click event listener to each link
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        // Get the target section's ID from the link's href
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  return (
    <>
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div>
        <FontAwesomeIcon
                icon={faWrench}
                className="text-indigo-700 ml-4" 
              />
        </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 focus:bg-gray-100 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* Mobile menu button icons */}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-lg font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus:text-indigo-900"
                >
                  Home
                </Link>
                <a href="#about"
        // Use the ID of the section you want to scroll to
       className="px-3 py-2 rounded-md text-lg font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus:text-indigo-900"
        >     
        About
      </a>
                <Link
                  to="/market"
                  className="px-3 py-2 rounded-md text-lg font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus:text-indigo-900"
                >
                  Marketplace
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-lg font-medium text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus-bg-indigo-900"
              >
                Login
              </Link>
              <Link
                to="/registermain"
                className="px-4 py-2 rounded-md text-lg font-medium text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus-bg-gray-100"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus-text-indigo-900"
          >
            Home
          </Link>
          <Link
       to="/#about" // Use the ID of the section you want to scroll to
       className="px-3 py-2 rounded-md text-lg font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus:text-indigo-900"
        >     
        About
      </Link>

          <Link
            to="/market"
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 hover:text-indigo-900 focus:outline-none focus-text-indigo-900"
          >
            Marketplace
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus-bg-indigo-900"
          >
            Login
          </Link>
          <Link
            to="/registermain"
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus-bg-gray-100"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
