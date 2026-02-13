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
      className="hidden items-center justify-center space-x-3 p-4 xl:flex xl:flex-row xl:space-x-5 xl:p-8"
    >
      <input
        name="query"
        placeholder="Enter a city or location"
        className="rounded border border-neutral-300 p-1 focus:border-neutral-300 focus:ring-0 focus:outline-none xl:p-2 xl:text-xl"
      />
      <button
        type="submit"
        className="text-md rounded bg-blue-500 p-2 font-semibold text-white xl:px-3 xl:py-2 xl:text-xl"
      >
        Get Weather
      </button>
    </form>
  );
}
