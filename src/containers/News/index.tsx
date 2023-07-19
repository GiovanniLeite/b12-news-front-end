import Head from 'next/head';
import Link from 'next/link';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import { getFormattedDate } from '../../utils/date/getFormattedDate';
import { useAppSelector } from '../../redux/app/hooks';

import FeaturedNews from '../../components/FeaturedNews';
import { Comments } from '../../components/Comments';
import { Container, Title, Content, OverLay } from './styles';

export type NewsPageProps = {
  post: PostData | null;
  featuredPosts: PostData[];
  errors: [];
};

export default function News({ post, featuredPosts, errors }: NewsPageProps) {
  const user = useAppSelector((state) => state.auth.user);
  const date = post ? getFormattedDate(post.attributes.date) : '';

  !errors || (errors.length && console.log(errors));

  return (
    <>
      <Head>
        <title>{`${get(post, 'attributes.title', 'Notícia')} | ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section className={`mainSection ${!user ? 'loggedOut' : ''}`}>
          {post ? (
            <>
              <Title>
                <h2>{post.attributes.title}</h2>
                <h4>{post.attributes.subtitle}</h4>
                <p>
                  <span>Por {post.attributes.author?.data.attributes.name}</span>
                  <br />
                  {date}
                </p>
              </Title>
              <Content>
                {post.attributes.cover?.data && (
                  <div className="articleCover">
                    <img
                      src={post.attributes.cover.data.attributes.url}
                      alt={post.attributes.cover.data.attributes.alternativeText ?? undefined}
                    />
                    <p>{post.attributes.cover.data.attributes.alternativeText}</p>
                  </div>
                )}

                <div className="articleContent">
                  <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
                </div>
              </Content>
              <FeaturedNews featuredPosts={featuredPosts} />
              <Comments title={post.attributes.title} slug={post.attributes.slug} />
              {!user && (
                <OverLay>
                  <div className="overlayModal">
                    <h2>b12</h2>
                    <h5>Login obrigatório para ler notícias</h5>
                    <Link href="/login-register/">
                      <FaUserCircle size={34} />
                      <p>
                        acesse sua conta
                        <span>ou cadastre-se grátis</span>
                      </p>
                    </Link>
                  </div>
                </OverLay>
              )}
            </>
          ) : (
            <h1 className="error404">Erro ao obter conteúdo</h1>
          )}
        </section>
      </Container>
    </>
  );
}
