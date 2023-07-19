import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from '../../types/posts/post';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { getPost } from '../../data/posts/getPost';

import NewsPage from '../../containers/News';

export type NewsProps = {
  post: PostData | null;
  featuredPosts: PostData[];
  errors: [];
};

// News component
export default function News({ post, featuredPosts, errors }: NewsProps) {
  // Render NewsPage component with provided props from getStaticProps
  return <NewsPage post={post} featuredPosts={featuredPosts} errors={errors} />;
}

// getStaticPaths function to generate paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  let posts: PostData[] = [];

  try {
    // Fetch posts with a maximum of 200 items in the response
    posts = await getAllPosts('pagination[pageSize]=200');
  } catch (error) {
    console.error((error as Error).message);
  }

  // Return the paths for dynamic routes based on posts
  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: false, // Specifies that routes not returned by getStaticPaths will result in a 404 page
  };
};

// getStaticProps function to fetch data for a specific news
export const getStaticProps: GetStaticProps = async (ctx) => {
  let post: PostData | null = null;
  let featuredPosts: PostData[] = [];
  const errors = [];
  const slug = ctx.params?.slug ?? 'undefined';

  try {
    // Fetch posts with the following query parameters:
    // - Filter by slug
    post = await getPost(slug);
  } catch (error) {
    errors.push((error as Error).message);
  }

  try {
    const category = post?.attributes.category?.data.id;

    // Fetch posts with the following query parameters:
    // - Sort by ID in descending order
    // - Populate with all associations (category, author, images, etc)
    // - Filter by category using the provided category id
    // - Filter by featured === true
    // - Set a maximum of 10 items
    featuredPosts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][id][$eq]=${category}&filters[featured][$eq]=true&pagination[pageSize]=10`,
    );
  } catch (error) {
    errors.push((error as Error).message);
  }

  // Return the fetched data as props
  return {
    props: { post, featuredPosts, errors },
  };
};
