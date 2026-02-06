export interface WeatherData {
  current: {
    last_updated_epoch: number;
    temp_c: number;
    temp_f: number;
    is_day: number;
    feelslike_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };

  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };

  forecast: {
    forecastday: Array<{
      date_epoch: number;
      day: {
        maxtemp_f: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
      hour: Array<{
        time_epoch: number;
        time: string;
        temp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        humidity: number;
        cloud: number;
        feelslike_f: number;
        windchill_f: number;
      }>;
    }>;
  };
}

export interface WeatherStore {
  weatherData: WeatherData | null;

  setWeather: (weather: WeatherData | null) => void;
}
