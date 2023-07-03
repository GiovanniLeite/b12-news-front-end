import Link from 'next/link';

import { PostData } from '../../types/posts/post';

import PostCard from '../../components/PostCard';
import RegularNews from '../../components/RegularNews';
import { Container, MainNews, BottomNews } from './styles';

export type HomePageProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

export default function Home({ posts, featuredPosts, errors }: HomePageProps) {
  errors.length && console.log(errors);

  return (
    <Container>
      <section className="mainSection">
        {posts.length ? (
          <>
            <MainNews>
              <PostCard className="postCard" post={posts[0]} imageType="cover" />
              <div className="rightContent">
                {posts.slice(1, 3).map((item) => (
                  <PostCard post={item} imageType="cover" key={item.id} />
                ))}
              </div>
            </MainNews>
            <BottomNews>
              <RegularNews className="regularNews" posts={posts} maxItemsAllowed={11} />
              <div className="featuredNews">
                <h3>Destaque</h3>
                <ul>
                  {featuredPosts.map((post, index) => (
                    <li title={post.attributes.title} key={post.attributes.slug}>
                      <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`}>
                        <span>{index + 1}</span>
                        <p>{post.attributes.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </BottomNews>
          </>
        ) : (
          <h1>Erro ao obter Notícias</h1>
        )}
      </section>
    </Container>
  );
}
