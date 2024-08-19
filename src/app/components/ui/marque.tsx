import Image from "next/image";
import { Each } from '../helpers/Each';
import './marque.css';
import { shuffle } from "lodash";

const images = shuffle([
  '3d-aqua.png',
  '3d-blue.png',
  '3d-green.png',
  '3d-grey.png',
  '3d-aqua.png',
  '3d-purple.png',
  '3d-sky.png',
  '3d-grey.png',
  '3d-pink.png'
]);

function MarqueSlider({ className = '' }: { className?: string }) {
  return (
    <div className={`auto_slider_container ${className}`}>
      <SlideItem />
      <SlideItem />
    </div>
  );
}

const SlideItem = () => {
  return (
    <ul className="auto_slider">
      <Each of={images} render={(item: string) =>
        <li>
          <Image
            src={`/img/elements/${item}`}
            alt="Logo"
            className="aspect-square object-contain"
            width={88}
            height={88}
            priority
          />
        </li>
      } />
    </ul>
  )
}

export default MarqueSlider;