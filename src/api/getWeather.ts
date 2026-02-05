import type { WeatherData } from '../types/types';

export async function getWeather(query: string): Promise<WeatherData> {
  // Get API key from .env
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY as string | undefined;
  // Check that API key exists
  if (!apiKey) {
    throw new Error('Missing VITE_WEATHER_API_KEY in .env');
  }
  // Structure URL
  const baseUrl = `https://api.weatherapi.com/v1/forecast.json`;
  const url = new URL(baseUrl);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('q', query);
  url.searchParams.set('days', '3');
  url.searchParams.set('aqi', 'no');
  url.searchParams.set('alerts', 'no');
  // Fetch weather data from WeatherAPI
  const response = await fetch(url);
  // Check for errors
  if (!response.ok) {
    throw new Error(
      `Weather API error: ${response.status} ${response.statusText}`,
    );
  }
  // Parsing JSON response
  const data = (await response.json()) as WeatherData;
  // Return parsed weather data
  return data;
}
