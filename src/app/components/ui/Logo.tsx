import { Link } from 'react-transition-progress/next';
import Image from 'next/image';

import LogoSvg from '../../../../public/logo.svg';
import LogoInvert from '../../../../public/img/Native-Cloud-Logo_Invert.png';

type Props = {
  isInvert?: boolean;
}

function Logo({
  isInvert
}: Props) {
  return (
    <Link href={'/'}>
      <Image
        src={isInvert ? LogoInvert : LogoSvg}
        alt="Logo"
        className="logo min-w-[145px]"
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={100}
      />
    </Link>
  );
}

export default Logo;