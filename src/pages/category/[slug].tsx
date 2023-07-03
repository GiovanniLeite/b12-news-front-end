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

export default function Category({ posts, featuredPosts, errors }: CategoryProps) {
  if (!posts || posts.length < 1) return <Category404 errors={errors} />;

  return <CategoryPage posts={posts} featuredPosts={featuredPosts} errors={errors} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let categories: CategoryData[] = [];

  try {
    categories = await getAllCategories();
  } catch (error) {
    console.error(error.message);
  }

  return {
    paths: categories.map((category) => ({ params: { slug: category.attributes.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let posts: PostData[] = [];
  let featuredPosts: PostData[] = [];
  const errors = [];
  const categorySlug = ctx.params.slug;

  try {
    posts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][slug][$eq]=${categorySlug}&pagination[pageSize]=60`,
    );
  } catch (error) {
    errors.push(error.message);
  }

  try {
    featuredPosts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][slug][$eq]=${categorySlug}&filters[featured][$eq]=true&pagination[pageSize]=10`,
    );
  } catch (error) {
    errors.push(error.message);
  }

  return {
    props: { posts, featuredPosts, errors },
  };
};
