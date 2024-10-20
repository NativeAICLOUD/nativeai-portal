'use client';

import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';

const KBCard = ({ id, image, title, desc, date }: IPost) => {
  return (
    <div className="card relative bg-white rounded-lg shadow-lg">
      <div className="card-img relative aspect-video">
        <Image
          src={image}
          alt={`Post ${title}`}
          priority
          fill={true}
          className={'object-cover rounded-t-lg'}
        />
      </div>
      <div className="card-body px-4 py-4">
        <h6 className="opacity-60 text-xs mb-1">{formatDistanceToNow(new Date(date), { addSuffix: true })}</h6>

        <h2 className="text-gray-800 font-black text-xl leading-tight mb-4">
          {title}
        </h2>

        <p className="text-black text-sm mt-2 mb-3">
          {desc}
        </p>

        <div className="footer flex justify-between">
          <Link href={`/knowledge-base/${id}`}
            className="text-orange-500 inline-flex items-center gap-1.5 font-bold group">
            Read More
            <svg className={`icon-arrow-right transition-transform group-hover:translate-x-1`} width={28} height={28}>
              <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default KBCard;