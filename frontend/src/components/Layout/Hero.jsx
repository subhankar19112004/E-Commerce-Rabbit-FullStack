import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Hero image"
        className="w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover"
      />

      <div className=" absolute inset-0 bg-black-500/50 flex items-center justify-center">
        <div className=" text-center text-white p-6 ">
          <h1 className=" text-4xl flex flex-col md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation Sale{" "}
            <span className=" text-7xl">
              {" "}
              upto{" -  "}
              <span className=" text-7xl text-red-700"> 50% </span>
            </span>
          </h1>

          <p className=" text-sm font-light md:text-lg  tracking-wider mb-6">
            Explore our vacation ready outfits with the fast world wide shipping.
          </p>

        <Link to="#" className=" bg-white text-gray-950 px-6 py-2 rounded-sm text-lg ">Shop Now</Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
