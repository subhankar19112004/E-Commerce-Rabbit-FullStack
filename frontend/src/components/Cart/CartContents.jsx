import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "XXL",
      quantity: 2,
      price: 100,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "XXL",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Shoe",
      size: "10",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Jeans",
      size: "XXL",
      quantity: 2,
      price: 100,
      image: "https://picsum.photos/200?random=4",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className=" w-20 h-24 object-cover mr-4 rounded"
            />
            <div className="">
              <h3> {product.name}</h3>
              <p className="text-sm text-gray-500 ">size : {product.size}</p>
              <div className=" flex items-center mt-2">
                <button className=" border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button className=" border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">₹{product.price.toLocaleString()}</p>
            <button className="">
                <RiDeleteBin3Line className="h-6 w-6 mt-2 hover:text-red-500"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
