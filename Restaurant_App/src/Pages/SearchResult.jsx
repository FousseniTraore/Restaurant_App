import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      .then(result => {
        const latitude = result.features[0].properties.lat;
        const longitude = result.features[0].properties.lon;

        const restaurantUrl = 'https://worldwide-restaurants.p.rapidapi.com/search';

        const restaurantOptions = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '48410fbc59msh59270c075d3d0b0p123c50jsnf833bab38ecc',
            'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
          },
          body: new URLSearchParams({
            language: 'en_US',
            limit: '30',
            location_id: `${latitude},${longitude}`,
            currency: 'USD'
          })
        };

        fetch(restaurantUrl, restaurantOptions)
          .then(response => response.json())
          .then(res => setResults(res.results))
          .catch(restaurantError => console.log('Restaurant API error', restaurantError));
        })
      .catch(error => console.log('error', error));
  }, [location]);
  
  
  return (
    <div className='lg:px-30 sm:px-16 px-10'>
      {/* render the restaurant data */}
      {results ? (
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-BritishGreen">The best restaurant in {location}</h2>
          <p>view more information and book TheTable you like with any of these restaurant</p>
          {results.data && results.data.map((restaurant, index) => (
            <div key={index} className='group-hover:opacity-75 max-w-sm rounded overflow-hidden shadow-lg py-10'>
              <div className='h-[175px] w-[313.33px]'>
                <img src={restaurant.photo.images.original.url} className='w-full h-full' alt={restaurant.name} />
              </div>
              <div className='px-6 py-4'>
                <h2>{restaurant.cuisine.name} Italian</h2>
                <h3 className='font-bold text-xl  text-BritishGreen mb-2'>{restaurant.name}</h3>
                <p className='text-gray-700 text-base'>{restaurant.address}</p>
                <p className='text-gray-700 text-base'>{restaurant.country}</p>
                <p className='font-bold py-5'>{restaurant.price}</p>
                {/* button to view details */}
                <button
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  More details
                </button>   
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading restaurant data...</p>
      )}
    </div>
  )
}

export default SearchResult
