import Head from 'next/head';
import { useState, useEffect } from 'react';
import { get, debounce } from 'lodash';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import usePagination from '../../hooks/usePagination';

import PostCard from '../../components/PostCard';
import FeaturedNews from '../../components/FeaturedNews';
import { Container, MainNews, NewsFeed } from './styles';

export type CategoryPageProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

export default function Category({ posts, featuredPosts, errors }: CategoryPageProps) {
  const categoryName = get(posts[0], 'attributes.category.data.attributes.name', 'Categoria');

  const { allItemsLength, currentItems, handleLoadMore } = usePagination({ posts, maxItemsAllowed: 8 });

  // Adjusted array that avoids empty spaces in the grid
  const [currentGridItems, setCurrentGridItems] = useState<PostData[]>([]);
  // Number of Items to Load - handleLoadMore()
  const numberOfItemsToLoad = 6;

  useEffect(() => {
    const handleWindowResize = () => {
      // Check if the window object is available (for server-side rendering)
      if (typeof window !== 'undefined') {
        // Remove the items that will be in .upperNews
        const items = currentItems.slice(window.innerWidth > 700 ? 2 : 1);

        if (allItemsLength === currentItems.length) {
          setCurrentGridItems(items);
          return;
        }

        // Transforms the array (currentItems) into a multiple of 6 to avoid
        // empty spaces in the grid when the 'load more' button is visible
        // CSS Grid - repeat(3, 1fr) - repeat(2, 1fr)

        // Find the largest multiple of 6 in items
        const desiredLength = Math.floor(items.length / 6) * 6;

        // Set the length of array to ensure a multiple of 6
        setCurrentGridItems(items.slice(0, desiredLength));
      }
    };

    // Add the resize event listener using the debounced handler
    const resizeHandler = debounce(handleWindowResize, 250);
    window.addEventListener('resize', resizeHandler);

    handleWindowResize(); // Call the handleWindowResize function once initially
    errors.length && console.log(errors);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItems]);

  return (
    <>
      <Head>
        <title>{`${categoryName} no ${APP_NAME}`}</title>
      </Head>
      <Container>
        {currentItems.length && (
          <section className="mainSection">
            <MainNews>
              <h2>{categoryName}</h2>
              <div className="upperNews">
                {currentItems.slice(0, 2).map((item) => (
                  <PostCard className="postCard" post={item} imageType="cover" key={item.id} />
                ))}
              </div>
            </MainNews>
            <NewsFeed>
              <div className="newsCardContainer">
                {currentGridItems.map((item) => (
                  <PostCard className="postCard" post={item} imageType="thumbSquare" key={item.id} />
                ))}
              </div>
              {currentItems.length < allItemsLength && (
                <button
                  className="buttonLoadMore"
                  onClick={() => handleLoadMore(numberOfItemsToLoad)}
                  title="Ver mais notícias"
                >
                  VEJA MAIS
                </button>
              )}
            </NewsFeed>
            <FeaturedNews featuredPosts={featuredPosts} />
          </section>
        )}
      </Container>
    </>
  );
}
