import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { calculatePostDateTime } from '../../utils/calculatePostDateTime';

import MainContainer from '../../components/MainContainer';
import { Container, RegularNews, Top10 } from './styled';
import Loading from '../../components/Loading';

export type CategoryPageProps = {
  posts: PostData[];
  category: string;
};

export default function CategoryPage({ posts, category }: CategoryPageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [isLoading, setIsLoading] = useState(false);

  const isEmphasis = posts.filter((e) => e.isEmphasis);

  useEffect(() => {
    function pagination(data) {
      setIsLoading(true);

      if (data.length > maxItemsAllowed) {
        const a = data.length / maxItemsAllowed;
        setNumberOfPages(Math.ceil(a));
        setFullListItems(data);
        setItems(data.slice(0, maxItemsAllowed));
      } else {
        setNumberOfPages(1);
        setFullListItems([]);
        setItems(data);
      }

      setIsLoading(false);
    }

    pagination(posts);
  }, []);

  function handleLoadMore() {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  }

  return (
    <MainContainer>
      <Head>
        <title>
          {category} no {APP_NAME} - Notícias, esportes, entretenimento e mais
        </title>
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
        <Loading isLoading={isLoading} />
        {get(items[0], 'title', false) && (
          <Container>
            <div className="mainContent">
              <h2>{category === 'Home' ? 'Notícias' : category}</h2>
              <div className="mainNews">
                <div
                  className={`leftContent ${
                    items[0].thumbSquare ? '' : 'noImage'
                  }`}
                  style={{
                    backgroundImage: items[0].thumbSquare
                      ? `url(${items[0].thumbSquare.url})`
                      : '',
                  }}
                >
                  <span className="textAbove">{items[0].feedPostHeader}</span>
                  <Link href="/news/[slug]" as={`/news/${items[0].slug}`}>
                    <a>
                      <h2 title={items[0].title}>
                        {items[0].title.length > 80
                          ? `${items[0].title.slice(0, 80)} ...`
                          : items[0].title}
                      </h2>
                      <h3 title={items[0].subtitle}>
                        {items[0].subtitle.length > 100
                          ? `${items[0].subtitle.slice(0, 100)} ...`
                          : items[0].subtitle}
                      </h3>
                    </a>
                  </Link>
                  <br />
                  <br />
                  <span>{calculatePostDateTime(items[0].date)}</span>
                </div>

                <div
                  className={`rightContent ${
                    items[1].thumbSquare ? '' : 'noImage'
                  }`}
                  style={{
                    backgroundImage: items[1].thumbSquare
                      ? `url(${items[1].thumbSquare.url})`
                      : '',
                  }}
                >
                  <span className="textAbove">{items[1].feedPostHeader}</span>
                  <Link href="/news/[slug]" as={`/news/${items[1].slug}`}>
                    <a>
                      <h2 title={items[1].title}>
                        {items[1].title.length > 80
                          ? `${items[1].title.slice(0, 80)} ...`
                          : items[1].title}
                      </h2>
                      <h3 title={items[1].subtitle}>
                        {items[1].subtitle.length > 100
                          ? `${items[1].subtitle.slice(0, 100)} ...`
                          : items[1].subtitle}
                      </h3>
                    </a>
                  </Link>
                  <br />
                  <br />
                  <span>{calculatePostDateTime(items[1].date)}</span>
                </div>
              </div>
            </div>

            <RegularNews>
              <div className="newsCardContainer">
                {items.map(
                  (post, index) =>
                    index > 1 && (
                      <div
                        className={`newsCard ${
                          post.thumbSquare ? '' : 'noImage'
                        }`}
                        style={{
                          backgroundImage: post.thumbSquare
                            ? `url(${post.thumbSquare.url})`
                            : '',
                        }}
                        key={post.slug}
                      >
                        <span className="textAbove">{post.feedPostHeader}</span>
                        <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                          <a title={post.title}>
                            {post.title.length > 80
                              ? `${post.title.slice(0, 80)} ...`
                              : post.title}
                          </a>
                        </Link>
                        <span>{calculatePostDateTime(post.date)}</span>
                      </div>
                    ),
                )}
              </div>
              {currentPage < numberOfPages && (
                <button
                  onClick={() => handleLoadMore()}
                  title="Ver mais notícias"
                >
                  VEJA MAIS
                </button>
              )}
            </RegularNews>

            <Top10>
              <h2>Destaque</h2>
              <div className="emphasis">
                {get(isEmphasis[0], 'title', false) &&
                  isEmphasis.map(
                    (post, index) =>
                      index < 10 && (
                        <div
                          className={`Card ${
                            !post.thumbSquare ? 'noImage' : ''
                          }`}
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
          </Container>
        )}
      </Container>
    </MainContainer>
  );
}
