import Link from 'next/link';

import { PostData } from '../../types/posts/post';
import { getElapsedTime } from '../../utils/date/getElapsedTime';
import usePagination from '../../hooks/usePagination';

import { Container } from './styles';

export type RegularNewsProps = {
  posts: PostData[];
  maxItemsAllowed: number;
  className?: string;
};

export default function RegularNews({ posts, maxItemsAllowed, className }: RegularNewsProps) {
  const { allItemsLength, currentItems, handleLoadMore } = usePagination({ posts, maxItemsAllowed });

  return (
    <Container className={className}>
      {currentItems.map((post) => (
        <div key={post.attributes.slug} className={`card  ${post.attributes.cover.data ? '' : 'noImageCard'}`}>
          {post.attributes.cover.data && (
            <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`} className="leftImage">
              <img
                src={post.attributes.cover.data.attributes.url}
                alt={post.attributes.cover.data.attributes.alternativeText}
              />
            </Link>
          )}

          <div>
            <span>{post.attributes.topic}</span>
            <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`}>
              <h2 title={post.attributes.title}>{post.attributes.title}</h2>
            </Link>
            <p>{post.attributes.subtitle}</p>
            {post.attributes.cover.data && (
              <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`} className="midImage">
                <img
                  src={post.attributes.cover.data.attributes.url}
                  alt={post.attributes.cover.data.attributes.alternativeText}
                />
              </Link>
            )}
            <span className="elapsedTime">{getElapsedTime(post.attributes.date)}</span>
          </div>
        </div>
      ))}
      {currentItems.length < allItemsLength && (
        <button className="buttonLoadMore" onClick={() => handleLoadMore(maxItemsAllowed)} title="Ver mais notícias">
          VEJA MAIS
        </button>
      )}
    </Container>
  );
}
