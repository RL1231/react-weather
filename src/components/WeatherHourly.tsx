import { Swiper, SwiperSlide } from 'swiper/react';
import { useWeatherStore } from '../store/weatherStore';
import 'swiper/css';

export default function WeatherHourly() {
  const { weatherData } = useWeatherStore();
  const hours = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];

  return (
    <div className="my-4 w-full max-w-full overflow-x-hidden">
      <Swiper
        className="w-75"
        spaceBetween={1}
        slidesPerView={4}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          480: { slidesPerView: 4 },
          0: { slidesPerView: 4 },
        }}
      >
        {hours.map((hour) => (
          <SwiperSlide key={hour.time_epoch}>
            <div className="flex w-[64px] flex-col text-center">
              <div>
                {new Date(hour.time).toLocaleTimeString([], {
                  hour: 'numeric',
                })}
              </div>
              <div>
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="mx-auto h-10 w-10"
                />
              </div>
              <div>{Math.round(hour.temp_f)}°</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
