import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(true);

  const toogleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toogleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className=" container mx-auto flex items-center justify-between py-4 px-4">
        {/** logo */}
        <div>
          <Link className="text-2xl font-medium">GEN-FASHION</Link>
        </div>
        {/** nav links */}
        <div className=" hidden md:flex  space-x-6">
          <Link
            to={"#"}
            className=" text-gray-700 hover:text-black font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to={"#"}
            className=" text-gray-700 hover:text-black font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to={"#"}
            className=" text-gray-700 hover:text-black font-medium uppercase"
          >
            Topwear
          </Link>
          <Link
            to={"#"}
            className=" text-gray-700 hover:text-black font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/**Right - icons */}
        <div className=" flex items-center space-x-4">
          <Link className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toogleCartDrawer}
            className=" relative hover:text-black"
          >
            <HiOutlineShoppingCart className="h-6 w-6 text-gray-700" />
            <span className=" absolute  -top-1  bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </button>
          {/**Search */}
          <div className=" overflow-hidden">
            <SearchBar />
          </div>

          <button className=" hover:text-black md:hidden">
            <HiBars3BottomRight onClick={toogleNavDrawer} className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toogleCartDrawer={toogleCartDrawer} />

      {/* mobile navigation */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ease-in-out ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"} `}>
        <div className=" flex justify-end p-4">
            <bottom>
                <IoMdClose onClick={toogleNavDrawer} className=" h-6 w-6 text-gray-600 cursor-pointer"/>
            </bottom>
        </div>
        <div className="p-4">
            <h2 className=" text-xl font-sans font-semibold mb-4">Menu</h2>
            <nav className="">
                <Link to="#" onClick={toogleNavDrawer} className=" block  text-gray-700 hover:text-black">
                    Men
                </Link>
                <Link to="#" onClick={toogleNavDrawer} className=" block  text-gray-700 hover:text-black">
                    Women
                </Link>
                <Link to="#" onClick={toogleNavDrawer} className=" block  text-gray-700 hover:text-black">
                    Topwear
                </Link>
                <Link to="#" onClick={toogleNavDrawer} className=" block  text-gray-700 hover:text-black">
                    Bottom Wear
                </Link>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
