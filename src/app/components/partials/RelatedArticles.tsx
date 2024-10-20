'use client'

import { Each } from "../helpers/Each";
import KBCard from "./knowledge-base/KBCard";

const posts: IPost[] = [
  { id: 1, image: '/img/nature1.jpg', title: 'AWS', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  { id: 2, image: '/img/nature2.jpg', title: 'Azure', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  { id: 3, image: '/img/nature2.jpg', title: 'Google Cloud', date: new Date().toISOString(), desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
];

function RelatedArticles() {
  return (
    <div className="related-articles">
      <h2 className="text-3.5xl text-center py-12">Related Articles</h2>

      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        <Each
          of={posts}
          render={(item: IPost) => (
            <KBCard
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              date={item.date} />
          )}
        />
      </div>
    </div>
  );
}

export default RelatedArticles;