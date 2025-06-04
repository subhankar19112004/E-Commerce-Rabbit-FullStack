import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img
        src={heroImg}
        alt="Hero image"
        className="w-full h-[600px] sm:h-[700px] md:h-[800px] object-cover object-center"
      />

      <div className="absolute inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 flex items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="text-center text-white max-w-3xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Vacation Sale
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 text-red-600">
              Up to <span className="text-6xl text-red-700">50% OFF</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-light tracking-wider mb-8 sm:mb-10">
            Explore our vacation-ready outfits, with worldwide fast shipping.
          </p>

          <Link
            to="#"
            className="bg-red-600 text-white py-3 px-10 rounded-full text-lg font-semibold shadow-xl transform transition-all duration-300 hover:bg-red-700 hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
