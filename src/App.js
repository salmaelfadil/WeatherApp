import React, { useState } from 'react';
import './App.css';
import { Form } from "./components/Form"
import { Data } from "./components/Data"

const API_KEY = "b26af2ed099d9926de5c486b97ad4964";
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city, country);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);    
    const response_json = await response.json();
    city && country ? setWeatherData({
      temperature: response_json.main.temp,
      city: response_json.name,
      country: response_json.sys.country,
      humidity: response_json.main.humidity,
      description: response_json.weather[0].description,
      error: ""
    }) : setWeatherData(weatherData);
  };
  
  return (
    <div className="App">
      <div className='container'>
      <Form handleSubmit={handleSubmit}/>
      <Data weatherData={weatherData}/>
    </div>
   </div>
  );
}

export default App;
