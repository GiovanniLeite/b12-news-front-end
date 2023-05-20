import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from '../../domain/posts/post';
import { countAllPosts } from '../../data/posts/countAllPosts';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { getPost } from '../../data/posts/getPost';

import NewsPage from '../../containers/NewsPage';

export type DynamicPostProps = {
  post: PostData;
  featuredPosts: PostData[];
};

export default function DynamicNews({ post, featuredPosts }: DynamicPostProps) {
  return <NewsPage post={post} featuredPosts={featuredPosts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};
  const featuredPosts = await getAllPosts('_sort=id:desc&isEmphasis=true&_limit=10');

  return {
    props: { post, featuredPosts },
  };
};
