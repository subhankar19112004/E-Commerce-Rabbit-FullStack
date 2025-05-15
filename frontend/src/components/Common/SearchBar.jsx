import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, serSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen
  }

  return (
    <div className={` flex items-center justify-center w-full transition-all duration-300 ${isOpen ? " absolute top-0 left-0 w-full bg-white h-24 z-50" : " w-auto"}`}>
      {isOpen ? (
        <form 
        onSubmit={handleSearch}
        className=" relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pl-2 pr-12 focus:outline-none placeholder:text-gray-800 rounded-lg bg-gray-100"
              value={searchTerm}
              onChange={(e) => serSearchTerm(e.target.value)}
            />
            {/* search icon */}
            <button type="submit" className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <HiMagnifyingGlass className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-700" />
            </button>
          </div>
          {/* close button */}
          <button type="button" onClick={handleSearchToggle} className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
            <HiMiniXMark className=" h-6 w-6"/>
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
