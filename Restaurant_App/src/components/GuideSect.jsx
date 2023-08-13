import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pic from '../assets/TheExperience_pic.png'

const GuideSect = () => {
  const navigate=useNavigate();

  const aboutUs = () => {
    navigate(`/About`);
  }
  return (
    <div className="bg-white dark:bg-gray-900">
       
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-BritishGreen">Try TheTable for your best restaurant experience ever</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Search for your favorite cuisine, location or price range to find out what's available near.</p>
                <button onClick={aboutUs} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    About us
                </button> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={pic} alt="" />
            </div>                
        </div>
      </div>
  )
}

export default GuideSect
