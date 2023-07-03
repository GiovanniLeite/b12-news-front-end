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

export default function News({ post, featuredPosts, errors }: NewsProps) {
  return <NewsPage post={post} featuredPosts={featuredPosts} errors={errors} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts: PostData[] = [];

  try {
    posts = await getAllPosts('pagination[pageSize]=200');
  } catch (error) {
    console.error(error.message);
  }

  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let post: PostData | null = null;
  let featuredPosts: PostData[] = [];
  const errors = [];
  const slug = ctx.params.slug;

  try {
    post = await getPost(slug);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    const category = post.attributes.category.data.id;
    featuredPosts = await getAllPosts(
      `sort[0]=id:desc&populate=*&filters[category][id][$eq]=${category}&filters[featured][$eq]=true&pagination[pageSize]=10`,
    );
  } catch (error) {
    errors.push(error.message);
  }

  return {
    props: { post, featuredPosts, errors },
  };
};
