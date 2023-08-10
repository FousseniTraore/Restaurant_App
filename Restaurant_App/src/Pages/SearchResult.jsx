import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Restaurants from '../components/Restaurants'
// import RestaurantsMap from '../components/RestaurantsMap'



const SearchResult = () => {

  const { location } = useParams();
  const [results, setResults] = useState([]);


 
  useEffect(() => {
    // the Yelp API call to fetch restaurant data based on the location
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 2P-HM-b-VAwXU89Kjv9-PDhFY0IRkK1oqGg0newGq7hI4XqJu2oTRLAQAUEfb5o9j_g07aptKE-cpVRwbIqS-emWivHp_0JqTJa_Ay0n9VkxUjWGQabw3rMjqyjRZHYx'
      }
    };
    
    fetch('https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20', options)

      .then((response) => response.json())
      .then((data) => setResults(data.businesses))
      .catch((error) => console.error('Error fetching data:', error));
  }, [location]);

  return (
    <div className='lg:px-30 sm:px-16 px-10'>
      <div>
        <h1>The best restaurants in "CityName"</h1>
      </div>
      <div>
        {/* <Restaurants /> */}
        {results.map((restaurant) => (

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src={restPic} alt="Sunset in the mountains"/> */}
            <div className="px-6 py-4">
                <div key='restaurant.id' className="font-bold text-xl mb-2">{restaurant.name}</div>
                {/* <p className="text-gray-700 text-base">Restaurant Address</p>
                <p className="text-gray-700 text-base">Restaurant Type</p> */}
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <RestaurantsMap /> */}
      </div>
    </div>
  )
}

export default SearchResult
