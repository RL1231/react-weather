import { useWeatherStore } from '../store/weatherStore';

export default function WeatherDaily() {
  const { weatherData } = useWeatherStore();
  const forecast = weatherData?.forecast;

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-4 flex flex-col rounded border-2 border-neutral-300 p-4">
      <h1 className="mr-auto mb-4 flex font-semibold uppercase">
        3-Day Forecast
      </h1>
      <ul>
        {forecast?.forecastday.map((d, index) => (
          <li key={index} className="flex min-w-65 flex-row space-x-1">
            <div className="my-auto">
              {index === 0
                ? 'Today'
                : `${new Date(d.date_epoch * 1000).toLocaleDateString(undefined, { weekday: 'long' })}`}
            </div>
            <div>
              <img src={d.day.condition.icon} className="h-8 w-8" />
            </div>
            <div className="my-auto ml-auto flex flex-row space-x-2">
              <div>L: {d.day.mintemp_f}°</div>
              <div>H: {d.day.maxtemp_f}°</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
