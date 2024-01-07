import React from 'react'

export const Data = ({weatherData}) => {
    const isDataAvailable = weatherData && 
    weatherData.temperature && 
    weatherData.city && 
    weatherData.country && 
    weatherData.humidity && 
    weatherData.description;
  return (
    <div className='weather-data'>
      {isDataAvailable ? (
        <>
          <p className='info_key'>Temperature: </p><span className='info_value'>{weatherData.temperature}</span>
          <p className='info_key'>City: </p> <span className='info_value'>{weatherData.city}</span>
          <p className='info_key'>Country: </p><span className='info_value'>{weatherData.country}</span>
          <p className='info_key'>Humidity:</p> <span className='info_value'>{weatherData.humidity}</span>
          <p className='info_key'>Description: </p><span className='info_value'>{weatherData.description}</span>
        </>
      ) : null}
    </div>
  )
}
