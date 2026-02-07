import { useWeatherStore } from '../store/weatherStore';

export default function WeatherDaily() {
  const { weatherData } = useWeatherStore();
  const forecast = weatherData?.forecast;

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-4 mb-12 flex flex-col rounded border-2 border-white p-4 font-semibold md:text-2xl">
      <h1 className="mr-auto mb-4 flex uppercase">3-Day Forecast</h1>
      <ul>
        {forecast?.forecastday.map((d, index) => (
          <li key={index} className="flex min-w-65 flex-row space-x-1">
            <div className="my-auto min-w-15.5 text-left">
              {index === 0
                ? 'Today'
                : `${new Date(d.date_epoch * 1000).toLocaleDateString(undefined, { weekday: 'long' })}`}
            </div>
            <div>
              <img src={d.day.condition.icon} className="ml-4 h-8 w-8" />
            </div>
            <div className="my-auto ml-auto flex min-w-28.5 flex-row space-x-2">
              <div className="min-w-14">L: {d.day.mintemp_f}°</div>
              <div className="min-w-14">H: {d.day.maxtemp_f}°</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
