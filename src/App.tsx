import WeatherCurrent from './components/WeatherCurrent';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import WeatherSearch from './components/WeatherSearch';
import WeatherMobileSearch from './components/WeatherMobileSearch';
import './App.css';

function App() {
  return (
    <>
      <div className="gap-4 md:min-w-120 xl:flex xl:flex-row">
        <div className="max-w-75 md:mb-15 md:max-w-135 xl:mt-24 xl:w-1/2 landscape:mb-7.5 landscape:max-w-105 md:landscape:mb-12 md:landscape:max-w-180">
          <WeatherCurrent />
          <WeatherSearch />
        </div>
        <div className="max-w-75 md:max-w-135 xl:w-1/2 landscape:max-w-105 md:landscape:max-w-180">
          <WeatherHourly />
          <WeatherDaily />
        </div>
        <WeatherMobileSearch />
      </div>
      <div className="md:text-md mt-16 text-xs md:mt-30 xl:mb-0 landscape:my-8 md:landscape:my-15 md:landscape:text-lg lg:landscape:mb-4">
        Powered by{' '}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
          className="font-semibold"
        >
          WeatherAPI.com
        </a>
      </div>
    </>
  );
}

export default App;
