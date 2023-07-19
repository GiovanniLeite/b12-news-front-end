import Link from 'next/link';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { PostData } from '../../types/posts/post';

import { Container } from './styles';

export type FeaturedNewsProps = {
  featuredPosts: PostData[];
};

export default function FeaturedNews({ featuredPosts }: FeaturedNewsProps) {
  const [gridPosts, setGridPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const handleWindowResize = () => {
      // Check if the window object is available (for server-side rendering)
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;
        let items = [];

        // Remove or adds items to avoid empty spaces in the grid
        if (screenWidth < 800) {
          // grid-template-columns: repeat(2, 1fr); // 6 Items
          items = featuredPosts.slice(0, 6);
        } else if (screenWidth <= 1050) {
          // grid-template-columns: repeat(3, 1fr); // 9 Items
          items = featuredPosts.slice(0, 9);
        } else {
          // grid-template-columns: repeat(4, 1fr); // 8 Items
          items = featuredPosts.slice(0, 8);
        }

        setGridPosts(items);
      }
    };

    // Add the resize event listener using the debounced handler
    const debouncedResizeHandler = debounce(handleWindowResize, 250);
    window.addEventListener('resize', debouncedResizeHandler);

    // Call the handleWindowResize function once initially
    handleWindowResize();

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredPosts]);

  return (
    <Container>
      <h2>Destaque</h2>
      <div className="featured">
        {gridPosts.map((post) => (
          <div className="card" key={post.attributes.slug}>
            {post.attributes.thumbSquare?.data && (
              <img
                src={post.attributes.thumbSquare.data.attributes.url}
                alt={post.attributes.thumbSquare.data.attributes.alternativeText ?? undefined}
              />
            )}
            <div>
              <span>{post.attributes.topic}</span>
              <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`} title={post.attributes.title}>
                {post.attributes.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
