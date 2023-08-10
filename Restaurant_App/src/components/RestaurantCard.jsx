import React from 'react'
import restPic from '../assets/HeroFormBg.jpg'
const RestaurantCard = () => {
  return (
    <div className='lg:px-30 sm:px-16 px-10'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={restPic} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">Restaurant Address</p>
            <p className="text-gray-700 text-base">Restaurant Type</p>
        </div>
        </div>
    </div>
  )
}

export default RestaurantCard
