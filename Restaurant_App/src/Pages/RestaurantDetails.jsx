import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import restPic from '../assets/HeroFormBg.jpg'


const RestaurantDetails = ({results}) => {

  const { index } = useParams();
  const restaurantDetail = results[index];


  return (
    <div className='lg:px-30 sm:px-16 px-10'>
        <h1>Restaurant Name</h1>
        {/* Restaurant informations */}
      <div>
        <div>
            <img src={restPic} alt="" />
        </div>
        <div>
            <div>
                <i></i>
                <p> 5th Avenue, New York City.</p>
            </div>
            <div>
                <i></i>
                <p> 5th Avenue, New York City.</p>
            </div>
            <div>
                <h3>About</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quisquam sunt molestias dolor cupiditate, earum, hic velit, accusamus maiores eaque officiis adipisci magni libero! Doloremque fuga doloribus architecto suscipit quae?</p>
            </div>
        </div>
      </div>
      {/* Booking Form */}
      <div>
        <h3>Book TheTable you want now!</h3>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
              <div className="mt-2.5">
                <input type="text" name="full-name" id="full-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Date</label>
              <div className="mt-2.5">
                <input type="text" name="date" id="date" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Number of people</label>
              <div className="mt-2.5">
                <input type="text" name="numPeople" id="numPeople" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">Any comment?</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows="3" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-BritishGreen px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-BritishGreen">Book</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RestaurantDetails
