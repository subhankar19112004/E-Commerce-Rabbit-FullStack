import React from 'react';
import mensColectionImage from "../../assets/mens-collection.webp";
import womensColectionImage from "../../assets/womens-collection.webp";
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 justify-center items-center">
        {/* Women's collection */}
        <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105">
          <img src={womensColectionImage} alt="Women's Collection" className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Women's Collection</h2>
            <Link to="/collections/all?gender=Women" className="text-lg font-medium py-2 px-6 bg-pink-600 text-white rounded-full shadow-md transition-colors duration-300 hover:bg-pink-700">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's collection */}
        <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105">
          <img src={mensColectionImage} alt="Men's Collection" className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Men's Collection</h2>
            <Link to="/collections/all?gender=Men" className="text-lg font-medium py-2 px-6 bg-blue-600 text-white rounded-full shadow-md transition-colors duration-300 hover:bg-blue-700">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
