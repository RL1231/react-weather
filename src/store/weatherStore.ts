import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WeatherData, WeatherStore } from '../types/types';

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      weatherData: null as WeatherData | null,

      setWeather: (weatherData: WeatherData | null) => set({ weatherData }),
    }),
    { name: 'weather-storage' },
  ),
);
