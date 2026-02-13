import { useWeatherStore } from '../store/weatherStore';

export default function WeatherCurrent() {
  const { weatherData } = useWeatherStore();

  const current = weatherData?.current;
  const forecast = weatherData?.forecast;
  const location = weatherData?.location;

  if (!current) return <div>No current weather data available</div>;
  return (
    <div className="md:mt-16 xl:mt-0 landscape:mt-8">
      <div className="text-4xl font-semibold md:mb-4 md:text-6xl xl:text-4xl md:landscape:mt-16">
        {location?.name}
      </div>
      <div className="mb-2 text-4xl md:mb-4 xl:text-6xl">
        {Math.round(current?.temp_f ?? 0)}°
      </div>
      <div className="text-md font-semibold md:text-2xl xl:text-xl">
        Feels Like: {Math.round(current?.feelslike_f ?? 0)}°
      </div>
      <div className="text-md flex flex-row items-center justify-center space-x-2 font-semibold md:text-2xl xl:text-xl">
        <div>H:{Math.round(forecast?.forecastday[0].day.maxtemp_f ?? 0)}°</div>
        <div>L:{Math.round(forecast?.forecastday[0].day.mintemp_f ?? 0)}°</div>
      </div>
    </div>
  );
}
