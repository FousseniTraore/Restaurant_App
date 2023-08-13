import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import GuideSect from '../components/GuideSect'




function Home () {

  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const searchRestaurant = () => {
    navigate(`/results/${location}`);
  }

  return (
    <div className='lg:px-30 sm:px-16 px-10'>
      <div>
        <h2 className="text-4xl font-bold mb-5">Search for your favorite cuisine, location or price range to find out what's available near</h2>
        {/* Hero Section form */}
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 bg-hero-pattern bg-cover rounded">
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <input type="text" 
                    name="first-name" 
                    id="first-name" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6" 
                    placeholder='Enter a City name...'
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input 
                      type="text" 
                      name="last-name" 
                      id="last-name" 
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6" 
                      placeholder='Cuisine, Restaurant name...'
                      />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button 
                  onClick={searchRestaurant} 
                  className="block w-full rounded-md bg-BritishGreen px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-BritishGreen"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
      </div>
      {/* How it works section */}
      <GuideSect/>
    </div>
  )
}

export default Home
