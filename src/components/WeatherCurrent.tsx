import { useWeatherStore } from '../store/weatherStore';

export default function WeatherCurrent() {
  const { weatherData } = useWeatherStore();

  const current = weatherData?.current;
  const forecast = weatherData?.forecast;
  const location = weatherData?.location;

  if (!current) return <div>No current weather data available</div>;
  return (
    <div className="mb-12 xl:mt-24 xl:mb-0 landscape:mt-8">
      <div className="text-4xl font-semibold md:mb-4 md:text-6xl lg:text-8xl xl:text-4xl">
        {location?.name}
      </div>
      <div className="mb-2 text-6xl md:mb-4 lg:mb-8 lg:text-8xl xl:text-6xl">
        {Math.round(current?.temp_f ?? 0)}°
      </div>
      <div className="text-md font-semibold md:text-2xl lg:mb-2 lg:text-4xl xl:mb-0 xl:text-xl">
        Feels Like: {Math.round(current?.feelslike_f ?? 0)}°
      </div>
      <div className="text-md flex flex-row items-center justify-center space-x-2 font-semibold md:text-2xl lg:text-xl">
        <div>H:{Math.round(forecast?.forecastday[0].day.maxtemp_f ?? 0)}°</div>
        <div>L:{Math.round(forecast?.forecastday[0].day.mintemp_f ?? 0)}°</div>
      </div>
    </div>
  );
}
