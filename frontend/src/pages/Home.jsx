import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDeatails from '../components/Products/ProductDeatails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'


const placeholderProducts = [
  {
        _id: 1,
        name: "Casual Shirt",
        Price: 4899,
        images: [{ url: "https://picsum.photos/400/400?random=21"}],
    },
    {
        _id: 2,
        name: "bottle-neck T-Shirt",
        Price: 3899,
        images: [{ url: "https://picsum.photos/400/400?random=22"}],
    },
    {
        _id: 3,
        name: "T-Shirt",
        Price: 2899,
        images: [{ url: "https://picsum.photos/400/400?random=23"}],
    },
    {
        _id: 4,
        name: "Scholar Jacket",
        Price: 1899,
        images: [{ url: "https://picsum.photos/400/400?random=24"}],
    },
    {
        _id: 5,
        name: "Casual Shirt",
        Price: 5899,
        images: [{ url: "https://picsum.photos/400/400?random=17"}],
    },
    {
        _id: 6,
        name: "bottle-neck T-Shirt",
        Price: 6899,
        images: [{ url: "https://picsum.photos/400/400?random=18"}],
    },
    {
        _id: 7,
        name: "T-Shirt",
        Price: 7899,
        images: [{ url: "https://picsum.photos/400/400?random=19"}],
    },
    {
        _id: 8,
        name: "Scholar Jacket",
        Price: 8899,
        images: [{ url: "https://picsum.photos/400/400?random=20"}],
    },
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* Best Seller */}
        <h2 className=' text-3xl text-center font-bold mb-4 font-serif '>Best Seller</h2>
        <ProductDeatails/>

        <div className=' container mx-auto'>
          <h2 className=' text-3xl text-center font-bold mb-4 font-sans'>Top Wears for Women</h2>
          <ProductGrid products={placeholderProducts}/>

          <FeaturedCollection/>
          <FeaturesSection/>
        </div>
    </div>
  )
}

export default Home