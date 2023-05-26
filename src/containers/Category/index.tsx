import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../domain/posts/post';
import { getElapsedTime } from '../../utils/date/getElapsedTime';

import { Container, RegularNews, EmphasisContainer } from './styles';

export type CategoryPageProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

export default function Category({ posts, featuredPosts, errors }: CategoryPageProps) {
  const [items, setItems] = useState<PostData[]>([]); // current list of items
  const [fullListItems, setFullListItems] = useState<PostData[]>([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); // number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page;

  const category = get(posts[0], 'attributes.category.data.attributes.name', 'Categoria');

  useEffect(() => {
    const pagination = (data: PostData[]) => {
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

    errors.length && console.log(errors);
    pagination(posts);
  }, [posts, errors]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Head>
        <title>{`${category} no ${APP_NAME}`}</title>
      </Head>
      <Container>
        {items.length && (
          <section>
            <div className="mainContent">
              <h2>{category}</h2>
              <div className="mainNews">
                {items.slice(0, 2).map((item) => (
                  <div
                    className={item.attributes.thumbSquare.data ? '' : 'noImage'}
                    style={{
                      backgroundImage: `url(${get(item, 'attributes.thumbSquare.data.attributes.url', '')})`,
                    }}
                    key={item.id}
                  >
                    <span className="textAbove">{item.attributes.feedPostHeader}</span>
                    <Link href="/news/[slug]/" as={`/news/${item.attributes.slug}/`}>
                      <h2 title={item.attributes.title}>{item.attributes.title}</h2>
                      <h3 title={item.attributes.subtitle}>{item.attributes.subtitle}</h3>
                    </Link>
                    <br />
                    <br />
                    <span>{getElapsedTime(items[0].attributes.date)}</span>
                  </div>
                ))}
              </div>
            </div>

            <RegularNews>
              <div className="newsCardContainer">
                {items.map(
                  (post, index) =>
                    index > 0 && (
                      <div
                        className={`${index === 1 ? 'desktopOff' : ''} ${
                          post.attributes.thumbSquare.data ? '' : 'noImage'
                        }`}
                        style={{
                          backgroundImage: `url(${get(post, 'attributes.thumbSquare.data.attributes.url', '')})`,
                        }}
                        key={post.attributes.slug}
                      >
                        <span className="textAbove">{post.attributes.feedPostHeader}</span>
                        <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`} title={post.attributes.title}>
                          {post.attributes.title}
                        </Link>
                        <span>{getElapsedTime(post.attributes.date)}</span>
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
                  <div
                    className={`card ${post.attributes.thumbSquare.data ? '' : 'noImage'}`}
                    key={post.attributes.slug}
                  >
                    <div className="divImg">
                      <img src={get(post, 'attributes.thumbSquare.data.attributes.url', '')} />
                    </div>
                    <div>
                      <span className="textAbove">{post.attributes.feedPostHeader}</span>
                      <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`} title={post.attributes.title}>
                        {post.attributes.title}
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
