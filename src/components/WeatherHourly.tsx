import { Swiper, SwiperSlide } from 'swiper/react';
import { useWeatherStore } from '../store/weatherStore';
import 'swiper/css';

export default function WeatherHourly() {
  const { weatherData } = useWeatherStore();
  const hours = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];
  const baseEpoch = weatherData?.location?.localtime_epoch ?? 0;
  const currentHourEpoch = baseEpoch - (baseEpoch % 3600);
  const visibleHours = hours.filter(
    (hour) => hour.time_epoch >= currentHourEpoch,
  );
  const displayHours = visibleHours.length > 0 ? visibleHours : hours;

  return (
    <div className="my-4 w-full max-w-full overflow-x-hidden rounded border-2 border-white py-4 md:p-8">
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
        {displayHours.map((hour) => (
          <SwiperSlide key={hour.time_epoch}>
            <div className="flex w-16 flex-col text-center font-semibold md:w-24 md:text-2xl">
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
