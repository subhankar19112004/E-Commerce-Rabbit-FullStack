import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product, index) => (
            <Link 
                key={index} 
                to={`/product/${product._id}`} 
                className='block group relative overflow-hidden'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div 
                    className={`bg-white p-4 rounded-lg transition-colours duration-700 ease-in relative z-10
                        ${hoveredIndex === index 
                            ? 'bg-gradient-to-r from-blue-50 to-blue-100' 
                            : hoveredIndex !== null && Math.abs(hoveredIndex - index) <= 1
                            ? 'bg-gradient-to-r from-blue-50/50 to-blue-100/50' 
                            : 'bg-white'}
                        before:content-[""] before:absolute before:inset-0 before:bg-blue-200 
                        before:opacity-0 before:transition-opacity before:duration-700 before:ease-in-out
                        ${hoveredIndex === index ? 'before:opacity-20' : 'before:opacity-0'}
                        before:-z-10`}
                    style={{ transitionDelay: `${Math.abs(hoveredIndex !== null ? hoveredIndex - index : 0) * 100}ms` }}
                >
                    <div className="w-full h-96 mb-4 relative overflow-hidden rounded-lg">
                        <img 
                            src={product.images[0].url} 
                            alt={product.images[0]?.altText || "Product-images" }
                            className='w-full h-full object-cover rounded-lg '
                        />
                    </div>
                    <h2 className={`text-sm mb-2 font-medium transition-colors duration-500 
                        ${hoveredIndex === index ? 'text-blue-800' : 'text-black'}`}>
                        {product.name}
                    </h2>
                    <p className={`text-gray-600 font-medium text-sm tracking-tighter 
                        transition-colors duration-500 ${hoveredIndex === index ? 'text-blue-900' : 'text-gray-600'}`}>
                        ₹{product.Price}
                    </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid