import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='Lisbon' />
        <footer>
          This project was coded by Sandra Cardoso and is {''}
          <a
            href='https://github.com/sellennya/react-weather-app'
            target='_blank'
            rel=' noreferrer'
            className='App-footerLink'
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
