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
  const [errors, setErrors] = useState<string[]>([]);

  const fetchData = async (search: string) => {
    try {
      setIsLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const postsData = await getAllPosts(
        `sort[0]=id:desc&filters[title][$containsi]=${search}&populate=*&pagination[pageSize]=60`,
      );

      setPosts(postsData);
      setErrors([]);
    } catch (error) {
      setErrors(error.message);
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

  return <SearchPage isLoading={isLoading} search={searchString} posts={posts} errors={errors} />;
}
