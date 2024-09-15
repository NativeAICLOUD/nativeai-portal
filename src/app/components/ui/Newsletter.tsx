import { twMerge } from "tailwind-merge";
import { button } from "../utils/tw-variants";

function Newsletter() {
  return (
    <form className="newsletterForm max-w-lg">
      <div className={'flex items-center gap-3'}>
        <input className="border border-[#3A506B] rounded-28 px-4 w-full min-h-10 max-w-[250px]" type="text" placeholder="Your Name" />
        <input className="border border-[#3A506B] rounded-28 px-4 w-full min-h-10 max-w-[250px]" type="email" placeholder="Your Email" />
      </div>
      <div className="actions flex justify-between mt-4">
        <label className="flex items-center justify-center text-sm">
          <input type="checkbox" className="mr-2" /> Accept native.cloud <a href="privacy-policy" target="_blank" className="ml-1 underline">privacy policy</a>.
        </label>

        <button type="submit" className={twMerge(`${button({ size: 'md', color: 'primary', icon: 'md' })}`, 'min-w-0 px-6 md:px-10')}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Newsletter;