import React from 'react'
import { HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'

const FeaturesSection = () => {
  return (
    <section className=' py-16 px-4 bg-white'>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {/* Feature 1 */}
            <div className='border border-transparent rounded-md flex flex-col items-center hover:bg-gray-900 hover:text-white transition-colors duration-300 pb-3'>
                <div className=' p-4 rounded-full mb-4 '>
                    <HiShoppingBag className=' text-xl'/>
                </div>
                <h4 className=' tracking-tighter mb-2 '>
                    FREE INTERNATIONAL SHIPPING <span className='text-xs'>varries by country</span>
                </h4>
                <p className=' text-gray-600 text-sm tracking-tighter leading-6'>
                    On all orders above ₹15000 <span className='text-xs text-red-400'>(in Indian Rupees)</span>
                </p>
            </div>

            {/* Feature 2 */}
            <div className='  border border-transparent rounded-md flex flex-col items-center hover:bg-gray-900 hover:text-white transition-colors duration-300 pb-3'>
                <div className=' p-4 rounded-full mb-4 '>
                    <HiArrowPathRoundedSquare className=' text-xl'/>
                </div>
                <h4 className=' tracking-tighter mb-2 '>
                    45 DAYS RETURN <span className='text-xs'>varries only for non-GST orders</span>
                </h4>
                <p className=' text-gray-600 text-sm tracking-tighter leading-6'>
                    Money back guarantee <span className='text-xs text-cyan-400'>(exeptional available)</span>
                </p>
            </div>

            {/* Feature 3 */}
            <div className=' border border-transparent rounded-md flex flex-col items-center hover:bg-gray-900 hover:text-white transition-colors duration-300 pb-3'>
                <div className=' p-4 rounded-full mb-4 '>
                    <HiOutlineCreditCard className=' text-xl'/>
                </div>
                <h4 className=' tracking-tighter mb-2 '>
                    All types of payment  <span className='text-xs'>varries by country</span>
                </h4>
                <p className=' text-gray-600 text-sm tracking-tighter leading-6'>
                    100% secure payment <span className='text-xs text-blue-400'>(with all payment gateways)</span>
                </p>
            </div>


        </div>
    </section>
  )
}

export default FeaturesSection