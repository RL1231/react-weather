import React, { useState } from 'react';
import { getCurrentWeather } from '../api/weatherApi';

export default function WeatherDay() {
  const [query, setQuery] = useState('');
  function handleOnSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    getCurrentWeather(query)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter city location"
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
          className="rounded p-1"
        />
        <button
          type="submit"
          className="ml-2 rounded bg-blue-700 px-2 py-1 text-white"
        >
          Get Weather
        </button>
      </form>
    </>
  );
}
