import { button } from "@/app/utils/tw-variants";
import { twMerge } from 'tailwind-merge';

function GetUpdates() {
  return (
    <div className="get-updated">
      <label htmlFor="email" className="block text-xl text-label-color">
        Get Updated
      </label>
      <div className="relative min-w-[220px] mt-4 rounded-20 shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-20 border-0 py-1.5 pl-6 pr-20 min-h-10 bg-black/5 text-gray-900 ring-1 ring-inset ring-black/5 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="E-mail Address"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button type="button"
            aria-label="A button that on click subscribe get's user updated with newsletters" id="subscribe"
            className={`subscribe ${twMerge(button({ size: 'sm', color: 'primary' }), 'min-w-0 sm:px-4 md:px-4')}`}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetUpdates;