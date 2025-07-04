import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const selectedProduct = {
    name: "Stylish Jacket",
    Price: 1599,
    originalPrice: 2199,
    description: "A stylish jacket made from high-quality materials, perfect for any occasion.",
    brand: "PETTER ENGLAND",
    material: "Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Blue", "Red"],
    images: [{
        url: "https://picsum.photos/500/500?random=9",
        altText: "Stylish Jacket Image"
    }, {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Stylish Jacket Image"
    }, {
        url: "https://picsum.photos/500/500?random=11",
        altText: "Stylish Jacket Image"
    }]
}

const similarProducts = [
    {
        _id: 1,
        name: "Casual Shirt",
        Price: 4899,
        images: [{ url: "https://picsum.photos/500/500?random=13"}],
    },
    {
        _id: 2,
        name: "bottle-neck T-Shirt",
        Price: 3899,
        images: [{ url: "https://picsum.photos/500/500?random=14"}],
    },
    {
        _id: 3,
        name: "T-Shirt",
        Price: 2899,
        images: [{ url: "https://picsum.photos/500/500?random=15"}],
    },
    {
        _id: 4,
        name: "Scholar Jacket",
        Price: 1899,
        images: [{ url: "https://picsum.photos/500/500?random=16"}],
    },
]
const ProductDeatails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleQuantityChange = (action) => {
        if (action === "plus") {
            setQuantity(prev => prev + 1);
            if (quantity >= 10) {
                toast.error("Maximum quantity reached (10).", {
                    duration: 1000
                });
            }
        } else if (action === "minus") {
            setQuantity(prev => prev > 1 ? prev - 1 : 1);
        }
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor || quantity > 10) {
            toast.error("Please select size and color before adding to cart or see the maximum quantity.", {
                duration: 1000
            });
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success(`${quantity} Product added to cart successfully!`, {
                duration: 1500
            });
            setIsButtonDisabled(false);
        }, 1000);
    }

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0]?.url)
        }
    }, [selectedProduct])


    return (
        <div className=' p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/* left Thumbnail */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText}
                                onClick={() => setMainImage(image.url)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage === image.url ? "border-black p-1" : "border-gray-300"}`}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className='md:w-1/2'>
                        <div className=' mb-4'>
                            <img
                                src={mainImage}
                                alt={selectedProduct.images[0]?.altText || selectedProduct.name}
                                className='w-full h-auto object-cover rounded-lg shadow-lg'
                                draggable="false"
                            />
                        </div>
                    </div>

                    {/* Mobile Thumbnail */}
                    <div className='md:hidden flex overscroll-x-scroll  space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black p-1" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className=' md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>

                        <p className=' text-lg text-gray-600 mb-1 line-through'>
                            ₹{selectedProduct.originalPrice && selectedProduct.originalPrice.toLocaleString()}
                        </p>

                        <p className=' text-xl text-gray-500 mb-2 '>
                            ₹{selectedProduct.Price && selectedProduct.Price.toLocaleString()}
                        </p>

                        <p className=' text-gray-600 mb-4'>{selectedProduct.description && selectedProduct.description}</p>

                        <div className=' mb-4'>
                            <p className=' text-gray-700'>Color:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color.toLowerCase(), filter: 'brightness(0.8)' }}
                                        className={`w-8 h-8 rounded-full cursor-pointer border ${selectedColor === color ? ' border-4  border-white p-0.5' : 'border-gray-300'}`}>

                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className=' mb-4'>
                            <p className=' text-gray-700'>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        onClick={() => setSelectedSize(size)}
                                        key={size}
                                        className={`px-4 py-2 rounded border text-sm ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'}`}    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-6'>
                            <p className=' text-gray-700'>Quantity:</p>
                            <div className=' flex items-center mt-2 space-x-4'>
                                <button onClick={() => handleQuantityChange("minus")} className='px-2 py-1 hover:bg-red-300 bg-gray-200 rounded text-lg'>-</button>
                                <span className='text-lg'>{quantity}</span>
                                <button onClick={() => handleQuantityChange("plus")} className='px-2 py-1 hover:bg-green-300 bg-gray-200 rounded text-lg'>+</button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black hover:text-white hover:bg-gray-800 text-amber-100 py-2 px-6 rounded w-full mb-4 transition-colors duration-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >{ isButtonDisabled ? "Adding..." : "Add to Cart"}</button>

                        <div className='mt-10 text-gray-700'>
                            <h3 className=' text-xl font-bold mb-4'>Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand:</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material:</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className=' mt-20'>
                    <h2 className=' text-2xl text-center font-medium mb-4'>
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProducts}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDeatails