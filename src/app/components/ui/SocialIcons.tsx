import { Constants } from "@/Constants";
import { Each } from "../helpers/Each";
import Link from "next/link";

interface ISocial {
  icon: string;
  url: string;
  name: string;
}

function SocialIcons({ className = '' }: { className: string; }) {
  const socials: ISocial[] = [
    { icon: 'icon-discord', url: Constants.SOCIALS.DISCORD, name: 'Discord' },
    // { icon: 'icon-telegram', url: Constants.SOCIALS.TELEGRAM, name: 'Telegram' },
    { icon: 'icon-x', url: Constants.SOCIALS.X, name: 'X' },
  ];

  return (
    <div className={`social-icons flex items-center gap-4 ${className}`}>
      <Each of={socials} render={(item: ISocial) =>
        <Link className="min-w-8 h-8 bg-black/5 hover:bg-black/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center"
          href={item.url} target={"_blank"} title={item.name}>
          <svg className={item.icon} width={16} height={16}>
            <use href={`/icons/all-icons.svg#${item.icon}`}></use>
          </svg>
        </Link>
      } />
    </div>
  );
}

export default SocialIcons;