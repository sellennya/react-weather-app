import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';
import FormattedDate from './FormattedDate';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    });
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <form>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Enter a city..'
                className='form-control'
                autoFocus='on'
              />
            </div>
            <div className='col-3'>
              <input
                type='submit'
                value='Search'
                className='btn btn-primary w-100'
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className='text-capitalize'>{weatherData.description}</li>
        </ul>
        <div className='row mt-3'>
          <div className='col-6'>
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className='temperature'>
              {Math.round(weatherData.temperature)}
            </span>
            <span className='unit'>°C</span>
          </div>
          <div className='col-6'>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = '037f5c727f06280e77af4e476422de25';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
