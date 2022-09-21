import React, { useEffect, useState } from 'react';

import './WeatherForecast.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  function callApi() {
    const apiKey = '037f5c727f06280e77af4e476422de25';
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (ready) {
    return (
      <div className='WeatherForecast'>
        <div className='row mt-3'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className='col' key={index}>
                  <WeatherForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    callApi();
    return (
      <ReactLoading
        type='spokes'
        color='#0B5ED7'
        height={'15%'}
        width={'15%'}
        className='loading'
      />
    );
  }
}
