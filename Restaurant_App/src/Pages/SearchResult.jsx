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
            'X-RapidAPI-Key': 'fe7f75a935msh568e513c046d99bp1ff4bdjsnaaf41eca86eb',
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
          .then(result => setResults(result))
          .catch(restaurantError => console.log('Restaurant API error', restaurantError));
        })
      .catch(error => console.log('error', error));
  }, [location]);
  
  
  return (
    <div className='lg:px-30 sm:px-16 px-10'>
  
    </div>
  )
}

export default SearchResult
