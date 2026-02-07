import WeatherCurrent from './components/WeatherCurrent';
import WeatherHourly from './components/WeatherHourly';
import WeatherDaily from './components/WeatherDaily';
import WeatherSearch from './components/WeatherSearch';
import WeatherMobileSearch from './components/WeatherMobileSearch';
import './App.css';

function App() {
  return (
    <>
      <WeatherCurrent />
      <WeatherHourly />
      <WeatherDaily />
      <WeatherSearch />
      <WeatherMobileSearch />
    </>
  );
}

export default App;
