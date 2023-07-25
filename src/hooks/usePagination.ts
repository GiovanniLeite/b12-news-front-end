import { useEffect, useState } from 'react';

import { PostData } from '../types/posts/post';

type PaginationLogicProps = {
  posts: PostData[];
  maxItemsAllowed: number; // number of items to be returned on the first page
};

const usePagination = ({ posts, maxItemsAllowed }: PaginationLogicProps) => {
  const [currentItems, setCurrentItems] = useState<PostData[]>([]);
  const [allItems, setAllItems] = useState<PostData[]>([]);

  useEffect(() => {
    const pagination = (data: PostData[]) => {
      const currentItems = data.slice(0, maxItemsAllowed);

      setAllItems(data);
      setCurrentItems(currentItems);
    };

    pagination(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const handleLoadMore = (itemsToLoad: number) => {
    setCurrentItems(allItems.slice(0, currentItems.length + itemsToLoad));
  };

  return { allItemsLength: allItems.length, currentItems, handleLoadMore };
};

export default usePagination;
