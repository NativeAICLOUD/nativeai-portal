import { Link } from 'react-transition-progress/next';
import Image from 'next/image';

import LogoSvg from '../../../../public/logo.svg';

type Props = {
  isInvert?: boolean;
  className?: string;
}

function Logo({ isInvert, className }: Props) {
  return (
    <Link href={'/'} className="flex items-center">
      <Image
        src={LogoSvg}
        alt="NativeCloud"
        className={`h-9 w-auto ${className ?? ''}`}
        style={isInvert ? { filter: 'brightness(0) invert(1)' } : undefined}
        priority
        quality={100}
      />
    </Link>
  );
}

export default Logo;