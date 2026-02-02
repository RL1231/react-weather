import type { WeatherDay } from '../types/types';
// Weather API base URL
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// Gets API key from environment variables
function getApiKey(): string {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY as string | undefined;

  if (!apiKey)
    throw new Error('Missing VITE_WEATHER_API_KEY environment variable.');

  return apiKey;
}

// Fetched currebnt weather data for given query
export async function getCurrentWeather(query: string): Promise<WeatherDay> {
  // Validate query parameter
  if (!query.trim())
    throw new Error('Query is required to fetch weather data.');
  // Construct request URL with query parameters
  const apiKey = getApiKey();
  const url = new URL(BASE_URL);

  url.searchParams.set('key', apiKey);
  url.searchParams.set('q', query);
  url.searchParams.set('aqi', 'no');
  // Make API request
  const res = await fetch(url.toString());
  // Handle non-OK reponses
  if (!res.ok)
    throw new Error(
      `Weather API request failed: ${res.status} ${res.statusText}`,
    );
  // Parse JSON and return response as WeatherDay object
  return (await res.json()) as WeatherDay;
}
