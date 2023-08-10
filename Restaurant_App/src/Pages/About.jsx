import React from 'react'
import About_Pic1 from '../assets/TheExperience_pic.png'
import TheHead from '../assets/TheHead.png'
import MapPic from '../assets/World_map_green.png'

function About() {
  return (
    <div className='lg:px-30 sm:px-16 px-10 py-10 md:py-20'>
      <div className='pb-10 md:pb-5'>
        <h1 className='text-BritishGreen font-bold text-4xl'>About Us </h1>
        <p>Any questions ? <br /> Send us a message, we are ready to help you. </p>
      </div>
      {/* First section */}
      <div className='md:py-5'>
        {/* title of the section */}
        <div className='md:w-1/2'>
          <h2 className='text-BritishGreen font-bold text-2xl '>Enjoy your best restaurant experience everywhere on TheTable!</h2>
        </div>
          {/* image and text next to each other on a meduim and large screen  */}
        <div className='py-5 md:flex md:flex-row-reverse'>
          <div className='lg:w-1/2 '>
            <div className='md:w-[400px] md:h-[400px]'>
            <img src={About_Pic1} className='w-full h-full object-contain' alt="About picture 1" />
            </div>
          </div>
          <div className='md:w-1/2 md:mt-20'>
            <p className="text-gray-500 md:mb-05">
                <span className='text-black font-semibold'>TheTable is the most recommended Web Application that gives you access to any restaurant worldwide.</span> It helps you get the exact location of the restaurant of your choice, provide information on the menu, the cost range, and any other relevant information available. 
                Check out now your favourite restaurant and book TheTable you deserve.
                <br />
                <span className="text-black font-semibold">Give us the privilege to make your restaurant experience the most memorable you could imagine.</span>
              </p>
          </div>
        </div>
      </div>
      {/* Second section  */}
      <div className='pb-20'>
        {/* title of the section */}
        <div className='md:w-1/2'>
        <h2 className='text-BritishGreen font-bold text-2xl '>TheHead behind TheTable!</h2>
        </div>
          {/* image and text next to each other on a meduim and large screen  */}
        <div className='py-5 md:flex'>
          <div className='lg:w-1/2 '>
            <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
            <img src={TheHead} className='w-full h-full object-contain' alt="About picture 1" />
            </div>
          </div>
          <div className='md:w-1/2 md:mt-20'>
            <p className="text-gray-500">
                <span className="text-black font-semibold">Every single individual deserve the best experience when it comes to food.</span> TheHead is a passionate of food, lifestyle and technology and  he believes that technology could be used to enhance the restauration sector in the world by making booking process effortlessly digital.
                  He is currently a third year computing student at Glasgow Caledonian University 
                  in partnership the African Leadership University in Mauritius. 
                <br /> <span className="text-black font-semibold">Get to learn more by check out TheHead social media profiles.</span></p>

                <ul className='flex flex-row'>
                
              </ul>

          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className='text-BritishGreen font-bold text-2xl flex justify-center'>Promote The culture of TheTable around the world!</h2>
          <p className='flex justify-center'>TheTable is available all around the world and it intends to establish the new way of enjoying their restaurant experience.</p>
          <div className=''>
            <img src={MapPic} className='flex justify-center ' alt="World_map_pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
