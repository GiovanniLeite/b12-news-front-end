import { GetStaticPaths, GetStaticProps } from 'next';

import SearchPage from '../../containers/SearchPage';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { PostData } from '../../domain/posts/post';

export type SearchProps = {
  posts: PostData[];
  search: string;
};

export default function Search({ posts, search }: SearchProps) {
  return <SearchPage posts={posts} search={search} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const search = ctx.params.search;

  const searchQuery = search ? `&title_contains=${search}` : '';
  const urlQuery = `_sort=id:desc&_start=0${searchQuery}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, search },
  };
};
