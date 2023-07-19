import { GetStaticProps } from 'next';

import { PostData } from '../types/posts/post';
import { getAllPosts } from '../data/posts/getAllPosts';

import HomePage from '../containers/Home';

export type HomeProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

// Home component
export default function Home({ posts, featuredPosts, errors }: HomeProps) {
  // Render HomePage component with provided props from getStaticProps
  return <HomePage posts={posts} featuredPosts={featuredPosts} errors={errors} />;
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: PostData[] = [];
  let featuredPosts: PostData[] = [];
  const errors = [];

  try {
    // Fetch posts with the following query parameters:
    // - Sort by ID in descending order
    // - Populate with all associations (category, author, images, etc)
    // - Set a maximum of 60 items
    posts = await getAllPosts('sort[0]=id:desc&populate=*&pagination[pageSize]=60');
  } catch (error) {
    errors.push((error as Error).message);
  }

  try {
    // Fetch posts with the following query parameters:
    // - Sort by ID in descending order
    // - Filter by featured === true
    // - Set a maximum of 10 items
    featuredPosts = await getAllPosts('sort[0]=id:desc&filters[featured][$eq]=true&pagination[pageSize]=10');
  } catch (error) {
    errors.push((error as Error).message);
  }

  // Return the fetched data as props
  return {
    props: { posts, featuredPosts, errors },
  };
};
