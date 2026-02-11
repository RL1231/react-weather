import WeatherCurrent from './components/WeatherCurrent';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import WeatherSearch from './components/WeatherSearch';
import WeatherMobileSearch from './components/WeatherMobileSearch';
import './App.css';

function App() {
  return (
    <>
      <div className="md:min-w-120 xl:flex xl:flex-row xl:items-start xl:gap-12">
        <div className="max-w-[300px] md:mb-[60px] md:max-w-[540px] xl:mt-6 xl:mr-22.5 xl:w-1/2 landscape:mb-[30px] landscape:max-w-[420px] md:landscape:mb-[90px] md:landscape:max-w-[720px]">
          <WeatherCurrent />
          <WeatherSearch />
        </div>
        <div className="max-w-[300px] md:max-w-[540px] xl:w-1/2 landscape:max-w-[420px] md:landscape:max-w-[720px]">
          <WeatherHourly />
          <WeatherDaily />
        </div>
        <WeatherMobileSearch />
      </div>
      <div className="mt-15 text-xs landscape:mb-5">
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
