import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = days[date.getDay()];

    return day;
  }
  return (
    <ul className=' WeatherForecastDay'>
      <li className='WeatherForecast-day'>{day()}</li>
      <li>
        <WeatherIcon code={props.forecast.weather[0].icon} width={46} />
      </li>
      <li className='WeatherForecast-temperatures'>
        <span className='WeatherForecast-temperature-max'>
          {maxTemperature()}
        </span>
        <span className='WeatherForecast-temperature-min'>
          {minTemperature()}
        </span>
      </li>
    </ul>
  );
}
