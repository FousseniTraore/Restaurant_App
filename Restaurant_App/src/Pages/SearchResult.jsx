import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Restaurants from '../components/Restaurants'
// import RestaurantsMap from '../components/RestaurantsMap'




const SearchResult = () => {

  const { location } = useParams();
  const [results, setResults] = useState([]);

 
  useEffect(() => {
    // the Geopify API call to fetch restaurant data based on the location
    var requestOptions = {
      method: 'GET',
    };
    const url=`https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=9cf4359529584c638335211a6e8f9681`
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [location]);

  return (
    <div className='lg:px-30 sm:px-16 px-10'>
      <div>
        <h1>The best restaurants in {location}</h1>
      </div>
      <div>
        {/* <Restaurants /> */}
        {results.map((restaurant) => (

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src={restPic} alt="Sunset in the mountains"/> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"></div>
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
