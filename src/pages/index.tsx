import { GetStaticProps } from 'next';

import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/getAllPosts';

import HomePage from '../containers/HomePage';

export type HomeProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

export default function Home({ posts, featuredPosts, errors }: HomeProps) {
  return <HomePage posts={posts} featuredPosts={featuredPosts} errors={errors} />;
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: PostData[] = [];
  let featuredPosts: PostData[] = [];
  const errors = [];

  try {
    posts = await getAllPosts('sort[0]=id:desc&populate=*&pagination[pageSize]=60');
  } catch (error) {
    errors.push(`Erro ao obter posts: ${error}`);
  }

  try {
    featuredPosts = await getAllPosts('sort[0]=id:desc&filters[emphasis][$eq]=true&pagination[pageSize]=10');
  } catch (error) {
    errors.push(`Erro ao obter posts em destaque: ${error}`);
  }

  return {
    props: { posts, featuredPosts, errors },
  };
};
