import Head from 'next/head';
import Link from 'next/link';
import { get } from 'lodash';
import { RootStateOrAny, useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { getDateTime } from '../../utils/getDateTime';

import MainContainer from '../../components/MainContainer';
import {
  Container,
  TitleHeader,
  NewsContent,
  Top10,
  BlockScreen,
} from './styled';
import { Comments } from '../../components/Comments';

export type NewsPageProps = {
  post: PostData;
  postsTop10: PostData[];
};

export default function NewsPage({ post, postsTop10 }: NewsPageProps) {
  const id = useSelector((state: RootStateOrAny) => state.auth.user.id);

  const date = getDateTime(post.date);

  return (
    <MainContainer>
      <Head>
        <title>{APP_NAME} - Notícias, esportes, entretenimento e mais</title>
        <meta
          name="description"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do b12."
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, b12, diversao, fotos"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <div className={!id ? 'warningLogin' : ''}>
          <TitleHeader>
            <h2>{post.title}</h2>
            <h4>{post.subtitle}</h4>
            <p>
              <span>Por {post.author.name}</span>
              <br />
              {date}
            </p>
          </TitleHeader>
          <NewsContent>
            {post.cover && (
              <div className="cover">
                <img src={post.cover.url} />
                <p>{post.cover.alternativeText}</p>
              </div>
            )}

            <div className="articleContent">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </NewsContent>
          <Top10>
            <h2>Destaque</h2>
            <div className="emphasis">
              {get(postsTop10[0], 'title', false) &&
                postsTop10.map(
                  (post, index) =>
                    index < 10 && (
                      <div
                        className={`Card ${!post.thumbSquare ? 'noImage' : ''}`}
                        key={post.slug}
                      >
                        {post.thumbSquare && (
                          <div className="divImg">
                            <img src={post.thumbSquare.formats.small.url} />
                          </div>
                        )}
                        <div>
                          <span className="textAbove">
                            {post.feedPostHeader}
                          </span>
                          <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                            <a title={post.title}>
                              {post.title.length > 80
                                ? `${post.title.slice(0, 80)} ...`
                                : post.title}
                            </a>
                          </Link>
                        </div>
                      </div>
                    ),
                )}
            </div>
          </Top10>
          <div className="commentsContainer">
            <Comments title={post.title} slug={post.slug} />
          </div>
          {!id && (
            <BlockScreen>
              <div className="blackScreen">
                <div className="warning">
                  <h2>b12</h2>
                  <h5>Necessário o login para acessar matérias</h5>
                  <Link href="/login" as={`/login`}>
                    <a>
                      <div className="login" title="Acessar">
                        <div className="loginZ">
                          <FaUserCircle size={28} />
                        </div>
                        <p>
                          acesse sua conta
                          <br />
                          <span>ou cadastre-se grátis</span>
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </BlockScreen>
          )}
        </div>
      </Container>
    </MainContainer>
  );
}
