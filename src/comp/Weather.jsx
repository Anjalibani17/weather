import React, { useState } from 'react';
import { fetchWeather } from '../openWeather';
const Weather =  () => {
    const [city,setCity]=useState("");
    const [weatherData,setWeatherData] = useState(null);

    const handleFetchWeather = async()=>{
        const data = await fetchWeather(city);
        setWeatherData(data);
    }
   
    return (
        <div>
        <h1>Weather app</h1>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}></input>
            <button onClick={handleFetchWeather}>click</button>
            {/* <h2>{weatherData.name}</h2> */}
            <div>
                {weatherData && (
                    <>
                    <h2>{weatherData.name}</h2>
                    <h3>temp:{weatherData.main.temp} F </h3>
                    </>
                    
                )}
            </div>
        </div>
    );
}

export default Weather;
