import WeatherCurrent from './components/WeatherCurrent';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import WeatherSearch from './components/WeatherSearch';
import WeatherMobileSearch from './components/WeatherMobileSearch';
import './App.css';

function App() {
  return (
    <div className="md:min-w-120 xl:flex xl:flex-row xl:items-start xl:gap-12">
      <div className="w-full xl:w-1/2">
        <WeatherCurrent />
        <WeatherSearch />
      </div>
      <div className="w-full xl:w-1/2">
        <WeatherHourly />
        <WeatherDaily />
      </div>
      <WeatherMobileSearch />
    </div>
  );
}

export default App;
