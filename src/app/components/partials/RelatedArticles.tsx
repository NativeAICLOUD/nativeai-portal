'use client'

import { Each } from "../helpers/Each";
import KBCard from "./knowledge-base/KBCard";

function RelatedArticles({ posts }: { posts: IPost[] }) {
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