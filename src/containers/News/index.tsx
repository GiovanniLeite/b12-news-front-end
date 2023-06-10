import Head from 'next/head';
import Link from 'next/link';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import { getFormattedDate } from '../../utils/date/getFormattedDate';
import { useAppSelector } from '../../redux/app/hooks';

import { Container, TitleHeader, NewsContent, EmphasisContainer, BlockScreen } from './styles';
import { Comments } from '../../components/Comments';

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
        <section>
          {post ? (
            <div className={user ? '' : 'warningLogin'}>
              <TitleHeader>
                <h2>{post.attributes.title}</h2>
                <h4>{post.attributes.subtitle}</h4>
                <p>
                  <span>Por {post.attributes.author.data.attributes.name}</span>
                  <br />
                  {date}
                </p>
              </TitleHeader>
              <NewsContent>
                {post.attributes.cover.data && (
                  <div className="cover">
                    <img src={post.attributes.cover.data.attributes.url} />
                    <p>{post.attributes.cover.data.attributes.alternativeText}</p>
                  </div>
                )}

                <div className="articleContent">
                  <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
                </div>
              </NewsContent>
              <EmphasisContainer>
                <h2>Destaque</h2>
                <div className="emphasis">
                  {featuredPosts.map((post) => (
                    <div
                      className={`card ${post.attributes.thumbSquare.data ? '' : 'noImage'}`}
                      key={post.attributes.slug}
                    >
                      <div className="divImg">
                        <img src={get(post, 'attributes.thumbSquare.data.attributes.url', '')} />
                      </div>
                      <div>
                        <span className="textAbove">{post.attributes.feedPostHeader}</span>
                        <Link href="/news/[slug]" as={`/news/${post.attributes.slug}`} title={post.attributes.title}>
                          {post.attributes.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </EmphasisContainer>
              <div className="commentsContainer">
                <Comments title={post.attributes.title} slug={post.attributes.slug} />
              </div>
              {!user && (
                <BlockScreen>
                  <div className="blackScreen">
                    <div className="warning">
                      <h2>b12</h2>
                      <h5>Necessário o login para acessar matérias</h5>
                      <Link href="/login-register/">
                        <div className="login" title="Acessar">
                          <div>
                            <FaUserCircle size={28} />
                          </div>
                          <p>
                            acesse sua conta
                            <br />
                            <span>ou cadastre-se grátis</span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </BlockScreen>
              )}
            </div>
          ) : (
            <h1 className="error404">Erro ao obter conteúdo</h1>
          )}
        </section>
      </Container>
    </>
  );
}
