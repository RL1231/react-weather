import { useWeatherStore } from '../store/weatherStore';

export default function WeatherDaily() {
  const { weatherData } = useWeatherStore();
  const forecast = weatherData?.forecast;

  if (!weatherData) {
    return <div className="flex">Loading...</div>;
  }
  return (
    <div className="rounded border-2 border-white p-4 font-semibold md:px-8 xl:border-2 md:landscape:border-4 md:landscape:px-12 md:landscape:py-8">
      <h1 className="mr-auto mb-4 flex text-lg md:mb-8 md:text-3xl md:landscape:text-4xl">
        3-Day Forecast
      </h1>
      <ul className="md:text-2xl md:landscape:text-3xl">
        {forecast?.forecastday.map((d, index) => (
          <li key={index} className="flex flex-row">
            <div className="my-auto flex min-w-18 justify-start md:min-w-25 md:landscape:min-w-32">
              {index === 0
                ? 'Today'
                : `${new Date(d.date_epoch * 1000).toLocaleDateString(undefined, { weekday: 'long' })}`}
            </div>
            <img
              src={d.day.condition.icon}
              className="my-auto ml-auto h-10 w-10 md:h-14 md:w-14 md:landscape:h-16 md:landscape:w-16"
            />
            <div className="my-auto ml-auto flex flex-row gap-2">
              <div className="flex min-w-14.5 justify-start md:min-w-21.5 md:landscape:min-w-27">
                L: {d.day.mintemp_f}°
              </div>
              <div className="flex min-w-14.5 justify-end md:min-w-21.5 md:landscape:min-w-27">
                H: {d.day.maxtemp_f}°
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
