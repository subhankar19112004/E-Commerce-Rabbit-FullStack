import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toogleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-2xl transform transition-transform duration-300 flex flex-col z-50 ease-in-out ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div
        onClick={toogleCartDrawer}
        title="close"
        className=" flex justify-end p-4 "
      >
        <IoMdClose className=" h-6 w-6 text-gray-600 cursor-pointer" />
      </div>
      {/* cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className=" text-xl font-sans font-semibold mb-4 text-red-400">
          Your Cart
        </h2>
        {/* component for cart components */}
        <CartContents />
      </div>
      {/* checkout button */}
      <div className=" p-4 bg-white sticky bottom-0 ">
        <button className=" w-full bg-black text-white py-2 rounded-lg font-semibold font-mono hover:bg-gray-800 transition">
          checkout
        </button>
        <p className=" text-xs text-gray-500 mt-2 font-light tracking-tighter text-center">
          Shipping, taxes and discounts calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
