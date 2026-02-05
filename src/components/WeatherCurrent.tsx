import { useWeatherStore } from '../store/weatherStore';

export default function WeatherCurrent() {
  const { weatherData } = useWeatherStore();

  const current = weatherData?.current;
  const forecast = weatherData?.forecast;
  const location = weatherData?.location;

  if (!current) return <div>No current weather data available</div>;
  return (
    <div>
      <div className="text-2xl font-semibold">{location?.name}</div>
      <div className="text-4xl">{Math.round(current?.temp_f ?? 0)}°</div>
      <div className="text-sm font-semibold">
        Feels Like: {Math.round(current?.feelslike_f ?? 0)}°
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-sm font-semibold">
        <div>H:{Math.round(forecast?.forecastday[0].day.maxtemp_f ?? 0)}°</div>
        <div>L:{Math.round(forecast?.forecastday[0].day.mintemp_f ?? 0)}°</div>
      </div>
    </div>
  );
}
