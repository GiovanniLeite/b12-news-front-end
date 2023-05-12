import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { Container, BottomContent } from './styles';
import { PostData } from '../../domain/posts/post';

import { calculatePostDateTime } from '../../utils/calculatePostDateTime';
import Loading from '../../components/Loading';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 7; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [isLoading, setIsLoading] = useState(false);

  const isHome = posts.filter((e) => e.isHome);
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

    pagination(isHome);
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {get(items[0], 'id', false) && (
        <section>
          <div className="mainContent">
            <div
              className={`leftContent ${items[0].cover ? '' : 'noImage'}`}
              style={{
                backgroundImage: `url(${get(items[0], 'cover.url', '')})`,
              }}
            >
              <span className="category">{items[0].category.name}</span>
              <Link href="/news/[slug]/" as={`/news/${items[0].slug}/`}>
                <h2 title={items[0].title}>{items[0].title}</h2>
                <h3 title={items[0].subtitle}>{items[0].subtitle}</h3>
              </Link>
              <br />
              <br />
              <span>{calculatePostDateTime(items[0].date)}</span>
            </div>

            <div className="rightContent">
              <div
                className={items[1].cover ? '' : 'noImage'}
                style={{
                  backgroundImage: `url(${get(items[1], 'cover.url', '')})`,
                }}
              >
                <span className="category">{items[1].category.name}</span>
                <Link href="/news/[slug]/" as={`/news/${items[1].slug}/`}>
                  <h2 title={items[1].title}>{items[1].title}</h2>
                  <h3 title={items[1].subtitle}>{items[1].subtitle}</h3>
                </Link>
                <br />
                <br />
                <span>{calculatePostDateTime(items[1].date)}</span>
              </div>

              <div
                className={items[2].cover ? '' : 'noImage'}
                style={{
                  backgroundImage: `url(${get(items[2], 'cover.url', '')})`,
                }}
              >
                <span className="category">{items[2].category.name}</span>
                <Link href="/news/[slug]/" as={`/news/${items[2].slug}/`}>
                  <h2 title={items[2].title}>{items[2].title}</h2>
                  <h3 title={items[2].subtitle}>{items[2].subtitle}</h3>
                </Link>
                <br />
                <br />
                <span>{calculatePostDateTime(items[2].date)}</span>
              </div>
            </div>
          </div>
          <BottomContent>
            <div className="regularNews">
              {items.map(
                (post, index) =>
                  index > 2 && (
                    <div
                      key={post.slug}
                      className={`newsCard ${
                        post.cover ? '' : 'noImageNewsCard'
                      }`}
                    >
                      <div className="imgNews">
                        <Link href="/news/[slug]/" as={`/news/${post.slug}/`}>
                          <img src={get(post, 'cover.formats.small.url', '')} />
                        </Link>
                      </div>
                      <div>
                        <span>{post.category.name}</span>
                        <Link href="/news/[slug]/" as={`/news/${post.slug}/`}>
                          <h2 title={post.title}>{post.title}</h2>
                        </Link>
                        <p>{post.subtitle}</p>
                        <span className="feedPostDateTime">
                          {calculatePostDateTime(post.date)}
                        </span>
                      </div>
                    </div>
                  ),
              )}
              {currentPage < numberOfPages && (
                <button
                  onClick={() => handleLoadMore()}
                  title="Ver mais notícias"
                >
                  VEJA MAIS
                </button>
              )}
            </div>
            <div className="emphasis">
              <div>
                <h3>Destaque</h3>
                <ul>
                  {get(isEmphasis[0], 'title', false) &&
                    isEmphasis.map(
                      (post, index) =>
                        index < 10 && (
                          <li
                            className={
                              index === isEmphasis.length - 1 ? 'noBorder' : ''
                            }
                            title={post.title}
                            key={post.slug}
                          >
                            <Link
                              href="/news/[slug]/"
                              as={`/news/${post.slug}/`}
                            >
                              <span>{index + 1}</span>
                              <p>{post.title}</p>
                            </Link>
                          </li>
                        ),
                    )}
                </ul>
              </div>
            </div>
          </BottomContent>
        </section>
      )}
    </Container>
  );
}
