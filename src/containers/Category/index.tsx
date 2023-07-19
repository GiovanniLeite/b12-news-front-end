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

  const { allItemsLength, currentItems, handleLoadMore } = usePagination({ posts, maxItemsAllowed: 5 }); // 11

  // Adjusted array that avoids empty spaces in the grid
  const [currentGridItems, setCurrentGridItems] = useState<PostData[]>([]);
  // Number of Items to Load - handleLoadMore()
  const [itemsToLoad, setItemsToLoad] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      // Check if the window object is available (for server-side rendering)
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;

        /* Transforms the array(currentItems) into a multiple of 3 or 2
           to avoid empty spaces in the grid */

        // Remove the items that will be in .upperNews
        const items = currentItems.slice(screenWidth > 700 ? 2 : 1);

        // Decide whether the number will be a multiple of 3 or 2 according
        // to the CSS (Grid - repeat(3, 1fr) or repeat(2, 1fr))
        // Decide the number of items that will be loaded in handleLoadMore()
        const numberOfItemsToLoad = screenWidth > 700 ? 3 : 2; // (9 : 8) - Ideal for prod

        // Calculate the desired length to avoid empty spaces in the grid
        const desiredLength = Math.floor(items.length / numberOfItemsToLoad) * numberOfItemsToLoad;
        // Adjust the items to ensure a multiple of the desired length
        const gridItems = items.length % numberOfItemsToLoad === 0 ? items : items.slice(0, desiredLength);

        setCurrentGridItems(gridItems);
        setItemsToLoad(numberOfItemsToLoad);
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
                  onClick={() => handleLoadMore(itemsToLoad)}
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
