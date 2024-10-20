'use client';

import { useState } from 'react';
import Checkbox from '../../controls/Checkbox';
import { Each } from '../../helpers/Each';
import KBCard from './KBCard';

const Posts: IPost[] = [
  { id: 1, image: '/img/nature1.jpg', title: 'AWS', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  { id: 2, image: '/img/nature2.jpg', title: 'Azure', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  { id: 3, image: '/img/nature2.jpg', title: 'Google Cloud', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
];

const Categories = [
  'Migration', 'Native', 'Azure', 'AWS', 'Cloud Native', 'Insfrastructure', 'AI', 'Cloud Costs'
]

function KnowledgeBasePosts() {

  const [posts, setPosts] = useState(Posts);

  return (
    <div className="workshops pb-32">
      <div className="search-field flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
        <label htmlFor='search' className='font-bold'>Select category</label>
        <input id="search" className="bg-white/80 border border-[#3A506B]/20 rounded-full px-4 w-full min-h-12 sm:min-h-10 sm:max-w-[250px]" type="text" placeholder="Search" />
      </div>
      <div className="options flex items-center gap-4 mb-4">
        <button
          className="btn-action mr-2 svg-hover min-w-[40px] h-[40px] md:w-[48px] md:h-[48px] hover:bg-black/5 hover:shadow-inner rounded-full grid place-items-center"
        >
          <svg className="icon fill-primary size-6 sm:size-8">
            <use href={`/icons/all-icons.svg#icon-filter`}></use>
          </svg>
        </button>
        <div className="overflow-x-auto flex items-center flex-nowrap gap-4 whitespace-nowrap">
          <Each
            of={Categories}
            render={(category: string) => (
              <Checkbox label={category} onChange={(checked) => console.log(category, checked)} />
            )}
          />
        </div>
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        <Each
          of={posts || []}
          render={(item: IPost) => (
            <KBCard {...item} />
          )}
        />
      </div>
    </div>
  );
}

export default KnowledgeBasePosts;