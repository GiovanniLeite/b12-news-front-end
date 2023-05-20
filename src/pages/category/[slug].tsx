import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllPosts } from '../../data/posts/getAllPosts';
import { getAllCategories } from '../../data/categories/getAllCategories';
import { PostData } from '../../domain/posts/post';

import Category404 from '../../components/Category404';
import CategoryPage from '../../containers/CategoryPage';

export type CategoryProps = {
  posts: PostData[];
  featuredPosts: PostData[];
};

export default function Category({ posts, featuredPosts }: CategoryProps) {
  if (posts.length < 1) return <Category404 />;

  return <CategoryPage posts={posts} featuredPosts={featuredPosts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllCategories();

  return {
    paths: data.map((category) => ({ params: { slug: category.attributes.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts(`_sort=id:desc&category.slug_contains=${ctx.params.slug}&_limit=60`);
  const featuredPosts = await getAllPosts(
    `_sort=id:desc&category.slug_contains=${ctx.params.slug}&isEmphasis=true&_limit=10`,
  );

  return {
    props: { posts, featuredPosts },
  };
};
