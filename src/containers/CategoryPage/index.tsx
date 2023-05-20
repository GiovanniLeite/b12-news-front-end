import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { calculatePostDateTime } from '../../utils/calculatePostDateTime';

import { Container, RegularNews, EmphasisContainer } from './styles';

export type CategoryPageProps = {
  posts: PostData[];
  featuredPosts: PostData[];
};

export default function CategoryPage({ posts, featuredPosts }: CategoryPageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); // number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page;

  const category = posts[0].category.name;

  useEffect(() => {
    const pagination = (data) => {
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
    };

    pagination(posts);
  }, [posts]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Head>
        <title>{`${category} no ${APP_NAME} - Notícias, esportes, entretenimento e mais`}</title>
      </Head>
      <Container>
        {get(items[0], 'id', false) && (
          <section>
            <div className="mainContent">
              <h2>{category}</h2>
              <div className="mainNews">
                <div
                  className={`leftContent ${items[0].thumbSquare ? '' : 'noImage'}`}
                  style={{
                    backgroundImage: `url(${get(items[0], 'thumbSquare.url', '')})`,
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
                    className={`rightContent ${items[1].thumbSquare ? '' : 'noImage'}`}
                    style={{
                      backgroundImage: `url(${get(items[1], 'thumbSquare.url', '')})`,
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
                        className={`newsCard ${post.thumbSquare ? '' : 'noImage'}`}
                        style={{
                          backgroundImage: `url(${get(post, 'thumbSquare.url', '')})`,
                        }}
                        key={post.slug}
                      >
                        <span className="textAbove">{post.feedPostHeader}</span>
                        <Link href="/news/[slug]/" as={`/news/${post.slug}/`} title={post.title}>
                          {post.title}
                        </Link>
                        <span>{calculatePostDateTime(post.date)}</span>
                      </div>
                    ),
                )}
              </div>
              {currentPage < numberOfPages && (
                <button onClick={() => handleLoadMore()} title="Ver mais notícias">
                  VEJA MAIS
                </button>
              )}
            </RegularNews>

            <EmphasisContainer>
              <h2>Destaque</h2>
              <div className="emphasis">
                {featuredPosts.map((post) => (
                  <div className={`card ${post.thumbSquare ? '' : 'noImage'}`} key={post.slug}>
                    <div className="divImg">
                      <img src={get(post, 'thumbSquare.url', '')} />
                    </div>
                    <div>
                      <span className="textAbove">{post.feedPostHeader}</span>
                      <Link href="/news/[slug]/" as={`/news/${post.slug}/`} title={post.title}>
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </EmphasisContainer>
          </section>
        )}
      </Container>
    </>
  );
}
