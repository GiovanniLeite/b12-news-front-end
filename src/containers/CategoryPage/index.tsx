import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { calculatePostDateTime } from '../../utils/calculatePostDateTime';

import { Container, RegularNews, Top10 } from './styles';
import Loading from '../../components/Loading';

export type CategoryPageProps = {
  posts: PostData[];
  category: string;
};

export default function CategoryPage({ posts, category }: CategoryPageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); // number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [isLoading, setIsLoading] = useState(false);

  const isEmphasis = posts.filter((e) => e.isEmphasis);

  useEffect(() => {
    const pagination = (data) => {
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
    };

    pagination(posts);
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Head>
        <title>
          {`${category} no ${APP_NAME} - Notícias, esportes, entretenimento e mais`}
        </title>
      </Head>
      <Container>
        <Loading isLoading={isLoading} />
        <section>
          <div className="mainContent">
            <h2>{category === 'Home' ? 'Notícias' : category}</h2>
            <div className="mainNews">
              <div
                className={`leftContent ${
                  get(items[0], 'thumbSquare', false) ? '' : 'noImage'
                }`}
                style={{
                  backgroundImage: `url(${get(
                    items[0],
                    'thumbSquare.url',
                    '',
                  )})`,
                }}
              >
                <span className="textAbove">{items[0].feedPostHeader}</span>
                <Link href="/news/[slug]/" as={`/news/${items[0].slug}/`}>
                  <h2 title={items[0].title}>{items[0].title}</h2>
                  <h3 title={items[0].subtitle}>{items[0].subtitle}</h3>
                </Link>
                <br />
                <br />
                <span>{calculatePostDateTime(items[0].date)}</span>
              </div>

              {get(items[1], 'title', false) && (
                <div
                  className={`rightContent ${
                    get(items[1], 'thumbSquare', false) ? '' : 'noImage'
                  }`}
                  style={{
                    backgroundImage: get(items[1], 'thumbSquare.url', ''),
                  }}
                >
                  <span className="textAbove">{items[1].feedPostHeader}</span>
                  <Link href="/news/[slug]/" as={`/news/${items[1].slug}/`}>
                    <h2 title={items[1].title}>{items[1].title}</h2>
                    <h3 title={items[1].subtitle}>{items[1].subtitle}</h3>
                  </Link>
                  <br />
                  <br />
                  <span>{calculatePostDateTime(items[1].date)}</span>
                </div>
              )}
            </div>
          </div>

          <RegularNews>
            <div className="newsCardContainer">
              {items.map(
                (post, index) =>
                  index > 1 && (
                    <div
                      className={`newsCard ${
                        get(items[1], 'thumbSquare', false) ? '' : 'noImage'
                      }`}
                      style={{
                        backgroundImage: get(post, 'thumbSquare.url', ''),
                      }}
                      key={post.slug}
                    >
                      <span className="textAbove">{post.feedPostHeader}</span>
                      <Link
                        href="/news/[slug]/"
                        as={`/news/${post.slug}/`}
                        title={post.title}
                      >
                        {post.title}
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
              {isEmphasis.map(
                (post, index) =>
                  index < 10 && (
                    <div
                      className={`card ${post.thumbSquare ? '' : 'noImage'}`}
                      key={post.slug}
                    >
                      <div className="divImg">
                        <img src={get(post, 'thumbSquare.url', '')} />
                      </div>
                      <div>
                        <span className="textAbove">{post.feedPostHeader}</span>
                        <Link
                          href="/news/[slug]/"
                          as={`/news/${post.slug}/`}
                          title={post.title}
                        >
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </Top10>
        </section>
      </Container>
    </>
  );
}
