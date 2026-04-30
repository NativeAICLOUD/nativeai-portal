import { Link } from 'react-transition-progress/next';
import Image from 'next/image';

import LogoSvg from '../../../../public/logo.svg';
import LogoInvert from '../../../../public/img/Native-Cloud-Logo_Invert.png';

type Props = {
  isInvert?: boolean;
  className?: string;
}

function Logo({ isInvert, className }: Props) {
  return (
    <Link href={'/'} className="flex items-center">
      <Image
        src={isInvert ? LogoInvert : LogoSvg}
        alt="NativeCloud"
        className={`h-9 w-auto ${className ?? ''}`}
        priority
        quality={100}
      />
    </Link>
  );
}

export default Logo;