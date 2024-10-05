'use client';

import { useState } from 'react';
import Checkbox from '../../controls/Checkbox';
import { Each } from '../../helpers/Each';
import { Link } from 'react-transition-progress/next';

type TCard = {
  id: number;
  color: string;
  link: string;
  title: string;
  desc: string;
}

const workshopList = [
  { icon: 'icon-calendar', title: '24 May 2024' },
  { icon: 'icon-time', title: '2 hours' },
  { icon: 'icon-world', title: 'English' },
  { icon: 'icon-camera', title: 'Online' },
];

type IWorkshopList = typeof workshopList[0];

function WorkshopCards({ data }: { data: TCard[] }) {

  const [onOpenFilter, setOpenFilter] = useState(false);

  return (
    <div className="workshops pb-32">
      <div className="options flex items-center gap-4 mb-4">
        <button
          className="btn-action mr-2 svg-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] hover:bg-black/5 hover:shadow-inner rounded-full grid place-items-center"
          onClick={() => setOpenFilter(true)}
        >
          <svg className="icon fill-primary" width={32} height={22}>
            <use href={`/icons/all-icons.svg#icon-filter`}></use>
          </svg>
        </button>
        <Checkbox label="Basic" onChange={(checked) => console.log(checked)} />
        <Checkbox label="Special" onChange={(checked) => console.log(checked)} />
        <Checkbox label="Deep Dive" onChange={(checked) => console.log(checked)} />
        <Checkbox label="Workshops" onChange={(checked) => console.log(checked)} />
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-6'}>
        <Each
          of={data || []}
          render={(item: TCard) => (
            <Card {...item} />
          )}
        />
      </div>
    </div>
  );
}

const Card = ({ id, color, title, desc, link }: TCard) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg">
      <div className={`text-white text-sm uppercase tracking-wide font-normal py-1 px-4 rounded-t-lg ${
        color === 'orange' ? 'bg-[#F89201]' :
        color === 'red' ? 'bg-[#EF6019]' :
        color === 'blue' ? 'bg-[#131C28]' :
        color === 'orange-80' ? 'bg-[#F89201]' :
        color === 'red-80' ? 'bg-[#EF6019]' :
        color === 'blue-80' ? 'bg-[#143258]' :
        color === 'orange-50' ? 'bg-[#F89201]' :
        color === 'red-50' ? 'bg-[#EF6019]' :
        color === 'blue-50' ? 'bg-[#3A506B]' : 'bg-native'}`}>
        {title}
      </div>
      <div className="card-body px-4 py-6">

        <h2 className="text-gray-800 font-bold text-xl leading-tight mb-4">
          Some long title goes here <br /> but in two rows
        </h2>

        <p className="text-gray-600 text-sm mt-2 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua tempor incididunt ut labore et dolore magna  et aliqua.
        </p>

        <div className="border-t border-native/50 mt-4"></div>

        <div className="footer flex justify-between">
          {/* Information Section */}
          <div className="mt-2 flex-1">
            <p className="text-gray-700 font-semibold text-sm mb-6">First upcoming date:</p>
            <ul className="mt-2 space-y-1 text-gray-600 text-sm">
              <Each
                of={workshopList}
                render={(item: IWorkshopList) => (
                  <li className="flex items-center gap-1 text-sm">
                    <svg className={item.icon} width={20} height={20}>
                      <use href={`/icons/all-icons.svg#${item.icon}`}></use>
                    </svg>
                    {item.title}
                  </li>
                )}
              />
            </ul>
          </div>

          {/* Arrow Button */}
          <div className="flex justify-end mt-auto">
            <Link href={`/workshops/${id}`} className="bg-orange-500 text-white rounded-full size-12 shadow-md hover:bg-orange-600 hover:scale-[1.05] transition-all grid place-content-center">
              <svg className={`icon-arrow-right`} width={40} height={30}>
                <use href={`/icons/all-icons.svg#icon-caret`}></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopCards;