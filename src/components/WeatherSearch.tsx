import type React from 'react';
import { getWeather } from '../api/getWeather';
import { useWeatherStore } from '../store/weatherStore';

export default function WeatherSearch() {
  const { setWeather } = useWeatherStore();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = (formData.get('query') ?? '').toString().trim();
    if (!query) return;
    const weather = await getWeather(query);
    setWeather(weather);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed right-0 bottom-0 left-0 hidden items-center justify-center space-x-3 p-4 lg:flex lg:flex-row"
    >
      <input
        name="query"
        placeholder="Enter a city or location"
        className="rounded border border-neutral-300 p-1"
      />
      <button
        type="submit"
        className="text-md rounded bg-blue-500 p-2 font-semibold text-white"
      >
        Get Weather
      </button>
    </form>
  );
}
