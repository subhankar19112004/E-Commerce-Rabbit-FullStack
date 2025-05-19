import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" border-t px-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8  px-4 lg:px-0">
        <div>
          <h3 className=" test-lg text-gray-800 mb-4">News Letter</h3>
          <p className=" text-gray-600 mb-4">
            Subscribe to our newsletter to get the latest updates
          </p>
          <p className=" font-medium text-sm text-gray-900 mb-6 ">
            Sign up and get 10% of on your first purchase.
          </p>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b bg-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="p-3 bg-black text-white px-6 py-3 text-sm  rounded-r-md hover:bg-gray-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className=" space-y-2 text-gray-700">
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Men's Topwear
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Women
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Kids
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className=" space-y-2 text-gray-700">
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className=" hover:text-gray-900 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6 ">
            {/* 1 */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-700 "
            >
              <TbBrandMeta className=" h-6 w-6" />
            </a>

            {/* 2 */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-700 "
            >
              <IoLogoInstagram className=" h-6 w-6" />
            </a>

            {/* 3 */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-700 "
            >
              <RiTwitterXLine className=" h-6 w-6" />
            </a>
          </div>

          <p className=" text-gray-600 text-sm">
            Call Us
          </p>

          <p>
            <FiPhoneCall className=" inline-block mr-2" />
            <span className=" text-gray-900 font-semibold">+91 77355-99567</span>
          </p>
        </div>
      </div>

      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className=" text-sm text-gray-600 text-center tracking-tighter">
          &copy; 2025 GEN-FASHION. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
