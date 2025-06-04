import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);


    const newArrivals = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "5",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "6",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "7",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: "8",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish Jacket Image"
                },
            ],
        },
    ];

    const scroll = (direction) => {
        const scrollAmount = direction === 'left' ? -400 : 400;
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        })
    }

    // Update Scroll Buttons 
    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);
        }
    }

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }


    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the speed of scrolling
        scrollRef.current.scrollLeft = scrollLeft - walk;
        
    }

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
       
    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons(); // Initial check
            return () => container.removeEventListener('scroll', updateScrollButtons);
        }
    }, [])
    return (
        <section className=' py-16 px-4 lg:px-1'>
            <div className=' container mx-auto text-center mb-10 relative'>
                <h2 className=' text-3xl font-bold mb-4'>
                    Explore New Arrivals
                </h2>
                <p className=' text-lg text-gray-600 mb-8'>
                    Discover the latest styles straight off the runway, freshly added to
                    keep wardrobe on the cutting edge of fashion.
                </p>

                {/* Scroll Buttons */}
                <div className=' absolute right-0 bottom-[-30px] flex space-x-2'>
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={` p-2 rounded border ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ' border-gray-400 bg-white text-black'}`}>
                        <FiChevronLeft className=' text-xl' />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={` p-2 rounded border ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ' border-gray-400 bg-white text-black'}`}>
                        <FiChevronRight className=' text-xl' />
                    </button>
                </div>
            </div>

            {/* scrollable content */}
            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={` container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} scrollbar-hide`}>
                {newArrivals.map((product) => (
                    <div key={product._id} className=' min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name}
                            className=' w-full h-[300px] object-cover rounded-lg shadow-lg '
                            draggable="false"
                        />
                        <div className=' absolute bottom-0  left-0 right-0 bg-gray-50/10 backdrop-blur-md text-white p-2
                    rounded-b-lg'>
                            <Link to={`/product/${product._id}`} className=' block'>
                                <h4 className=' font-medium text-center'>{product.name}</h4>
                                <p className='mt-1 text-sm text-center'>₹{product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals