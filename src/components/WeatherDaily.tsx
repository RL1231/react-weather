import { useWeatherStore } from '../store/weatherStore';

export default function WeatherDaily() {
  const { weatherData } = useWeatherStore();
  const forecast = weatherData?.forecast;

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-4 mb-12 flex flex-col rounded border-2 border-white p-4 font-semibold md:text-2xl lg:mb-8 lg:border-4 lg:p-8 lg:text-4xl xl:mt-0 xl:w-[480px] xl:border-2 xl:text-lg">
      <h1 className="mr-auto mb-4 flex uppercase lg:mb-8 xl:mb-4">
        3-Day Forecast
      </h1>
      <ul>
        {forecast?.forecastday.map((d, index) => (
          <li
            key={index}
            className="flex min-w-65 flex-row space-x-1 lg:mb-4 xl:mb-0"
          >
            <div className="my-auto min-w-[86px] text-left md:min-w-[128px] md:landscape:min-w-[192px]">
              {index === 0
                ? 'Today'
                : `${new Date(d.date_epoch * 1000).toLocaleDateString(undefined, { weekday: 'long' })}`}
            </div>
            <div className="px-2 md:pl-16 landscape:px-16">
              <img
                src={d.day.condition.icon}
                className="h-8 w-8 md:h-12 md:w-12 xl:mr-16 xl:ml-4 xl:h-8 xl:w-8"
              />
            </div>
            <div className="my-auto ml-auto flex min-w-28.5 flex-row space-x-2 lg:min-w-65 xl:min-w-43">
              <div className="ml-0 flex min-w-14 md:min-w-21.5 lg:min-w-32.5 xl:min-w-21.5">
                L: {d.day.mintemp_f}°
              </div>
              <div className="mr-0 flex min-w-14 md:min-w-21.5 lg:min-w-32.5 xl:min-w-21.5">
                H: {d.day.maxtemp_f}°
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
