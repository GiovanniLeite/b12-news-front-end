import { GetStaticPaths, GetStaticProps } from 'next';

import { countAllPosts } from '../../data/posts/countAllPosts';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { PostData } from '../../domain/posts/post';
import { getPost } from '../../data/posts/getPost';

import NewsPage from '../../containers/NewsPage';

export type DynamicPostProps = {
  post: PostData;
  postsTop10: PostData[];
};

export default function DynamicNews({ post, postsTop10 }: DynamicPostProps) {
  return <NewsPage post={post} postsTop10={postsTop10} />;
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
  const postsTop = await getAllPosts('_sort=id:desc&_start=0');
  const postsTop10 =
    postsTop.length > 0 ? postsTop.filter((e) => e.isEmphasis) : {};

  return {
    props: { post: post, postsTop10: postsTop10 },
  };
};
