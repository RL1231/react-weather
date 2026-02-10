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
    <div className="my-4 w-full max-w-full overflow-x-hidden rounded border-2 border-white py-4 md:px-4 lg:mb-8 lg:border-4 lg:py-8 xl:border-2 xl:py-4">
      <Swiper
        className="w-75 md:w-120 lg:h-40 lg:w-160 xl:w-90"
        spaceBetween={1}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 6 },
          480: { slidesPerView: 4 },
          0: { slidesPerView: 4 },
        }}
      >
        {displayHours.map((hour) => (
          <SwiperSlide
            key={hour.time_epoch}
            className="flex min-w-12 md:min-w-18"
          >
            <div className="flex w-full flex-col text-center font-semibold md:text-2xl lg:text-3xl xl:text-lg">
              <div>
                {new Date(hour.time).toLocaleTimeString([], {
                  hour: 'numeric',
                })}
              </div>
              <div>
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="mx-auto h-10 w-10 md:h-14 md:w-14 lg:my-2 lg:h-16 lg:w-16"
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
