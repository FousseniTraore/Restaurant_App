import React from 'react'
import Logo from '../assets/TheTable-removebg-preview.png'

function Footer() {
  return (
    <footer className='w-full bg-black'>
        <div className=' px-10 flex flex-col justify-center items-center   text-white md:flex-row md:gap-20'>
          <div className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'>
            <img src={Logo} className='w-full h-full object-contain' alt="" /> 
          </div>
          <div className='md:px-40'>
            <h6 className='font-semibold py-2'>Company</h6>
            <ul >
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='md:px-40'>
            <h6 className='font-semibold py-2'>Follow us on social media</h6>
            <div>
            <ul className='flex flex-row'>
                
            </ul>
            </div>
          </div>
        </div>
        <div className='py-5'>
          <p className='text-gray-300 flex justify-center'>© 2022 All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer

