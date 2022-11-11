import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllPosts } from '../../data/posts/getAllPosts';
import { PostData } from '../../domain/posts/post';

import Category404 from '../../components/Category404';
import CategoryPage from '../../containers/CategoryPage';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  if (posts.length < 1) return <Category404 />;

  return <CategoryPage posts={posts} category={category} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let category = ctx.params.category;
  // names with accent
  switch (category) {
    case 'Noticias':
      category = 'Notícias';
      break;
    case 'Vida-e-Estilo':
      category = 'Vida e Estilo';
      break;
    case 'Coronavirus':
      category = 'Coronavírus';
      break;
    case 'Horoscopo':
      category = 'Horóscopo';
      break;
  }
  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const urlQuery = `_sort=id:desc&_start=0${categoryQuery}`;
  let posts = [];
  posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category },
  };
};
