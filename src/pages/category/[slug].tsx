import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from '../../types/posts/post';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { CategoryData } from '../../types/posts/category';
import { getAllCategories } from '../../data/categories/getAllCategories';

import Category404 from '../../containers/Category404';
import CategoryPage from '../../containers/Category';

export type CategoryProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

// Category component
export default function Category({ posts, featuredPosts, errors }: CategoryProps) {
  if (!posts || posts.length < 1) return <Category404 errors={errors} />;

  // Render CategoryPage component with provided props from getStaticProps
  return <CategoryPage posts={posts} featuredPosts={featuredPosts} errors={errors} />;
}

// getStaticPaths function to generate paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  let categories: CategoryData[] = [];

  try {
    categories = await getAllCategories();
  } catch (error) {
    console.error((error as Error).message);
  }

  // Return the paths for dynamic routes based on categories
  return {
    paths: categories.map((category) => ({ params: { slug: category.attributes.slug } })),
    fallback: false, // Specifies that routes not returned by getStaticPaths will result in a 404 page
  };
};

// getStaticProps function to fetch data for a specific category
export const getStaticProps: GetStaticProps = async (ctx) => {
  let posts: PostData[] = [];
  let featuredPosts: PostData[] = [];
  const errors = [];
  const categorySlug = ctx.params?.slug;

  try {
    // Fetch posts with the following query parameters:
    // - Sort by ID in descending order
    // - Populate with all associations (category, author, images, etc)
    // - Filter by category using the provided category slug
    // - Set a maximum of 60 items
    posts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][slug][$eq]=${categorySlug}&pagination[pageSize]=60`,
    );
  } catch (error) {
    errors.push((error as Error).message);
  }

  try {
    // Fetch posts with the following query parameters:
    // - Sort by ID in descending order
    // - Populate with all associations (category, author, images, etc)
    // - Filter by category using the provided category slug
    // - Filter by featured === true
    // - Set a maximum of 10 items
    featuredPosts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][slug][$eq]=${categorySlug}&filters[featured][$eq]=true&pagination[pageSize]=10`,
    );
  } catch (error) {
    errors.push((error as Error).message);
  }

  // Return the fetched data as props
  return {
    props: { posts, featuredPosts, errors },
  };
};
