import { useState } from 'react';
import { useWeatherStore } from '../store/weatherStore';
import { getWeather } from '../api/getWeather';
import * as Dialog from '@radix-ui/react-dialog';
import { Search } from 'lucide-react';

export default function WeatherMobileSearch() {
  const { setWeather } = useWeatherStore();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    const weather = await getWeather(query.trim());
    setWeather(weather);
    setQuery('');
    setOpen(false);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="fixed right-4 bottom-4 rounded-full bg-white p-4 md:right-8 md:bottom-8 xl:hidden">
            <Search className="text-blue-400" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-60 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg">
            <Dialog.Title aria-label="Search for a city" />
            <Dialog.Description aria-describedby="Search for a city" />
            <form
              onSubmit={handleSubmit}
              className="flex min-w-75 flex-col gap-2 md:p-4"
            >
              <input
                id="city"
                type="text"
                value={query}
                placeholder="Enter city or location"
                className="w-full rounded border border-neutral-300 p-2 text-xl text-black focus:border-neutral-300 focus:ring-0 focus:outline-none md:mb-4 md:text-2xl"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="ml-auto rounded bg-blue-500 p-2 text-xl font-semibold text-white md:px-4 md:py-2 md:text-2xl"
              >
                Search
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
