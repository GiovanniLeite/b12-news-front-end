import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { PostData } from '../../types/posts/post';
import { getAllPosts } from '../../data/posts/getAllPosts';

import SearchPage from '../../containers/Search';

export default function Search() {
  const router = useRouter();
  const { search } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState('');

  const fetchData = async (search: string) => {
    try {
      setIsLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000)); // Delay

      // Fetch posts with the following query parameters:
      // - Sort by ID in descending order
      // - Filter by title using the provided search string
      // - Populate with all associations (category, author, images, etc)
      // - Set a maximum of 60 items
      const postsData = await getAllPosts(
        `sort[0]=id:desc&filters[title][$containsi]=${search}&populate=*&pagination[pageSize]=60`,
      );

      setPosts(postsData);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      const searchStr = Array.isArray(search) ? search[0] : search;
      setSearchString(searchStr);
      fetchData(searchStr);
    }
  }, [search]);

  return <SearchPage isLoading={isLoading} search={searchString} posts={posts} error={error} />;
}
